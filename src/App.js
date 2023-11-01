import Nav from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services.jsx'
import More from './Components/Section1'
import Download from './Components/Section2'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services/>
      <More/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
