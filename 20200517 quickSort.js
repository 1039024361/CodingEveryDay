var quicSort = function sort (arr, i, j)  {
    if (i <= j) return
    var start = i
    var end = j
    var ref = arr[end]
    while (start < end) {
        while (start < end && arr[start] < ref) {
            start++
        }
        arr[end--] = arr[start]
        while (start < end && arr[end] > ref) {
            end--
        }
        arr[start++] = arr[end]
    }
    arr[start] = ref
    sort(arr, i, start)
    sort(arr, start + 1, j)
}