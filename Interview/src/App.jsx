import React from 'react'
import CityDropdown from './Dropdown';
const citiesDataByState = [
  {
    state: "New York",
    cities: ["New York City", "Buffalo", "Albany"]
  },
  {
    state: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
  },
  {
    state: "Illinois",
    cities: ["Chicago", "Springfield", "Peoria"]
  },
  {
    state: "Texas",
    cities: ["Houston", "Dallas", "Austin"]
  },
  {
    state: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa"]
  },
  {
    state: "Florida",
    cities: ["Miami", "Orlando", "Tampa"]
  },
  {
    state: "Colorado",
    cities: ["Denver", "Colorado Springs", "Boulder"]
  },
  {
    state: "Washington",
    cities: ["Seattle", "Tacoma", "Spokane"]
  },
  {
    state: "Georgia",
    cities: ["Atlanta", "Savannah", "Macon"]
  },
  {
    state: "Massachusetts",
    cities: ["Boston", "Cambridge", "Worcester"]
  }
];

const App = () => {
  return (
<CityDropdown citiesData={citiesDataByState} />  )
}

export default App
