import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    history("/"); // Navigate to the home page
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    history("/");
  } catch (error) {
    console.log(error);
  }
};
