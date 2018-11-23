function solution(n) {
    var answer = '';
    var str1 = '수';
    var str2 = '박';
    
    for(var i = 0; i < n; i++) {
        if(i % 2 === 0) answer += str1;
        else answer += str2;
    }
    
    
    return answer;
}