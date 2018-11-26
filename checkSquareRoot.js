function solution(n) {
    var limitNumber = 1;
    
    while(true) {
        if(limitNumber * limitNumber >= n) break;
        
        limitNumber += 1;
    }
    
    if(limitNumber * limitNumber === n) return (limitNumber + 1) * (limitNumber + 1);
    else return -1;
}