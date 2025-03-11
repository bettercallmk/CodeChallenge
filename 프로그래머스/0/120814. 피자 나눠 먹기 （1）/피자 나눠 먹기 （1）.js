function solution(n) {
    var answer = parseInt(n/7);
    
    if (parseInt(n % 7) > 0) {
        answer++;
    }
    return answer;
}