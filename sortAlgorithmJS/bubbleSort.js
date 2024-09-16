// 冒泡排序算法
function bubbleSort(arr) {
    let array = [...arr]; // 创建数组副本，防止修改原数组
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
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
