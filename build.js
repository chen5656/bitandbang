'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Huajun Chen'),
  handle: chalk.white('Amanda'),
  work: chalk.white('GIS Developer at Cognizant'),
  // twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bitandbang'),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.green('chen5656'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('huajun-chen'),
  // web: chalk.cyan('https://bnb.im'),
  npx: chalk.red('npx') + ' ' + chalk.white('huajunchen'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               githubing + newline + // data.labelGitHub + data.github
              //  twittering + newline + // data.labelTwitter + data.twitter
              //  npming + newline + // data.labelnpm + data.npm
              //  webing + newline +
               newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
