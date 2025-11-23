module.exports = {
  nodeVersion: '18',// 匹配项目所需Node版本
  install: {command: 'npm install'},
  build: {command: 'npm run build',outputDirectory: 'dist'},
  upload: {
    ignore: ['node_modules/**/*','.git/**/*','src/**/*']
  }
};
