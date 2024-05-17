import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import database from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import videoSrc from '../assets/video.mp4';

function Home() {

  const navigate = useNavigate();

  const handleClick =() => {
    signOut(database).then(val => 
        navigate("/")
    )
  }

  return (
    <div className="home">
      {/* Background video */}
      <video autoPlay loop muted className="bgVideo">
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div>
        <button onClick={handleClick}>SignOut</button>
      </div>
      <h1>Welocome !</h1>
      <p>
      Step into the cosmos with our immersive project, where the boundless wonders of space come to life. Delve into the depths of the universe through NASA's vast archive of stunning visuals and insightful data. Explore the celestial realms, from distant galaxies to our own solar system, and uncover the secrets of the cosmos with each click. Join us on an unforgettable voyage of discovery.
      </p>
      <div className="buttonContainer">
        <Link to="/apod" className="homeButton">Explore APOD</Link>
        <Link to="/mars" className="homeButton">Explore Mars Rover Photos</Link>
      </div>
    </div>
  );
}

export default Home;