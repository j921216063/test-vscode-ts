"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
let server = http.createServer(app_1.default);
let port = process.env.PORT || '3000';
server.listen(port, () => {
    console.log('============');
    console.log(`Server is listen: ${port}`);
    console.log('============');
});
//# sourceMappingURL=main.js.map