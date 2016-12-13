const dir = {
  src  : './src/assets/',
  dest : './dist/assets/'
}

module.exports = {

  root: {
    src   : './src/',
    dest  : './dist/'
  },

  sass: {
    src   : `${dir.src}styles/**/*.scss`,
    dest  : `${dir.dest}styles/`,
    watch : `${dir.src}styles/**/*.scss`
  },

  js: {
    src   : `${dir.src}scripts/main.js`,
    dest  : `${dir.dest}scripts/`,
    watch : `${dir.src}scripts/**/*.js`
  },

  image: {
    src   : `${dir.src}images/**/*.+(jpg|jpeg|png|gif|svg)`,
    dest  : `${dir.dest}images/`,
    watch : `${dir.src}images/**/*.+(jpg|jpeg|png|gif|svg)`
  },

  svg: {
    src  : `${dir.src}svgs/*.svg`,
    dest : `${dir.dest}images/svg/`,
    html : `${dir.src}svgs/_template.html`
  },

  favicon: {
    src        : `${dir.src}favicon/master_picture.png`,
    dest       : `${dir.dest}images/favicons/`,
    iconPath   : './assets/images/favicons/',
    srcFire    : './src/'
//    markupFire : './dist/'
  },

  copy: {
    src   : ['./src/*.+(html|php|css|png)', './src/inc/*.+(html|php)'],
    dest  : './dist/',
    watch : ['./src/*.+(html|php|css|png)', './src/inc/*.+(html|php)']
  }

};