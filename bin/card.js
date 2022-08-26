#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const data = {
  name: chalk.white('           Juan Diaz'),
  handle: chalk.white('@dhruva018'),
  shorthandle: chalk.white('JP'),
  work: chalk.white('Full stack developer'),
  github: chalk.gray('https://github.com/') + chalk.green('Dhruva108'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('juan-díaz-a91200243'),
  npx: `${chalk.red('npx')} ${chalk.white('juandiazdev')}`,
  labelWork: chalk.white.bold('    Work:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:'),
};

const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = heading
               + newline + newline
               + working + newline
               + githubing + newline
               + linkedining + newline
               + carding;

console.log(chalk.green(boxen(output, options)));
