function count_Zero (str) {
    let strcnt = 0;
    for(const letter of str){
        if(letter === '0')
        {
            strcnt ++;
        }
    }
    return strcnt;
}
const str = '1001011001';
const totalCnt = count_Zero(str);
console.log(totalCnt);