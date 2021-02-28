import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value,
        })
    }

    render(){
        const filteredrobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return(
                <h1>Loading....</h1>
            );
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Robofriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredrobots} />
                    </Scroll>
                    
                </div>
            );
        }
    }
}

export default App
