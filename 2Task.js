function mulDiv (number) {
    if(number % 2 === 0)
    {
        return number / 2;
    }
    else
    {
        return number * 2;
    }
}
const result = mulDiv(20);
console.log(result);