import { 
    ADD_TO_HISTORY, 
    ERROR_RECEIVE_HISTORY, 
    RECEIVE_HISTORY, 
    REQUEST_HISTORY 
} from "./actionTypes";

const requestHistory = () => ({
    type: REQUEST_HISTORY
});
const addToHistory = (history) => ({
    type: ADD_TO_HISTORY,
    history
});
const receiveHistory = (templates) => ({
    type: RECEIVE_HISTORY,
    templates
})
const errorReceiveHistory = () => ({
    type: ERROR_RECEIVE_HISTORY,
});

const addHistoryTimeout = (solution) => new Promise((resolve) => {
    setTimeout(
        () => resolve(addToHistory({solution})),
        2000
    );
});

const getTemplates = (count) => {
    const URL = `http://localhost:8080/math/examples?count=${count}`;
    return fetch(URL);
}

const receiveHistoryTemplates = ({ count }) => (dispatch) => {
    dispatch(requestHistory());
    return getTemplates(count)
            .then((response) => response.json())
            .then((data) => dispatch(receiveHistory(data.solutions)))
            .catch(() => dispatch(errorReceiveHistory()));
};

const addHistory = ({ solution }) => (dispatch) => {
    dispatch(requestHistory());
    return addHistoryTimeout(solution)
            .then((history) => dispatch(addToHistory(history)))
            .catch(() => dispatch(errorReceiveHistory()));
};

export default {
    addHistory,
    receiveHistoryTemplates,
};