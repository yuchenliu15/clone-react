import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doAddEmail } from '../../actions';
import { Button, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import styles from './form.module.css';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


const EmailForm = ({ title, onAddEmail }) => {

    const [text, setText] = useState(''); //non-critical state

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSubmit = (event) => {
        console.log(text)
        onAddEmail(text);
        event.preventDefault();
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <form className={styles.form} onSubmit={onSubmit}>
                <label><h1 className={styles.text}>{title}</h1></label>
                <TextField className={styles.input} placeholder="Enter your email..." value={text} onChange={onChange} />
                <SubmitButton onSubmit={onSubmit} />
            </form>
            </div>

        </div>
    )
}

const SubmitButton = ({ onSubmit }) => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" disableElevation type="submit" onSubmit={onSubmit}>
                Sign Up!
            </Button>
        </ThemeProvider>
    )
}

const mapDispatchToProps = dispatch => ({
    onAddEmail: email => dispatch(doAddEmail(email))
});

export default connect(
    null,
    mapDispatchToProps
)(EmailForm);
