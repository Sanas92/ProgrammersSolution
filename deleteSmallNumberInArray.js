function solution(arr) {
    if(arr.length === 1) return [-1];
    else {
        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
        return arr;
    }
}