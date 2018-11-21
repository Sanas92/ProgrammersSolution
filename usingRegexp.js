function solution(s) {
    var answer = false;
    
    console.log(s.match(/[^0-9]/));
    
    if((s.length === 4 || s.length === 6) && s.match(/^[0-9]+$/) !== null) answer = true;
    
    return answer;
}