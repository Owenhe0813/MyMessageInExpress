function readFile(url) {
    return new Promise((resolve, reject) => {
        this.readFile(url, { flag: 'r' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function readDir(url) {
    return new Promise((resolve, reject) => {
        this.readdir(url, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

module.exports = { readFile, readDir }