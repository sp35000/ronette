function TextAreaForm({question}) {
    return(
        <label>
        <form>
            <input type="textarea" placeholder="Text..." value={question}></input>            
        </form>
        Question: 
        </label>
    );
}

export default TextAreaForm