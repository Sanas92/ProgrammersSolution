function solution(heights) {
    var answer = [0];
    
    for(var indexOfHeights = 0; indexOfHeights < heights.length; indexOfHeights++) {
            for(var indexOfLowers = indexOfHeights - 1; indexOfLowers >= 0; indexOfLowers--) {
                if(heights[indexOfHeights] < heights[indexOfLowers]) {
                    answer[indexOfHeights] = indexOfLowers + 1;
                    break;
                }
                
                if(indexOfLowers === 0) {
                    answer[indexOfHeights] = 0;
                }
            }
    }
    return answer;
}