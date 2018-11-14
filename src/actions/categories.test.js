import { RECEIVE_CATEGORIES, receiveCategories } from './categories';

describe('categories actions', () => {
  it('should return an action to receive all categories', () => {
    const categories = [
      { name: 'categorie 1' },
      { name: 'categorie 2' },
    ]

    const expected = {
      type: RECEIVE_CATEGORIES,
      categories,
    }

    expect(receiveCategories(categories)).toEqual(expected)
  })
})
