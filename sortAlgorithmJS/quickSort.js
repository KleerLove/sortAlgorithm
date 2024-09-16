// 快速排序算法
function quickSort(arr) {
    if (arr.length <= 1) {
        return {
            sortedArray: arr,
            complexity: {
                average: "O(n log n)",
                worst: "O(n^2)",
                space: "O(log n)"
            }
        };
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    let sortedLeft = quickSort(left).sortedArray;
    let sortedRight = quickSort(right).sortedArray;
    return {
        sortedArray: [...sortedLeft, pivot, ...sortedRight],
        complexity: {
            average: "O(n log n)",
            worst: "O(n^2)",
            space: "O(log n)"
        }
    };
}
