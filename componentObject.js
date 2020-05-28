function componentObject () {
    this.create = function(element = "div"){
        this.object = document.createElement(element);
        return this.object;
    }
    this.css = function(key,value) {
        this.object.style[key] = value;
    }
    this.cssObject = function(object) {
        Object.assign(this.object.style,object);
    }
    this.setEvent = function(key,callback) {
        this.object.addEventListen(key,(e) => {
            callback(e);
        });
    },
    this.debug = function(debug = ''){
        switch(debug) {
            default :
                return this.object; 
            break;
            case 'style' :
                return this.object[debug]; 
            break;
            case 'id' :
                return this.object[debug]; 
            break;
            case 'class' :
                return this.object[debug]; 
            break;
            case 'text' :
                return this.object.innerText; 
            break;
        }
    },
    this.childComponent = function(object){
        this.object.appendChild(object);
    },
    this.get = function(){
        return this.object;
    },
    this.attr = function(key,value){
        this.object.setAttribute(key,value);
    }
    this.setText = function(text){
        this.object.innerText = text;
    }
};
export default componentObject;