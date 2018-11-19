function solution(a, b) {
    var answer = '';
    var lengthOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nameOfDay = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var pastOfMonth = a - 1;
    var pastOfDay = b - 1;
    
    if(pastOfMonth !== 0) {
        for(var i = 0; i < pastOfMonth; i++) {
            pastOfDay += lengthOfMonths[i];
        }
    } 

    answer = nameOfDay[pastOfDay % 7];

    return answer;
}