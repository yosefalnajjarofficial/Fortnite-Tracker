const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server is running in http://localhost:${app.get('port')}`);
});
