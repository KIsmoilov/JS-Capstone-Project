/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../popUpDom.js';

describe('calculate the number of comments', () => {
  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it'];
    const result = commentCounter(comments);

    expect((result)).toBe(4);
  });

  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it', 'nice food'];
    const result = commentCounter(comments);

    expect((result)).toBe(5);
  });

  test('result should get the number of comments', () => {
    const comments = ['nice food', 'great meal', 'thanks', 'love it', 'nice food', 'very sweet'];
    const result = commentCounter(comments);

    expect((result)).toBe(6);
  });
});