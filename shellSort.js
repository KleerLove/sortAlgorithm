// 希尔排序算法
function shellSort(arr) {
    let array = [...arr];
    let n = array.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j = i;
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return {
        sortedArray: array,
        complexity: {
            average: "O(n log n)",
            worst: "O(n^2)",
            space: "O(1)"
        }
    };
}
