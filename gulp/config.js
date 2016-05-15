var paths = {
  srcDir : './assets/src/',
  dstDir : './assets/dist/'
}


module.exports = {
  
  
  sass: {
    src: paths.srcDir + 'sass/**/*.scss',
    dest: paths.dstDir + 'css/',
    watch: paths.srcDir + 'sass/**/*.scss'
  },
  
  
  js: {
    src: paths.srcDir + 'js/*.js',
    dest: paths.dstDir + 'js/',
    watch: paths.srcDir + 'js/*.js'
  },
  
  
  images: {
    src: paths.srcDir + 'images/**/*.+(jpg|jpeg|png|gif|svg)',
    dest: paths.dstDir + 'images/',
    watch: paths.srcDir + 'images/**/*.+(jpg|jpeg|png|gif|svg)'
  },
  
  
  default: {
    depends: ['watch']
  }
  

};
