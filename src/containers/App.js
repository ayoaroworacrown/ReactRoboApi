import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import {robots} from './robots'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { requestRobots, setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps =  (dispatch) =>{
    return{
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component{
    componentDidMount(){
        //console.log(this.props.store.getState())
       this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending} = this.props;
        const filteredrobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
       
            return isPending ?
                <h1>Loading....</h1> :
                (
                <div className='tc'>
                    <h1 className='f1'>Robofriend</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredrobots} />
                    </Scroll>
                    
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
