function solution(numbers) {
    var answer = 0;
    
    let max = 0;
    for (let i=0; i<numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    numbers.splice(numbers.indexOf(max), 1);
    
    let second_max = 0;
    for (let i=0; i<numbers.length; i++) {
        if (second_max < numbers[i]) {
            second_max = numbers[i];
        }
    }
    answer = max * second_max;
    return answer;
}