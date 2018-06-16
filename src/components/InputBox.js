import React from 'react';
import KeyCode from 'keycode-js';

/** InputBox as stateful component */
class InputBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value || ''
        }
    }

    handleChange(e){
        this.setState({value:e.target.value});
    }

    handleKeyUp(e) {
        console.log("On Key Up:"+e.keyCode+"::::"+KeyCode.KEY_RETURN);

        const {addNew} = this.props;
        const text = this.state.value.trim();
        /**Handle enter functionality to add new Item */
        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            // Add new Todo Here
            // Clear the TExt Box
            addNew(text);
            this.clear();
        }
    }

    handleSubmit(e) {
        const {addNew} = this.props;
        const text = this.state.value;
        console.log("Entered text::"+text);
        addNew(text);
        this.clear();
    }

    clear(){
        this.setState({value:''});
    }

    render(){
        return(
            <div>
            <input type="text" value={this.state.value}  onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} className="form-control add-todo" placeholder="Add New TODO" /> 
            <input type="textarea" className="form-control add-todo" placeholder="Description"/> <input className="form-control add-todo" type="date"/><input type="button" value="ADD" onClick={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default InputBox;