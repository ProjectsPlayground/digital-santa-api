var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'digital-santa-api'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/digital-santa-api-development',
    storage: rootPath + '/data/digital-santa-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'digital-santa-api'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/digital-santa-api-test',
    storage: rootPath + '/data/digital-santa-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'digital-santa-api'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/digital-santa-api-production',
    storage: rootPath + 'data/digital-santa-api-production'
  }
};

module.exports = config[env];
