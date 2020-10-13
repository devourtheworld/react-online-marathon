function getPromise(delay, message) {
    return {
        then: function (callback){
            callback(message)
        }
    }
}
