import React from "react";
import { 
    CircularProgress, 
    Divider, 
    List, 
    ListItem, 
    ListItemText, 
    withStyles 
} from "@material-ui/core";

const styles = () => ({
    history: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: 'fit-content',
        justifyContent: 'center',
        margin: 'auto',
    },
    listElement: {
        textAllign: 'center',
        border: '2px dotted silver',
    },
});

class HistoryCalculator extends React.Component {

    render() {
        const {
            list,
            isLoading,
            classes,
            solution,
        } = this.props;

        return (
            <div className={classes.history}>
                {isLoading && (
                    <CircularProgress />
                )}
                {!isLoading && (
                    <List component='nav'>
                        {list.slice().reverse().map(history => (
                            <div 
                                className={
                                    solution === history.history.solution
                                         ? classes.listElement : ''
                                }  
                                key={history.history.solution}
                            >
                                <Divider />
                                <ListItem 
                                    button 
                                >
                                    <ListItemText 
                                        primary={history.history.solution} 
                                    />
                                </ListItem>
                            </div>
                        ))}
                    </List>
                )}
            </div>
        )
    }
}

export default withStyles(styles)(HistoryCalculator);