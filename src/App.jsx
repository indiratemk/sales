import React, { useState } from "react";
import CalendarIcon from "./images/calendar.svg";
import RouteIcon from "./images/route.svg";
import "./App.css";

function App() {
  const [origin, setOrigin] = useState("Москва");

  async function onChange(event) {
    const { value } = event.target;
    setOrigin(value);
    const sort = "name";
    const activeOnly = "true";
    const locale = "ru-RU";
    const limit = 1;
    const term = value;
    const apikey = import.meta.env.VITE_API_KEY;

    const url = `https://tequila-api.kiwi.com/locations/query?sort=${sort}&term=${term}`;

    const response = await fetch(url, {
      headers: { apikey },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1 className="title">Поиск дешевых авиабилетов</h1>
      <form className="search-form">
        <input
          className="search-form-input origin"
          type="text"
          placeholder="Откуда"
          value={origin}
          onChange={onChange}
        />
        <input
          className="search-form-input destination"
          type="text"
          placeholder="Куда"
        />
        <div className="date">
          <div className="search-form-date">
            <input
              className="search-form-input date-input departure"
              type="text"
              placeholder="Туда"
            />
            <img className="calendar" src={CalendarIcon} alt="" />
          </div>
          <div className="search-form-date">
            <input
              className="search-form-input date-input return"
              type="text"
              placeholder="Обратно"
            />
          </div>
        </div>
        <div className="passengers" tabIndex="0">
          <p className="passenger-amount">1 пассажир</p>
          <p className="cabin-class">эконом</p>
        </div>
        <button className="find-tickets">Найти билеты</button>
        <button className="compose-route">
          <img className="route" src={RouteIcon} alt="" />
          Составить сложный маршрут
        </button>
      </form>
    </div>
  );
}

export default App;
