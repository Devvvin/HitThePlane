
//获取gulp对象
var gulp = require("gulp");


//获取插件（导入插件）
var uglify = require("gulp-uglify");  //
var babel = require("gulp-babel");

//定义任务
gulp.task("jsTask1", function(){
	gulp.src("src/js/bullet.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})


gulp.task("jsTask2", function(){
	gulp.src("src/js/enemy.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})


gulp.task("jsTask3", function(){
	gulp.src("src/js/gameEngine.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})

gulp.task("jsTask4", function(){
	gulp.src("src/js/myPlane.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})

gulp.task("jsTask5", function(){
	gulp.src("src/js/Base.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})

gulp.task("jsTask6", function(){
	gulp.src("src/js/ajax.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})


gulp.task("jsTask7", function(){
	gulp.src("src/js/common.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})

gulp.task("jsTask8", function(){
	gulp.src("src/js/move.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe(uglify()) //使用uglify插件
	    .pipe(gulp.dest("dest/js"));  //处理完成后存放的目录
})



gulp.task('default', ['jsTask1', 'jsTask2', 'jsTask3', 'jsTask4', 'jsTask5', 'jsTask6', 'jsTask7', 'jsTask8']);