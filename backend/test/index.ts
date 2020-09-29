import { IncomingMessage, ServerResponse } from "http";

var http = require('http');
var fs   = require('fs');
var url  = require('url');

/**
 * Fetches the test_cdo_data.json file
 */
function getJsonData(data_url:string) {
    let json_content: string = '';

    fs.readFile(data_url, function (err: NodeJS.ErrnoException, json: string) {
        if (err) {
            throw err;
        }
        json_content = json;
    });

    return json_content;
}

/**
 * Initiate a server to allow testing the various components
 */
http.createServer(function (req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    // Figure out which endpoint file we want
    var request_url = url.parse(req.url);
    switch (request_url.path) {
        // Serve up the cdo test datasets
        case "/cdo_data.json":
            res.end(getJsonData('test/test_cdo_data.json'));
            break;
        default:
            res.end('{}');
            break;
    }
}).listen(8080);
