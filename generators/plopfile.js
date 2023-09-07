module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?"
      }
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/component.test.tsx.hbs"
      }
    ]
  });
};
