import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
        console.log('Makiing fetch')
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
          <li key={country._id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

