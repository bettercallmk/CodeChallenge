function solution(rsp) {
    var answer = '';
    
    for(let i=0; i<rsp.length; i++) {
        if (rsp.at(i) === "2") {
            answer += "0";
        } else if (rsp.at(i) === "0") {
            answer += "5";
        } else if (rsp.at(i) === "5") {
            answer += "2";
        }
    }
    
    return answer;
}