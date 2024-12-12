interface Result {
    periodLength: number
    trainingDays: number
    success: boolean
    rating: number
    ratingDescription: string
    target: number
    average: number
}

const calculateExercises = (dailyExerciseHours: number[], target: number) : Result => {
    const periodLength = dailyExerciseHours.length
    const trainingDays = dailyExerciseHours.filter(hours => hours > 0).length
    const total = dailyExerciseHours.reduce((sum, hours) => sum + hours, 0)
    const average = total / periodLength
    const success = average >= target
    let rating: number
    let ratingDescription: string

    if (average >= target) {
        rating = 3
        ratingDescription = 'Excellent! you\'ve exceeded the target'
    } else if (average >= 0.8 * target) {
        rating = 2
        ratingDescription = 'Not too bad but could be better'
    } else {
        rating = 1
        ratingDescription = 'You definitely could do more exercise hours'
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    }
}

const dailyExerciseHours = [3, 0, 2, 4.5, 0, 3, 1]
const target = 2

console.log(calculateExercises(dailyExerciseHours, target))