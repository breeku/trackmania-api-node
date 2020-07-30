# Contributing

## Get started

First of all **[fork](https://guides.github.com/activities/forking/)** the repo, then if you dont already have, install **[nodejs](https://nodejs.org/en/download/)**. If you're running VSCode you should install TSlint and Prettier extensions.

After that's done, go ahead and do `npm i` in the project root.

Now, if you want to be able to run test's, you will need to get proper enviroment variables.

Create `.env` in project root and add `EMAIL=your email` and `PASSWORD=your password`.

Then do `npm run config:create` to create temporary credentials for the test to run from.

Now you can watch and rebuild the project on save, and rerun relevant tests, do `npm run watch`

Project has prehooks for commit and push to reset the test credentials file, you can do that manually by `npm run config:reset`

If anything's unclear, package.json has the npm scripts and information about them.

## Features

Now, for example if you wanted to add a new endpoint to the module, here's a quick run down how that would happen.

First of all, file names go by the endpoint, for example prod.trackmania.core.nadeo.online is prod-trackmania. Test file will always be named {filename}.spec.ts.

Then, to get started adding a endpoint, you should reference how any other endpoint is done.

1. Pick a endpoint you wish to add from the **[api documentation repo](https://github.com/The-Firexx/trackmania2020apidocumentation)**
2. Create test, console.log the response
3. Create function
4. Run the test (you can add test.only() to only run the relevant test)
5. From the response, create types.
