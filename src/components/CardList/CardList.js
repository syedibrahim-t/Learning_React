import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = (props) => {
  const { players } = props;
  return (
    <div className="cardList">
      {players.map((player) => <Card key={player.id} name={player.name} email={player.email} />)}
    </div>
  );
}

export default CardList;
