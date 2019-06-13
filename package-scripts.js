const { series, rimraf } = require("nps-utils");

module.exports = {
    scripts: {

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
        },

        /**
         *  Invoke lambdas localy
         */
        getBalance: {
            script: "serverless invoke local -f getBalance -p mock.json"
        },
        calculateChange: {
            script: "serverless invoke local -f calculateChange -p mock.json"
        }
    }
};

function copy(source, target) {
    return `copyfiles --up 1 ${source} ${target}`;
}
