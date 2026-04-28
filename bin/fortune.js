#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const FortuneCookie = require('../src/index.js');

const cookie = new FortuneCookie();

program
  .name('fortune')
  .description('🥠 Your terminal now predicts your coding future')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize fortune cookie in your project')
  .action(() => {
    cookie.init();
  });

program
  .command('list')
  .description('List available personalities')
  .action(() => {
    cookie.list();
  });

program
  .command('stats')
  .description('Show fortune statistics')
  .action(() => {
    cookie.stats();
  });

// Default action with options
program
  .option('-p, --personality <type>', 'Personality (zen, hype, roast, nostradamus, shakespeare)', 'zen')
  .action((options) => {
    cookie.serve(options);
  });

// Parse CLI
program.parse();

// If no command, serve fortune
if (!process.argv.slice(2).length) {
  cookie.serve();
}
