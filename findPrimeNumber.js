function solution(n) {
    var answer = 0;
    var primes = new Array(n - 1).fill(true);
    
    for(var i = 2; i < n; i++) {
        if(primes[i - 2]) {
            for(var j = i * 2; j <= n; j += i) {
                primes[j - 2] = false;
            }
        }
    }
    
    for(var i = 0; i < primes.length; i++) {
        if(primes[i]) answer += 1;
    }
        
    return answer;
}