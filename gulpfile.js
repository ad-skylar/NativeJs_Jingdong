/**
 * Created by Administrator on 2017/4/10 0010.
 */
var gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    minifyCSS = require('gulp-minify-css'),
    concat=require("gulp-concat");

/**
 * gulp.task(name, fn) - 定义任务，第一个参数是任务名，第二个参数	是	任务内容。
 gulp.src(path) - 选择文件，传入参数是文件路径。
 gulp.dest(path) - 输出文件
 gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列
 */

gulp.task("minifyjs",function () {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(concat('order_query.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
})
//执行 minifyjs,css 任务
gulp.task('default', ['minifyjs','css'])
//检测代码修改自动执行任务 gulp.watch(src, fn)
gulp.watch('js/*.js', ['minifyjs']);
gulp.watch('cs/*.css', ['css']);
//在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    //监听文件修改，当文件被修改则执行 minifyjs,css 任务
    gulp.watch('js/*.js', ['minifyjs'])
    gulp.watch('cs/*.css', ['css'])
})


/*
命令符
一、在安装node的基础下  首先执行初始化----- npm init
二、安装gulp -----npm install gulp
三、安装压缩js插件 ----npm install gulp-uglify
四、安装压缩css插件----npm install gulp-minify-css
五、安装合并js或者css插件---npm install gulp-concat
六、执行---npm gulp

 */