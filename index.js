class VnNativeJs {
    constructor(config){
        if(config) {
            this.data = config;
            var init = setInterval(() => {
                if ( document.readyState !== 'complete' ) return;
                clearInterval( init );      
                this.route();
            }, 100 );
        }
    }
    route(){
        return new Promise((resole,reject) => {
            let route = document.getElementById("vn-native-router");
            let html;
            if(this.data.routers.length > 0) {
                this.data.routers.forEach(element => {
                        if(element.url === window.location.hash) {
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
    activeRouter(path = ''){
        window.location.href = window.location.origin + path;
        window.location.reload();
    }
}
export default VnNativeJs;