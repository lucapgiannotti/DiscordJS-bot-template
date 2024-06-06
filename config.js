require('dotenv').config();
module.exports = {
	app: {
	  token: process.env.TOKEN,
	  playing: '/create', 
	  global: true,
	},
  };