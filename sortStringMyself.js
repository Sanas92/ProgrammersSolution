function solution(strings, n) {
    var answer = [];
    
    answer = strings.map((e) => { return e = e[n] + e}).sort().map((e) => { return e.slice(1)});
    
    return answer;
}