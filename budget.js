function solution(d, budget) {
    var answer = 0;
    
    d.sort((a, b) => a - b).forEach((v) => {
        if(budget >= v) {
            budget -= v;
            answer += 1;
        }
    });
    
    return answer;
}