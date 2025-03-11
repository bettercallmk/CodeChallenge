function solution(n, numlist) {
    var answer = numlist.filter(num => !(num%n));
    return answer;
}