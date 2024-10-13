let numbers = [1, 34, 25, 36, 100]
numbers.sort(descending)
console.log(numbers)

function ascending(b,a){
    return b-a
}

function descending(b,a){
    return a-b
}

    function squaring(a){
        return a*a
    }

    let squared = numbers.map(squaring)
    console.log(squared)

    let car = ["Honda", "Toyota", "Mercedes"]
    let cars = car.map(capital)
    console.log(cars)

    function capital(a){
        return a.toUpperCase()
    }

    let result = eval(10/2)
    console.log(result)