import store from "@/store";

export const keepAlive = (route, isCache) => {
    let caches = _.clone(store.getters.keepAlive)
    let name = _.isObject(route)? route.name: route
    if(isCache) {
        if(name) {
            if(!_.includes(caches, name)) {
                caches.push(name)
                return store.dispatch("SetKeepAlive", caches)
            } else {
                return Promise.resolve()
            }
        } else {
            return Promise.resolve()
        }
    } else {
        if(name) {
            if(_.includes(caches, name)) {
                caches =  _.filter(caches, (n) => {
                    return n !== name
                })
                return store.dispatch("SetKeepAlive", caches)
            } else {
                return Promise.resolve()
            }
        } else {
            return Promise.resolve()
        }
    }
}

export const isKeepAlive = (route) => {
    let caches = _.clone(store.getters.keepAlive)
    let name = _.isObject(route)? route.name: route
    if(name) {
        if(_.includes(caches, name)) {
            return true
        }
    }
    return false
}