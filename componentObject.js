function componentObject () {
    this.create = function(element = "div"){
        this.object = document.createElement(element);
        return this.object;
    };
    this.css = function(key,value) {
        this.object.style[key] = value;
    },
    this.setEvent = function(key,callback) {
        this.object.addEventListen(key,(e) => {
            callback(e);
        });
    },
    this.debug = function(){
        return this.object.toString();
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
        this.object.innnerText = text;
    }
};
export default componentObject;