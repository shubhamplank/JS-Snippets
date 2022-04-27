// Maximum value of a Substring of length = K
function find_max_of_subarrays(K, arr) {
  let result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum);

      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}
debugger;

console.log(
  `Averages of subarrays of size K: ${find_max_of_subarrays(
    5,
    [1, 3, 2, 6, -1, 4, 1, 8, 2]
  )}`
);

// find smallest subarray length with sum = K
function smallest_subarray_with_given_sum(K, arr) {
  let windowSum = 0.0,
    windowStart = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    while (windowSum >= K) {
      minLength =
        minLength < windowEnd - windowStart + 1
          ? minLength
          : windowEnd - windowStart + 1;

      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return minLength;
}
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);

   