const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const sourcemaps = require('gulp-sourcemaps');


function compilaSass(){ 
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' // Criando uma versão minificada do .CSS.
        })) 
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); // Função responsável por enviar os arquivos criados para uma pasta
}

function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executando via Gulp"); 
        callback();
    }, 2000); 
}

function dizOi(callback){ 
    setTimeout(function(){
        console.log("Olá Gulp");
        dizTchau();
        callback();
    }, 1000);
}

function dizTchau(){ 
    console.log("Tchau Gulp!!!");
}


exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function(){ //Criada tarefa que 'olha' para os arquivos *.sass em busca de alterações.
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}