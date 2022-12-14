export const getRecommendedIntake = (age, gender) => {
   if (age >= 0 && age <= 2) {
        if(gender == 'Male') {
            return {
                calories: 1000,
                protein: 18,
                dietaryFiber: 7,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 4,
                vitaminK: 12,
                thiamin: 0.5,
                riboflavin: 0.5,
                niacin: 6,
                vitaminB6: 0.5,
                vitaminB12: 0.9,
                folate: 150,
                vitaminC: 45,
                iron: 8,
                zinc: 4.1,
                selenium: 17,
                iodine: 90,
                calcium: 500,
                magnesium: 60,
                phosphorus: 460,
                flouride: 0.6,
                sodium: 225,
                chloride: 350,
                potassium: 1000,
            }
        } else {
            return {
                calories: 920,
                protein: 17,
                dietaryFiber: 7,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 4,
                vitaminK: 12,
                thiamin: 0.4,
                riboflavin: 0.5,
                niacin: 6,
                vitaminB6: 0.5,
                vitaminB12: 1.0,
                folate: 150,
                vitaminC: 45,
                iron: 8,
                zinc: 4.0,
                selenium: 16,
                iodine: 90,
                calcium: 500,
                magnesium: 60,
                phosphorus: 460,
                flouride: 0.6,
                sodium: 225,
                chloride: 350,
                potassium: 1000,
            }
        }

    } else if (age >= 3 && age <= 5) {
        if(gender == 'Male') {
            return {
                calories: 1350,
                protein: 22,
                dietaryFiber: 10,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 5,
                vitaminK: 18,
                thiamin: 0.5,
                riboflavin: 0.6,
                niacin: 7,
                vitaminB6: 0.6,
                vitaminB12: 1.1,
                folate: 200,
                vitaminC: 45,
                iron: 9,
                zinc: 5.0,
                selenium: 20,
                iodine: 90,
                calcium: 550,
                magnesium: 70,
                phosphorus: 500,
                flouride: 0.9,
                sodium: 300,
                chloride: 500,
                potassium: 1400,
            }
        } else {
            return {
                calories: 1260,
                protein: 21,
                dietaryFiber: 10,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 5,
                vitaminK: 17,
                thiamin: 0.5,
                riboflavin: 0.5,
                niacin: 7,
                vitaminB6: 0.7,
                vitaminB12: 1.2,
                folate: 200,
                vitaminC: 45,
                iron: 9,
                zinc: 4.8,
                selenium: 20,
                iodine: 90,
                calcium: 550,
                magnesium: 70,
                phosphorus: 500,
                flouride: 0.9,
                sodium: 300,
                chloride: 500,
                potassium: 1400,
            }
        }
    } else if (age >= 6 && age <= 9) {
        if(gender == 'Male') {
            return {
                calories: 1600,
                protein: 30,
                dietaryFiber: 14,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 6,
                vitaminK: 23,
                thiamin: 0.7,
                riboflavin: 0.7,
                niacin: 9,
                vitaminB6: 0.7,
                vitaminB12: 1.3,
                folate: 300,
                vitaminC: 45,
                iron: 10,
                zinc: 5.1,
                selenium: 20,
                iodine: 120,
                calcium: 700,
                magnesium: 90,
                phosphorus: 500,
                flouride: 1.2,
                sodium: 400,
                chloride: 600,
                potassium: 1600,
            }
        } else {
            return {
                calories: 1470,
                protein: 29,
                dietaryFiber: 14,
                vitaminA: 400,
                vitaminD: 5,
                vitaminE: 6,
                vitaminK: 23,
                thiamin: 0.7,
                riboflavin: 0.7,
                niacin: 9,
                vitaminB6: 0.8,
                vitaminB12: 1.5,
                folate: 300,
                vitaminC: 45,
                iron: 9,
                zinc: 5.0,
                selenium: 19,
                iodine: 120,
                calcium: 700,
                magnesium: 90,
                phosphorus: 500,
                flouride: 1.1,
                sodium: 400,
                chloride: 600,
                potassium: 1600,
            }
        }
    } else if (age >= 10 && age <= 12) {
        if(gender == 'Male') {
            return {
                calories: 2060,
                protein: 43,
                dietaryFiber: 17,
                vitaminA: 500,
                vitaminD: 5,
                vitaminE: 7,
                vitaminK: 33,
                thiamin: 0.9,
                riboflavin: 1.0,
                niacin: 11,
                vitaminB6: 1.0,
                vitaminB12: 1.8,
                folate: 300,
                vitaminC: 45,
                iron: 12,
                zinc: 6.6,
                selenium: 21,
                iodine: 120,
                calcium: 1000,
                magnesium: 150,
                phosphorus: 1250,
                flouride: 1.7,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1980,
                protein: 46,
                dietaryFiber: 17,
                vitaminA: 500,
                vitaminD: 5,
                vitaminE: 9,
                vitaminK: 36,
                thiamin: 0.9,
                riboflavin: 0.9,
                niacin: 12,
                vitaminB6: 1.1,
                vitaminB12: 2.1,
                folate: 300,
                vitaminC: 45,
                iron: 20,
                zinc: 6.1,
                selenium: 23,
                iodine: 120,
                calcium: 1000,
                magnesium: 160,
                phosphorus: 1250,
                flouride: 1.8,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 13 && age <= 15) {
        if(gender == 'Male') {
            return {
                calories: 2700,
                protein: 62,
                dietaryFiber: 20,
                vitaminA: 700,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 49,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 15,
                vitaminB6: 1.3,
                vitaminB12: 2.3,
                folate: 400,
                vitaminC: 60,
                iron: 19,
                zinc: 9.2,
                selenium: 30,
                iodine: 150,
                calcium: 1000,
                magnesium: 220,
                phosphorus: 1250,
                flouride: 2.4,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 2170,
                protein: 57,
                dietaryFiber: 20,
                vitaminA: 500,
                vitaminD: 5,
                vitaminE: 9,
                vitaminK: 46,
                thiamin: 1.0,
                riboflavin: 1.0,
                niacin: 13,
                vitaminB6: 1.2,
                vitaminB12: 2.2,
                folate: 400,
                vitaminC: 55,
                iron: 28,
                zinc: 7.4,
                selenium: 29,
                iodine: 150,
                calcium: 1000,
                magnesium: 210,
                phosphorus: 1250,
                flouride: 2.3,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 16 && age <= 18) {
        if(gender == 'Male') {
            return {
                calories: 3010,
                protein: 72,
                dietaryFiber: 23,
                vitaminA: 800,
                vitaminD: 5,
                vitaminE: 11,
                vitaminK: 59,
                thiamin: 1.4,
                riboflavin: 1.5,
                niacin: 18,
                vitaminB6: 1.5,
                vitaminB12: 2.7,
                folate: 400,
                vitaminC: 70,
                iron: 14,
                zinc: 9.0,
                selenium: 37,
                iodine: 150,
                calcium: 1000,
                magnesium: 265,
                phosphorus: 1250,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 2280,
                protein: 61,
                dietaryFiber: 23,
                vitaminA: 600,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 52,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.3,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 28,
                zinc: 7.2,
                selenium: 32,
                iodine: 150,
                calcium: 1000,
                magnesium: 230,
                phosphorus: 1250,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 19 && age <= 29) {
        if(gender == 'Male') {
            return {
                calories: 2530,
                protein: 71,
                dietaryFiber: 25,
                vitaminA: 700,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 61,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 16,
                vitaminB6: 1.3,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 70,
                iron: 12,
                zinc: 6.5,
                selenium: 38,
                iodine: 150,
                calcium: 750,
                magnesium: 240,
                phosphorus: 700,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1930,
                protein: 62,
                dietaryFiber: 25,
                vitaminA: 600,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 53,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.3,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 28,
                zinc: 4.6,
                selenium: 33,
                iodine: 150,
                calcium: 750,
                magnesium: 210,
                phosphorus: 700,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 30 && age <= 49) {
        if(gender == 'Male') {
            return {
                calories: 2420,
                protein: 71,
                dietaryFiber: 25,
                vitaminA: 700,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 61,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 16,
                vitaminB6: 1.3,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 70,
                iron: 12,
                zinc: 6.5,
                selenium: 38,
                iodine: 150,
                calcium: 750,
                magnesium: 240,
                phosphorus: 700,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1870,
                protein: 62,
                dietaryFiber: 25,
                vitaminA: 600,
                vitaminD: 5,
                vitaminE: 10,
                vitaminK: 53,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.3,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 28,
                zinc: 4.6,
                selenium: 33,
                iodine: 150,
                calcium: 750,
                magnesium: 210,
                phosphorus: 700,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 50 && age <= 59) {
        if(gender == 'Male') {
            return {
                calories: 2420,
                protein: 71,
                dietaryFiber: 25,
                vitaminA: 700,
                vitaminD: 10,
                vitaminE: 10,
                vitaminK: 61,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 16,
                vitaminB6: 1.7,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 70,
                iron: 12,
                zinc: 6.5,
                selenium: 38,
                iodine: 150,
                calcium: 750,
                magnesium: 240,
                phosphorus: 700,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1870,
                protein: 62,
                dietaryFiber: 25,
                vitaminA: 600,
                vitaminD: 10,
                vitaminE: 10,
                vitaminK: 53,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.6,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 10,
                zinc: 4.6,
                selenium: 33,
                iodine: 150,
                calcium: 800,
                magnesium: 210,
                phosphorus: 700,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 60 && age <= 69) {
        if(gender == 'Male') {
            return {
                calories: 2140,
                protein: 71,
                dietaryFiber: 25,
                vitaminA: 700,
                vitaminD: 15,
                vitaminE: 10,
                vitaminK: 61,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 16,
                vitaminB6: 1.7,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 70,
                iron: 12,
                zinc: 6.5,
                selenium: 38,
                iodine: 150,
                calcium: 800,
                magnesium: 240,
                phosphorus: 700,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1610,
                protein: 62,
                dietaryFiber: 25,
                vitaminA: 600,
                vitaminD: 10,
                vitaminE: 10,
                vitaminK: 53,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.6,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 10,
                zinc: 4.6,
                selenium: 33,
                iodine: 150,
                calcium: 800,
                magnesium: 210,
                phosphorus: 700,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    } else if (age >= 70) {
        if(gender == 'Male') {
            return {
                calories: 1960,
                protein: 71,
                dietaryFiber: 25,
                vitaminA: 700,
                vitaminD: 15,
                vitaminE: 10,
                vitaminK: 61,
                thiamin: 1.2,
                riboflavin: 1.3,
                niacin: 16,
                vitaminB6: 1.7,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 70,
                iron: 12,
                zinc: 6.5,
                selenium: 38,
                iodine: 150,
                calcium: 800,
                magnesium: 240,
                phosphorus: 700,
                flouride: 3.0,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        } else {
            return {
                calories: 1540,
                protein: 62,
                dietaryFiber: 25,
                vitaminA: 600,
                vitaminD: 10,
                vitaminE: 10,
                vitaminK: 53,
                thiamin: 1.1,
                riboflavin: 1.1,
                niacin: 14,
                vitaminB6: 1.6,
                vitaminB12: 2.4,
                folate: 400,
                vitaminC: 60,
                iron: 10,
                zinc: 4.6,
                selenium: 33,
                iodine: 150,
                calcium: 800,
                magnesium: 210,
                phosphorus: 700,
                flouride: 2.6,
                sodium: 500,
                chloride: 750,
                potassium: 2000,
            }
        }
    }
}

