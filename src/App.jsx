import React, { useState } from "react";
import CalendarIcon from "./images/calendar.svg";
import RouteIcon from "./images/route.svg";
import "./App.css";

function App() {
  console.log(CalendarIcon);
  return (
    <div className="App">
      <h1 className="title">Поиск дешевых авиабилетов</h1>
      <form className="search-form">
        <input
          className="search-form-input origin"
          type="text"
          placeholder="Откуда"
          value="Москва"
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
          <input
            className="search-form-input date-input return"
            type="text"
            placeholder="Обратно"
          />
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
