import pkg from "../package.json";

export const configApp = {
  name: "react-techs-logos",
  npm: "https://www.npmjs.com/package/react-techs-logos",
  github: "https://github.com/criar-art/react-techs-logos",
  appVersion: pkg.version,
  reactVersion: pkg.dependencies.react.replace('^', ''),
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install react-techs-logos',
    },
    {
      name: 'Usagen',
      language: 'tsx',
      content: `
import ReactTechsLogs from 'react-techs-logos'

<ReactTechsLogos name="facebook" />`,
    },
    {
      name: 'hiddenLabel',
      language: 'tsx',
      content: `<ReactTechsLogos name="facebook" hiddenLabel />`,
    },
    {
      name: 'List',
      language: 'tsx',
      content: `<ReactTechsLogos list={['vue', 'react', 'angular', 'ember']} />`,
    },
    {
      name: 'hiddenLogos',
      language: 'tsx',
      content: `<ReactTechsLogos hiddenLogos={['android', 'apple', 'vue', 'react', 'angular', 'ember']} />`,
    },
  ],
}
