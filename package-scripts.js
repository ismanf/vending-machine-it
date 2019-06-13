const { series, rimraf } = require("nps-utils");

module.exports = {
    scripts: {

        /**
         *  Build script
         */
        build: {
            script: series("nps clean", "nps compile", "nps copy"),
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
        },

        /**
         *  Copy static files to dist folder
         */
        copy: {
            default: {
                script: series(
                    `nps copy.handlersCongif`,
                ),
                hiddenFromHelp: true
            },
            handlersCongif: {
                script: copy("./src/api/handlers.serverless.yml", "./dist"),
                hiddenFromHelp: true
            }
        },

        /**
         *  Package serverless
         */
        package: {
            script: "serverless package",
            description: "Packages serverless files"
        },

        /**
         *  Deploy serverless
         */
        deploy: {
            script: "serverless deploy --aws-profile serverless",
            description: "Deploys serverless files"
        }
    }
};

function copy(source, target) {
    return `copyfiles --up 1 ${source} ${target}`;
}
