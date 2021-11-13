import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const offerStyles = { //wystylowanie
    main: {
        backgroundColor: 'white',
        padding: 10,
    },
    h2: {
        cursor: 'pointer'
    }
};

function OfferListItem({ id, name, street, city, country, cover }) { //komponent przyjmuje tylko jeden argument (= to ten sam zapis co z props)
    return (
        //dorzucenie cssów przez "offer"
        <div className="offer" style={offerStyles.main}>
            <div className="offer__column offer__column--w150 ">
                <img src={cover} alt="" width="150px" />
            </div>
            <div className="offer__column">
                <h2 style={offerStyles.h2}>
                    <Link to={`/offer/${id}`}>{name}</Link>
                    </h2>
                <p>{street}, {city}</p>
                <p>{country}</p>
            </div>
        </div>
    );
}

OfferListItem.propTypes = { //definicja obiektu do 'ala' walidacji
    name: PropTypes.string.isRequired,
}

OfferListItem.defaultProps = { //ustawienie defaultowego propsa
    street: 'Brakuje nazwy ulicy!'
}

export default OfferListItem;