var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', ['js-build', 'sass-build', 'watch']);


gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', ['js-build']);
  gulp.watch('src/scss/**/*.scss', ['sass-build']);
});


gulp.task('js-build', () => {
	return gulp.src('src/js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('sass-build', function () {
 return gulp.src('./src/scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'));
});
