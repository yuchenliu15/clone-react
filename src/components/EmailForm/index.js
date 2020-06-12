import React, {useState} from 'react';

const EmailForm = ({ title }) => {

    const [text, setText] = useState(''); //non-critical state

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <form>
                <label><h1>{title}</h1></label>
                <input placeholder="Enter your email..." value={text} onChange={onChange} />
                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}

export default EmailForm;
