function solution(num) {
    var answer = 0;
    
    answer = collatzSol(num, 0);
    
    return answer;
}

function collatzSol(n, time) {
    if(time === 500) return -1;
    if(n === 1) return time;

    return (n % 2) ? collatzSol(n * 3 + 1, time + 1) : collatzSol(n /= 2, time + 1);
}