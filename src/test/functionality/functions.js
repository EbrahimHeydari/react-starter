export function timesTwo(time) {
  return time * 2
}

export function order(items) {
  const total = items.reduce((price, item) => price + item.price, 0)
  return {
    orderItems: items,
    total,
  }
}

export function sum(first, second) {
  return first + second
}

export function subtract(first, second) {
  return first / second
}