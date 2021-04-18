export type SortTypes = 'asc' | 'desc';

function sortArray(values: (string | number | boolean)[], orderType: SortTypes) {
  return values.sort((a, b) => {
    let order;
    if (a < b) {
      order = -1;
    } else if (a > b) {
      order = 1;
    } else {
      order = 0;
    }

    return orderType === 'asc' ? order : -order;
  });
}

function sortArrayOfObjects<T extends object, K extends keyof T>(
  values: T[],
  orderBy: K,
  orderType: SortTypes
) {
  return values.sort((a, b) => {
    let order;
    if (a[orderBy] < b[orderBy]) {
      order = -1;
    } else if (a[orderBy] > b[orderBy]) {
      order = 1;
    } else {
      order = 0;
    }

    return orderType === 'asc' ? order : -order;
  });
}

export { sortArray, sortArrayOfObjects };
