const React = require('react')
const Def = require('../default.jsx')

function edit_form ({ place, index }) {
    return (
        <Def>
          <main>
            <div className="container">
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${index}?_method=PUT`}>
            
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Place Name</label>
                <input className="form-control" id="name" name="name" defaultValue={index} required />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="pic">Place Picture</label>
                <input className="form-control" id="pic" name="pic" />
              </div>
            </div>
            
            <div className="row"> 
              <div className="form-group col-sm-4">
                <label htmlFor="city">City</label>
                <input className="form-control" id="city" defaultValue={place.city} name="city" />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="state">State</label>
                <input className="form-control" id="state" defaultValue={place.state} name="state" />
              </div>
            </div>
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines}required />
              </div>
              <input className="btn btn-primary" type="submit" value={"update" + place.name} />
            </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = edit_form