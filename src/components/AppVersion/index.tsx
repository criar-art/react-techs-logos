import pkg from '../../../package.json';
import './style.scss';

function AppVersion() {
  const appVersion = pkg.version;
  const reactVersion = pkg.dependencies.react.replace('^', '');

  return (
    <>
      <p className='react-version' data-testid='react-version'>React <b>{reactVersion}</b></p>
      <p className='app-version' data-testid='app-version'>react-techs-logos <b>{appVersion}</b></p>
    </>
  );
}

export default AppVersion;
