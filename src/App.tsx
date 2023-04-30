import reactLogo from './assets/react.svg'
import './App.css'
import pkg from '../package.json'

import ReactTechsLogos from './components/ReactTechsLogos'
// import ReactTechsLogos from 'react-techs-logos'

function App() {
  const version: any = pkg.version;
  return (
    <>
      <div>
        <a href="https://github.com/criar-art/react-techs-logos" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>react-techs-logos@{ version }</h1>
        </a>
      </div>
      <h2>Install</h2>
      <code>
        npm install --save react-techs-logos
      </code>
      <h2>Usage</h2>
      <code>
          import ReactTechsLogs from 'react-techs-logos';
          <br />
          {`<ReactTechsLogos />`}
      </code>
      <h1 className='titleList'>List of techs</h1>
      <ReactTechsLogos />
    </>
  )
}

export default App
