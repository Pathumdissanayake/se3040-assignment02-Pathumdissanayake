import React from 'react';
import Main from './Main';
import Footer from './Footer';
import SideBar from './SideBar';

function APODPage({ data, showModal, handleToggleModel }) {
  return data ? (
    <>
      <Main data={data} />
      {showModal && <SideBar data={data} handleToggleModel={handleToggleModel} />}
      <Footer data={data} handleToggleModel={handleToggleModel} />
    </>
  ) : (
    <div className="loadingState">
      <i className="fa-solid fa-gear"></i>
    </div>
  );
}

export default APODPage;
