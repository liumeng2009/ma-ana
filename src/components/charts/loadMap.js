export function loadBMap(ak) {
    return new Promise(function(resolve, reject) {
        if (typeof BMap !== 'undefined') {
            // eslint-disable-next-line no-undef
            resolve(BMap);
            return true;
        }
        window.onBMapCallback = function () {
            // let scriptLib = document.createElement('script')
            // scriptLib.type = 'text/javascript'
            // scriptLib.src = 'http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js'
            // document.head.appendChild(scriptLib)
            // scriptLib.onload = () => {
            //     let link = document.createElement('link')
            //     link.rel='stylesheet'
            //     link.href='http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css'
            //     document.head.appendChild(link)
                // eslint-disable-next-line no-undef
                resolve(BMap);
            // }
        };
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
            'http://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=onBMapCallback';
            /* "http://api.map.baidu.com/api?v=3.0&ak=l8ZtGLPdlcmf7hPwRE9MwZar0MBP9VOm&callback=initialize" */
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
