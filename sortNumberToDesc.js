function solution(n) {
    var answer = '';
    
    (n + '').split('').sort().reverse().map((v) => {answer += v;});
    answer *= 1;
    
    return answer;
}