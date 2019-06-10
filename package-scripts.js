const { series, rimraf } = require("nps-utils");

module.exports = {
    scripts: {
        default: "nps start",

        /**
         *  Starts script
         */
        start: {
            script: "node -r dotenv/config dist/main.js dotenv_config_path=.env.local",
            description: "Runs application server"
        },

        /**
         *  Build script
         */
        build: {
            script: series("nps clean", "nps compile"),
            description: "Builds application into the dist directory"
        },


        /**
         *  Compile script
         */
        compile: {
            script: "tsc",
            hiddenFromHelp: true
        },

        /**
         *  Clean script
         */
        clean: {
            script: rimraf("./dist"),
            description: "Deletes the ./dist folder"
        }
    }
};

function copy(source, target) {
    return `copyfiles --up 1 ${source} ${target}`;
}
