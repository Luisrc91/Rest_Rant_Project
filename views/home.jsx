const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            <h1>HOME</h1>
              <div>
               <img src="https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="coffe mug" />
              <div>
                 Photo by <a href="AUTHOR_LINK">bobotaks </a> on <a href="https://unsplash.com/photos/kTATJGIbtOE">Unsplash</a>
              </div>
               </div>
              <a href="/places">
               <button className="btn-primary">Places Page</button>
              </a>
            </main>
      </Def>
    )
  }
  

module.exports = home

