const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const del = require("delete");

sass.compiler = require("node-sass");

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("./src/js/**/*.js", gulp.series("js"));
  gulp.watch("./src/libs/**/*", gulp.series("copyLibs"));
  gulp.watch("./src/fonts/**/*", gulp.series("copyFonts"));
  gulp.watch("./src/img/**/*", gulp.series("copyImg"));
  gulp.watch("./src/videos/**/*,", gulp.series("copyVideos"));
  gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("/"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src("./src/js/main.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("/"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("copyImg", () => {
  return gulp
    .src("./src/img/**/*")
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("copyLibs", () => {
  return gulp
    .src("./src/libs/**/*")
    .pipe(gulp.dest("./dist/libs"));
});
gulp.task("copyFonts", () => {
  return gulp
    .src("./src/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"));
});
gulp.task("copyVideos", () => {
  return gulp
    .src("./src/videos/**/*")
    .pipe(gulp.dest("./dist/videos"));
});

gulp.task("cleanDist", () => {
  return del(["./dist/**/*"]);
});

gulp.task("default", gulp.series(["scss", "js", "copyImg","copyFonts", "copyVideos", "copyLibs", "serve"]));
gulp.task("build", gulp.series("cleanDist", "scss", "js","copyFonts", "copyVideos", "copyLibs", "copyImg"));
