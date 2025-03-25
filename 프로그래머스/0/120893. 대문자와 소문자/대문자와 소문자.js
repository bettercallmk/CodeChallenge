function solution(my_string) {
    var answer = '';
    
    for(let i=0; i<my_string.length; i++) {
        if(my_string.at(i) === my_string.at(i).toUpperCase()) {
           answer += my_string.at(i).toLowerCase();
           } else {
               answer += my_string.at(i).toUpperCase();
           }
    }
    
    return answer;
}