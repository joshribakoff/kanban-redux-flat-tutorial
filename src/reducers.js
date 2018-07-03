import * as actions from "./actions"

export default (state = {}, action) => {
  switch(action.type) {
    case actions.LOAD:
      return {
        1: { id: 1, name: "Card A", columnIndex: 0 },
        2: { id: 2, name: "Card B", columnIndex: 1 },
        3: { id: 3, name: "Card C", columnIndex: 2 }
      } 
    case actions.MOVE: {
      const { columnIndex, cardId, direction } = action
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          columnIndex: columnIndex + direction
        }
      }
    }
    case actions.ADD: {
      const { card } = action
      return {
        ...state,
        [card.id]: card
      }
    }
    default:
      return state;
  }
}