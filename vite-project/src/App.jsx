import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import APODPage from './components/APODPage';
import MarsPage from './components/MarsPage';
import Login from './Login';

function App() {
  const [data, setData] = useState(null);
  const [marsData, setMarsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModel] = useState(false);

  function handleToggleModel() {
    setShowModel(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('Fetched from API today');
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  useEffect(() => {
    async function fetchMarsRoverPhotos() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}`;
  
      try {
        const res = await fetch(url);
  
        if (!res.ok) {
          throw new Error('Failed to fetch Mars rover photos');
        }
  
        const marsData = await res.json();
        setMarsData(marsData);
      } catch (error) {
        console.error('Error fetching Mars rover photos:', error);
      }
    }
  
    fetchMarsRoverPhotos();
  }, []);
  

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apod" element={<APODPage data={data} showModal={showModal} handleToggleModel={handleToggleModel} />} />
          <Route path="/mars" element={<MarsPage marsData={marsData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
