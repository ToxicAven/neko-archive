const urlExist = require("url-exist-sync");
const fs = require('fs')
const { DownloaderHelper } = require('node-downloader-helper');

var n = 1
fs.mkdir('./images', { recursive: true }, (err) => { if (err) throw err; });
loop(n)
function loop (n) {

    if (n.toString().length == 1) {
        n = "00" + n;
    }
    if (n.toString().length == 2) {
        n = "0" + n;
    }
    var urlupng = "https://cdn.nekos.life/neko/neko_" +  n + ".png"
    var urlujpg = "https://cdn.nekos.life/neko/neko_" +  n + ".jpg"
    var urlujpeg = "https://cdn.nekos.life/neko/neko_" +  n + ".jpeg"
    checkpng(urlupng, n);
    checkjpg(urlujpg, n);
    checkjpeg(urlujpeg, n);
}

function checkpng (urlx, n) {
    const exists = urlExist(urlx);
        if (exists) {
            console.log("downloading " + n + ".png")
            const dl = new DownloaderHelper(urlx, __dirname + "/images/");
            dl.on('end', () => {
                console.log('Download Completed')
                n++
                loop(n)
                })
            dl.start();
    }
}

function checkjpg (urlx, n) {
    const exists = urlExist(urlx);
        if (exists) {
            console.log("downloading " + n + ".jpg")
            const dl = new DownloaderHelper(urlx, __dirname + "/images/");
            dl.on('end', () => {
                console.log('Download Completed')
                n++
                loop(n)
                })
            dl.start();
    }
}

function checkjpeg (urlx, n) {
    const exists = urlExist(urlx);
        if (exists) {
            console.log("downloading " + n + ".jpeg")
            const dl = new DownloaderHelper(urlx, __dirname + "/images/");
            dl.on('end', () => {
                console.log('Download Completed')
                n++
                loop(n)
                })
            dl.start();
    }
}
