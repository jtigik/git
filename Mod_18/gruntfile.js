module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    // Simular uma tarefa demorada.
    grunt.registerTask('olaGrunt', function(){
        const done = this.async();
        setTimeout(function(){
            console.log('Olá Grunt!');
            done();
        }, 3000); 
    })

    //Criar uma tarefa que armazena o nome de todas as tarefas em um Array.
    //Ao ler este Array de nomes das tarefas, as tarefas serão executadas.
    grunt.registerTask('default', ['olaGrunt'])
}
