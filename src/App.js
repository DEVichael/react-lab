import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    function handleAddMovies(){
        const movie ={
            title: title,
            year: year
        }
        console.log(movie)
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>Add Movie</h2>
            <label>Tytuł</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Rok wydania</label>
            <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
            <button onClick={handleAddMovies}>Dodaj film</button>
        </div>
    );
}

export default App;
