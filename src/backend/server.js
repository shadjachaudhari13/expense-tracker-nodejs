const express = require('express');
import routes from './routes/rest-api';
import { join } from 'path';

const app = express();
const port = 3000;

app.use('/', routes);
app.all('/server.*', function (req,res, next) {
    res.status(403).send({
       message: 'Access Forbidden'
    });
 });
app.use(express.static('dist'));
app.get('/admin', function(request, response) {
    response.sendFile(join(__dirname, './../frontend/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 