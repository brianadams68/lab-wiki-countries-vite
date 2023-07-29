import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetailsPage = () => {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        setCountryData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchCountryData();
  }, [countryId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!countryData) {
    return <div>No data available for the selected country.</div>;
  }

  return (
    <div>
        <h1>Country Details</h1>
      <h1>{countryData.name.common}</h1>
      <p>Alpha3Code: {countryData.cca3}</p>
    </div>
  );
};

export default CountryDetailsPage;

