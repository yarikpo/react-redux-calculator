import { 
    REQUEST_HISTORY, 
    ERROR_RECEIVE_HISTORY, 
    ADD_TO_HISTORY, 
    RECEIVE_HISTORY 
} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    list: [],
    templates: [],
    name: 'History:',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_HISTORY: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case ADD_TO_HISTORY: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                list: state.list.concat(action.history),
            };
        }
        case RECEIVE_HISTORY: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                templates: action.templates,
            }
        }
        case ERROR_RECEIVE_HISTORY: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }
        default: return state;
    }
};