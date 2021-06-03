const gulp = require("gulp");
const pug = require("gulp-pug");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const { dest } = require("gulp");

const server = require("browser-sync").create();

gulp.task("pug", () => {
  return gulp
    .src("./src/views/pages/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./public"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("./public/assets/css/styles.css")
    .pipe(autoprefixer())
    .pipe(cleanCss({ compatibility: "ie7" }))
    .pipe(
      rename((path) => {
        path.extname = ".min.css";
      })
    )
    .pipe(gulp.dest("./public/assets/css"));
});

gulp.task("default", () => {
  server.init({
    server: "./public",
  });
  gulp.watch("./src/assets/**/*").on("change", server.reload);
  gulp
    .watch("./public/assets/css/styles.css", gulp.series("minify-css"))
    .on("change", server.reload);
  gulp
    .watch("./src/views/**/*.pug", gulp.series("pug"))
    .on("change", server.reload);
});
