/* 101weiqi.com's HTML files are templates; then JavaScript code inserts things
 * like problem type, problem level etc. into the placeholders. So the content
 * modification script needs to run after the templating code. Here we append
 * our script to the end of the HTML document.
*/

var s = document.createElement('script');
s.src = browser.runtime.getURL('content.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
