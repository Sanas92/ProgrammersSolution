function solution(arr) {
    var answer = 0;
    
    arr.map((v) => {answer += v;})
    
    return answer / arr.length;
}