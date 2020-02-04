const Sequelize = require('sequelize')
const db= require("./db.js")
class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  route: {
    type: Sequelize.VIRTUAL,
    get(){

          return "/wiki/"+this.urlTitle

    },
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {sequelize: db, modelName: 'page' });
Page.addHook("beforeValidate", (page)=>{
  var titulo= page.dataValues.title
  function generateUrlTitle (title) {
  if (title) {
    // Remueve todos los caracteres no-alfanuméricos 
    // y hace a los espacios guiones bajos. 
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generá de forma aleatoria un string de 5 caracteres
    return Math.random().toString(36).substring(2, 7);
  }
}

 page.dataValues.urlTitle= generateUrlTitle(titulo)
})
module.exports = Page
