# Cypress demo tests

### Cypress example tests for GitHub

An example implementation of Cypress tests with a GitHub workflow 
that generates a HTML report published on GitHub Pages.

## Features
- Grep filtering of test cases by substrings of their names and/or Tags
- GitHub workflow with cron scheduling, Docker images, Artifacts storage, and 
HTML reporting on GitHub Pages

## Local Installation
```sh
npm install
npm install --save-dev cypress@9.7.0
```

## Command line (CLI) execution examples
Run tests with the web browser (test runner) user interface (for debugging purposes):
```sh
npx cypress open
```
Run tests headlessly:
```sh
npx cypress run
```
Run tests with the substring "Check" in the title (passed as an environment variable):
```sh
npx cypress run --env grep=Check
```
Run tests with the Tag "@smoke" (passed as an environment variable):
```sh
npx cypress run --env grepTags=@smoke
```
HTML Report generation (2 steps):
```sh
npm run report:merge
npm run report:generate
```

## GitHub example workflow
The GitHub example workflow uses a cron schedule to trigger a build on every push 
and runs at minute 5 past every 3rd hour from 0 through 23.

It uses [Docker Hub images] with all operating system dependencies and some pre-installed 
browsers provided by Cypress.

It merges all mochawesome report JSON files into one single JSON file and then generates 
a HTML report from this merged JSON file. The HTML report then gets published on 
GitHub Pages (a static web site on GitHub).

All Artifacts get attached as a zip file to the build results (in the "Actions" section 
of GitHub). Artifacts include the HTML test reports, videos of the test executions, and 
screenshots of test failures (on failed tests only).

## NPM package used
The example implementation uses this NPM package:
- [cypress-grep] - Enables filtering of test cases by substrings of their names and/or Tags. 
The filtering can be done via environment variables.

[//]: #
[Docker Hub images]: <https://hub.docker.com/r/cypress/browsers/tags>
[cypress-grep]: <https://www.npmjs.com/package/cypress-grep>
