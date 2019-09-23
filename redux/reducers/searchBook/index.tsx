import {
  SEARCH_BOOK,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAILURE
} from "./types";
import { BookModel } from "../../../models/models";

interface SearchBookState {
  books: BookModel[];
  loading: boolean;
  error: string;
}

const initialState: SearchBookState = {
  books: [],
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return { ...state, loading: true };
    case SEARCH_BOOK_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case SEARCH_BOOK_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
