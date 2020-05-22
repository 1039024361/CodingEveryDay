var quicSort = function (arr) {
    var sort = function (arr, i = 0, j = arr.length -1)  {
        if (i >= j) return
        var start = i
        var end = j
        var ref = arr[end]
        while (start < end) {
            while (start < end && arr[start] <= ref) {
                start++
            }
            arr[end] = arr[start]
            while (start < end && arr[end] >= ref) {
                end--
            }
            arr[start] = arr[end]
        }
        arr[start] = ref
        sort(arr, i, start - 1)
        sort(arr, start + 1, j)
    }
    var newArr = arr.concat()
    sort(newArr)
    return newArr
}

var arr = [1, 4, 67, 12, 45, 123]
var arr1 = [1, 4, 67, 0, 5, 5, 6, 3453, 12, 45, 123]