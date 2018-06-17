
//  Pascals triangle: 
//   Row  0        1
//   Row  1       1 1
//   Row  2      1 2 1
//   Row  3     1 3 3 1 
//   Row  4    1 4 6 4 1
//   Row  5  1 5 10 10 5 1
//   Row ...

// The function takes any number for input (larger numbers will be exponentially slower as the solution is O(n^2)). 
    const pascal = (num) => {
        // I've manually added in the first two rows to the solution
        let pascalArray = [[1], [1, 1]]; 

        // We're starting at row two, so the initial value for prevRow will be the last in the pascalArray
        let prevRow = pascalArray[1]; 

        // The following for loops calculate the values on the inside of the triangle, while manually adding in the first and last values of 1 to our nextRow array 
        let nextRow = []; 
        for (let i = 2; i < num; i ++) {
            nextRow.push(1); 
            
            // The NaN check makes sure that we are only calculating the interior portion of our triangle (and that we don't have NaN returned to our nextRow array)
            for (let j = 0; j < prevRow.length; j ++) {
                if (!isNaN(prevRow[j + 1])) {
                    nextRow.push(prevRow[j] + prevRow[j + 1]); 
                }
            }
            nextRow.push(1); 
            prevRow = nextRow; 
            pascalArray.push(nextRow); 
            nextRow = [];
        } 
        return pascalArray; 
    }
