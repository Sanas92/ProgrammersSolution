function solution(a, b) {
    var answer = 0;
    
    (a > b) ? answer = (a + b) * (a - b) / 2 + (a + b) * 0.5 : answer = (a + b) * (b - a) / 2 + (a + b) * 0.5;
    
    return answer;
}