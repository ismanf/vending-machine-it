const { series, rimraf } = require("nps-utils");

module.exports = {
    scripts: {

        /**
         *  Build script
         */
        build: {
            script: series(
                "nps clean",
                "nps lint",
                "nps compile"
            ),
            description: "Builds application into the dist directory"
        },


        lint: {
            script: "tslint --config tslint.json --project tsconfig.json",
            description: "Checking linting errors"
        },

        /**
         *  Compile script
         */
        compile: {
            script: "tsc",
            hiddenFromHelp: true
        },

        /**
         *  Run tests
         */
        test: {
            script: "jest",
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
            script: "serverless invoke local -f getBalance -p serverless.mock.json"
        },
        calculateChange: {
            script: "serverless invoke local -f calculateChange -p serverless.mock.json"
        }
    }
};

function copy(source, target) {
    return `copyfiles --up 1 ${source} ${target}`;
}
