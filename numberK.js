function solution(array, commands) {
    var answer = [];
    
    answer = commands.map(i => {
        return array.slice(i[0] - 1, i[1]).sort((a, b) => a - b)[i[2] - 1]
    });
    
    return answer;
}