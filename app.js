const apiUrl = `https://v2.jokeapi.dev/joke/Any?type=twopart`;
// grab jokes data by API call

// Header Component
function Header() {
  return <header>Random Joke Genertor</header>;
}
// Code

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

// Note Component (requires props to get jokes)
function Note() {
  const [joke, setJoke] = React.useState([]);

  React.useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setJoke(data));
  }, []);

  return (
    <div className="card">
      <h3>{joke.setup}</h3>
      <p>{joke.delivery}</p>
    </div>
  );
}

function App() {
  return (

    <div>
       <Header/>
    <div className="gallery">

    <Note/>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
    <Note/>
   
    </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
