import axios from "axios";

export const getDataAction = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.kanye.rest/");
    dispatch({
      type: "GET_DATA",
      payload: {
        data: res.data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
