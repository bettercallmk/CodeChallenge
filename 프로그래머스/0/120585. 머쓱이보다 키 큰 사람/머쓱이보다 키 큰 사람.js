function solution(array, height) {
    var answer = 0;
    
    for(let arr of array) {
        if (height < arr) {
            answer++;
        }
    }
    return answer;
}