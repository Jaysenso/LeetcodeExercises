/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

/**
1.store list1 in a setMap (key = string, value = index of string)
2.traverse through list2 and check if any of the elements exists in the setMap
3. if it exists, we check the resultant indexSum is smaller than minIndexSum <= if yes, we set result = [list2[i]],
    however, if we found an element that has the same index <= we will push the string into the array instead of 
    overwriting it 
4. return the result array (it stores all the common strings with the least index sum)
*/

var findRestaurant = function(list1, list2) {

    let setMap = new Map();

    //1. store list1 in setMap
    for(let i = 0; i < list1.length; i++){
        //we store the string and its corresponding index value
        setMap.set(list1[i], i); 
    }

    let minIndexSum = Number.MAX_SAFE_INTEGER;
    let result = [];
    //2. traverse through list2
    for(let i = 0; i < list2.length; i++){
        //3. if there exists a string in the setMap (we found a common string that exist in both listA and listB)
        if(setMap.has(list2[i])){
            //we compute the index sum and set it as the key value in resultMap
            let indexSum = setMap.get(list2[i]) + i;
            if(indexSum < minIndexSum) {
                minIndexSum = indexSum;
                result = [list2[i]]; //overwrites the elements in result when we found a new minIndexSum
            }
            else if(indexSum === minIndexSum) {
                result.push(list2[i]);
            }
        }
    }
    // 4. return the result array
    return result;

};
