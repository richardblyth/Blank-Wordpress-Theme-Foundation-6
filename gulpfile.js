var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var babel = require('gulp-babel');


//Foundation SCSS
var sassPaths = [
  'bower_components/foundation-sites/scss'
];


//Styles
gulp.task('styles', function() {

  return gulp.src(['./scss/app.scss'])
  .pipe(sass({
    includePaths: sassPaths
  }))
  .pipe(prefix({
      browsers: ['last 2 versions', 'ie >= 9']
  }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./css'));
});


//Scripts
gulp.task('scripts', function() {

  gulp.src([
    'bower_components/foundation-sites/js/foundation.core.js', 
    'bower_components/foundation-sites/js/foundation.util.mediaQuery.js', 
    './js/build/app.js' 
  ])
  .pipe(concat('app.js'))
  //.pipe(babel())
  .pipe(gulp.dest('./js/dist'));

});


//Watch
gulp.task('watch', function() {

  //Watch for changes to SCSS then run the styles task
  gulp.watch('./scss/**/*.scss', ['styles']);
});


//Default
gulp.task('default', ['styles', 'scripts']);