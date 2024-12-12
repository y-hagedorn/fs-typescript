const calculateBmi = (height: number, weight: number,) : string => {
    const bmi = weight / ((height / 100) ** 2)
    if (bmi <= 16)
        return 'Underweight (Severe thinness)'
    else if (bmi > 16 && bmi <= 16.9)
        return 'Underweight (Moderate thinness)'
    else if (bmi > 16.9 && bmi <= 18.4)
        return 'Underweight (Mild thinness'
    else if (bmi > 18.4 && bmi <= 24.9)
        return 'Normal range'
    else if (bmi > 24.9 && bmi <= 29.9)
        return 'Overweight (Pre-obese)'
    else if (bmi > 29.9 && bmi <= 34.9)
        return 'Obese (Class I)'
    else if (bmi > 34.9 && bmi <= 39.9)
        return 'Obese (Class II)'
    else if (bmi > 39.9)
        return 'Obese (Class III)'
    else
        return 'error'
    
}

console.log(calculateBmi(180, 74))