function solution(num) {
    var answer = '';
    
    if(num % 2) answer = 'Odd';
    else if(num < 0) answer = 'Error';
    else answer = 'Even';
    
    return answer;
}