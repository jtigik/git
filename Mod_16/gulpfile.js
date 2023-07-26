const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Trazendo pacotes rescém importados para o projeto

// Explicando: 
// gulp-sass - Responsável por fazer a integração do Gulp com o SASS.
// sass - Responsável por realizar a converção do SASS para CSS.

function compilaSass(){ //Criando uma função que lê todos os arquivos SCSS e converte para CSS.
    return gulp.src('./source/styles/main.scss')// Mostra o caminho à todos arquivos .SCSS
        .pipe(sass()) // Função responsável pelo encadeamento das execuções do Gulp
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

// exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;