import IconAndroid from '../../assets/techs/android.svg?react'
import IconApple from '../../assets/techs/apple.svg?react'
import IconHTML from '../../assets/techs/html.svg?react'
import IconCSS from '../../assets/techs/css.svg?react'
import IconJavascript from '../../assets/techs/javascript.svg?react'
import IconTypescript from '../../assets/techs/typescript.svg?react'
import IconVue from '../../assets/techs/vue.svg?react'
import IconReact from '../../assets/techs/react.svg?react'
import IconAngular from '../../assets/techs/angular.svg?react'
import IconSvelte from '../../assets/techs/svelte.svg?react'
import IconEmber from '../../assets/techs/ember.svg?react'
import IconStylus from '../../assets/techs/stylus.svg?react'
import IconLess from '../../assets/techs/less.svg?react'
import IconSass from '../../assets/techs/sass.svg?react'
import IconWebpack from '../../assets/techs/webpack.svg?react'
import IconVite from '../../assets/techs/vite.svg?react'
import IconGulp from '../../assets/techs/gulp.svg?react'
import IconJest from '../../assets/techs/jest.svg?react'
import IconKarma from '../../assets/techs/karma.svg?react'
import IconVitest from '../../assets/techs/vitest.svg?react'
import IconCypress from '../../assets/techs/cypress.svg?react'
import IconGit from '../../assets/techs/git.svg?react'
import IconPython from '../../assets/techs/python.svg?react'
import IconLinux from '../../assets/techs/linux.svg?react'
import IconGithub from '../../assets/techs/github.svg?react'
import IconMozilla from '../../assets/techs/mozilla.svg?react'
import IconSafari from '../../assets/techs/safari.svg?react'
import IconChrome from '../../assets/techs/chrome.svg?react'
import IconXcode from '../../assets/techs/xcode.svg?react'
import IconWordpress from '../../assets/techs/wordpress.svg?react'
import IconWhatsapp from '../../assets/techs/whatsapp.svg?react'
import IconVisualCode from '../../assets/techs/visualcode.svg?react'
import IconTelegram from '../../assets/techs/telegram.svg?react'
import IconSwift from '../../assets/techs/swift.svg?react'
import IconRuby from '../../assets/techs/ruby.svg?react'
import IconNode from '../../assets/techs/node.svg?react'
import IconMicrosoft from '../../assets/techs/microsoft.svg?react'
import IconPlaystore from '../../assets/techs/playstore.svg?react'
import IconTumblr from '../../assets/techs/tumblr.svg?react'
import IconCodepen from '../../assets/techs/codepen.svg?react'
import IconYotube from '../../assets/techs/youtube.svg?react'
import IconJava from '../../assets/techs/java.svg?react'
import IconPwa from '../../assets/techs/pwa.svg?react'
import IconTailwind from '../../assets/techs/tailwind.svg?react'
import IconNpm from '../../assets/techs/npm.svg?react'
import IconEdge from '../../assets/techs/edge.svg?react'
import IconCpp from '../../assets/techs/cpp.svg?react'
import IconCsharp from '../../assets/techs/csharp.svg?react'
import IconFirebase from '../../assets/techs/firebase.svg?react'
import IconPhp from '../../assets/techs/php.svg?react'
import IconMysql from '../../assets/techs/mysql.svg?react'
import IconStackOverflow from '../../assets/techs/stackoverflow.svg?react'
import IconChatGPT from '../../assets/techs/chatgpt.svg?react'
import IconFacebook from '../../assets/techs/facebook.svg?react'
import IconX from '../../assets/techs/x.svg?react'
import IconGoogle from '../../assets/techs/google.svg?react'
import IconIBM from '../../assets/techs/ibm.svg?react'
import IconLinkedin from '../../assets/techs/linkedin.svg?react'
import IconCisco from '../../assets/techs/cisco.svg?react'
import IconTikTok from '../../assets/techs/tiktok.svg?react'
import IconRedHat from '../../assets/techs/redhat.svg?react'
import IconOpera from '../../assets/techs/opera.svg?react'
import IconHP from '../../assets/techs/hp.svg?react'
import IconGitlab from '../../assets/techs/gitlab.svg?react'
import IconEvernote from '../../assets/techs/evernote.svg?react'
import IconDuckDuckGo from '../../assets/techs/duckduckgo.svg?react'
import IconDrupal from '../../assets/techs/drupal.svg?react'
import IconDropbox from '../../assets/techs/dropbox.svg?react'
import IconBaidu from '../../assets/techs/baidu.svg?react'
import IconDribbble from '../../assets/techs/dribbble.svg?react'
import IconDocker from '../../assets/techs/docker.svg?react'
import IconDiscord from '../../assets/techs/discord.svg?react'
import IconDigitalOcean from '../../assets/techs/digitalocean.svg?react'

const techs = [
  { name: 'Android',        icon: <IconAndroid />,        url: 'https://www.android.com' },
  { name: 'Apple',          icon: <IconApple />,          url: 'https://www.apple.com' },
  { name: 'Linux',          icon: <IconLinux />,          url: 'https://ubuntu.com' },
  { name: 'Microsoft',      icon: <IconMicrosoft />,      url: 'https://www.microsoft.com' },
  { name: 'PlayStore',      icon: <IconPlaystore />,      url: 'https://play.google.com' },
  { name: 'PWA',            icon: <IconPwa />,            url: 'https://web.dev/progressive-web-apps' },
  { name: 'HTML',           icon: <IconHTML />,           url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS',            icon: <IconCSS />,            url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS' },
  { name: 'JavaScript',     icon: <IconJavascript />,     url: 'https://developer.mozilla.org/en-US/docs/Glossary/Javascript' },
  { name: 'Typescript',     icon: <IconTypescript />,     url: 'https://www.typescriptlang.org/docs' },
  { name: 'Node',           icon: <IconNode />,           url: 'https://nodejs.org/en' },
  { name: 'Java',           icon: <IconJava />,           url: 'https://www.java.com' },
  { name: 'Ruby',           icon: <IconRuby />,           url: 'https://www.ruby-lang.org/en' },
  { name: 'Python',         icon: <IconPython />,         url: 'https://docs.python.org' },
  { name: 'Swift',          icon: <IconSwift />,          url: 'https://developer.apple.com/swift' },
  { name: 'PHP',            icon: <IconPhp />,            url: 'https://www.php.net' },
  { name: 'C#',             icon: <IconCsharp />,         url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'C++',            icon: <IconCpp />,            url: 'https://learn.microsoft.com/en-us/dotnet/csharp' },
  { name: 'VisualCode',     icon: <IconVisualCode />,     url: 'https://code.visualstudio.com' },
  { name: 'Github',         icon: <IconGithub />,         url: 'https://github.com/criar-art' },
  { name: 'NPM',            icon: <IconNpm />,            url: 'https://npmjs.com/package/vue-techs-logos' },
  { name: 'YouTube',        icon: <IconYotube />,         url: 'https://youtube.com' },
  { name: 'Wordpress',      icon: <IconWordpress />,      url: 'https://wordpress.com' },
  { name: 'Tumblr',         icon: <IconTumblr />,         url: 'https://www.tumblr.com' },
  { name: 'CodePen',        icon: <IconCodepen />,        url: 'https://codepen.io' },
  { name: 'Vue',            icon: <IconVue />,            url: 'https://vuejs.org' },
  { name: 'React',          icon: <IconReact />,          url: 'https://reactjs.org' },
  { name: 'Angular',        icon: <IconAngular />,        url: 'https://angular.io' },
  { name: 'Svelte',         icon: <IconSvelte />,         url: 'https://svelte.dev' },
  { name: 'Ember',          icon: <IconEmber />,          url: 'https://emberjs.com' },
  { name: 'Stylus',         icon: <IconStylus />,         url: 'https://stylus-lang.com' },
  { name: 'Tailwind',       icon: <IconTailwind />,       url: 'https://tailwindcss.com' },
  { name: 'Less',           icon: <IconLess />,           url: 'https://lesscss.org' },
  { name: 'Sass',           icon: <IconSass />,           url: 'https://sass-lang.com' },
  { name: 'Webpack',        icon: <IconWebpack />,        url: 'https://webpack.js.org' },
  { name: 'Vite',           icon: <IconVite />,           url: 'https://vitejs.dev' },
  { name: 'Gulp',           icon: <IconGulp />,           url: 'https://gulpjs.com' },
  { name: 'Jest',           icon: <IconJest />,           url: 'https://jestjs.io/pt-BR' },
  { name: 'Karma',          icon: <IconKarma />,          url: 'https://karma-runner.github.io' },
  { name: 'Vitest',         icon: <IconVitest />,         url: 'https://vitest.dev' },
  { name: 'Xcode',          icon: <IconXcode />,          url: 'https://developer.apple.com/xcode' },
  { name: 'Whatsapp',       icon: <IconWhatsapp />,       url: 'https://web.whatsapp.com' },
  { name: 'Telegram',       icon: <IconTelegram />,       url: 'https://web.telegram.org' },
  { name: 'Cypress',        icon: <IconCypress />,        url: 'https://www.cypress.io' },
  { name: 'Mozilla',        icon: <IconMozilla />,        url: 'https://www.mozilla.org' },
  { name: 'Safari',         icon: <IconSafari />,         url: 'https://www.apple.com/br/safari' },
  { name: 'Edge',           icon: <IconEdge />,           url: 'https://www.microsoft.com/pt-br/edge' },
  { name: 'Chrome',         icon: <IconChrome />,         url: 'https://www.google.com/intl/pt-BR/chrome' },
  { name: 'MySQL',          icon: <IconMysql />,          url: 'https://www.mysql.com' },
  { name: 'Firebase',       icon: <IconFirebase />,       url: 'https://firebase.google.com' },
  { name: 'Git',            icon: <IconGit />,            url: 'https://git-scm.com' },
  { name: 'StackOverflow',  icon: <IconStackOverflow />,  url: 'https://stackoverflow.com' },
  { name: 'ChatGPT',        icon: <IconChatGPT />,        url: 'https://chat.openai.com' },
  { name: 'Facebook',       icon: <IconFacebook />,       url: 'https://facebook.com' },
  { name: 'X',              icon: <IconX />,              url: 'https://x.com' },
  { name: 'Google',         icon: <IconGoogle />,         url: 'https://google.com' },
  { name: 'IBM',            icon: <IconIBM />,            url: 'https://ibm.com' },
  { name: 'Linkedin',       icon: <IconLinkedin />,       url: 'https://linkedin.com' },
  { name: 'Cisco',          icon: <IconCisco />,          url: 'https://cisco.com' },
  { name: 'TikTok',         icon: <IconTikTok />,         url: 'https://tiktok.com' },
  { name: 'RedHat',         icon: <IconRedHat />,         url: 'https://redhat.com' },
  { name: 'Opera',          icon: <IconOpera />,          url: 'https://opera.com' },
  { name: 'HP',             icon: <IconHP />,             url: 'https://hp.com' },
  { name: 'Gitlab',         icon: <IconGitlab />,         url: 'https://gitlab.com' },
  { name: 'Evernote',       icon: <IconEvernote />,       url: 'https://evernote.com' },
  { name: 'DuckDuckGo',     icon: <IconDuckDuckGo />,     url: 'https://duckduckgo.com' },
  { name: 'Drupal',         icon: <IconDrupal />,         url: 'https://drupal.com' },
  { name: 'Dropbox',        icon: <IconDropbox />,        url: 'https://dropbox.com' },
  { name: 'Baidu',          icon: <IconBaidu />,          url: 'https://baidu.com' },
  { name: 'Dribbble',       icon: <IconDribbble />,       url: 'https://dribbble.com' },
  { name: 'Docker',         icon: <IconDocker />,         url: 'https://docker.com' },
  { name: 'Discord',        icon: <IconDiscord />,        url: 'https://discord.com' },
  { name: 'DigitalOcean',   icon: <IconDigitalOcean />,   url: 'https://digitalocean.com' }
];

export default techs
