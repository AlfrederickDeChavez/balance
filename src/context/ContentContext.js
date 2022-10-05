import { createContext , useContext, useState} from "react";
import AuthContext from "./AuthContext";

const ContentContext = createContext()

export default ContentContext;

export const ContentProvider = ({children}) => {

    const [macronutrients, setMacronutrients] = useState([
        {
            name: 'Calories',
            intake: 1,
            EsAvgReq: 1,
            recommended: 1,
        },

        {
            name: 'Protein',
            intake: 0,
            EsAvgReq: 1,
            recommended: 1,

        },

        {
            name: 'DietaryFiber',
            intake: 0,
            EsAvgReq: 1,
            recommended: 1,

        },
    ])
    const [vitamins, setVitamins] = useState([])
    const [minerals, setMinerals] = useState([])

    const host = '192.168.1.13'
    const [isLoading, setIsLoading] = useState(false)

    const {authtokens} = useContext(AuthContext)

    const addFood = async (food, token) => {
        setIsLoading(true)
        let response = await fetch(`http://${host}:8000/foods/consumed/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`, 
            },

            body: JSON.stringify(food)
        }) 

        let data = await response.json()

        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        alert(data.success)
    }

    const getFoods = async (token) => {
        let response = await fetch(`http://${host}:8000/foods/consumed/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`,
            },
        })

        let data = await response.json()
        console.log(data)
    }

    const contextData = {
        addFood: addFood,
        getFoods: getFoods,
        isLoading: isLoading,
        macronutrients: macronutrients,
        setMacronutrients: setMacronutrients,
        vitamins: vitamins,
        setVitamins: setVitamins,
        minerals: minerals,
        setMinerals: setMinerals
    } 

    return (
        <ContentContext.Provider value={contextData}>{children}</ContentContext.Provider>
    )
    } 