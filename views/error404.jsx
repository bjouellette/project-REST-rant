const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src='/images/cat.jpg' alt='Image of Cat' className='photo'></img>
              </div>
              <div>
                Photo by <a href='https://unsplash.com/@michaelsum1228'>Michael Sum</a> on <a href='https://unsplash.com/'>Unsplash</a>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404
