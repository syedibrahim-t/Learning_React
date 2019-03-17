import React, { Component } from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import { connect } from 'react-redux';
import ErrorBoundry from './ErrorBoundry';
import { setSearchField, requestPlayers } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchPlayersReducer.searchField,
        players: state.requestPlayersReducer.players,
        isPending: state.requestPlayersReducer.isPending,
        error: state.requestPlayersReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPlayers: () => dispatch(requestPlayers())
    }
}

class App extends Component {
    componentDidMount(){
        this.props.onRequestPlayers();
    }

    render(){
        const { searchField, onSearchChange, players, error, isPending } = this.props;
        const filteredPlayers = players.filter((player) => {
            return player.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ? (<div className='tc'>
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