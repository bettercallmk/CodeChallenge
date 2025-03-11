function solution(sides) {
    let answer = 0;
    const sorted = sides.slice().sort((a,b) => a-b);
    
    if (sorted[2] < sorted[0]+sorted[1]) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}