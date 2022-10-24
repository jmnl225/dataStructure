function MergeSort(arr, leftIndex, rightIndex){
    //let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    let midIndex = parseInt((leftIndex + rightIndex)/2);
    MergeSort(arr, leftIndex, midIndex);
    MergeSort(arr, midIndex, rightIndex);
    Merge(arr, leftIndex, midIndex, rightIndex);
}

function Merge(arr, leftIndex, midIndex, rightIndex){
    let leftAreaIndex = leftIndex;
    let rightAreaIndex = rightIndex;
    
    let tempArr = [];
    tempArr.length = rightAreaIndex +1;
    tempArr.fill(0,0, rightAreaIndex+1);

    let tempArrIndex = leftIndex;
    while(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex){
        if(arr[leftAreaIndex] <= arr[rightAreaIndex]){
            tempArr[tempArrIndex] = arr[leftAreaIndex++];
        }else{
            tempArr[tempArrIndex] = arr[rightAreaIndex++]
        }
        tempArrIndex++;
    }

    if(leftAreaIndex > midIndex){
        for(let i = rightAreaIndex; i<= rightAreaIndex; i++){
            tempArr[tempArrIndex++] = arr[i];
        }
    }else{
        for(let i= leftAreaIndex; i<= midIndex; i++){
            tempArr[tempArrIndex++] = arr[i];
        }
    }

    for(let i = leftIndex; i<=rightIndex; i++){
        arr[i] = tempArr[i];
    }

}


let arr = [3,5,2,4,1,7,8,6];

console.log("======== before =========");
console.log(arr);

MergeSort(arr, 0, arr.length-1);

console.log("======== after =========");
console.log(arr);
