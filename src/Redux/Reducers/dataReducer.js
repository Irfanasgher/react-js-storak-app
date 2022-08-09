export const dataReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return (state = payload.data);

    default:
      return state;
  }
};
