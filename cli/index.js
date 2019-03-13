const c = require('chalk');
const runServerless = require('./lib/serverless');

const main = async () => {
  await runServerless([
    'deploy',
    '--region',
    'eu-west-3',
    '--stack-name',
    'codepipeline-watch-test'
  ]);

  process.stdout.write(`\n⚡️ ${c.bold.blue('Stack sucessfully deployed')} 🙌\n`);
};

module.exports = main;
if (!module.parent) {
  main();
}
