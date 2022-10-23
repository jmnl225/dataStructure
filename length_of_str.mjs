function strLength(arr){
    if(arr[0] == null) return 0;
    return strLength(arr.slice(0,-1)) + 1;
}

let ary = [1,2,3,4,5,6];
console.log(strLength(ary));