import { sortArray, sortArrayOfObjects } from '../src/sorting';

test('sort array', () => {
  const myArr = [1, 3, 2, 3];
  const myExpectedArr = [1, 2, 3, 3];
  const myExpectedArr2 = [3, 3, 2, 1];
  expect(sortArray(myArr, 'asc')).toStrictEqual(myExpectedArr);
  expect(sortArray(myArr, 'desc')).toStrictEqual(myExpectedArr2);
});

test('sort array of objects', () => {
  const myObjArr = [{ name: 'b' }, { name: 'a' }, { name: 'b' }];
  const myExpectedObjArr = [{ name: 'a' }, { name: 'b' }, { name: 'b' }];
  const myExpectedObjArr2 = [{ name: 'b' }, { name: 'b' }, { name: 'a' }];
  expect(sortArrayOfObjects(myObjArr, 'name', 'asc')).toStrictEqual(myExpectedObjArr);
  expect(sortArrayOfObjects(myObjArr, 'name', 'desc')).toStrictEqual(myExpectedObjArr2);
});
