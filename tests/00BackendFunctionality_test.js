Feature('Scenarios/03ExploreBackendFunctionality');

Before((I, loginAs) => { // or Background
    loginAs('vendor'); 
  });

Scenario('test something', (I) => {
    I.waitForElement('#content', 5);
});
