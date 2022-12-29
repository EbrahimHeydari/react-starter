import { timesTwo, order, sum, subtract } from './functions'

const menuItems = [
  {
    id: '1',
    name: 'Tatted Up Turkey Burger',
    price: 19.5,
  },
  {
    id: '2',
    name: 'Lobster Lollipops',
    price: 16.5,
  },
  {
    id: '3',
    name: 'Motley Que Pulled Pork Sandwich',
    price: 21.5,
  },
  {
    id: '4',
    name: 'Trash Can Nachos',
    price: 19.5,
  },
]

const result = {
  orderItems: menuItems,
  total: 77,
}

test('Build an order object', () => {
  // test the function with array and object output
  expect(order(menuItems)).toEqual(result)
})

// wrap several related tests
describe('Math functions', () => {
  test('Multiplies by two', () => {
    // test the function with number, string, boolean output
    expect(timesTwo(4)).toBe(8)
  })
  test('Adds two numbers', () => {
    expect(sum(4, 2)).toBe(6)
  })
  test('Subtracts two numbers', () => {
    expect(subtract(4, 2)).toBe(2)
  })
})
