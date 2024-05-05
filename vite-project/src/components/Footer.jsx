import React from 'react'

function Footer(props) {

    const {showModal, handleToggleModel, data} = props

  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>APOD PROJECT</h1>
        </div>

        <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info" />
        </button>
    </footer>
  )
}

export default Footer