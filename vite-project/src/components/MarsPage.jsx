import React from "react";

export default function MarsPage({ marsData }) {
  // Extract the first 5 and last 5 photos
  const firstFivePhotos = marsData?.photos.slice(0, 4);

  return (
    <div className="marsPage">
      <div className="heading-div-mars">
        <h1 className="mars-heading">
          Discover Mars Through the Eyes of NASA's Rovers
        </h1>
        <p className="mars-para">
          Embark on a journey across the Martian surface with breathtaking
          images captured by NASA's Mars Rovers. Our Mars Rover Photos feature
          offers a window into the daily explorations and discoveries made by
          these incredible robotic explorers. From the dusty dunes to the rocky
          craters, every image tells a story of curiosity and wonder.
        </p>

        <h2 className="mars-heading2">Explore Martian Landscapes</h2>
        <p className="mars-para">
          Imagine standing on the red planet, gazing at its vast landscapes and
          mysterious terrain. Our collection includes photos taken by the
          Curiosity, Opportunity, and Spirit rovers, each providing a unique
          perspective on Mars.
        </p>
        <p className="mars-para">
          Dive into our gallery to view the latest photos from Mars. Whether
          you're an aspiring astronomer, a space enthusiast, or just curious
          about our neighboring planet, there's something captivating in every
          image.
        </p>
        <h3 className="mars-heading3">
        Start your Martian adventure today and explore the stunning
          visuals brought to you by NASA's Mars Rover Photos!
        </h3>
      </div>

      {marsData ? (
        <div className="photoContainer">
          {/* Display first 5 photos */}
          {firstFivePhotos.map((photo) => (
            <div className="photoItem" key={photo.id}>
              <img src={photo.img_src} alt={photo.camera.full_name} />
              <p>{photo.earth_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Mars rover photos...</p>
      )}
    </div>
  );
}
