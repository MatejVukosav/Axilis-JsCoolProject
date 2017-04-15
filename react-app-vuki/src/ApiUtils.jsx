'use-strict'

function checkStatus(res,err) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    } else {
        console.log({err});
      /*  let error = new Error(res.statusText);
        error.response = response;*/
        throw err;
    }
}

module.exports = {
    checkStatus
}