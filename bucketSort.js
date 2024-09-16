// 桶排序算法
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return { sortedArray: arr, complexity: {} };

    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map(() => []);

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].length > 0) {
            insertionSort(buckets[i]).sortedArray.forEach(element => arr.push(element));
        }
    }

    return {
        sortedArray: arr,
        complexity: {
            average: "O(n + k)",
            worst: "O(n^2)",
            space: "O(n + k)"
        }
    };
}
