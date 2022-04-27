import Heap from "collections/heap.js";

const find_k_largest_numbers = (nums, k) => {
  const minHeap = new Heap([], null, (a, b) => b - a);

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  return Array.from(minHeap);
};

console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [3, 1, 5, 12, 2, 11],
    3
  )}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [5, 12, 11, -1, 12],
    3
  )}`
);

const find_k_frequent_numbers = function (nums, k) {
  let topNumbers = [];
  let hash = {},
    maxHeap = new Heap([], null, ((a, b) => b[1] - a[1]))
  // TODO: Write your code here
  for (let y = 0; y < nums.length; y++) {
    let char = nums[y]
    if (!hash[char]) {
      hash[char] = 1
    }
    hash[char] += 1
  }
  
  let keys = Object.keys(hash)
  for (let i = 0; i < k; i++) {
    maxHeap.push([keys[i], hash[keys[i]]])
  }

  for (let i = k; i < nums.length; i++) {
    if (hash[keys[i]] > maxHeap.peek()[1]) {
      maxHeap.pop();
      maxHeap.push([keys[i], hash[keys[i]]]);
    }
  }
  for (let i = 0; i < k; i++) {
    topNumbers.push(maxHeap.pop()[0])
  }
  return topNumbers;
};

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11, 11], 2)}`
);
console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [5, 12, 11, 3, 11],
    2
  )}`
);
