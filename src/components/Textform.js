import React, {useState} from 'react'

function Textform(props) {

    const handleUpClick = () => {
        if(btnText === "Convert to Uppercase"){
            let newText = text.toUpperCase();
            setText(newText);
            setBtnText('Revert');
        }
        else{
            let newText = text.toLowerCase();
            setText(newText);
            setBtnText('Convert to Uppercase');
        }

    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleFocus = () => {
        setText('');
    }

    const [btnText, setBtnText] = useState('Convert to Uppercase')

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container'>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleChange} onFocus={handleFocus} id="myBox" rows="8"></textarea>
                    <button className="my-3 btn btn-primary" onClick={handleUpClick}>{btnText}</button>
                </div>
            </div>
            <div className="container my-4">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Textform
