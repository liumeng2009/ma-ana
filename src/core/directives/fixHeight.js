export default {
    inserted (el) {
        setTimeout(() => {
            const _w = el.clientWidth;
            el.style.height = _w + 'px';
        }, 0);
    },
    update (el) {
        setTimeout(() => {
            const _w = el.clientWidth;
            el.style.height = _w + 'px';
        }, 0);
    }
};
