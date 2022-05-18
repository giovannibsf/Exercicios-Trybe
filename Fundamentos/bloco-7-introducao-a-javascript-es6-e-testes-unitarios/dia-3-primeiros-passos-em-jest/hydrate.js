const hydrate = (string) => {
    let array = string.split('')
    let agua = 0
    for (let numeros of array) {
        let numbers = parseInt(numeros)
        if(numbers) {
            agua += numbers
        }
    }
    if(agua == 1) {
        return `${agua} copo de água`
    }
    return `${agua} copos de água`
}


module.exports = hydrate


