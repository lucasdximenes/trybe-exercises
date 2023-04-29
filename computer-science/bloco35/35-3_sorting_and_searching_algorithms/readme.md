# Sorting and Searching Algorithms

---

## Sorting Algorithms:

### Selection Sort (Brute Force)

- Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

> **Note**: The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
> Complexity Analysis:
>
> - Time Complexity: O(n2) as there are two nested loops.
> - Auxiliary Space: O(1)

- Example:

```python
def selection_sort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i + 1, len(array)):
            if array[min_index] > array[j]:
                min_index = j
        array[i], array[min_index] = array[min_index], array[i]
    return array
```

```shell
array = [64, 25, 12, 22, 11]
selection_sort(array)
[11, 12, 22, 25, 64]
```

### Insertion Sort (Brute Force)

- Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

> **Note**: To sort an array of size n in ascending order:
>
> - Iterate from arr[1] to arr[n] over the array.
> - Compare the current element (key) to its predecessor.
> - If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

- Example:

```python
def insertion_sort(array):
    for i in range(1, len(array)):
        key = array[i]
        j = i - 1
        while j >= 0 and key < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
    return array
```

```shell
array = [64, 25, 12, 22, 11]
insertion_sort(array)
[11, 12, 22, 25, 64]
```

> Complexity Analysis:
>
> - Time Complexity: O(n\*2)
> - Auxiliary Space: O(1)

### Bubble Sort (Iterative)

- Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

> **Note**: Complexity Analysis:
>
> - Time Complexity: O(n\*2). Worst and Average Case Time Complexity: O(n\*2). Worst case occurs when array is reverse sorted.
> - Best Case Time Complexity: O(n). Best case occurs when array is already sorted.
> - Auxiliary Space: O(1)

- Example:

```python
def bubble_sort(array):
    n = len(array)
    for i in range(n):
        for j in range(0, n - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
    return array
```

### Merge Sort (Divide and Conquer)

- Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

> **Note**: Complexity Analysis:
>
> - Time Complexity: Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation.
> - T(n) = 2T(n/2) + \Theta(n)
> - The above recurrence can be solved either using Recurrence Tree method or Master method. It falls in case II of Master Method and solution of the recurrence is \Theta(nLogn).
> - Time complexity of Merge Sort is \Theta(nLogn) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and take linear time to merge two halves.
> - Auxiliary Space: O(n)
> - Algorithmic Paradigm: Divide and Conquer
> - Sorting In Place: No in a typical implementation
> - Stable: Yes

- Example:

```python
def merge_sort(array):
    if len(array) > 1:
        mid = len(array) // 2
        left = array[:mid]
        right = array[mid:]
        merge_sort(left)
        merge_sort(right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                array[k] = left[i]
                i += 1
            else:
                array[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            array[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            array[k] = right[j]
            j += 1
            k += 1
    return array
```

### Quick Sort (Divide and Conquer)

- QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

> **Note**: Complexity Analysis:
>
> - Time Complexity: O(nLogn) in average case and O(n^2) in worst case.
> - Auxiliary Space: O(1)
> - Sorting In Place: Yes
> - Algorithmic Paradigm: Divide and Conquer
> - Stable: No

- Example:

```python
def partition(array, low, high):
    i = low - 1
    pivot = array[high]
    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]
    return i + 1

def quick_sort(array, low, high):
    if low < high:
        pi = partition(array, low, high)
        quick_sort(array, low, pi - 1)
        quick_sort(array, pi + 1, high)
    return array
```
