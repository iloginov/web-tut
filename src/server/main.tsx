import * as express  from 'express';
import * as React    from 'react';
import * as ReactDom from 'react-dom/server';
import App           from '../components/App';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const componentHTML = ReactDom.renderToString(<App />);

  return res.end(renderHTML(componentHTML));
});

function renderHTML(componentHTML: string) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/assets/client.js"></script>
      </body>
    </html>
  `;
}

app.listen(3000, () => {
  console.log('Server listening on: 3000');
});
