function solution(n) {
    var answer = 0;
    let nString = n.toString();
    
    for (let i=0; i<nString.length; i++) {
        answer += parseInt(nString[i]);
    }
    return answer;
}