import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'; //hook korzystający z dobrodziejst reacta, przechowujący stan obiektu
//import { fetchPosts } from './services/posts';
//import { fetchOffers } from './services/offers';

import { fetchOffers, fetchPosts } from '../services';

const listBackground = { //wystylowanie
  backgroundColor: 'white',
  padding: 10,
  };

function Offer({ name, street, city, country, cover, handleClick}) { //komponent przyjmuje tylko jeden argument (= to ten sam zapis co z props)
  return (
    //dorzucenie cssów przez "offer"
    <div className="offer" style={listBackground}>
      <div className="offer__column offer__column--w150 ">
        <img src={cover} alt="" width="150px"/>
      </div>
      <div className="offer__column">
        <h2 onClick={()=>handleClick(name)} style={{cursor: 'pointer'}}>{name}</h2>
        <p>{street}, {city}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

Offer.propTypes = { //definicja obiektu do 'ala' walidacji
  name:PropTypes.string.isRequired,
}

Offer.defaultProps = { //ustawienie defaultowego propsa
  street: 'Brakuje nazwy ulicy!'
}

function Home() {

  const [offers, setOffers] = useState([]);
  //const selectedOffer='Cozy flat';
  const [selectedOffer, setSelectedOffer] = useState('Cozy flat');
  const [data, setData] = useState([]);
  //indeks 0 - variable -> cozy flat
  //indeks 1 - callback

   useEffect(()=>{
    setSelectedOffer('???');
   }, []);

  useEffect(() => {
    setData(fetchPosts());
  }, []);

  useEffect(() => {
    async function fetchData(){
      try {
        const data = await fetchOffers();
        setOffers(data);
      } catch (error) {
        // UI - error notification
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Wybrano: {selectedOffer}</h1>
      </div>

      {offers.map((elem)=>
        <Offer 
          key={`offer-${elem.id}`} //unikalne klucze w obrębie iteracji
          name={elem.name}
          street={elem.street}
          city={elem.city}
          country={elem.country}
          cover={elem.cover}
          handleClick={setSelectedOffer}
        />
      )}

      {/* <Offer
        name="Pensjonat pod świerkami"
        description="Zakopiańska 1, Zakopane"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/79172064.webp?k=9af8e5c75879a392d627595f8fad96d205e23ed264ec3744476b57805fa28731&o="
        handleClick={setSelectedOffer}
        />
      <Offer
        name="Hotel Kazimierz"
        //description="Zakopiańska 2, Zakopane"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/192541890.webp?k=179376106102b1cde30c1b2fd7f220f1047d3015427af40d04e0a7bb1ecd16eb&o="
        handleClick={setSelectedOffer}
        />
      <Offer
        name="Górski hostel"
        description="Zakopiańska 3, Zakopane"
        country="Polska"
        cover="https://cf.bstatic.com/xdata/images/hotel/square90/164843364.webp?k=c9b83ddbec06f9602cd3acd75506a03bc5bf250384193109fe665682f780b3ce&o="
        handleClick={setSelectedOffer}
        /> */}
    </div>
  );
}

export default Home;
