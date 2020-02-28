function partition(arr,l,r){
    console.log(l,r)
    let key = arr[l]
    while(l<r){
        while(arr[r]>=key&&r>l) r--;
        arr[l] = arr[r];
        while(arr[l]<=key&&l<r) l++;
        arr[r] = arr[l]
    }
    arr[l]=key
    console.log(arr)
    return l
}
function sort(arr,l,r){
    if(l<r){
        let ll = partition(arr,l,r)
        sort(arr,l,ll-1)
        sort(arr,ll+1,r)
    }
    return arr
}
function QuickSort(arr){
    sort(arr,0,arr.length-1)
}
console.log(QuickSort([49,38,65,97,76,13,27,49]))