function solution(s){
    var answer = true;
    var pCount, yCount;
    
    s.match(/p/ig) !== null ? pCount = s.match(/p/ig).length : pCount = 0;
    s.match(/y/ig) !== null ? yCount = s.match(/y/ig).length : yCount = 0;

    if(pCount !== yCount) answer = false;
    
    return answer;
}