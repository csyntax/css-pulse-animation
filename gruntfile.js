module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		less: {
			development: {
					options: {
							paths: ["css"]
					},
					files: {
							"css/css-pulse-animation.css": "less/css-pulse-animation.less"
					}
				}
			},
			watch: {
				less : {
					files: ["less/*.less"],
					tasks: ["less"]
				},
				css: {
					files: ["css/*.css"]
				},
				html: {
					files: ["*.html"]
				}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
};