const React = require('react')
const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src='/images/fruit-cups.jpg' alt='Chia Fruit Drinks'></img>
                <div>
                Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/'>Unsplash</a>
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