class VnNativeJs {
    constructor(config){
        if(config) {
            this.data = config;
            setTimeout(() => {
                var init = setInterval(() => {
                    if ( document.readyState !== 'complete' ) return;
                    clearInterval( init );      
                    this.route();
                }, 200 );
            },1000);
        } 
    }
    route(){
        return new Promise((resole,reject) => {
            let route = document.getElementById("vn-native-router");
            let html;
            if(this.data.routers.length > 0) {
                this.data.routers.forEach(element => {
                        let pathname = window.location.pathname.split('/');
                        let url = pathname[pathname.length - 1];
                        if(element.url === url) {
                            html = element.component.render();
                        }
                });
            }
            route.appendChild(html);
            /**
             * Listen event change router 
             */
            return resole(true);
        });
    }
    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    randomString(length = 15) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
      
        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }
        return os;
    }
}
export default VnNativeJs;