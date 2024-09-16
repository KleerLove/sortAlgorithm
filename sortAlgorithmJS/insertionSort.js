// 插入排序算法
function insertionSort(arr) {
    let array = [...arr];
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
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
