function solution(s) {
    var answer = '';
    var sLength = s.length;
    
    if(sLength % 2 === 0) {
        answer = s.substr(sLength / 2 - 1, 2);
    } else {
        console.log(sLength / 2 + 1);
        answer = s.substr(sLength / 2, 1);
    }
    
    return answer;
}