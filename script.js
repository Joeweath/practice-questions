// const calculator = (num1, num2, operation) => {
//     let expression;
//     if(operation == "+"){
//         expression = num1 + num2;
//     } else if (operation == "-"){
//         expression = num2 - num2;
//     } else if (operation == "*"){
//         expression = num2 * num2;
//     }else if (operation == "/"){
//         expression = num2 / num2;
//     }
//     return expression
// }


const fahrenheit = (temp) => {
//(0°C × 9/5) + 32 = 32°F
    if(typeof(temp) !== "number"){
        console.log("Please enter a number in degrees for celcius")
    } else {
        return (temp * (9/5)) + 32
    }

}
const celsius = (temp) => {
//(100°F − 32) × 5/9 = 37.778°C
}