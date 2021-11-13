export const fetchOffers = async () => {
    try {
        // fetch('/data/offers.json')
        // .then(response => response.json())
        // .then(data => console.log(data))
        const response = await fetch('/data/offers.json');
        const data = await response.json();

        //here modify your data as you want!

        return data;
    } catch (error) {
        // console.error(error);
        // https://sentry.io/welcome/
        throw Error('Coś nie tak!');
    }
}

export const fetchOffer = async (offerId) => {
    try {
        const response = await fetch('/data/offers.json');
        const data = await response.json();

        const filteredResults = data.filter((elem) => 
        {
            // elem.id - response from JSON
            //offerId - value of router param
            return parseInt(elem.id, 10) === parseInt(offerId, 10)
        });
        if (filteredResults.length){
            return filteredResults[0];
        } else{
            throw Error ("Nie znaleziono");
        }
    } catch(_error) {
        throw Error ("Coś nie tak");
    }
}