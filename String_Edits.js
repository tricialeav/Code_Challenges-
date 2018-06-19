// Given two strings, write a function that determines if one 
// (or zero) edits have been made between the two. 

const oneAway = (str1, str2) => {
    let arr1 = str1.toLowerCase().split('');
    let arr2 = str2.toLowerCase().split('');
    let edited = false;
    let editCounter = 0;
    // if strings are equal, return true
    if (str1 === str2) {
        return true;
    }
    // if the difference in length of the strings equals more than one, return false
    else if (str1.length - str2.length > 1 || str2.length - str1.length > 1) {
        return false;
    }
    // if strings have all the same letters other than one, return true
    else if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                if (edited) {
                    return false;
                } else {
                    edited = true;
                }
            }
        }
    } else {
        // if strings have no more than one character difference, return true
        if (arr1.length > arr2.length) {
            for (let j = 0; j < arr2.length; j++) {
                if (editCounter > 1) {
                    return false;
                }
                else if (arr1[j] !== arr2[j]) {
                    editCounter++;
                    arr1.splice(j, 1);
                }
            }
        }
        else if (arr1.length < arr2.length) {
            for (let k = 0; k < arr2.length; k++) {
                if (editCounter > 1) {
                    return false;
                }
                else if (arr2[k] !== arr1[k]) {
                    editCounter++;
                    arr2.splice(k, 1);
                }
            }
        }
    }
    return true;
} 
