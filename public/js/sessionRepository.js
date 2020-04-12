const sessionUrl = 'sessions.json';

let sessionList = [];

function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionUrl, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

// when app js uses default import for sessionTemplate
// export { getSessions as default, sessionUrl };

// module aggregation
export { getSessions as default, sessionUrl };
export { sessionTemplate } from './template.js';