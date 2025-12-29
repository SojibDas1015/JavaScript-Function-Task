function odd_Even (num) {
    if(num % 2 === 0)
    {
        return 'even';
    }
    else
    {
        return 'odd';
    }
}
const result = odd_Even(10);
console.log(result);