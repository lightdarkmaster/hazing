function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;

    // Nag-iikot ha list para ig-check an tagsa nga magkasunod nga numero
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Kun an mas una nga numero mas dako, pagbalyo hira nga duha
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    // Kada ikot, an pinaka dako nga numero aada na ha kataposan
    n--;
  } while (swapped);

  return arr;
}

// Pananglitan nga paggamit
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(nums));
