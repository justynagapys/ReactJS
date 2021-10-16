import './App.css';

function Offer({name, description, country}) { //komponent przyjmuje tylko jeden argument (= to ten sam zapis co z props)
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{country}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Offer name="Pensjonat pod świerkami" description="Zakopiańska 1, Zakopane" country="Polska" />
      <Offer name="Hotel Kazimierz" description="Zakopiańska 2, Zakopane" country="Polska" />
      <Offer name="Górski hostel" description="Zakopiańska 3, Zakopane" country="Polska" />
    </div>
  );
}

export default App;
