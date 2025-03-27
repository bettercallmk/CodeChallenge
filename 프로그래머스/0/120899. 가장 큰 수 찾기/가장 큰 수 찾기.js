function solution(array) {
    let answer = [];
    let maxIndex = 0;
    let max = array[0];
    
    for(let i=1; i<array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
            
        }
    }
    answer.push(max);
    answer.push(maxIndex);
    
    return answer;
}