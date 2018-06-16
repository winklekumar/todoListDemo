import React from 'react';
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

    render(){
        return(
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control add-todo" placeholder="Add New" /> 
        );
    }
}

export default InputBox;