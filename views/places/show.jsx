const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? `Rant!` `ðŸ˜¡` : `Rave! ðŸ˜»`}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
    <Def>
      <main>
        <h1>Add a New Place</h1>            
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
                <div className='controlBox'>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a> 
      
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                      <button type="submit" className="btn btn-danger">Delete</button>            
                    </form>
                </div>
              </div>                     
          </div>

          <div className="row comments">           
                    <h2>Comments</h2>
                      {comments}
                  <h2>Got Your Own Rant or Rave?</h2>
                  <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-4">
                        <label htmlFor="author">Author</label>
                        <input id="author" name="author" className="form-control" />
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" defaultValue="3"/>
                      </div>
                      <div className="form-group col-sm-2">
                        <br></br>
                        <input type="checkbox" id="rant" name="rant" className="form-check-input" defaultChecked/>
                        <label htmlFor="rant" className="form-check-label">Rant?</label>
                      </div>
                    </div>
                    <input type="submit" className="btn btn-primary" defaultValue="Add Comment" />
                  </form>
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



// function show (data) {
//   let comments = (
//     <h3 className="inactive">
//       No comments yet!
//     </h3>
//   )
//   if (data.place.comments.length) {
//     comments = data.place.comments.map(c => {
//       return (
//         <div className="border">
//           <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
//           <h4>{c.content}</h4>
//           <h3>
//             <stong>- {c.author}</stong>
//           </h3>
//           <h4>Rating: {c.stars}</h4>
//         </div>
//       )
//     })
//   }
//   return (
//       <Def>
//         <main>
//           <div className="row">
//             ...
//           </div>
//           <hr />
//           <h2>Comments</h2>
//           {comments}
//         </main>
//       </Def>
//   )
// }

// module.exports = show
