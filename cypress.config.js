const { defineConfig } = require("cypress");
// Allure report 
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({

  //repport "module"dedié pour la partie mookawson
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      //const envName = config.env.configFile || "recette" //recuper le nom du fichier de config a utiliser la recette c'est par default et c'est le bon 
      //const envConfig = require(`./cypress/config/${envName}.json`) //recupere le chemin de fichier et lire le contenue et le mettre dans envConfig 
      //config = {...config,...envConfig} // fusionnement de deux objet, ajoute le contenu de la fiche à la config de Cypress. pour cypress onnaitre le baseUrl.
      // implement node event listeners here
      // pour les tags 
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin")
      cypressGrepPlugin(config)

      //alure 
      allureCypress(on, config, {
     resultsDir: "./allure-results",
      })
      return config
    },
  },
});
