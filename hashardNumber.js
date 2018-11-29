function solution(x) {
    var answer = true;
    
    x % (x + '').split('').reduce((result, element) => { return result + (element * 1);}, 0) ? answer = false : answer = true
    
    return answer;
}