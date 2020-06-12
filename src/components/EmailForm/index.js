import React, {useState} from 'react';
import {connect} from 'react-redux';
import {doAddEmail} from '../../actions';

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
        <div>
            <form onSubmit={onSubmit}>
                <label><h1>{title}</h1></label>
                <input placeholder="Enter your email..." value={text} onChange={onChange} />
                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onAddEmail: email => dispatch(doAddEmail(email))
});

export default connect(
    null,
    mapDispatchToProps
)(EmailForm);
