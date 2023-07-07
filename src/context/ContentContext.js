import { createContext , useContext, useState, useEffect} from "react";
import AuthContext from "./AuthContext";
import { getEstimatedAverage } from "../functions/EstimatedAverage";
import { getRecommendedIntake } from "../functions/RecommendedIntakes"
import { getUpperLimit } from "../functions/UpperLimits"
import AsyncStorage from "@react-native-async-storage/async-storage";

const ContentContext = createContext()

export default ContentContext;

export const ContentProvider = ({children}) => {

    const host = 'balance-intake.up.railway.app'
    const {user} = useContext(AuthContext)

    // NUTRIENTS DATA
    const [calories, setCalories] = useState({
        intake: 0,
        estimated: 1,
        recommended: 2500,
        upperlimit: 1,
        label: 'kcal'
    })
    const [protein, setProtein] = useState({ 
        intake: 0,
        estimated: 1,
        recommended: 70,
        upperlimit: 1,
        label: 'g'
    })
    const [fiber, setFiber] = useState({
        intake: 0,
        estimated: 1,
        recommended: 25,
        upperlimit: 1,
        label: 'g'
    })
    const [vitaminA, setVitaminA] = useState({
        intake: 0,
        estimated: 1,
        recommended: 600,
        upperlimit: 1,
        label: 'ug'
    })
    const [vitaminD, setVitaminD] = useState({
        intake: 0,
        estimated: 1,
        recommended: 5,
        upperlimit: 1,
        label: 'ug'

    })
    const [vitaminE, setVitaminE] = useState({
        intake: 0,
        estimated: 1,
        recommended: 10,
        upperlimit: 1,
        label: 'mg'

    })

    const [vitaminK, setVitaminK] = useState({
        intake: 0,
        estimated: 1,
        recommended: 61,
        upperlimit: 1,
        label: 'ug'

    })
    const [thiamin, setThiamin] = useState({
        intake: 0,
        estimated: 1,
        recommended: 1.2,
        upperlimit: 1,
        label: 'mg'

    })
    const [riboflavin, setRiboflavin] = useState({
        intake: 0,
        estimated: 1,
        recommended: 1.3,
        upperlimit: 1,
        label: 'mg'

    })
    const [niacin, setNiacin] = useState({
        intake: 0,
        estimated: 1,
        recommended: 16,
        upperlimit: 1,
        label: 'mg'

    })
    const [vitaminB6, setVitaminB6] = useState({
        intake: 0,
        estimated: 1,
        recommended: 1.3,
        upperlimit: 1,
        label: 'mg'

    })
    const [vitaminB12, setVitaminB12] = useState({
        intake: 0,
        estimated: 1,
        recommended: 2.4,
        upperlimit: 1,
        label: 'ug'

    })
    const [folate, setFolate] = useState({
        intake: 0,
        estimated: 1,
        recommended: 400,
        upperlimit: 1,
        label: 'mg'

    })
    const [vitaminC, setVitaminC] = useState({
        intake: 0,
        estimated: 1,
        recommended: 70,
        upperlimit: 1,
        label: 'mg'

    })
    const [iron, setIron] = useState({
        intake: 0,
        estimated: 1,
        recommended: 12,
        upperlimit: 1,
        label: 'mg'

    })
    const [zinc, setZinc] = useState({
        intake: 0,
        estimated: 1,
        recommended: 6.5,
        upperlimit: 1,
        label: 'mg'

    })
    const [selenium, setSelenium] = useState({
        intake: 0,
        estimated: 1,
        recommended: 40,
        upperlimit: 1,
        label: 'ug'

    })
    const [iodine, setIodine] = useState({
        intake: 0,
        estimated: 1,
        recommended: 150,
        upperlimit: 1,
        label: 'ug'

    })
    const [calcium, setCalcium] = useState({
        intake: 0,
        estimated: 1,
        recommended: 750,
        upperlimit: 1,
        label: 'mg'

    })
    const [magnesium, setMagnesium] = useState({
        intake: 0,
        estimated: 1,
        recommended: 240,
        upperlimit: 1,
        label: 'mg'

    })
    const [phosphorus, setPhosphorus] = useState({
        intake: 0,
        estimated: 1,
        recommended: 700,
        upperlimit: 1,
        label: 'mg'

    })
    const [flouride, setFlouride] = useState({
        intake: 0,
        estimated: 1,
        recommended: 3,
        upperlimit: 1,
        label: 'mg'

    })
    const [sodium, setSodium] = useState({
        intake: 0,
        estimated: 1,
        recommended: 500,
        upperlimit: 1,
        label: 'mg'

    })
    const [chloride, setChloride] = useState({
        intake: 0,
        estimated: 1,
        recommended: 750,
        upperlimit: 1,
        label: 'mg'

    })
    const [potassium, setPotassium] = useState({
        intake: 0,
        estimated: 1,
        recommended: 2000,
        upperlimit: 1,
        label: 'mg'

    })

    
    const [foods, setFoods] = useState([])
    const [exercises, setExercises] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {authtokens} = useContext(AuthContext)
    const [caloriesBurn, setCaloriesBurn] = useState(0)
    const [reached, setReached] = useState([])

    // useEffect(() => {
    //     checkedIfReached()
    // }, [])

    // SENDING FOOD TO THE BACKEND
    const addFood = async (food, quantity) => {
        let response = await fetch(`https://${host}/foods/consumed/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`, 
            },
            body: JSON.stringify({...food, Quantity: quantity})
        }) 
        
        let data = await response.json()

        if(response.status == 200) {
            alert('Food added successfully')
        } else { 
            alert('Something went wrong')
        }

        getFoods()
    }

    // GETTING FOODS FROM THE BACKEND
    const getFoods = async () => {
        let response = await fetch(`https://${host}/foods/consumed/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`,
            },
        })
        let data = await response.json()
        setFoods(data)
        updateIntake(data)
    }


    // UPDATE THE ESTIMATED REQUIREMENTS
    const updateRecommended = (age, gender) => {

        let EAR = getEstimatedAverage(age, gender)
        let RDA = getRecommendedIntake(age, gender)
        let TUP = getUpperLimit(age)

        setCalories({...calories, recommended: RDA.calories, estimated: RDA.calories * 0.8, upperlimit: RDA.calories * 1.25 })
        setProtein({...protein, recommended: RDA.protein, estimated: EAR.protein, upperlimit: RDA.protein * 1.5 })
        setFiber({...fiber, recommended: RDA.dietaryFiber, estimated: RDA.dietaryFiber * 0.8, upperlimit: RDA.dietaryFiber * 1.25})
        setVitaminA({...vitaminA, recommended: RDA.vitaminA, estimated: EAR.vitaminA, upperlimit: TUP.vitaminA})
        setVitaminD({...vitaminD, recommended: RDA.vitaminD,  estimated: RDA.vitaminD * 0.8, upperlimit: TUP.vitaminD})
        setVitaminE({...vitaminE, recommended: RDA.vitaminE, estimated: RDA.vitaminE * 0.8, upperlimit: TUP.vitaminE})
        setVitaminK({...vitaminK, recommended: RDA.vitaminK, estimated: RDA.vitaminK * 0.8, upperlimit: RDA.vitaminK * 1.25})
        setThiamin({...thiamin, recommended: RDA.thiamin, estimated: EAR.thiamin, upperlimit: RDA.thiamin * 1.25})
        setRiboflavin({...riboflavin, recommended: RDA.riboflavin, estimated: EAR.riboflavin, upperlimit: RDA.riboflavin * 1.25})
        setNiacin({...niacin, recommended: RDA.niacin, estimated: EAR.niacin, upperlimit: TUP.niacin})
        setVitaminB6({...vitaminB6, recommended: RDA.vitaminB6, estimated: EAR.vitaminB6, upperlimit: TUP.vitaminB6}) 
        setVitaminB12({...vitaminB12, recommended: RDA.vitaminB12, estimated: EAR.vitaminB12, upperlimit: RDA.vitaminB12 * 1.25})
        setFolate({...folate, recommended: RDA.folate, estimated: EAR.folate, upperlimit: TUP.folate})
        setVitaminC({...vitaminC, recommended: RDA.vitaminC, estimated: EAR.vitaminC, upperlimit: TUP.vitaminC})
        setIron({...iron, recommended: RDA.iron, estimated: EAR.iron, upperlimit: TUP.iron})
        setZinc({...zinc, recommended: RDA.zinc, estimated: EAR.zinc, upperlimit: TUP.zinc})
        setSelenium({...selenium, recommended: RDA.selenium, estimated: EAR.selenium, upperlimit: TUP.selenium})
        setIodine({...iodine, recommended: RDA.iodine, estimated: EAR.iodine, upperlimit: TUP.iodine})
        setCalcium({...calcium, recommended: RDA.calcium, estimated: EAR.calcium, upperlimit: TUP.calcium})
        setMagnesium({...magnesium, recommended: RDA.magnesium, estimated: RDA.magnesium * 0.8, upperlimit: TUP.magnesium})
        setPhosphorus({...phosphorus, recommended: RDA.phosphorus, estimated: EAR.phosphorus, upperlimit: TUP.phosphorus})
        setFlouride({...flouride, recommended: RDA.flouride, estimated: RDA.flouride* 0.8, upperlimit: TUP.flouride})
        setSodium({...sodium, recommended: RDA.sodium, estimated: RDA.sodium * 0.8, upperlimit: RDA.sodium * 1.25 })
        setChloride({...chloride, recommended: RDA.chloride, estimated: RDA.chloride * 0.8, upperlimit: RDA.chloride * 1.25 })
        setPotassium({...potassium, recommended: RDA.potassium, estimated: RDA.potassium * 0.8, upperlimit: RDA.potassium * 1.25 })

    }

    // UPDATE THE INTAKE EVERY TIME THE USER ADDS FOOD
    const updateIntake = (foods) => {

        let CALORIES = 0
        let PROTEIN = 0
        let FIBER = 0
        let VITAMINA = 0
        let VITAMIND = 0
        let VITAMINE = 0
        let VITAMINK = 0
        let THIAMIN = 0
        let RIBOFLAVIN = 0
        let NIACIN = 0
        let VITAMINB6 = 0
        let VITAMINB12 = 0
        let FOLATE = 0
        let VITAMINC = 0
        let IRON = 0
        let ZINC = 0
        let SELENIUM = 0
        let IODINE = 0
        let CALCIUM = 0
        let MAGNESIUM = 0
        let PHOSPHORUS = 0
        let FLOURIDE = 0
        let SODIUM = 0
        let CHLORIDE = 0
        let POTASSIUM = 0 

        for(let i = 0; i < foods.length; i++) {
            CALORIES += (foods[i].calories * foods[i].quantity)
            PROTEIN += (foods[i].protein * foods[i].quantity)
            FIBER += (foods[i].dietary_fiber * foods[i].quantity)
            VITAMINA += (foods[i].vitamin_A * foods[i].quantity)
            VITAMIND += (foods[i].vitamin_D * foods[i].quantity)
            VITAMINE += (foods[i].vitamin_E * foods[i].quantity)
            VITAMINK += (foods[i].vitamin_K * foods[i].quantity)
            THIAMIN += (foods[i].thiamin * foods[i].quantity)
            RIBOFLAVIN += (foods[i].riboflavin * foods[i].quantity)
            NIACIN += (foods[i].niacin * foods[i].quantity)
            VITAMINB6 += (foods[i].vitamin_B6 * foods[i].quantity)
            VITAMINB12 += (foods[i].vitamin_B12 * foods[i].quantity)
            FOLATE += (foods[i].folate * foods[i].quantity)
            VITAMINC += (foods[i].vitamin_C * foods[i].quantity)
            IRON += (foods[i].iron * foods[i].quantity)
            ZINC += (foods[i].zinc * foods[i].quantity)
            SELENIUM += (foods[i].selenium * foods[i].quantity)
            IODINE += (foods[i].iodine * foods[i].quantity)
            CALCIUM += (foods[i].calcium * foods[i].quantity)
            MAGNESIUM += (foods[i].magnesium * foods[i].quantity)
            PHOSPHORUS += (foods[i].phosphorus * foods[i].quantity)
            FLOURIDE += (foods[i].flouride * foods[i].quantity)
            SODIUM += (foods[i].sodium * foods[i].quantity)
            CHLORIDE += (foods[i].chloride * foods[i].quantity)
            POTASSIUM += (foods[i].potassium * foods[i].quantity)
        }

        setCalories({...calories, intake: CALORIES})
        setProtein({...protein, intake: PROTEIN})
        setFiber({...fiber, intake: FIBER})
        setVitaminA({...vitaminA, intake: VITAMINA})
        setVitaminD({...vitaminD, intake: VITAMIND})
        setVitaminE({...vitaminE, intake: VITAMINE})
        setVitaminK({...vitaminK, intake: VITAMINK})
        setThiamin({...thiamin, intake: THIAMIN})
        setRiboflavin({...riboflavin, intake: RIBOFLAVIN})
        setNiacin({...niacin, intake: NIACIN})
        setVitaminB6({...vitaminB6, intake: VITAMINB6}) 
        setVitaminB12({...vitaminB12, intake: VITAMINB12})
        setFolate({...folate, intake: FOLATE})
        setVitaminC({...vitaminC, intake: VITAMINC})
        setIron({...iron, intake: IRON})
        setZinc({...zinc, intake: ZINC})
        setSelenium({...selenium, intake: SELENIUM})
        setIodine({...iodine, intake: IODINE})
        setCalcium({...calcium, intake: CALCIUM})
        setMagnesium({...magnesium, intake: MAGNESIUM})
        setPhosphorus({...phosphorus, intake: PHOSPHORUS})
        setFlouride({...flouride, intake: FLOURIDE})
        setSodium({...sodium, intake: SODIUM})
        setChloride({...chloride, intake: CHLORIDE})
        setPotassium({...potassium, intake: POTASSIUM})

        // checkedIfReached()
    }

    const checkedIfReached = () => {
          
        if (protein.intake > protein.recommended) {
            setReached([...reached, 'protein'])
        }

        if (fiber.intake > fiber.recommended) {
            
            setReached([...reached, 'fiber'])

        }

        if (vitaminA.intake > vitaminA.recommended) {
            setReached([...reached, 'vitaminA'])

        }

        if (vitaminK.intake > vitaminK.recommended) {
            setReached([...reached, 'vitaminK'])

        }

        if (vitaminD.intake > vitaminD.recommended) {
            setReached([...reached, 'vitaminD'])

        }

        if (vitaminE.intake > vitaminE.recommended) {
            setReached([...reached, 'vitaminE'])

        }

        if (thiamin.intake > thiamin.recommended) {
            setReached([...reached, 'thiamin'])

        }

        if (riboflavin.intake > riboflavin.recommended) {
            setReached([...reached, 'riboflavin'])

        }

        if (niacin.intake > niacin.recommended) {
            setReached([...reached, 'niacin'])

        }

        if (vitaminB6.intake > vitaminB6.recommended) {
            setReached([...reached, 'vitaminB6'])

        }

        if (vitaminB12.intake > vitaminB12.recommended) {
            setReached([...reached, 'vitaminB12'])

        }  

        if (folate.intake > folate.recommended) {
            setReached([...reached, 'folate'])

        }

        if (vitaminC.intake > vitaminC.recommended) {
            setReached([...reached, 'vitaminC'])

        }

        if (iron.intake > iron.recommended) {
            setReached([...reached, 'iron'])

        }

        if (zinc.intake > zinc.recommended) {
            setReached([...reached, 'zinc'])

        }

        if (selenium.intake > selenium.recommended) {
            setReached([...reached, 'selenium'])

        }

        if (iodine.intake > iodine.recommended) {
            setReached([...reached, 'iodine'])

        }

        if (calcium.intake > calcium.recommended) {
            setReached([...reached, 'calcium'])

        }

        if (magnesium.intake > magnesium.recommended) {
            setReached([...reached, 'magnesium'])

        }

        if (phosphorus.intake > phosphorus.recommended) {
            setReached([...reached, 'phosphorus'])

        }

        if (flouride.intake > flouride.recommended) {
            setReached([...reached, 'flouride'])

        }

        if (sodium.intake > sodium.recommended) {
            setReached([...reached, 'sodium'])

        }

        if (chloride.intake > chloride.recommended) {
            setReached([...reached, 'chloride'])

        }

        if (potassium.intake > potassium.recommended) {
            setReached([...reached, 'potassium'])
        }
    }



    //SEND EXERCISE TO THE BACKEND
    const addExercise = async (exercise) => {
        let response = await fetch(`https://${host}/exercise/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`, 
            },
            body: JSON.stringify(exercise)
        }) 

        let data = await response.json()

        if(response.status == 200) {
            alert('Exercise added successfully')
        } else {
            alert('Something went wrong')
        }
        getExercises()
    }

    // GETTING FOODS FROM THE BACKEND
    const getExercises = async () => {
        let response = await fetch(`https://${host}/exercise/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`,
            },
        }) 

        let data = await response.json()

        if (response.status == 200) {
            setExercises(data)
            calculateCaloriesBurned(data)
        }
    }

    const calculateCaloriesBurned = (data) => {
        let burned = 0;
        for(let i=0; i < data.length; i++) {
            let met, indivBurned;
            if(data[i].intensity == 'Very Light') {
                met = 1.5
            } else if (data[i].intensity == 'Light') {
                met = 2.0
            } else if (data[i].intensity == 'Moderate') {
                met = 3.5
            } else if (data[i].intensity == 'Moderately Vigorous') {
                met = 4.5
            } else if (data[i].intensity == 'Vigorous') {
                met = 6.0
            } else if (data[i].intensity == 'Extremely Vigorous') {
                met = 10.0
            }

            indivBurned = ((met * (3.5 * user.weight)) / 200) * data[i].duration

            burned += indivBurned
        }

        setCaloriesBurn(burned.toFixed(1))
    }




    
    // PASSING DOWN THE DATA
    const contextData = {
        addFood: addFood,
        getFoods: getFoods,
        isLoading: isLoading,
        foods: foods, 
        updateIntake: updateIntake,
        updateRecommended: updateRecommended,
        calories: calories, 
        protein: protein,
        fiber: fiber,
        vitaminA: vitaminA,
        vitaminD: vitaminD,
        vitaminE: vitaminE,
        vitaminK: vitaminK,
        thiamin: thiamin,
        riboflavin: riboflavin,
        niacin: niacin,
        vitaminB6: vitaminB6,
        vitaminB12: vitaminB12,
        folate: folate,
        vitaminC: vitaminC,
        iron: iron,
        zinc: zinc,
        selenium: selenium,
        iodine: iodine,
        calcium: calcium,
        magnesium: magnesium,
        phosphorus: phosphorus,
        flouride: flouride,
        sodium: sodium,
        chloride: chloride,
        potassium: potassium,
        addExercise: addExercise,
        exercises: exercises,
        getExercises: getExercises,
        setCalories: setCalories,
        caloriesBurn: caloriesBurn,
        reached: reached,
        checkedIfReached:checkedIfReached
    } 

    return (
        <ContentContext.Provider value={contextData}>{children}</ContentContext.Provider>
    )
    } 