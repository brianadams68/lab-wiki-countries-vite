import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
        console.log('Making fetch')
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        console.log(response.data);

    
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchCountriesData();
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <Link to={`/${country}`}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country}.png`}/>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

