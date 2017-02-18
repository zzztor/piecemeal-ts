const gulp = require("gulp");
const browserify = require("browserify");
const tsify = require("tsify");
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const Server = require('karma').Server;

gulp.task('test', ['default'], (done) => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, (errCode) => console.log(errCode)).start();
});


const files = [
    'src/lib/cell.ts',
    'src/lib/vector.ts',
    'test/cell/cell.test.ts',
    'test/vector/vector.test.ts',
];

gulp.task("default", () => {
    files.map((entry) => {
        return browserify({
                basedir: '.',
                debug: true,
                entries: [entry],
                cache: {},
                packageCache: {}
            })
            .plugin(tsify)
            .on('error', function () {
                console.log('Error at compile.')
            })
            .bundle()
            .pipe(source(
                entry
            ))
            .pipe(rename({
                extname: '.js'
            }))
            .pipe(gulp.dest("dist/"));
    });
});

gulp.task('watch', () => {
    gulp.watch(['src/*', 'src/**/*', 'test/**/*'], ['default']);
});