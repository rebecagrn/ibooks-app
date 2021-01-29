export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK_TO_FAVORITE':
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    default:
      return state;
  }
};
