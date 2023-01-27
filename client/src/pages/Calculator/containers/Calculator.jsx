import React from "react";
import { Button, Grid, TextField, withStyles } from "@material-ui/core";

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: 'auto',
        justifyContent: 'center'
    },
    calc: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    button: {
        textAlign: 'center',
        fontSize: '1.3em',
        padding: 0,
    },
    break: {
        flexBasis: '100%',
        height: 10,
    },
    breakNoflex: {
        height: 10,
    },
    inputField: {
        width: 300,
        margin: 'auto',
    },
});



class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFieldText: '',
            leftNumber: '',
            symbol: null,
            rightNumber: '',
        };

        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleSymbolClick = this.handleSymbolClick.bind(this);
        this.setInputField = this.setInputField.bind(this);
        this.clearInputField = this.clearInputField.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.leftNumber !== this.state.leftNumber
            || prevState.symbol !== this.state.symbol
            || prevState.rightNumber !== this.state.rightNumber) {
                this.setInputField();
            }
    }

    handleNumberClick(number) {
        if (this.state.leftNumber === '0' && number === '0') return;
        if (this.state.leftNumber === '0') {
            this.setState({ leftNumber: number });
            return;
        }
        if (this.state.rightNumber === '0' && number === '0') return;
        if (this.state.rightNumber === '0') {
            this.setState({ rightNumber: number });
            return;
        }
        if (this.state.symbol == null) this.setState({
            leftNumber: this.state.leftNumber + number,
        });
        if (this.state.symbol != null) this.setState({
            rightNumber: this.state.rightNumber + number,
        });
    }

    handleSymbolClick(symb) {
        if (this.state.leftNumber.length === 0) return;
        this.setState({ symbol: symb });
    }

    setInputField() {
        let newTextField = (this.state.leftNumber.length === 0 ? '' : this.state.leftNumber)
        + (this.state.symbol === null ? '' : this.state.symbol)
        + (this.state.rightNumber.length === 0 ? '' : this.state.rightNumber);
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

    render() {
        console.log(this.state);
        const {
            classes
        } = this.props;
        const {
            inputFieldText
        } = this.state;

        return (
            <div className={classes.root}>
                <Grid className={classes.calc} container spacing={0}>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('7')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            7
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('8')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            8
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('9')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            9
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleSymbolClick('/')}
                            className={classes.button} 
                            variant="contained" 
                            color="default"
                        >
                            /
                        </Button>
                    </Grid>

                    <div className={classes.break}></div>
                    
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('4')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            4
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('5')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            5
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('6')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            6
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleSymbolClick('X')}
                            className={classes.button} 
                            variant="contained" 
                            color="default"
                        >
                            X
                        </Button>
                    </Grid>

                    <div className={classes.break}></div>
                    
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('1')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            1
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('2')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            2
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('3')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            3
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleSymbolClick('-')}
                            className={classes.button} 
                            variant="contained" 
                            color="default"
                        >
                            –
                        </Button>
                    </Grid>

                    <div className={classes.break}></div>
                    
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.clearInputField()}
                            className={classes.button} 
                            variant="contained" 
                            color="secondary"
                        >
                            AC
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleNumberClick('0')}
                            className={classes.button} 
                            variant="outlined" 
                            color="default"
                        >
                            0
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            className={classes.button} 
                            variant="contained" 
                            color="primary"
                        >
                            =
                        </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <Button 
                            onClick={() => this.handleSymbolClick('+')}
                            className={classes.button} 
                            variant="contained" 
                            color="default"
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>

                <div className={classes.breakNoflex}></div>

                <TextField 
                    className={classes.inputField}
                    label='Current data'
                    InputProps={{
                        readOnly: true,
                    }}
                    value={inputFieldText}
                    variant='outlined'
                    color="primary"
                />

                {/* HISTORY */}

                
            </div>
        );
    }
}

export default withStyles(styles)(Calculator);