import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { Card, CardTitle } from "reactstrap";
import "./SearchAPI.css";function SearchAPI() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        axios
            .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
            .then(response => {
                console.log(response.data.results);
                const myData = [];
                response.data.results.map(({name, species}) => {
                    myData.push({ name: `${name}`, species: `${species}` });
                });
                
                console.log("My Data: ", myData);

                let filter = "name";
                const results = myData.filter(character => 
                    character[filter].toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(results);
            })
            .catch(error => {
                console.log('Error: ', error)
            }); 
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="App">
            <h1>Search Form
            </h1>
            <form>
                <label htmlFor="name">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={handleChange}/>
            </form>
            <div>
                
                <ul className="searchResults">
                    {searchResults.map(character => (
                        <Card>
                        <CardTitle>{character['name']}</CardTitle>
                        <li key={character['name']}> ({character['species']})</li>
                        </Card>
                    ))}
                </ul>
                
            </div>
        </div>
    );
}

ReactDOM.render(<SearchAPI/>, document.getElementById('root'));

export default SearchAPI;
