import reactLogo from "./assets/techs/react.svg";
import "./App.css";
import pkg from "../package.json";
import DarkModeReact from "darkmode-react-component";
import ReactTechsLogos from "./components/ReactTechsLogos";
import { useState } from "react";
import techs from "./components/ReactTechsLogos/techs";
// import ReactTechsLogos from 'react-techs-logos'

function App() {
  const version: string = pkg.version;
  const [search, setSearch] = useState("");
  const filteredArray = techs
    .filter((item: any) => {
      const nameItem = item.name.toLowerCase();
      return nameItem.includes(search.trim().toLowerCase());
    })
    .map((item) => item.name);

  return (
    <div data-testid="app-container">
      <div>
        <a
          className="logo react"
          href="https://github.com/criar-art/react-techs-logos"
          target="_blank"
        >
          <img src={reactLogo} alt="React logo" />
          <h1>react-techs-logos@{version}</h1>
        </a>
        <DarkModeReact hiddenLabel />
      </div>
      <div className="content">
        <h2>Install</h2>
        <code>npm install --save react-techs-logos</code>
      </div>
      <div className="content">
        <h2>Usage</h2>
        <code>import ReactTechsLogs from 'react-techs-logos'</code>
        <br />
        <code>{`<ReactTechsLogos name="facebook" />`}</code>
        <h2 className="title">Hidden Label</h2>
        <code>{`<ReactTechsLogos name="facebook" hiddenLabel />`}</code>
        <h2 className="title">List of techs filtered</h2>
        <code>
          {`<ReactTechsLogos list={['vue', 'react', 'angular', 'ember']} />`}
        </code>
        <h2 className="title">List of techs hiddenLogos</h2>
        <code>
          {`<ReactTechsLogos hiddenLogos={['android', 'apple', 'vue', 'react', 'angular', 'ember']} />`}
        </code>
      </div>
      <div className="content">
        <h2 className="title">Full list of techs {search}</h2>
        <code>{`<ReactTechsLogos />`}</code>
        <br/>
        <input
          className="input-search"
          type="text"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          placeholder="Search logo name..."
        />
        <ReactTechsLogos list={filteredArray} />
      </div>
    </div>
  );
}

export default App;
