var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    html2js = require('gulp-html-js-template'),
    minify = require('gulp-minify'),
    plato = require('plato');

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Clean the distributable css directory
gulp.task('minify:clean:css', function () {
    return del('css/');
});

// Compile out sass files and minify it
gulp.task('minify:css', ['minify:clean:css'], function () {
    var min = resolveMinifiedPath("./dist/css/app.min.css");
    return gulp.src('scss/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(cssmin())
        .pipe(concat(min.file))
        .pipe(gulp.dest(min.path));
});

//Watch CSS task
gulp.task('default:css', function () {
    gulp.watch('scss/*.scss', ['minify:css']);
});

// Clean the concated js directory
gulp.task('clean:concat:js', function () {
    return del('dist/min/uib-datepicker-a11y.min.js');
});

// Minify JS Files
gulp.task('minify:js', function () {
    return gulp.src('resource/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});

//Concat JS Files
gulp.task('concat:js', ['clean:concat:js', 'minify:js'], function () {
    return gulp.src('./js/*min.js')
    .pipe(concat('uib-datepicker-a11y.min.js'))
    .pipe(gulp.dest('./dist/min'));
});

//Watch JS task
gulp.task('default:richcc:js', function () {
    gulp.watch(['resource/datepicker.js', 'resource/popup.js'], ['concat:js']);
});

