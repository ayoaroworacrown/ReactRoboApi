import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value,
        })
    }

    render(){
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriend</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}

export default App
