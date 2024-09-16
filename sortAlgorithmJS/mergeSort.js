// 归并排序算法
function mergeSort(arr) {
    if (arr.length <= 1) return { sortedArray: arr, complexity: {} };

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)).sortedArray;
    const right = mergeSort(arr.slice(mid)).sortedArray;

    return {
        sortedArray: merge(left, right),
        complexity: {
            average: "O(n log n)",
            worst: "O(n log n)",
            space: "O(n)"
        }
    };

    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return [...result, ...left.slice(i), ...right.slice(j)];
    }
}
