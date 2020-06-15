import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doAddEmail, doAddEmailError } from '../../actions';
import { Button, TextField } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import styles from './form.module.css';
import { getError } from '../../selectors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const useStyles = makeStyles({
    input: {
        color: "white"
    },
});

const EmailForm = ({ title, onAddEmail, onAddEmailError, error }) => {

    const [text, setText] = useState(''); //non-critical state
    const classes = useStyles();

    const onChange = (event) => {
        setText(event.target.value);
    }

    const onSignUp = (event) => {
        event.preventDefault();
        const re = /^[A-Za-z.]+@[A-Za-z.]*\.[A-Za-z.]*/;

        if (re.test(text))
            onAddEmail(text);
        else
            onAddEmailError();
        setText('');

    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form className={styles.form} onSubmit={onSignUp}>
                    <label><h1 className={styles.text}>{title}</h1></label>
                    <TextField className={styles.input} placeholder="Enter your email..." value={text} onChange={onChange} inputProps={{ className: classes.input }} error={error} />
                    <SubmitButton />
                </form>
            </div>
        </div>

    )
}

const SubmitButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" disableElevation type="submit" >
                Sign Up!
            </Button>
        </ThemeProvider>
    )
}

const mapDispatchToProps = dispatch => ({
    onAddEmail: email => dispatch(doAddEmail(email)),
    onAddEmailError: () => dispatch(doAddEmailError())
});

const mapStateToProps = state => ({
    error: getError(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailForm);
