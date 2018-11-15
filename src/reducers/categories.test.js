import reducer from './categories'
import { receiveCategories } from '../actions/categories'

describe('categories reducer', () => {
  it('should initialize state with an empty array', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should initialize state with received categories list', () => {
    const categories = [{ name: 'react' }, { name: 'redux' }]
    expect(reducer([], receiveCategories(categories))).toEqual(categories)
  })
})