
    const images = [
        { id: 1, src: './images/s_img1.jpg', title: 's_bg1' },
        { id: 2, src: './images/s_img2.jpg', title: 's_bg2' },
        { id: 3, src: './images/s_img3.jpg', title: 's_bg3' },
        { id: 4, src: './images/logo.png', title: 'logo' },
        { id: 5, src: './images/b_p1.png', title: 'b_p1' },
        { id: 6, src: './images/b_p2.jpg', title: 'b_p2' },
        { id: 7, src: './images/b_p3.jpg', title: 'b_p3' },
    ];
    function getImgBytTitle(title) {
        let _image = undefined;
        images.forEach(image => {
            if(title == image.title) _image = image.src;
        });
        return _image;
    }
export default getImgBytTitle;