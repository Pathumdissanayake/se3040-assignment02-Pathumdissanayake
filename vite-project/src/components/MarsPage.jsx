import React from "react";

export default function MarsPage({ marsData }) {
  // Filter out duplicate images taken on the same day with the same camera
  const filteredPhotos = marsData?.photos.reduce((uniquePhotos, photo) => {
    const existingPhoto = uniquePhotos.find(
      (p) =>
        p.earth_date === photo.earth_date &&
        p.camera.full_name === photo.camera.full_name
    );
    if (!existingPhoto) {
      uniquePhotos.push(photo);
    }
    return uniquePhotos;
  }, []);

  return (
    <div className="marsPage">
      <div className="heading-div-mars">
        <h1 className="mars-heading">
          Discover Mars Through the Eyes of NASA's Rovers
        </h1>
        <div className="div-body-mars">
          <p className="mars-para">
            Embark on a journey across the Martian surface with breathtaking
            images captured by NASA's Mars Rovers. Our Mars Rover Photos feature
            offers a window into the daily explorations and discoveries made by
            these incredible robotic explorers. From the dusty dunes to the
            rocky craters, every image tells a story of curiosity and wonder.
          </p>

          <h2 className="mars-heading2">Explore Martian Landscapes</h2>
          <p className="mars-para2">
            Imagine standing on the red planet, gazing at its vast landscapes
            and mysterious terrain. Our collection includes photos taken by the
            Curiosity, Opportunity, and Spirit rovers, each providing a unique
            perspective on Mars.
          </p>
          <p className="mars-para2">
            Dive into our gallery to view the latest photos from Mars. Whether
            you're an aspiring astronomer, a space enthusiast, or just curious
            about our neighboring planet, there's something captivating in every
            image.
          </p>
          <p className="mars-heading3">
            Start your Martian adventure today and explore the stunning visuals
            brought to you by NASA's Mars Rover Photos!
          </p>
        </div>
      </div>

<div className="photo-div-mars">
      {marsData ? (
        <div className="photoContainer">
          {/* Display filtered photos */}
          {filteredPhotos.map((photo) => (
            <div className="photoItem" key={photo.id}>
              <div className="imageContainer">
                <img src={photo.img_src} alt={photo.camera.full_name} />
                <div className="overlay">
                  <p className="date">{photo.earth_date}</p>
                  <p className="cameraName">{photo.camera.full_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Mars rover photos...</p>
      )}
      </div>
    </div>
  );
}
