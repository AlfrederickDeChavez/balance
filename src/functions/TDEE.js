export const calculateBMR = (sex, weight, height, age) => {
    if (sex == 'Male') {
        return 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    } else {
        return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    }
}

export const calculateTDEE = (bmr, activity) => {
    if (activity == 'Sedentary (little to no exercise)') {
        return bmr * 1.2
    } else if (activity == 'Lightly Active (light exercise 1-3 days / week)') {
        return bmr * 1.375
    } else if (activity == 'Moderately Active (moderate exercise 3-5 days / week)') {
        return bmr * 1.55
    } else if (activity == 'Very Active (heavy exercise 6-7 days / week)') {
        return bmr * 1.725
    } else if (activity == 'Extremely Active (very heavy exercise)') {
        return bmr * 1.9
    }
}