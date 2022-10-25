export const calculateBMI = (weight, height) => {

    const meterHeight = height / 100
    const bmi = weight / (meterHeight ** 2)

    return bmi.toFixed(1)
}

// MALE BMI INTERPRETATION
const underweightMale = {
    imgSrc: require('../assets/images/underweightMale.png'),
    color: '#62DAFD',
    status: 'Underweight',
    fontSize: 20,
}

const normalMale = {
    imgSrc: require('../assets/images/normalweightMale.png'),
    color: '#0CA036',
    status: 'Normal',
    fontSize: 24,
}

const overweightMale = {
    imgSrc: require('../assets/images/overweightMale.png'),
    color: '#FEEA00',
    status: 'Overweight',
    fontSize: 20,
}

const obeseMale = {
    imgSrc: require('../assets/images/obeseMale.png'),
    color: '#FF8E01',
    status: 'Obese',
    fontSize: 26,
}

const extremelyobeseMale = {
    imgSrc: require('../assets/images/extremelyobeseMale.png'),
    color: '#FF1A00',
    status: 'Extremely Obese',
    fontSize: 18,
}

// FEMALE BMI INTERPRETATION

const underweightFemale = {
    imgSrc: require('../assets/images/underweightFemale.png'),
    color: '#62DAFD',
    status: 'Underweight',
    fontSize: 20,
}

const normalFemale = {
    imgSrc: require('../assets/images/normalweightFemale.png'),
    color: '#0CA036',
    status: 'Normal',
    fontSize: 24,
}

const overweightFemale = {
    imgSrc: require('../assets/images/overweightFemale.png'),
    color: '#FEEA00',
    status: 'Overweight',
    fontSize: 20,
}

const obeseFemale = {
    imgSrc: require('../assets/images/obeseFemale.png'),
    color: '#FF8E01',
    status: 'Obese',
    fontSize: 26,
}

const extremelyobeseFemale = {
    imgSrc: require('../assets/images/extremelyobeseFemale.png'),
    color: '#FF1A00',
    status: 'Extremely Obese',
    fontSize: 18,
}

export const interpretBMI = (bmi, gender) => {
    if (gender == 'Male'){
        if (bmi < 18.5) {
            return underweightMale
        } else if (bmi >= 18.5 && bmi <= 24.9 ) {
            return normalMale
        } else if (bmi >= 25.0 && bmi <= 29.9 ) {
            return overweightMale
        } else if (bmi >= 30.0 && bmi <= 34.9 ) {
            return obeseMale
        } else if (bmi >= 35.0 ) {
            return extremelyobeseMale
        }
    } else if (gender == 'Female') {
        if (bmi < 18.5) {
            return underweightFemale
        } else if (bmi >= 18.5 && bmi <= 24.9 ) {
            return normalFemale
        } else if (bmi >= 25.0 && bmi <= 29.9 ) {
            return overweightFemale
        } else if (bmi >= 30.0 && bmi <= 34.9 ) {
            return obeseFemale
        } else if (bmi >= 35.0 ) {
            return extremelyobeseFemale
        }
    }
    
}