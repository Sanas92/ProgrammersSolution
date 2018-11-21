function solution(seoul) {
    var answer = '';
    
    seoul.map((element, index) => {
        if(element === "Kim") answer = "김서방은 " + index + "에 있다"
    });
    
    return answer;
}

function solution(seoul) {
	var answer = '';

	answer = "김서방은" + seoul.indexOf("KIM") + "에 있다";

	return answer;
}