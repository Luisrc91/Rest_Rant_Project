const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={places.name}>
          <h2>{places.name}</h2>
          <img src={places.pic} alt={places.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
  module.exports = index