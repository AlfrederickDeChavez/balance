
export const getEstimatedAverage = (age, gender) => {
    if(age >= 0 && age <= 2) {
        if(gender == 'Male') {
            return {
                protein: 15,
                vitaminA: 200,
                thiamin: 0.4,
                riboflavin: 0.4,
                niacin: 5,
                vitaminB6: 0.4,
                vitaminB12: 0.8, 
                folate: 120,
                vitaminC: 12,
                iron: 6.4,
                zinc: 2.8,
                selenium: 13.6,
                iodine: 65,
                calcium: 440, 
                phosphorus: 380,
            }
        } else {
            return {
                protein: 14,
                vitaminA: 200,
                thiamin: 0.4,
                riboflavin: 0.4,
                niacin: 5,
                vitaminB6: 0.5,
                vitaminB12: 0.9,
                folate: 120,
                vitaminC: 11,
                iron: 7,
                zinc: 2.6,
                selenium: 13.0,
                iodine: 65,
                calcium: 440, 
                phosphorus: 380,
            }
        } 

    } else if(age >= 3 && age <= 5) {
        if(gender == 'Male') {
            return {
                protein: 18,
                vitaminA: 226,
                thiamin: 0.5,
                riboflavin: 0.5,
                niacin: 5,
                vitaminB6: 0.5,
                vitaminB12: 0.9,
                folate: 160,
                vitaminC: 17,
                iron: 7.5,
                zinc: 3.3,
                selenium: 16.1,
                iodine: 65,
                calcium: 440, 
                phosphorus: 405,
            }
        } else {
            return {
                protein: 17,
                vitaminA: 214,
                thiamin: 0.4,
                riboflavin: 0.4,
                niacin: 5,
                vitaminB6: 0.5,
                vitaminB12: 1.0,
                folate: 160,
                vitaminC: 17,
                iron: 7.4,
                zinc: 3.2,
                selenium: 15.6,
                iodine: 65,
                calcium: 440, 
                phosphorus: 405,
            }
        }
    } else if(age >= 6 && age <= 9) {
        if(gender == 'Male') {
            return {
                protein: 24,
                vitaminA: 278,
                thiamin: 0.6,
                riboflavin: 0.6,
                niacin: 7,
                vitaminB6: 0.6,
                vitaminB12: 1.1,
                folate: 250,
                vitaminC: 23,
                iron: 8.6,
                zinc: 3.4,
                selenium: 15.6,
                iodine: 73,
                calcium: 440, 
                phosphorus: 405,
            }
        } else {
            return {
                protein: 24,
                vitaminA: 264,
                thiamin: 0.5,
                riboflavin: 0.5,
                niacin: 7,
                vitaminB6: 0.7,
                vitaminB12: 1.2,
                folate: 250,
                vitaminC: 22,
                iron: 7.8,
                zinc: 3.4,
                selenium: 15.3,
                iodine: 73,
                calcium: 440, 
                phosphorus: 405,
            }
        }
    }  else if(age >= 10 && age <= 12) {
        if(gender == 'Male') {
            return {
                protein: 35,
                vitaminA: 364,
                thiamin: 0.7,
                riboflavin: 0.8,
                niacin: 9,
                vitaminB6: 0.8,
                vitaminB12: 1.5,
                folate: 250,
                vitaminC: 33,
                iron: 10.2,
                zinc: 4.4,
                selenium: 16.5,
                iodine: 73,
                calcium: 440, 
                phosphorus: 1055,
            }
        } else {
            return {
                protein: 38,
                vitaminA: 375,
                thiamin: 0.8,
                riboflavin: 0.8,
                niacin: 10,
                vitaminB6: 0.8,
                vitaminB12: 1.7,
                folate: 250,
                vitaminC: 36,
                iron: 16.5,
                zinc: 4.1,
                selenium: 18,
                iodine: 73,
                calcium: 440, 
                phosphorus: 1055,
            }
        }
    }  else if(age >= 13 && age <= 15) {
        if(gender == 'Male') {
            return {
                protein: 50,
                vitaminA: 483,
                thiamin: 1.0,
                riboflavin: 1.1,
                niacin: 12,
                vitaminB6: 1.1,
                vitaminB12: 1.9,
                folate: 330,
                vitaminC: 48,
                iron: 18.1,
                zinc: 6.1,
                selenium: 24.3,
                iodine: 95,
                calcium: 440, 
                phosphorus: 1055,
            }
        } else {
            return {
                protein: 46,
                vitaminA: 392,
                thiamin: 0.8,
                riboflavin: 0.8,
                niacin: 10,
                vitaminB6: 1.0,
                vitaminB12: 1.8,
                folate: 330,
                vitaminC: 45,
                iron: 16.5,
                zinc: 4.9,
                selenium: 23,
                iodine: 95,
                calcium: 440, 
                phosphorus: 1055,
            }
        }
    }  else if(age >= 16 && age <= 18) {
        if(gender == 'Male') {
            return {
                protein: 59,
                vitaminA: 563,
                thiamin: 1.1,
                riboflavin: 1.2,
                niacin: 14,
                vitaminB6: 1.2,
                vitaminB12: 2.3,
                folate: 330,
                vitaminC: 58,
                iron: 12.1,
                zinc: 6.0,
                selenium: 29.5,
                iodine: 95,
                calcium: 440, 
                phosphorus: 1055,
            }
        } else {
            return {
                protein: 49,
                vitaminA: 427,
                thiamin: 0.9,
                riboflavin: 0.9,
                niacin: 11,
                vitaminB6: 1.1,
                vitaminB12: 2.0,
                folate: 330,
                vitaminC: 51,
                iron: 16.2,
                zinc: 4.8,
                selenium: 25.8,
                iodine: 95,
                calcium: 440, 
                phosphorus: 1055,
            }
        }
    } else if(age >= 19 && age <= 49) {
        if(gender == 'Male') {
            return {
                protein: 59,
                vitaminA: 499,
                thiamin: 1.0,
                riboflavin: 1.1,
                niacin: 12,
                vitaminB6: 1.1,
                vitaminB12: 2.0,
                folate: 320,
                vitaminC: 60,
                iron: 10.4,
                zinc: 4.4,
                selenium: 30.3,
                iodine: 95,
                calcium: 600, 
                phosphorus: 580,
            }
        } else {
            return {
                protein: 49,
                vitaminA: 433,
                thiamin: 0.9,
                riboflavin: 0.9,
                niacin: 11,
                vitaminB6: 1.1,
                vitaminB12: 2.0,
                folate: 320,
                vitaminC: 52,
                iron: 26.3,
                zinc: 3.1,
                selenium: 26.3,
                iodine: 95,
                calcium: 600, 
                phosphorus: 580,
            }
        }
    } else if(age > 49 ) {
        if(gender == 'Male') {
            return {
                protein: 59,
                vitaminA: 499,
                thiamin: 1.0,
                riboflavin: 1.1,
                niacin: 12,
                vitaminB6: 1.4,
                vitaminB12: 2.0,
                folate: 320,
                vitaminC: 60,
                iron: 10.4,
                zinc: 4.4,
                selenium: 26.3,
                iodine: 95,
                calcium: 600, 
                phosphorus: 580,
            }
        } else {
            return {
                protein: 49,
                vitaminA: 433,
                thiamin: 0.9,
                riboflavin: 0.9,
                niacin: 11,
                vitaminB6: 1.1,
                vitaminB12: 2.0,
                folate: 320,
                vitaminC: 52,
                iron: 26.3,
                zinc: 3.1,
                selenium: 26.3,
                iodine: 95,
                calcium: 600, 
                phosphorus: 580,
            }
        }
    }
}