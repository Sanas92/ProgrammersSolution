function solution(n, lost, reserve) {
    var student = new Array(n).fill(1);
    var answer = n;
    
    lostStudent(student, lost);
    reserveStudent(student, reserve);
    
    student.map((element, index) => {
        if(element === 0) {
            if(index !== 0 && index !== student.length - 1) {
                if(student[index - 1] === 2) {
                    student[index - 1] = 1;
                } else if(student[index + 1] === 2) {
                    student[index + 1] = 1;
                } else {
                    answer -= 1;
                }
            } else if(index === 0) {
                if(student[index + 1] !== 2) answer -= 1;
                else student[index + 1] = 1;
            } else {
                if(student[index - 1] !== 2) answer -= 1;
                else student[index - 1] = 1;
            }
        } else {
            
        }
    });
    
    return answer;
}

function lostStudent(student, lost) {
    for(var i = 0; i < lost.length; i++) {
        student[lost[i] - 1] -= 1;
    }
    
    return student;
}

function reserveStudent(student, reserve) {
    for(var i = 0; i < reserve.length; i++) {
        student[reserve[i] - 1] += 1;
    }
    
    return student;
}