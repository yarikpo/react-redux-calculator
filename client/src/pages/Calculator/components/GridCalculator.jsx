import React from "react";
import { Button, Grid, withStyles, TextField } from "@material-ui/core";
import { connect } from "react-redux";

const styles = () => ({
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
        margin: '3px 0',
        // height: 10,
    },
    inputField: {
        width: 300,
        margin: 'auto',
    },
});


class GridCalculator extends React.Component {

    render() {

        const {
            classes,
            handleEqualsClick,
            clearInputField,
            handleSymbolClick,
            handleNumberClick,
            inputFieldText,
            handleGetSolutions,
            handleChangeInputCount,
            inputCount,
        } = this.props;

        return (
            <>
            <Grid className={classes.calc} container spacing={0}>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('7')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        7
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('8')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        8
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('9')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        9
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleSymbolClick('/')}
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
                        onClick={() => handleNumberClick('4')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        4
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('5')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        5
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('6')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        6
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleSymbolClick('X')}
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
                        onClick={() => handleNumberClick('1')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        1
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('2')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        2
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('3')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        3
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleSymbolClick('-')}
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
                        onClick={() => clearInputField()}
                        className={classes.button} 
                        variant="contained" 
                        color="secondary"
                    >
                        AC
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleNumberClick('0')}
                        className={classes.button} 
                        variant="outlined" 
                        color="default"
                    >
                        0
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleEqualsClick()}
                        className={classes.button} 
                        variant="contained" 
                        color="primary"
                    >
                        =
                    </Button>
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button 
                        onClick={() => handleSymbolClick('+')}
                        className={classes.button} 
                        variant="contained" 
                        color="default"
                    >
                        +
                    </Button>
                </Grid>

                <div className={classes.break}></div>
            </Grid>
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
            <div className={classes.break}></div>
            <TextField 
                className={classes.inputField}
                label='Request solutions'
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChangeInputCount}
                value={inputCount}
                variant='outlined'
                color="primary"
            />
            <div className={classes.break}></div>
            <Button 
                onClick={() => handleGetSolutions(3)}
                className={classes.inputField} 
                variant="contained" 
                color="primary"
            >
                Get Solutions
            </Button>
            </>
        );
    }
}

export default connect()(withStyles(styles)(GridCalculator));