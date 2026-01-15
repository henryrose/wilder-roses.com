import Carousel from './Carousel'

function App() {
  return (
    <div className="container">
      <header>
        <h1>The Wilder-Roses</h1>
        <p className="tagline">Welcome to our little corner of the internet</p>
      </header>

      <main>
        <section className="intro">
          <p>
            Hello! This is the online home of the WilderRoses — three humans and
            two dogs based in Port Townsend, Washington. Sometimes we make things
            that live on the internet and they go here.
          </p>
        </section>

        <section className="photo-section">
          <Carousel />
        </section>
      </main>

      <footer>
        <p>Made with love &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
