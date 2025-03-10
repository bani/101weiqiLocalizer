// Keep the entries sorted. Put the longest entries first because we iterate
// over them in this order. And we want, for example, '職業四段' to be
// translated as '4p', not as '職業四dan'.

const originalImagesURL = 'https://static2.101weiqi.com/static/images/';
const localizableAttributes = [ 'label', 'title', 'placeholder' ];
const localizableSelectors = localizableAttributes.map((a) => `[${a}]`)

const pageLocalizers = findPageLocalizers();

locAll(recursiveReplace, document.body)
locAll(replaceAttributes)
locAll(replaceImageSources, document.body)

let observer = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(m => {
        if (m.type == 'characterData') {
            observer.disconnect()    // avoid infinite loops
            m.target.nodeValue = locAllStr(m.target.nodeValue)
            observe()
        } else if (m.type == 'childList') {
            observer.disconnect()    // avoid infinite loops
            m.addedNodes.forEach(node => locAll(recursiveReplace, node))
            observe()
        } else if (m.type == 'attributes') {
            observer.disconnect()    // avoid infinite loops
            if (localizableAttributes.indexOf(m.attributeName) >= 0) {
                m.target[m.attributeName] = locAllStr(m.target[m.attributeName])
            }
            observe()
        }
    })
})

const observe = () => {
    observer.observe(document, {
        characterData: true,
        childList: true,
        subtree: true,
        attributeFilter: localizableAttributes,
    });
}

observe()

/*
    Recurse through DOM elements.  If element is a text element process it, otherwise recurse.
*/
function recursiveReplace(loc, node) {
    if (node.nodeType == 3 && node.nodeName != 'SCRIPT') {
        node.nodeValue = replaceInString(loc, node.nodeValue)
    } else if (node.nodeType == 1 && node.nodeName != 'SCRIPT' && node.nodeName != 'STYLE') {
        var child = node.firstChild;
        while (child) {
        	  recursiveReplace(loc, child);
        	  child = child.nextSibling;
        }
    }
}

function replaceInString(loc, s) {
    if (s) {
        for (const re of loc.regExps) {
            s = s.replace(re.regExp, re.replace);
        }
        for (const [key, value] of Object.entries(loc.texts)) {
            // add a space because Chinese doesn't have spaces
            s = s.replace(key, ' ' + value + ' ')
        }
    }
    return s
}

function replaceAttributes(loc) {
    for (let i = 0; i < localizableSelectors.length; i++) {
        const attribute = localizableAttributes[i];
        const selector = localizableSelectors[i];
        document.querySelectorAll(selector).forEach((el) => {
            el[attribute] = replaceInString(loc, el[attribute])
        });
    }
}

function replaceImageSources(loc, node) {
    const extensionRootURL = ext101WeiqiImagesURL + '/';
    node.querySelectorAll('img').forEach(img => {
        if (img.src.startsWith(originalImagesURL)) {
            const imgPath = img.src.substring(originalImagesURL.length);
            if (loc.images.indexOf(imgPath) >= 0) {
                img.src = extensionRootURL + imgPath;
            }
        }
    })
}

/**
 * Returns an array of localizers for the current page. The array is ordered
 * from most specific to most general (which is the root localizer '').
 */
function findPageLocalizers() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const locNames = ['', '/'];
    let locName = '';
    for (const part of pathParts) {
        locName += '/' + part;
        locNames.push(locName);
    }
    return locNames
      .reverse()
      .map((part) => ext101WeiqiLocalizers[part])
      .filter(Boolean);
}

/**
 * Calls the given function with the current page's localizers.
 */
function locAll(func, ...args) {
    pageLocalizers.forEach(loc => func(loc, ...args));
}

/**
 * Localizes a string using all the current page's localizers.
 */
function locAllStr(str) {
    let s = str;
    if (s) {
        for (const loc of pageLocalizers) {
            s = replaceInString(loc, s);
        }
    }
    return s;
}
