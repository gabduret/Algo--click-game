var gulp         = require( 'gulp' ),
    gulp_cssnano = require("gulp-cssnano"),
    gulp_concat  = require("gulp-concat"),
    gulp_uglify  = require("gulp-uglify"),
    gulp_rename  = require("gulp-rename");

gulp.task( 'cssGamePart', function(){

  return gulp.src( "./src/css/gamePart.css" )
    .pipe( gulp_cssnano())
    .pipe(gulp_rename("gamePart.min.css"))
    .pipe(gulp.dest("./src/css/"));  
} );
gulp.task( 'cssPortail', function(){

  return gulp.src( "./src/css/portail.css" )
    .pipe( gulp_cssnano())
    .pipe(gulp_rename("portail.min.css"))
    .pipe(gulp.dest("./src/css/"));  
});

gulp.task( 'cssResponsive', function(){

  return gulp.src( "./src/css/responsive.css" )
    .pipe( gulp_cssnano())
    .pipe(gulp_rename("responsive.min.css"))
    .pipe(gulp.dest("./src/css/")); 
});

gulp.task( 'cssUpgradesPart', function(){

  return gulp.src( "./src/css/upgradesPart.css" )
    .pipe( gulp_cssnano())
    .pipe(gulp_rename("upgradesPart.min.css"))
    .pipe(gulp.dest("./src/css/"));
});

gulp.task( 'jsGamePart', function(){

  return gulp.src( "./src/js/gamePart.js")
    .pipe( gulp_concat( "gamePart.min.js"))
    .pipe(gulp_uglify())
    .pipe(gulp.dest("./src/js/"));
} );

gulp.task( 'jsPortail', function(){

  return gulp.src( "./src/js/portail.js")
    .pipe( gulp_concat( "portail.min.js"))
    .pipe(gulp_uglify())
    .pipe(gulp.dest("./src/js/"));
} );
gulp.task( 'jsUpgradesPart', function(){

  return gulp.src( "./src/js/upgradePart.js")
    .pipe( gulp_concat( "upgradePart.min.js"))
    .pipe(gulp_uglify())
    .pipe(gulp.dest("./src/js/"));
} );
gulp.task( 'watch', function(){

  gulp.watch("./src/css/style.css", ["css"]);
  gulp.watch(["./src/js/**", "!./src/js/script.min.js"], ["js"]);
} );

gulp.task( 'default', [ 'cssGamePart', "cssPortail", "cssResponsive","cssUpgradesPart",'jsGamePart',"jsPortail", "jsUpgradesPart",'watch' ] );