/* 101weiqi.com's HTML files are templates; then JavaScript code inserts things
 * like problem type, problem level etc. into the placeholders. So the content
 * modification script needs to run after the templating code. Here we append
 * our script to the end of the HTML document.
*/

appendScriptText(`const ext101WeiqiImagesURL="${browser.runtime.getURL('images')}"`)
    .then(() => appendScriptFile('localizers.js'))
    .then(() => appendScriptFile('content.js'));

function appendScriptText(text) {
    var script = document.createElement('script');
    script.innerText = text;
    (document.head || document.documentElement).appendChild(script);
    return Promise.resolve();
}

function appendScriptFile(file) {
    var script = document.createElement('script');
    script.src = browser.runtime.getURL(file);
    return new Promise((resolve) => {
        script.onload = function() {
            this.remove();
            resolve();
        };
        (document.head || document.documentElement).appendChild(script);
    });
}
