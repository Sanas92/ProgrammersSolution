function solution(s) {
    var answer = '';
    var stringIndex = 0;
    
    for(var i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            if(stringIndex % 2 === 0) answer += s[i].toUpperCase();
            else answer += s[i].toLowerCase();
            stringIndex += 1;
        } else {
            answer += ' ';
            stringIndex = 0;
        }
    }
    
    return answer;
}

function solution(s) {
    var answer = '';
    
    answer = s.toUpperCase().replace(/(\w)(\w)/g, (a) => {
        return a[0].toUpperCase() + a[1].toLowerCase();
    });
    
    return answer;
}
