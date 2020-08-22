import { createSelector } from "reselect"

const selectTodos = (state) => state.todos

export const selectCompleted = createSelector(
  [selectTodos],
  (completeStatus) => shop.collections
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQty, item) => accumulatedQty + item.quantity,
      0
    )
);
