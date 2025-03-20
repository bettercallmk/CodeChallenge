function solution(my_string) {

    let answer = my_string
    .split("")
    .filter(x => !isNaN(x))
    .map(Number)
    .sort((a, b) => a - b);
    
    return answer.reduce((a,b) => a + b, 0)
}