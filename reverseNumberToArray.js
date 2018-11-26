function solution(n) {
    var answer = [];
    
    (n + '').split('').map((v) => { answer.push(v * 1)});
    answer.reverse();

    return answer;
}