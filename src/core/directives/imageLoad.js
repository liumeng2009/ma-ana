import ImageLoadingPng from '@/assets/img/loading.png';
import ImageLoadingPngSmall from '@/assets/img/loading-small.png';
import ImageLoadingErrorPng from '@/assets/img/load-failed.png';
import ImageLoadingErrorPngSmall from '@/assets/img/load-failed-small.png';
export default {
    inserted (el) {
        const parent = el.parentElement;
        // const parentWidth = parent.clientWidth - 16
        // 删除上一次的newImg
        Array.from(parent.children).forEach(element => {
            if (element.className === 'insertImg') {
                parent.removeChild(element);
            }
        });
        // 增加这次的
        const imgWidth = el.clientWidth;
        let imgUseLoading;
        let imgUseError;
        if (imgWidth < 250) {
            imgUseLoading = ImageLoadingPngSmall;
            imgUseError = ImageLoadingErrorPngSmall;
        } else {
            imgUseLoading = ImageLoadingPng;
            imgUseError = ImageLoadingErrorPng;
        }
        const imgUrl = el.src;
        el.src = imgUseLoading;
        const newImg = document.createElement('img');
        newImg.classList.add('insertImg');
        newImg.style.display = 'none';
        newImg.src = imgUrl;
        parent.append(newImg);

        newImg.addEventListener('load', () => {
            el.src = imgUrl;
        }, false);

        newImg.addEventListener('error', () => {
            el.src = imgUseError;
        }, false);
    },
    update (el) {
        const parent = el.parentElement;
        // const parentWidth = parent.clientWidth - 16
        // 删除上一次的newImg
        Array.from(parent.children).forEach(element => {
            if (element.className === 'insertImg') {
                parent.removeChild(element);
            }
        });
        // 增加这次的
        const imgWidth = el.clientWidth;
        let imgUseLoading;
        let imgUseError;
        if (imgWidth < 250) {
            imgUseLoading = ImageLoadingPngSmall;
            imgUseError = ImageLoadingErrorPngSmall;
        } else {
            imgUseLoading = ImageLoadingPng;
            imgUseError = ImageLoadingErrorPng;
        }
        const imgUrl = el.src;
        el.src = imgUseLoading;
        const newImg = document.createElement('img');
        newImg.classList.add('insertImg');
        newImg.style.display = 'none';
        newImg.src = imgUrl;
        parent.append(newImg);

        newImg.addEventListener('load', () => {
            el.src = imgUrl;
        }, false);

        newImg.addEventListener('error', () => {
            el.src = imgUseError;
        }, false);
    }
};
