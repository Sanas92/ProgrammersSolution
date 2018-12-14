function solution(arr1, arr2) {
    var answer;
    
    answer = arr1.map((element, index) => {
       return element.map((element2, index2) => {
           return element2 += arr2[index][index2];
       });
    });
    
    return answer;
}