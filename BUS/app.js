const app = require('http');
const url = require('url');
const request = require('request');

const port = 3001;
let sessions = [];

function checkSession(userId) {
    console.log(session)
    let user = sessions.find((user) => user.id === userId);

    return (user != null || user != undefined) ? -1 : user.role;
}

function deleteSession(userId) {
    let user = checkSession(userId);
    if (user !== -1) {
        sessions.splice(user, 1);
    }
}

app.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(`${req.method} ${req.url}`);
    switch (req.method) {
        case 'GET':
            break;
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default: break;
    }
}).listen(port, err => {
    if (err != null) {
        console.log('==> Error: ', err);
    } else {
        console.log('Server is starting at port ' + port);
    }
}) 