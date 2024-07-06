import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import concat from 'gulp-concat'

const sass = gulpSass(dartSass)

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'));
};

function defaultTask(cb: () => void) {
  buildStyles()
  cb();
}

exports.default = defaultTask;