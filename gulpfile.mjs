import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

const server = browserSync.create();

const paths = {
  html: {
    src: 'src/*.html',
    dest: 'dist/'
  },
  styles: {
    src: 'src/css/**/*.css',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/images/'
  },
  fonts: {
    src: 'src/assets/fonts/**/*.{woff,woff2,eot,ttf,otf}',
    dest: 'dist/assets/fonts/'
  },
  icons: {
    src: 'src/assets/icons/**/*.{jpg,jpeg,png,svg,gif}',
    dest: 'dist/assets/icons/'
  }
};


export function html() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
}

export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

export function icons() {
  return gulp.src(paths.icons.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.icons.dest));
}

export function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}

export function watchFiles() {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch(paths.html.src, html).on('change', server.reload);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts).on('change', server.reload);
  gulp.watch(paths.images.src, images).on('change', server.reload);
  gulp.watch(paths.icons.src, icons).on('change', server.reload);
  gulp.watch(paths.fonts.src, fonts).on('change', server.reload);
}

const build = gulp.series(gulp.parallel(html, styles, scripts, images, icons, fonts));
const watch = gulp.series(build, watchFiles);

export { build, watch };
export default watch;
