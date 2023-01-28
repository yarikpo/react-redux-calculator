import React from "react";
import { withStyles } from "@material-ui/core";
import historyActions from '../actions/history';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import GridCalculator from "../components/GridCalculator";
import HistoryCalculator from "../components/HistoryCalculator";
import Alert from '@material-ui/lab/Alert';
import { 
    getEqualsClickData, 
    getInputField, 
    numberClick, 
    parseTemplate, 
    symbolClick, 
    updateComponent 
} from "../functions/calculator";

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: 'auto',
        justifyContent: 'center'
    },
    alert: {
        display: 'none',
    }
});



class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFieldText: '',
            leftNumber: '',
            symbol: null,
            rightNumber: '',
            solution: '',
            inputCount: 1,
        };

        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleSymbolClick = this.handleSymbolClick.bind(this);
        this.setInputField = this.setInputField.bind(this);
        this.clearInputField = this.clearInputField.bind(this);
        this.handleEqualsClick = this.handleEqualsClick.bind(this);
        this.handleGetSolutions = this.handleGetSolutions.bind(this);
        this.handleChangeInputCount = this.handleChangeInputCount.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        updateComponent(prevState, this.state, this.setInputField);
    }

    handleChangeInputCount(e) {
        if (parseInt(e.target.value) < 2 || e.target.value === '') {
            this.setState({
                inputCount: 1
            });
            return;
        }
        this.setState({
            inputCount: parseInt(e.target.value)
        });
    }

    async handleGetSolutions() {
        await this.props.receiveHistory({ count: this.state.inputCount });
        this.props.templates.forEach(template => {
            const {
                newTextField,
                result,
            } = parseTemplate(template);
    
            this.props.actionAddHistory({
                solution: newTextField + '=' + result
            });
        });
        await this.props.receiveHistory({ count: 0 });
        
    }

    handleNumberClick(number) {
        this.setState(numberClick(number, this.state));
    }

    handleSymbolClick(symb) {
        this.setState(symbolClick(symb, this.state, this.handleEqualsClick));
    }

    setInputField() {
        let newTextField = getInputField(this.state);       
        this.setState({
            inputFieldText: newTextField
        })
    }

    clearInputField() {
        this.setState({
            inputFieldText: '',
            leftNumber: '',
            symbol: null,
            rightNumber: '',
        });
    }

    handleEqualsClick() {
        if (this.state.leftNumber.length > 0
            && this.state.symbol != null
            && this.state.rightNumber.length > 0
            && this.state.inputFieldText.length > 0) {

            const {
                newTextField,
                result,
            } = getEqualsClickData(this.state);

            this.props.actionAddHistory({
                solution: newTextField + '=' + result
            });
            this.setState({
                inputFieldText: result,
                leftNumber: result === 'Error division by zero' ? '0' : result,
                symbol: null,
                rightNumber: '',
                solution: newTextField + '=' + result
            });
        }
    }

    render() {
        console.log({state: this.state});
        console.log({props: this.props});
        const {
            classes,
            isLoading,
            isError,
            list,
        } = this.props;
        const {
            inputFieldText,
            solution,
            inputCount
        } = this.state;

        return (
            <div className={classes.root}>
                <GridCalculator 
                    handleEqualsClick={this.handleEqualsClick}
                    clearInputField={this.clearInputField}
                    handleSymbolClick={this.handleSymbolClick}
                    handleNumberClick={this.handleNumberClick}
                    handleGetSolutions={this.handleGetSolutions}
                    handleChangeInputCount={this.handleChangeInputCount}
                    inputFieldText={inputFieldText}
                    inputCount={inputCount}
                />
                <Alert 
                    className={!isError ? classes.alert : ''}
                    severity="error"
                >
                    Error: No connection to server.
                </Alert>
                <HistoryCalculator 
                    list={list}
                    isLoading={isLoading}
                    solution={solution}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => {
    const {
        addHistory,
        receiveHistoryTemplates
    } = bindActionCreators(historyActions, dispatch);

    return ({
        actionAddHistory: addHistory,
        receiveHistory: receiveHistoryTemplates,
    });
};

export default connect(mapStateToProps, mapDispatchToProps)
    (withStyles(styles)(Calculator));