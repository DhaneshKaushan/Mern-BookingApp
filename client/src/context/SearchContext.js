import { createContext } from "react";

const INITIAL_STATE = {
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE

    }
}