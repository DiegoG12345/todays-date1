const http = require('http');


app.get('/some/api/endpoint',  (req, res) => {

    http.get('https://randomuser.me/', (resp) => {
        let data = '';

       
        resp.on('data', (chunk) => {
          data += chunk;
        });

      
        resp.on('end', () => {
          res.json(JSON.parse(data));
        });

      }).on("error", (err) => {
        res.json("Error: " + err.message);
      });
});