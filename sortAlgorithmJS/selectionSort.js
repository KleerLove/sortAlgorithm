// 选择排序算法
function selectionSort(arr) {
    let array = [...arr]; 
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    return {
        sortedArray: array,
        complexity: {
            average: "O(n^2)",
            worst: "O(n^2)",
            space: "O(1)"
        }
    };
}
