export default {
    inserted (el) {
        el.addEventListener(
            'load',
            (e) => {
                const img = e.target;
                const _w = img.naturalWidth;
                const _h = img.naturalHeight;
                const imgWrapper = img.parentNode.parentNode;
                const imgWrapperWidth = imgWrapper.clientWidth;
                if (_w > _h) {
                    // 宽度大于高度 padding: 4
                    img.style.height = (imgWrapperWidth - 8) + 'px';
                    img.style.width = 'auto';
                } else {
                    img.style.width = (imgWrapperWidth - 8) + 'px';
                    img.style.height = 'auto';
                }
            },
            false
        );
    },
    update (el) {
        el.addEventListener(
            'load',
            (e) => {
                const img = e.target;
                const _w = img.naturalWidth;
                const _h = img.naturalHeight;
                const imgWrapper = img.parentNode.parentNode;
                const imgWrapperWidth = imgWrapper.clientWidth;
                if (_w > _h) {
                    // 宽度大于高度 padding: 4
                    img.style.height = (imgWrapperWidth - 8) + 'px';
                    img.style.width = 'auto';
                } else {
                    img.style.width = (imgWrapperWidth - 8) + 'px';
                    img.style.height = 'auto';
                }
            },
            false
        );
    }
};
