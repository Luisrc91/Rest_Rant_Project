const React = require('react')
const Def = require('../default')

function index ({places}) {
  let placesFormatted = places.map((place) => {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img className="rounded mx-auto d-block indexImg" src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
            <div className="container" >
            <div className='row'>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
              </div>
            </div>
          </main>
      </Def>
  )
  }
  
  module.exports = index;