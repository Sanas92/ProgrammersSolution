function solution(n)
{
    var answer = 0;
    
    for(var i = 0; i < (n + "").length; i++) {
        answer += (n + "")[i] * 1;
    }

    return answer;
}