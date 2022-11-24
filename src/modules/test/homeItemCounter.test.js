import homeItemCounter from '../homeItemsCounter.js';

describe('calculate the list item of homepage', () => {
  test('result should get the number of item', () => {
    const list = [{ Alyssa: 'Beef' }, { koko: 'Desert' }, { 'Soe Moe Naing': 'Hotpot' }, { 'Soe Sadar Win': 'Bbq' }];
    const result = homeItemCounter(list);

    expect((result)).toBe(4);
  });

  test('result should get the number of item', () => {
    const list = ['studentA', 'studentB', 'studentC'];
    const result = homeItemCounter(list);

    expect((result)).toBe(3);
  });
});