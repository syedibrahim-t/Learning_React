import React, { Component } from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import { connect } from 'react-redux';
import ErrorBoundry from './ErrorBoundry';
import { setSearchField } from '../actions';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super();
        this.state={
            players: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(players => this.setState({players: players}));
    }

    render(){
        const { players } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredPlayers = players.filter((player) => {
            return player.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !players.length ? (<div className='tc'>
                                <h2>Loading...</h2>
                            </div>) : (
            <div className='tc'>
                <h1 className='f1'>Player Stats</h1>
                <SearchBox onChanged={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList players={filteredPlayers} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

                
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);