import React, { Component } from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
    
    constructor(){
        super();
        this.state={
            players: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(players => this.setState({players: players}));
    }

    onSearchChanged = (event) => {
        this.setState({
            searchField: event.target.value
        });
    }

    render(){
        const { players, searchField } = this.state;
        const filteredPlayers = players.filter((player) => {
            return player.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !players.length ? (<div className='tc'>
                                <h2>Loading...</h2>
                            </div>) : (
            <div className='tc'>
                <h1 className='f1'>Player Stats</h1>
                <SearchBox onChanged={this.onSearchChanged}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList players={filteredPlayers} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

                
        
    }
}

export default App;