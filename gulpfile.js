var gulp = require('gulp');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('default', ['js-build', 'watch']);


gulp.task('watch', () => {
  gulp.watch('src/js/**/*.js', ['js-build']);
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
