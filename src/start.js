/* 101weiqi.com's HTML files are templates; then JavaScript code inserts things
 * like problem type, problem level etc. into the placeholders. So the content
 * modification script needs to run after the templating code. Here we append
 * our script to the end of the HTML document.
*/

// Provide the main script with the resources URL within the extention package
var resourcesScript = document.createElement('script');
resourcesScript.innerText = `const ext101WeiqiImagesURL="${browser.runtime.getURL("images")}"`;
appendScript(resourcesScript);

var s = document.createElement('script');
s.src = browser.runtime.getURL('content.js');
appendScript(s)

function appendScript(script) {
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}
