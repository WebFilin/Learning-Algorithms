import React from "react";

function BubbleSort() {
  // Сортировка пузырьком

  // Массив для сортировки
  const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

  function bubbleSort(arr) {
    // Внешний цикл проходим по массиву до конца
    for (let i = 0; i < arr.length; i++) {
      // Внутренний цикл for (находим наибольший элемент из неотсортированных)
      for (let j = 0; j < arr.length; j++) {
        // сравниваем элементы массива и меняем их местами
        if (arr[j] > arr[j + 1]) {
          // Меняем элементы местами с помощью третьей переменной
          let tmp = arr[j];

          arr[j] = arr[j + 1];

          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  }

  console.log(bubbleSort(arr));

  return <div></div>;
}

export default BubbleSort;
