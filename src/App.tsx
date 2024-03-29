import reactLogo from './assets/techs/react.svg'
import './App.css'
import pkg from '../package.json'

import ReactTechsLogos from './components/ReactTechsLogos'
// import ReactTechsLogos from 'react-techs-logos'

function App() {
  const version: string = pkg.version;

  return (
    <div data-testid='app-container'>
      <div>
        <a className="logo react" href="https://github.com/criar-art/react-techs-logos" target="_blank">
          <img src={reactLogo} alt="React logo" />
          <h1>react-techs-logos@{ version }</h1>
        </a>
      </div>
      <h2>Install</h2>
      <code>
        npm install --save react-techs-logos
      </code>
      <h2>Usage</h2>
      <code>
        import ReactTechsLogs from 'react-techs-logos'
      </code>
      <div className='content'>
        <h2 className='title'>Single tech</h2>
        <code>
          {`<ReactTechsLogos name="react" />`}
        </code>
        <ReactTechsLogos name="react" />
      </div>
      <div className='content'>
        <h2 className='title'>Single tech hiddenLabel</h2>
        <code>
          {`<ReactTechsLogos name="react" hiddenLabel />`}
        </code>
        <ReactTechsLogos name="react" hiddenLabel/>
      </div>
      <div className='content'>
        <h2 className='title'>List of techs limited</h2>
        <code>
          {`<ReactTechsLogos list={['vue', 'react', 'angular', 'ember']} />`}
        </code>
        <ReactTechsLogos list={['vue', 'react', 'angular', 'ember']} />
      </div>
      <div className='content'>
        <h2 className='title'>List of techs</h2>
        <code>
          {`<ReactTechsLogos />`}
        </code>
        <ReactTechsLogos />
      </div>
      <div className='content'>
        <h2 className='title'>List of techs hiddenLogos items</h2>
        <code>
          {`<ReactTechsLogos hiddenLogos={['android', 'apple', 'vue', 'react', 'angular', 'ember']} />`}
        </code>
        <ReactTechsLogos hiddenLogos={['android', 'apple', 'vue', 'react', 'angular', 'ember']} />
      </div>
      <div className='content'>
        <h2 className='title'>List of techs with hiddenLabel</h2>
        <code>
          {`<ReactTechsLogos hiddenLabel />`}
        </code>
        <ReactTechsLogos hiddenLabel />
      </div>
    </div>
  )
}

export default App
