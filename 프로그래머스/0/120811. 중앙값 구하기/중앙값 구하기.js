function solution(array) {
    
    function compareNum(a,b) {
        return a-b
    }

    return array.sort(compareNum)[parseInt(array.length/2)];
}