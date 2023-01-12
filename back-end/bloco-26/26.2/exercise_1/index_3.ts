function myFilter<T>(
  array: T[],
  callback: (item: T, index?: number, array?: T[]) => boolean
): T[] {
  const filteredArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

/* 
The `myFilter` function has a generic type parameter `T`, which is used to indicate
that the type of the array elements and the callback function will be determined
when the function is called.

The first parameter of the `myFilter` function is an array of `type T`, and the
second parameter is a callback function that takes an element of `type T` as the
first parameter, an index of type `number` as the second parameter (optional) and
the array itself of `type T` as third parameter (optional). The callback function
returns a Boolean value.

The `myFilter` function loops through the array passed as the first parameter and
calls the callback function for each element. If the callback function returns
`true` for an element, that element is added to the filtered array that is
returned by the `myFilter` function. If the callback function returns `false` for an
element, that element is ignored and not added to the filtered array.
*/

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = myFilter<number>(numbers, (item) => item % 2 === 0);
console.log(evenNumbers);
