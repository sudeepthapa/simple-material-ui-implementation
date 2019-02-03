import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add'


class Create extends Component{
    state={
        open:false
    }

    handleToggle = () =>{
        this.setState({
            open:!this.state.open
        })
    }
    render(){
        return(
            <Fragment>
                <Button variant='fab' onClick={this.handleToggle} color='primary' mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleToggle}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please Fill Out the Form Below
                        </DialogContentText>
                        <form>
    
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default Create