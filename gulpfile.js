const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const sass = require('gulp-sass');
const source  = require('vinyl-source-stream');


gulp.task('serve', function() {
    browserSync.init({
       server: 'build'
    });
});


gulp.task('build-js', function () {
  return browserify({entries: './assets/js/index.js', debug: true})
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/js'))
});

gulp.task('build-css', function() {
    return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
        includePaths: ['./node_modules/bootstrap/scss']})
      .on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('watch-js', ['build-js'], function(done) {
    browserSync.reload();
    done();
});


gulp.task('watch', ['serve'], function() {
  gulp.watch('assets/scss/**/*.scss',['build-css']);
  gulp.watch('assets/js/**/*.js',['watch-js']);
});
