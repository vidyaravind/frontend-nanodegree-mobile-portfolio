var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var imageop = require('gulp-image-optimization');
var cssmin = require('gulp-minify-css');


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('perfmatters.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('perfmatters.min.js'))
        .pipe(gulp.dest('js'));
});
 
gulp.task('images', function(cb) {
    gulp.src(['views/images/*.jpg','views/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('views/images')).on('end', cb).on('error', cb);
});

gulp.task('img', function(cb) {
    gulp.src(['img/*.jpg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img')).on('end', cb).on('error', cb);
});

gulp.task('cssmin', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

// Default Task
gulp.task('default', ['scripts','images','cssmin']);
