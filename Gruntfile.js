module.exports = (grunt)=> {

grunt.registerTask("default", ["concat", "watch", "uglify"]);

grunt.initConfig({
  concat: {
    dist: {
      src: [],
      dest: '',
    },
  },
  watch: {
	  js: {
	    files: ['*.js'],
	    tasks: ['concat'],
	  },
	},
  uglify: {
    
  }
});


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');


};
