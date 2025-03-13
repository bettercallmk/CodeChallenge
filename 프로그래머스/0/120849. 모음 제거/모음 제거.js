function solution(my_string) {
    var answer = my_string.split("");
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i<answer.length; i++) {
        for( let j = 0; j<vowel.length; j++) {
            if (answer[i] === vowel[j]) {
                answer.splice(i,1);
                i--;
            }
        }
    }
    
    const answerArr = answer.join("");
    return answerArr;
}