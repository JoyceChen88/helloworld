export const setTitle = (title) => {
    document.title = title || document.title;
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger" && !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)){
        var ifr = document.createElement('iframe')
        ifr.src = "/favicon.ico";
        ifr.onload = function() {
            setTimeout(function(){
                ifr.remove();
            }, 0)
        }
        document.body.appendChild(ifr);
    }
}