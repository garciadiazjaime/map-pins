var gulp = require('gulp');
var eslint = require('gulp-eslint');

function lintTask(){
  return gulp.src(['src/**/*.js', '!src/**/*test.js'])
    .pipe(eslint())
    .pipe(eslint.format());
}

gulp.task('lint', lintTask);