
const CSS = `
body, body * {color: #eeeeee !important;background-color: #222222 !important;}
body img, body video {z-index: 1}
body * {border-color: #555555 !important}
body cite, body cite * {color: #029833 !important}
body :link, body :link * {color: #fff !important}
body input, body textarea {background-color: #333333 !important}
body a {background-color: rgba(255, 255, 255, 0.01) !important}
body:visited, body :visited * {color: rgb(211, 138, 138) !important}
body, body input, body select, body button {background-image: none !important}
img {-webkit-filter: grayscale(100%);filter: grayscale(100%);}
body video {background-color: transparent !important;}
body a:visited{color: #fff!important;}
body .search-bar.search-bar-container .search-submit {border: 1px solid #333!important;}`;

let isEnabled = false;
browser.browserAction.onClicked.addListener((tab) => {
    
    if (!isEnabled) {
        browser.browserAction.setIcon({
            path: {
                96: "icons/moon.svg",
            }
        });
        browser.tabs.insertCSS({code: CSS});
        isEnabled = true;
    } else {
        browser.browserAction.setIcon({
            path: {
                96: "icons/sun.svg",
            }
        });
        browser.tabs.removeCSS({code: CSS});
        isEnabled = false;
    }
});

