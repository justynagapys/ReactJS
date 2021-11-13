import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOffer } from '../services';

function OfferPage () {
    const { offerId } = useParams();

    const [ offer, setOffer] = useState(null);

    useEffect(() => {
        async function fetchData () {
            try {
                const data = await fetchOffer(offerId);
                setOffer(data);
            } catch (error) {
                console.error(`UI Error ${error}`);
            }
        }
        fetchData();
    }, [offerId]);

    return (
        <div>
            <h1>#{offerId} {offer && offer.name}</h1>
        </div>
    );
}

export default OfferPage;