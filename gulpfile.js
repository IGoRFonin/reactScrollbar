const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');

const babelConfig = {
    plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
    ],
    presets: [
        '@babel/react',
        ['@babel/env', {
            'useBuiltIns': 'entry'
        }]
    ],
};

gulp.task('build-production', function() {
    return gulp.src('src/js/*.{jsx,js}')
        .pipe(babel(babelConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function(){
    return gulp.src('./src/less/scrollArea.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('production', gulp.series('build-production', 'less'));
