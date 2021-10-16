import PropTypes from 'prop-types'
import { useState } from 'react'; //hook korzystający z dobrodziejst reacta, przechowujący stan obiektu
import './App.css';

const listBackground = { //wystylowanie 
  backgroundColor: '#FAEBD7',
  padding: 10,
  };

function Offer({name, description, country, cover}) { //komponent przyjmuje tylko jeden argument (= to ten sam zapis co z props)
  return (
    //dorzucenie cssów przez "offer"
    <div className="offer" style={listBackground}>  
      <div className="offer__column offer__column--w150 ">
        <img src={cover} alt="" />
      </div>
      <div className="offer__column">
        <h2 onClick={()=>console.log(name)} style={{cursor: 'pointer'}}>{name}</h2>
        <p>{description}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

Offer.propTypes = { //definicja obiektu do 'ala' walidacji
  name:PropTypes.string.isRequired,
}

Offer.defaultProps = { //ustawienie defaultowego propsa
  description: 'Brakuje opisu!'
}

function Home() {

  //const selectedOffer='Cozy flat';
  const [selectedOffer, setSelectedOffer] = useState('Cozy flat');
  //indeks 0 - variable -> cozy dlat
  //indeks 1 - callback

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>

      <Offer 
        name="Pensjonat pod świerkami" 
        description="Zakopiańska 1, Zakopane" 
        country="Polska" 
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/79172064.webp?k=9af8e5c75879a392d627595f8fad96d205e23ed264ec3744476b57805fa28731&o=" />
      <Offer 
        name="Hotel Kazimierz" 
        //description="Zakopiańska 2, Zakopane" 
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/192541890.webp?k=179376106102b1cde30c1b2fd7f220f1047d3015427af40d04e0a7bb1ecd16eb&o=" />
      <Offer 
        name="Górski hostel" 
        description="Zakopiańska 3, Zakopane" 
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/164843364.webp?k=c9b83ddbec06f9602cd3acd75506a03bc5bf250384193109fe665682f780b3ce&o=" />
    </div>
  );
}

export default Home;
