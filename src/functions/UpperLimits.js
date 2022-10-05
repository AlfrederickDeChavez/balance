const getUpperLimit = (age) => {
    if(age >= 0 && age <= 3) {
        return {
            vitaminA: 600,
            vitaminD: 50,
            vitaminE: 200,
            niacin: 10,
            vitaminB6: 30,
            folate: 300,
            vitaminC: 400,
            iron: 40,
            zinc: 7,
            selenium: 90,
            iodine: 200,
            calcium: 2500,
            magnesium: 65,
            phosphorus: 3000,
            flouride: 1.3
        }
    }  else if (age >= 4 && age <= 8) {
        return {
            vitaminA: 900,
            vitaminD: 50,
            vitaminE: 300,
            niacin: 15,
            vitaminB6: 40,
            folate: 400,
            vitaminC: 650,
            iron: 40,
            zinc: 12,
            selenium: 150,
            iodine: 300,
            calcium: 2500,
            magnesium: 110,
            phosphorus: 3000,
            flouride: 2.2
        }
    } else if (age >= 9 && age <= 13) {
        return {
            vitaminA: 1700,
            vitaminD: 50,
            vitaminE: 600,
            niacin: 20,
            vitaminB6: 60,
            folate: 600,
            vitaminC: 1200,
            iron: 40,
            zinc: 23,
            selenium: 280,
            iodine: 600,
            calcium: 3000,
            magnesium: 350,
            phosphorus: 4000,
            flouride: 10.0
        }
    } else if (age >= 14 && age <= 18) {
        return {
            vitaminA: 2800,
            vitaminD: 50,
            vitaminE: 800,
            niacin: 30,
            vitaminB6: 80,
            folate: 800,
            vitaminC: 1800,
            iron: 45,
            zinc: 34,
            selenium: 400,
            iodine: 900,
            calcium: 3000,
            magnesium: 350,
            phosphorus: 4000,
            flouride: 10.0
        }
    } else if (age >= 19 && age <= 70) {
        return {
            vitaminA: 3000,
            vitaminD: 50,
            vitaminE: 1000,
            niacin: 35,
            vitaminB6: 100,
            folate: 1000,
            vitaminC: 1000,
            iron: 45,
            zinc: 45,
            selenium: 400,
            iodine: 1100,
            calcium: 3000, 
            magnesium: 350,
            phosphorus: 4000,
            flouride: 10.0
        }
    } else if (age > 70) {
        return {
            vitaminA: 3000,
            vitaminD: 50,
            vitaminE: 1000,
            niacin: 35,
            vitaminB6: 100,
            folate: 1000,
            vitaminC: 1000,
            iron: 45,
            zinc: 45,
            selenium: 400,
            iodine: 1100,
            calcium: 2000,
            magnesium: 350,
            phosphorus: 3000,
            flouride: 10.0
        }
    }
}