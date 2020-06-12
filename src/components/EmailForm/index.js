import React from 'react';

const EmailForm = ({ title }) => {
    return (
        <div>
            <form>
                <label><h1>{title}</h1></label>
                <input placeholder="Enter your email..." />
                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}

export default EmailForm;
