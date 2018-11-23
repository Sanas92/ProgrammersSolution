function solution(s, n) {
    var answer = '';
    var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(var i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
        } else if(s[i].toLowerCase() === s[i]) {
            answer += lowerAlpha[(lowerAlpha.indexOf(s[i]) + n) % 26];
        } else {
            answer += lowerAlpha[(lowerAlpha.indexOf(s[i].toLowerCase()) + n) % 26].toUpperCase();
        }
    }
    
    return answer;
}