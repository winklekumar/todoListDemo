import React, {Component} from 'react';
import TodoList from './TodoList';
import {FILTER_ACTIVE} from './../services/filter';
import {getAll, addToList,updateStatus} from './../services/todo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ACTIVE,
            //Get all the options, if not using REST API 
            items: getAll(),
            testItems:[]
        }
    }
    componentWillMount(){
        console.log("Inside ComponentWillMount");
        fetch('http://localhost:8080/todos')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        fetch('http://localhost:8080/todos').then(results=>{
            console.log("Inside ComponentWillMount 1");
            return results.json()}).then(data=>{ 
                /*let servicedata=data.map((todotestItem)=>{
                    return(
                     <div key={todotestItem.id}>
                         {todotestItem.id}
                    </div>
                    )
                })*/
    this.setState({testItems:data});  
    this.setState({items:data});   
    console.log("state::", this.state.testItems)
    }).catch((error) => {
        console.log("Error in API Call-------",error);
   });
    console.log("End ComponentWillMount 1");
        
    }
    componentDidMount(){
        console.log("Inside ComponentDidMount");
    }

    render() {
        let title = 'Superloop - Things to do';

        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title}
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        changeStatus={this.changeStatus.bind(this)}
                        {...this.state}
                    />
                </div>
                {/*<div className="container1">
                {this.state.testItems};
        </div>*/}
            </div>
        );
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, {text, completed: false});

        this.setState({
            items: updatedList
        })
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items:updatedList});
    }
}

export default App;