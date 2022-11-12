let arr = [6, 4, 8, 3, 1, 9, 0, 2];
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);