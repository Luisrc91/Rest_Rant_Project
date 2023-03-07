const React = require('react')
const Def = require('../default')

function show (data) {
  // let message = ''                 
  // if (data.message) {
  //   message = (
  //     <h4 className="alert-danger">
  //       {data.message}
  //     </h4>
  //   )
  // }
    return (
    <Def>
      <main>
      <h1>Add a New Place</h1>
            {/* {message} */}
        <div className="row">
            <div className="col-sm-6">
              <img className='showImg' src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              
              <h2>
                Description
              </h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a> 
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
              </form> 
            </div>
        </div>
      </main>
    </Def>
    
        
    )
}

module.exports = show

{/* <main>
<h1>{ data.place.name }</h1>
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a> 



</main> */}