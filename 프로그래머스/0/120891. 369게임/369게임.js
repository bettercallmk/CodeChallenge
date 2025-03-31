function solution(order) {
    var answer = order.toString().split("");
    let clap = 0;
    
    for(let i=0; i<answer.length; i++) {
        if (answer[i] === "3" || answer[i] === "6" || answer[i] === "9") {
            clap ++;
        } 
    }
    return clap;
}