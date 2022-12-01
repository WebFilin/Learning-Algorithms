import React from "react";

const BinarySearch = () => {
  // Алгоритм бинарного поиска
  // Работает только по отсортированному массиву

  const arr = [0, 1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 10];

  const binarySearch = (arr, value) => {
    // Стартовые индекс поиска - левая часть поиска
    let start = 0;

    //  Конечный индекс массива - правая часть поиска
    let end = arr.length - 1;

    while (start <= end) {
      // Средняя точка диапазона поиска
      const middle = Math.floor((start + end) / 2);

      // Если найденый элемент равен среднему - значение найдено, массив схлопнут
      if (value === arr[middle]) return middle;

      // Если значение меньше середины диапазона, поиск переходит в левую части, правую отбрасываем
      if (value < arr[middle]) {
        end = middle - 1;
      }

      // Если значение больше середины диапазона, поиск переходит в правую части, левую отбрасываем
      else {
        start = middle + 1;
      }
    }
    return -1;
  };

  //   Получаем индекс элемента
  console.log(binarySearch(arr, 3));

  return <div></div>;
};

export default BinarySearch;
