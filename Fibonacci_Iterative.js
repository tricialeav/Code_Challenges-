const fibonacci = (num) => {
    let arr = []; 
    if (num <= 0) {
        return 1; 
    } else {
        let firstPrevious = 0; 
        let secondPrevious = 1;
        let temp;  
        for (let i = 2; i <= num; i ++) {
            temp = firstPrevious; 
            firstPrevious = secondPrevious; 
            secondPrevious = temp + secondPrevious; 
            arr.push(secondPrevious); 
        }
        console.log(arr);
    } 
}