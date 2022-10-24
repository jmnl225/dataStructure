function InsertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let insertingData = arr[i];
        let j;
        for(j=i-1; j >=0; j--){
            if(arr[j] > insertingData){
                arr[j+1] = arr[j];
            }else break;
        }
        arr[j+1] = insertingData;
    }
}

let arr = [4,2,3,1,5,6];

console.log("===== before ======");
console.log(arr);

InsertionSort(arr);

console.log("====== after ======");
console.log(arr);