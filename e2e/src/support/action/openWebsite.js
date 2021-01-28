/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
        export default (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    // browser.windowHandleFullscreen();
    browser.maximizeWindow();
    const url = (type === 'url') ? page : browser.options.baseUrl + page;
    browser.url(url);
    
    // browser.setWindowSize(1920,1080);
};
