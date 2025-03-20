function solution(my_string) {
    var answer = [];
    
    for(let i=0; i<my_string.length; i++) {
        let char = my_string.at(i)
        if( !isNaN(char)) {
            answer.push(parseInt(my_string.at(i)));
        }
    }
    
    answer.sort(function (a,b) {
        return a-b;
    })

    
    return answer;
}