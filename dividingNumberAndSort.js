function solution(arr, divisor) {
    var answer = [];
    
    arr.sort((a, b) => {return a - b});
    
    arr.map((element, index) => {
        if(element % divisor === 0) {
            answer.push(element);
        } 
    });
    
    if(answer.length === 0) answer.push(-1);
    
    return answer;
}