var dir = {
  src  : './src/assets/',
  dist : './dist/assets/'
}


module.exports = {
  
  
  root: {
    src  : './src/',
    dist : './dist/'
  },
  
  
  sass: {
    src   : dir.src + 'sass/**/*.scss',
    dest  : dir.dist + 'css/',
    watch : dir.src + 'sass/**/*.scss'
  },
  
  
  js: {
    src   : dir.src + 'js/*.js',
    dest  : dir.dist + 'js/',
    watch : dir.src + 'js/*.js'
  },
  
  
  images: {
    src   : dir.src + 'images/**/*.+(jpg|jpeg|png|gif|svg)',
    dest  : dir.dist + 'images/',
    watch : dir.src + 'images/**/*.+(jpg|jpeg|png|gif|svg)'
  },
  
  
  default: {
    depends : ['watch']
  }
  

};