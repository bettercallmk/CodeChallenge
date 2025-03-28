function solution(num, k) {
    let strNum = String(num);
    let strK = String(k);
    
    return strNum.includes(strK) ? strNum.indexOf(strK) + 1 : -1;
    
}