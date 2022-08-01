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
  
  // WORDS LIST REDUCER
  export const wordsListReducer = (state = { allWords: [] }, action) => {
    switch (action.type) {
      case WORDS_LIST_REQUEST:
        return { loading: true, allWords: [] };
      case WORDS_LIST_SUCCESS:
        return { loading: false, allWords: action.payload };
      case WORDS_LIST_FAIL:
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };


    // WORDS DETAILS REDUCER
    export const wordsDetailsReducer = (state = { word: null }, action) => {
        switch (action.type) {
          case WORDS_DETAILS_REQUEST:
            return { loading: true, ...state };
          case WORDS_DETAILS_SUCCESS:
            return { loading: false, word: action.payload };
          case WORDS_DETAILS_FAIL:
            return { loading: false, error: action.payload };
          default:
            return state;
        }
      };

  // ADD WORD REDUCER
  export const wordAddReducer = (state = { word: null }, action) => {
    switch (action.type) {
      case WORD_ADD_REQUEST:
        return { loading: true, success: false, ...state };
      case WORD_ADD_SUCCESS:
        return {
          loading: false,
          success: true,
          word: action.payload,
        };
      case WORD_ADD_FAIL:
        return {
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  