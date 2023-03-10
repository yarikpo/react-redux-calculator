export const updateComponent = (prevState, state, setInputField) => {
    if (prevState.leftNumber !== state.leftNumber
        || prevState.symbol !== state.symbol
        || prevState.rightNumber !== state.rightNumber) {
        setInputField();
    }
};

export const numberClick = (number, state) => {
    if (state.leftNumber === '0' 
        && state.symbol == null 
        && number === '0') {
        return {};
    }
    if (state.leftNumber === '0' && state.symbol == null) {
        return { leftNumber: number };
    }
    if (state.rightNumber === '0' && number === '0') return {};
    if (state.rightNumber === '0') {
        return { rightNumber: number };
    }
    if (state.symbol == null) {
        return {
            leftNumber: state.leftNumber + number,
        }
    }
    if (state.symbol != null) {
        return {
            rightNumber: state.rightNumber + number,
        };
    }
};

export const symbolClick = (symbol, state, handleEqualsClick) => {
    if (state.leftNumber.length === 0) return {};
    if (state.rightNumber.length > 0) handleEqualsClick();
    return { symbol };
};

/**
 * Returns string which will be handled in upper input field
 *  by left, right numbers and symbol between them
 */
export const getInputField = (state) => {
    let newTextField = (state.leftNumber.length === 0 ? '' : state.leftNumber)
        + (state.symbol === null ? '' : state.symbol)
        + (state.rightNumber.length === 0 ? '' : state.rightNumber);
    return newTextField;
};

/**
 * Solves problem
 * Returns:
 * full result like: '12+4=16'
 * only result like: '16'
 */
export const getEqualsClickData = (state) => {
    let newTextField = (state.leftNumber.length === 0 ? '' : state.leftNumber)
    + (state.symbol === null ? '' : state.symbol)
    + (state.rightNumber.length === 0 ? '' : state.rightNumber);
    let result = '';
    if (state.symbol === '+') {
        result = (
            parseInt(state.leftNumber) 
            + parseInt(state.rightNumber)
        ).toString();
    }
    if (state.symbol === '-') {
        result = (
            parseInt(state.leftNumber) 
            - parseInt(state.rightNumber)
        ).toString();
    }
    if (state.symbol === 'X') {
        result = (
            parseInt(state.leftNumber) 
            * parseInt(state.rightNumber)
        ).toString();
    }
    if (state.symbol === '/') {
        if (state.rightNumber === '0') result = 'Error division by zero';
        else result = Math.floor(
            parseInt(state.leftNumber) 
            / parseInt(state.rightNumber)
        ).toString();
    }

    return {
        newTextField,
        result,
    };
};

/**
 * Transforms not solved string to solved string
 * For example:
 * in: '12+4'
 * out: '12+4=16'
 */
export const parseTemplate = (template) => {
    let leftNumber = template[0];
    template = template.substring(1);
    while (template.charCodeAt(0) >= 48 && template.charCodeAt(0) <= 57) {
        leftNumber+= template.charAt(0);
        template = template.substring(1);
    }
    let symbol = template.charAt(0);
    template = template.substring(1);
    let rightNumber = template;
    
    return getEqualsClickData({
        leftNumber,
        symbol,
        rightNumber,
    });
};