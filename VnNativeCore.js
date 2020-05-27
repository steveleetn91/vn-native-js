var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    browserPlatforms = ['Chrome', 'Firefox', 'Safari','Opera','IE'],
    os = null;

let VnNativeCore = {
    setup: function (env = 'prod',ip = '') {
        let scriptSrc = '';
        if(env !== 'prod') {
            if (macosPlatforms.indexOf(platform) !== -1 && userAgent.indexOf(browserPlatforms) !== -1) {
                // macos 
                scriptSrc = 'http://' + ip + ':7070' + '/osx/www/cordova.js';
            } else if (iosPlatforms.indexOf(platform) !== -1 && userAgent.indexOf(browserPlatforms) !== -1) {
                // ios 
                scriptSrc = 'http://' + ip + ':7070' + '/ios/www/cordova.js';
            } else if (windowsPlatforms.indexOf(platform) !== -1 && userAgent.indexOf(browserPlatforms) !== -1) {
                // windows 
                scriptSrc = 'http://' + ip + ':7070' + '/windows/www/cordova.js';
            } else if (/Android/.test(userAgent) && userAgent.indexOf(browserPlatforms) !== -1) {
                // android 
                scriptSrc = 'http://' + ip + ':7070' + '/android/www/cordova.js';
            } else if (!os && /Linux/.test(platform) || userAgent.indexOf(browserPlatforms) === -1) {
                // linux 
                scriptSrc = 'http://' + ip + ':7070' + '/browser/www/cordova.js';
            }
        } else {
            scriptSrc = 'cordova.js';
        }
        let scri = document.createElement('script');
        scri.type = "text/javascript";
        scri.src = scriptSrc;
        document.head.appendChild(scri);
    },
    screen : window,
    device : navigator
}
export default VnNativeCore;