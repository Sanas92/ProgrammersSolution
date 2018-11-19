function solution(arr)
{
    var answer = [];

    arr.map((element, index) => {
        if(element !== arr[index + 1]) {
            answer.push(element);
        }
    });
    
    console.log(answer);
    return answer;
}

var sample1 = [1,1,3,3,0,1,1];
var sample2 = [4,4,4,3,3];

solution(sample1);
solution(sample2);