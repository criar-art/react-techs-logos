import './style.scss'

import { ReactComponent as IconAndroid } from '../../assets/techs/android.svg'
import { ReactComponent as IconApple } from '../../assets/techs/apple.svg'
import { ReactComponent as IconHTML } from '../../assets/techs/html.svg'
import { ReactComponent as IconCSS } from '../../assets/techs/css.svg'
import { ReactComponent as IconJavascript } from '../../assets/techs/javascript.svg'
import { ReactComponent as IconTypescript } from '../../assets/techs/typescript.svg'
import { ReactComponent as IconVue } from '../../assets/techs/vue.svg'
import { ReactComponent as IconReact } from '../../assets/techs/react.svg'
import { ReactComponent as IconAngular } from '../../assets/techs/angular.svg'
import { ReactComponent as IconSvelte } from '../../assets/techs/svelte.svg'
import { ReactComponent as IconEmber } from '../../assets/techs/ember.svg'
import { ReactComponent as IconStylus } from '../../assets/techs/stylus.svg'
import { ReactComponent as IconLess } from '../../assets/techs/less.svg'
import { ReactComponent as IconSass } from '../../assets/techs/sass.svg'
import { ReactComponent as IconWebpack } from '../../assets/techs/webpack.svg'
import { ReactComponent as IconVite } from '../../assets/techs/vite.svg'
import { ReactComponent as IconGulp } from '../../assets/techs/gulp.svg'
import { ReactComponent as IconJest } from '../../assets/techs/jest.svg'
import { ReactComponent as IconKarma } from '../../assets/techs/karma.svg'
import { ReactComponent as IconVitest } from '../../assets/techs/vitest.svg'
import { ReactComponent as IconCypress } from '../../assets/techs/cypress.svg'
import { ReactComponent as IconGit } from '../../assets/techs/git.svg'
import { ReactComponent as IconPython } from '../../assets/techs/python.svg'
import { ReactComponent as IconLinux } from '../../assets/techs/linux.svg'
import { ReactComponent as IconGithub } from '../../assets/techs/github.svg'
import { ReactComponent as IconMozilla } from '../../assets/techs/mozilla.svg'
import { ReactComponent as IconSafari } from '../../assets/techs/safari.svg'
import { ReactComponent as IconChrome } from '../../assets/techs/chrome.svg'
import { ReactComponent as IconXcode } from '../../assets/techs/xcode.svg'
import { ReactComponent as IconWordpress } from '../../assets/techs/wordpress.svg'
import { ReactComponent as IconWhatsapp } from '../../assets/techs/whatsapp.svg'
import { ReactComponent as IconVisualCode } from '../../assets/techs/visualcode.svg'
import { ReactComponent as IconTelegram } from '../../assets/techs/telegram.svg'
import { ReactComponent as IconSwift } from '../../assets/techs/swift.svg'
import { ReactComponent as IconRuby } from '../../assets/techs/ruby.svg'
import { ReactComponent as IconNode } from '../../assets/techs/node.svg'
import { ReactComponent as IconMicrosoft } from '../../assets/techs/microsoft.svg'
import { ReactComponent as IconPlaystore } from '../../assets/techs/playstore.svg'
import { ReactComponent as IconTumblr } from '../../assets/techs/tumblr.svg'
import { ReactComponent as IconCodepen } from '../../assets/techs/codepen.svg'
import { ReactComponent as IconYotube } from '../../assets/techs/youtube.svg'
import { ReactComponent as IconJava } from '../../assets/techs/java.svg'
import { ReactComponent as IconPwa } from '../../assets/techs/pwa.svg'
import { ReactComponent as IconTailwind } from '../../assets/techs/tailwind.svg'
import { ReactComponent as IconNpm } from '../../assets/techs/npm.svg'
import { ReactComponent as IconEdge } from '../../assets/techs/edge.svg'
import { ReactComponent as IconCpp } from '../../assets/techs/cpp.svg'
import { ReactComponent as IconCsharp } from '../../assets/techs/csharp.svg'
import { ReactComponent as IconFirebase } from '../../assets/techs/firebase.svg'
import { ReactComponent as IconPhp } from '../../assets/techs/php.svg'
import { ReactComponent as IconMysql } from '../../assets/techs/mysql.svg'

const techs = [
  { name: 'Android',     icon: <IconAndroid />,    url: 'https://www.android.com' },
  { name: 'Apple',       icon: <IconApple />,      url: 'https://www.apple.com' },
  { name: 'Linux',       icon: <IconLinux />,      url: 'https://ubuntu.com' },
  { name: 'Microsoft',   icon: <IconMicrosoft />,  url: 'https://www.microsoft.com' },
  { name: 'PlayStore',   icon: <IconPlaystore />,  url: 'https://play.google.com' },
  { name: 'PWA',         icon: <IconPwa />,        url: 'https://web.dev/progressive-web-apps' },
  { name: 'HTML',        icon: <IconHTML />,       url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS',         icon: <IconCSS />,        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS' },
  { name: 'JavaScript',  icon: <IconJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',  icon: <IconTypescript />, url: 'https://www.typescriptlang.org/docs' },
  { name: 'Node',        icon: <IconNode />,       url: 'https://nodejs.org/en' },
  { name: 'Java',        icon: <IconJava />,       url: 'https://www.java.com' },
  { name: 'Ruby',        icon: <IconRuby />,       url: 'https://www.ruby-lang.org/en' },
  { name: 'Python',      icon: <IconPython />,     url: 'https://docs.python.org' },
  { name: 'Swift',       icon: <IconSwift />,      url: 'https://developer.apple.com/swift' },
  { name: 'PHP',         icon: <IconPhp />,        url: 'https://www.php.net' },
  { name: 'C#',          icon: <IconCsharp />,     url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'C++',         icon: <IconCpp />,        url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'VisualCode',  icon: <IconVisualCode />, url: 'https://code.visualstudio.com' },
  { name: 'Github',      icon: <IconGithub />,     url: 'https://github.com/criar-art' },
  { name: 'NPM',         icon: <IconNpm />,        url: 'npmjs.com/package/vue-techs-logos' },
  { name: 'YouTube',     icon: <IconYotube />,     url: 'https://youtube.com' },
  { name: 'Wordpress',   icon: <IconWordpress />,  url: 'https://wordpress.com' },
  { name: 'Tumblr',      icon: <IconTumblr />,     url: 'https://www.tumblr.com' },
  { name: 'CodePen',     icon: <IconCodepen />,    url: 'https://codepen.io' },
  { name: 'Vue',         icon: <IconVue />,        url: 'https://vuejs.org' },
  { name: 'React',       icon: <IconReact />,      url: 'https://reactjs.org' },
  { name: 'Angular',     icon: <IconAngular />,    url: 'https://angular.io' },
  { name: 'Svelte',      icon: <IconSvelte />,     url: 'https://svelte.dev' },
  { name: 'Ember',       icon: <IconEmber />,      url: 'https://emberjs.com' },
  { name: 'Stylus',      icon: <IconStylus />,     url: 'https://stylus-lang.com' },
  { name: 'Tailwind',    icon: <IconTailwind />,   url: 'https://tailwindcss.com' },
  { name: 'Less',        icon: <IconLess />,       url: 'https://lesscss.org' },
  { name: 'Sass',        icon: <IconSass />,       url: 'https://sass-lang.com' },
  { name: 'Webpack',     icon: <IconWebpack />,    url: 'https://webpack.js.org' },
  { name: 'Vite',        icon: <IconVite />,       url: 'https://vitejs.dev' },
  { name: 'Gulp',        icon: <IconGulp />,       url: 'https://gulpjs.com' },
  { name: 'Jest',        icon: <IconJest />,       url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma',       icon: <IconKarma />,      url: 'https://karma-runner.github.io' },
  { name: 'Vitest',      icon: <IconVitest />,     url: 'https://vitest.dev' },
  { name: 'Xcode',       icon: <IconXcode />,      url: 'https://developer.apple.com/xcode' },
  { name: 'Whatsapp',    icon: <IconWhatsapp />,   url: 'https://web.whatsapp.com' },
  { name: 'Telegram',    icon: <IconTelegram />,   url: 'https://web.telegram.org' },
  { name: 'Cypress',     icon: <IconCypress />,    url: 'https://www.cypress.io' },
  { name: 'Mozilla',     icon: <IconMozilla />,    url: 'https://www.mozilla.org' },
  { name: 'Safari',      icon: <IconSafari />,     url: 'https://www.apple.com/br/safari' },
  { name: 'Edge',        icon: <IconEdge />,       url: 'https://www.microsoft.com/pt-br/edge' },
  { name: 'Chrome',      icon: <IconChrome />,     url: 'https://www.google.com/intl/pt-BR/chrome' },
  { name: 'MySQL',       icon: <IconMysql />,      url: 'https://www.mysql.com' },
  { name: 'Firebase',    icon: <IconFirebase />,   url: 'https://firebase.google.com' },
  { name: 'Git',         icon: <IconGit />,        url: 'https://git-scm.com' }
];

const getTech: any = (name: string) => {
  return techs.find(item => item.name.toLowerCase() == name.toLowerCase())
}

const getTechs = (items: any) => techs.filter((tech => items.find((item: any) => {
  return tech.name.toLowerCase() == item.toLowerCase()
})))

const hiddenTechs = (items: any) => techs.filter(item => !items.includes(item.name.toLocaleLowerCase()))

function ReactTechsLogos(props: any) {
  return (
    <>
      {(props.name && getTech(props.name) && !props.list) ? (
        <figure
          className={`${props.className ? props.className : ''} ${getTech(props.name).name.toLocaleLowerCase()}`}
          style={{ width: props.size ? props.size : '100px' }}
        >
          {getTech(props.name).icon}
          <figcaption className={props.hiddenLabel ? 'tooltip' : ''}>{ getTech(props.name).name }</figcaption>
        </figure>
      ) : (
        props.list ? (
          <section
            className={`techs ${props.className ? props.className : ''}`}
          >
            {getTechs(props.list).map((tech) => (
              <figure className={`tech-container ${tech.name.toLocaleLowerCase()}`} key={tech.name}>
                {tech.icon}
                <figcaption className={props.hiddenLabel ? 'tooltip' : ''}>{tech.name}</figcaption>
              </figure>
            ))}
          </section>
        ) : (
          props.hiddenLogos ? (
            <section className={`techs ${props.className ? props.className : ''}`}>
              {hiddenTechs(props.hiddenLogos).map((tech) => (
                <figure className={`tech-container ${tech.name.toLocaleLowerCase()}`} key={tech.name}>
                  {tech.icon}
                  <figcaption className={props.hiddenLabel ? 'tooltip' : ''}>{tech.name}</figcaption>
                </figure>
              ))}
            </section>
          ) : (
            <section className={`techs ${props.className ? props.className : ''}`}>
              {techs.map((tech) => (
                <figure className={`tech-container ${tech.name.toLocaleLowerCase()}`} key={tech.name}>
                  {tech.icon}
                  <figcaption className={props.hiddenLabel ? 'tooltip' : ''}>{tech.name}</figcaption>
                </figure>
              ))}
            </section>
          )
        )
      )}
    </>
  )
}

export default ReactTechsLogos
