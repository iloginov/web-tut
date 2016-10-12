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

//
//  We need override assetUrl for dev environment to make webpack-dev-server work correctly:
//  https://webpack.github.io/docs/webpack-dev-server.html#combining-with-an-existing-server 
//
const assetUrl = 'http://localhost:3000';

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
        <script type="application/javascript" src="${assetUrl}/assets/client.js"></script>
      </body>
    </html>
  `;
}

app.listen(4000, () => {
  console.log('Server listening on: 4000');
});
                                                                                                                                                                                                                                                                                                                                                                                                                