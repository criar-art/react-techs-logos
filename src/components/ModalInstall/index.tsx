import Code from '../Code';
import "./style.scss";

function ModalInstall(props: any) {
  return (
    <div className={`modal ${props.active && "active"}`}>
      <button className="modal-button" onClick={props.closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f00"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3Z"
          />
        </svg>
      </button>
      <div className="modal-content">
        <h2>Install</h2>
        <Code language="shell">npm install --save react-techs-logos</Code>
        <h2>Usage</h2>
        <Code language="jsx">{`import ReactTechsLogs from 'react-techs-logos'

<ReactTechsLogos name="facebook" />`}</Code>
        <h2 className="title">hiddenLabel</h2>
        <Code language="jsx">{`<ReactTechsLogos name="facebook" hiddenLabel />`}</Code>
        <h2 className="title">List</h2>
        <Code language="jsx">
          {`<ReactTechsLogos list={['vue', 'react', 'angular', 'ember']} />`}
        </Code>
        <h2 className="title">hiddenLogos</h2>
        <Code language="jsx">
          {`<ReactTechsLogos hiddenLogos={['android', 'apple', 'vue', 'react', 'angular', 'ember']} />`}
        </Code>
      </div>
    </div>
  );
}

export default ModalInstall;
