import { useState } from 'react';

const labelStyle = {
    width: 120,
    display: 'inline-block',
}

function ContactForm() {

    const [name, setName] = useState();
    const [message, setMessage] = useState();

    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value);
        // try to set name or message in state
    }

    const handleSubmit = (event) => {
        // const { name } = event.target;
        // const request = {
        //   name,
        //   message
        // }
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Name</label>
                    <input name="name" type="text" onChange={handleChange} />
                </div>
                <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;