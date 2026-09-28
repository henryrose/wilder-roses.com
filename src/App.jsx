import Carousel from './Carousel'

function App() {
  return (
    <div className="container">
      <header>
        <h1>The WilderRoses</h1>
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

        <section className="writing">
          <h2>Writing</h2>
          <a className="post-link" href="/sailing/pssc-2026/">
            <span className="post-title">Learnings from an Outing with the PTSA Laser Fleet</span>
            <span className="post-meta">Sailing &middot; September 2026</span>
          </a>
        </section>
      </main>

      <footer>
        <p>Made with love &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
