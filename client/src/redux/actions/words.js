import axios from "axios"; // AXIOS

// GETTING CONSTANTS
import {
    WORDS_LIST_REQUEST,
    WORDS_LIST_SUCCESS,
    WORDS_LIST_FAIL,
    WORDS_DETAILS_REQUEST,
    WORDS_DETAILS_SUCCESS,
    WORDS_DETAILS_FAIL,
    WORD_ADD_REQUEST,
    WORD_ADD_FAIL,
    WORD_ADD_SUCCESS,

  } from "../contants/words";

// LIST ALL WORDS ACTION
export const listWords = () => async (dispatch) => {
  try {
    dispatch({ type: WORDS_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/roado/api/v1/words", {}, config);
    dispatch({ type: WORDS_LIST_SUCCESS, payload: data });
    console.log('in actions',data);
  } catch (error) {
    dispatch({ type: WORDS_LIST_FAIL, payload: error });
  }
};

// DETAILS WORD ACTION
export const detailsOfWord = (word) => async (dispatch) => {
    try {
      dispatch({ type: WORDS_DETAILS_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(`/roado/api/v1/words/${word}`,{}, config);
      dispatch({ type: WORDS_DETAILS_SUCCESS, payload: data });
      console.log('in actions',data);

    } catch (error) {
      dispatch({ type: WORDS_DETAILS_FAIL, payload: error });
    }
  };

// ADD WORD ACTION
export const addWordToDictionary = (word) => async (dispatch) => {
    try {
      console.log('word....',word);
      dispatch({ type: WORD_ADD_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/roado/api/v1/words/add", {word}, config);
      dispatch({ type: WORD_ADD_SUCCESS, payload: data });
      console.log('in actions',data);
      dispatch(listWords());
    } catch (error) {
      console.log('error adding....');
      dispatch({ type: WORD_ADD_FAIL, payload: error });
    }
  };

  // LIST ALL WORDS ACTION
export const seachWords = (word) => async (dispatch) => {
  try {
    dispatch({ type: WORDS_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/roado/api/v1/words/search", {word}, config);
    dispatch({ type: WORDS_LIST_SUCCESS, payload: data });
    console.log('in actions',data);
  } catch (error) {
    dispatch({ type: WORDS_LIST_FAIL, payload: error });
  }
};