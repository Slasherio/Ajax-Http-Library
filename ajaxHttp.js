/**
 * Function constructor for making new XMLHttpRequest object
 */
function EasyHttpRequest() {
    this.xhr = new XMLHttpRequest();
}

/**
 * HTTP GET METHOD
 * @param {*} url
 * @param {*} callback
 */
EasyHttpRequest.prototype.get = function(url, callback) {
    let self = this;
    self.xhr.open("GET", url, true);

    self.xhr.onload = function() {
        if (self.xhr.status === 200) {
            callback(null, self.xhr.responseText);
        } else {
            callback(`Error ${self.xhr.status} : ${self.xhr.statusText}`);
        }
    };

    self.xhr.send();
};

/**
 * HTTP POST METHOD
 * @param {* url} url
 * @param {* data which you want send} data
 * @param {*} callback
 */
EasyHttpRequest.prototype.post = function(url, data, callback) {
    let self = this;
    self.xhr.open("POST", url, true);
    self.xhr.setRequestHeader("Content-type", "application/json");

    self.xhr.onload = function() {
        callback(null, self.xhr.responseText);
    };

    self.xhr.send(JSON.stringify(data));
};

/**
 * HTTP PUT METHOD
 * @param {*} url
 * @param {*} data
 * @param {*} callback
 */
EasyHttpRequest.prototype.put = function(url, data, callback) {
    let self = this;
    self.xhr.open("PUT", url, true);
    self.xhr.setRequestHeader("Content-type", "application/json");

    self.xhr.onload = function() {
        callback(null, self.xhr.responseText);
    };

    self.xhr.send(JSON.stringify(data));
};

/**
 * HTTP DELETE METHOD
 * @param {*} url
 * @param {*} callback
 */
EasyHttpRequest.prototype.delete = function(url, callback) {
    let self = this;
    self.xhr.open("DELETE", url, true);

    self.xhr.onload = function() {
        if (self.xhr.status === 200) {
            callback(null, "Post Deleted");
        } else {
            callback(`Error ${self.xhr.status} : ${self.status.statusText}`);
        }
    };

    self.xhr.send();
};