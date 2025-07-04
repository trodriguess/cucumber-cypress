import 'cypress-mochawesome-reporter/cucumberSupport';

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotPath = `screenshots/${Cypress.spec.name}/${screenshotFileName}`;
    addContext({ test }, screenshotPath);
  }
});

Cypress.Commands.add('addTestContext', (context) => {
  // Você pode adaptar o conteúdo abaixo conforme sua lógica
  // Exemplo: adicionar ao mochawesome via addContext
  const addContext = require('mochawesome/addContext');

  Cypress.on('test:after:run', (test) => {
    addContext({ test }, context);
  });
});