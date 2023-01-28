import { ADD_TO_HISTORY, ERROR_RECEIVE_HISTORY, REQUEST_HISTORY } from "./actionTypes";

const requestHistory = () => ({
    type: REQUEST_HISTORY
});
const addToHistory = (history) => ({
    type: ADD_TO_HISTORY,
    history
});
const errorReceiveHistory = () => ({
    type: ERROR_RECEIVE_HISTORY,
});

const addHistoryTimeout = (solution) => new Promise((resolve) => {
    setTimeout(
        () => resolve(addToHistory({solution})),
        2000
    );
});

const addHistory = ({ solution }) => (dispatch) => {
    dispatch(requestHistory());
    return addHistoryTimeout(solution)
            .then((history) => dispatch(addToHistory(history)))
            .catch(() => dispatch(errorReceiveHistory()));
};

export default {
    addHistory,
};