https://www.youtube.com/watch?v=G_XyAfcLeqI&list=LL&index=5&t=4s

client
https://vitejs.dev/guide/

server
https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change

Difference between Ts and Js
In Ts

- instead of running with “node index.js”, you have to install “ts-node” and run “ts-node index.js”
- Require doesn’t work, it uses the import statement.
- When you import express, mongoose and cors, it doesn’t run without you installing @type/express, @type/mongoose, @type/cors respectively as a dev dependency actually, using “npm i —save-dev”
- Nodemon doesn’t automatically track your file changes, you have to write it out manually how you want it to monitor your changes
- I noticed node router wasn’t used
- npm run dev to run vite
- Ts shows error while writing, unlike Js that doesn’t
