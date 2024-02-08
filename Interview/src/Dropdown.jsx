import React, { useState } from 'react';

const CityDropdown = ({ citiesData }) => {
  const [selectedState, setSelectedState] = useState('');
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value)
  };

  return (
    <div>
      {/* <label htmlFor="stateDropdown">Select State: </label>
      <select id="stateDropdown" onChange={handleStateChange} value={selectedState}>
        <option >Select a State</option>
        {citiesData.map((stateData, index) => (
          <option key={index} value={stateData.state}>
            {stateData.state}
          </option>
        ))}
      </select> */}
      <h1>select a state</h1>
      <select onChange={handleStateChange}>
      <option value={""}>Select State</option>
      {citiesData.map((country)=>{
       return (
        <option>{country.state}</option>
       )
      })}
      </select>
     
      {/* {selectedState&&(citiesData.filter((country)=>{
       return country.state===selectedState})
       .map(state=>state.cities)
       .map((city)=>{
        return (<div>{city}</div>)
       })
       )} */}
      
      
      
      
      
      
      
      
      
      
      
      {selectedState && (
        <div>
          <h3>Cities in {selectedState}:</h3>
          <ul>
            {citiesData
              .filter((stateData) => stateData.state === selectedState)
              .citiesmap((city, index) => (
                <li key={index}>{city}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
