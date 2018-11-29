function solution(n, m) {
    var answer = [];
    
    if(n > m) {
        for(var i = n; i > 0; i--) {
            if(n % i === 0 && m % i === 0) {
                answer.push(i);
                break;
            }
        }
        
        answer.push(n * m / answer[0]);
    } else {
        for(var i = m; i > 0; i--) {
            if(n % i === 0 && m % i === 0) {
                answer.push(i);
                break;
            }
        }
        
        answer.push(n * m / answer[0]);
    }
    
    return answer;
}