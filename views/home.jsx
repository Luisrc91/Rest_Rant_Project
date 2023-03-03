const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            <h1>HOME</h1>
              <div>
               <img className='homeImg' src='https://images.unsplash.com/photo-1564759224907-65b945ff0e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'  alt="coffe mug" />
              <div>
                 Photo by <a href="https://unsplash.com/@spencerdavis">bobotaks </a> on <a href="https://unsplash.com/photos/W_GSHCi0cR8">Unsplash</a>
              </div>
              </div>
              <a href="/places">
                <button className="btn btn-primary">Places Page</button>
              </a>
            </main>
      </Def>
    )
  }
  

module.exports = home

