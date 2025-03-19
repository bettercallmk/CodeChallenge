function solution(hp) {
    
    let rem = hp;
    let answer = 0;
    
    if (rem % 5 >= 0) {
        answer += (parseInt(rem / 5));
        rem = parseInt(rem % 5);

    }
    
    if (rem % 3 >= 0) {
        answer += (parseInt(rem / 3));
        answer += (parseInt(rem % 3));
        rem = parseInt(rem % 3);

    }
    
    
    
    return answer;
}