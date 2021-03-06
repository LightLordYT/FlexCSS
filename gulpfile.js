const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
	return src('lib/**/*.scss')
		.pipe(sass())
		.pipe(dest('test/css'))
}

function watchTask(){
	watch(['lib/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)