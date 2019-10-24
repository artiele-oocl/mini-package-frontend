const initialState = {
    bookings: []
  };

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
        return {
            ...state,
            bookings: [...state.bookings, payload]
        };
        default:
        return state
    }
}
  