function solution(n, k) {
    let answer = 0;
    let discount = 0;
    
    answer += n * 12000;
    answer += k * 2000;
    
    if (n>=10) {
        discount += (parseInt(n/10) * 2000);
    }
    return answer-discount;
}