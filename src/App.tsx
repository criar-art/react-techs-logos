import reactLogo from './assets/react.svg'
import './App.css'

// import ReactTechsLogos from './components/ReactTechsLogos'
import ReactTechsLogos from 'react-techs-logos'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>react-techs-logos@0.0.0</h1>
      <ReactTechsLogos />
    </>
  )
}

export default App
