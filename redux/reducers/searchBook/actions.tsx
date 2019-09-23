import {
    SEARCH_BOOK
  } from "./types";

export const searchBookLoader = (error) => {
    //Return a action type and a payload with a error
    return {
        type: SEARCH_BOOK,
    };
}