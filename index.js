// Selection Sort
// 1. random array

const array = [3, 4, 1, 9, 10, 5];


// 2. Find the smallest value in a array

const findSmallestIndex = (array) => {
  // Stores the smallest value
  let smallestElement = array[0];

  // Stores the index of the smallest value
  let smallestIndex = 0;

  // Iterate the array to find the smallest value
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

// 3. Sorts the array
const selectionSort = (array) => {
  // Copy values from array, because it must be immutabble.
  // Without that after call selectionSort origin array will become empty.
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) {
    // Finds the smallest element in the given array
    const smallestIndex = findSmallestIndex(sortingArray);
    // Adds the smallest element to new array
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0])
  } 

  return sortedArray;
}

console.log(selectionSort(array));


















  