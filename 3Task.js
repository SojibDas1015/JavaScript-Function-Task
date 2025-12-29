function make_avg (ar) {
    let sum = 0;
    for(const num of ar){
        sum = num + sum;
    }
    const avg = sum / ar.length;
    return avg;
}
const ar = [1, 2, 3, 4, 5];
const average = make_avg(ar);
console.log(average);