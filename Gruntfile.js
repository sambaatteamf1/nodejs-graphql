module.exports=function(grunt) {
    
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: grunt.file.expandMapping(['src/**/*.js'], 'dist/lib', {
                    rename : function(dest, matchedSrcPath, options) {
                        let path = dest + matchedSrcPath.replace('src', '')
                        console.log(path)
                        return path
                    }
                })
            }
        },

        copy: {
            copyNodeModules : {
                files : [
                    { expand : true , src : [ 'node_modules/**'], dest : 'dist'}
                ]
            }
        }, 

        watch : {
            files : ['src/**/*.js'],
            tasks : ['babel']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec')
    grunt.registerTask('default', ['babel', 'copy:copyNodeModules'])
}

