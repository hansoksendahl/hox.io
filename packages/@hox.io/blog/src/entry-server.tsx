// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Sono&display=swap');
          </style>
          {assets}
        </head>
        <body>
          <div id='root'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
