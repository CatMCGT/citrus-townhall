const { readdirSync } = require('fs')

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentFolders = readdirSync(`./components`);
    for (const folder of componentFolders) {
      const componentFiles = readdirSync(`./components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { buttons, selectMenus } = client;

      // switch (folder) {
      //   case "buttons":
      //     for (const file of componentFiles) {
      //       const button = require(`../../components/${folder}/${file}`);
      //       buttons.set(button.data.name, button);
      //     }
      //   case "selectMenus":
      //     for (const file of componentFiles) {
      //       const menu = require(`../../components/${folder}/${file}`);
      //       selectMenus.set(menu.data.name, menu);
      //     }
      //     break;
          
      //   default:
      //     break;
      // }
    }
  }
}