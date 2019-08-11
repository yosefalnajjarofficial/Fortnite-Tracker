const test = require('tape');
const supertest = require('supertest');

const app = require('../../src/app');

exports = test('testing the home page', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) t.error(err);
      t.equal(res.text, '<h1>Hello World</h1>', 'The response should be an h1 tag');
      t.end();
    });
});
