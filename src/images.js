const images = [
    { id: 1, src: './images/s_img1.png', title: 's_bg1' },
    { id: 2, src: './images/s_img2.jpg', title: 's_bg2' },
    { id: 3, src: './images/s_img3.jpg', title: 's_bg3' },
    { id: 4, src: './images/logo.png', title: 'logo' },
    { id: 5, src: './images/b_p1.png', title: 'b_p1' },
    { id: 6, src: './images/b_p2.jpg', title: 'b_p2' },
    { id: 7, src: './images/b_p3.jpg', title: 'b_p3' },
    { id: 8, src: './images/w1.jpg', title: 'w1' },
    { id: 9, src: './images/w2.jpg', title: 'w2' },
    { id: 10, src: './images/w3.jpg', title: 'w3' },
    { id: 11, src: './images/w4.jpg', title: 'w4' },
    { id: 12, src: './images/w5.jpeg', title: 'w5' },
    { id: 13, src: './images/w6.jpg', title: 'w6' },
    { id: 14, src: './images/w7.jpg', title: 'w7' },
    { id: 15, src: './images/w8.jpg', title: 'w8' }
];

export function getImgByTitle(title) {
    let _image = undefined;
    images.forEach(image => {
        if (title == image.title) _image = image.src;
    });
    return _image;
}

export function getImgById(id) {
    const found = images.find(element => element.id == id);
    if (found) return found.src;
    else return undefined;
}
export function getPages(pagination) {
    const pages = Math.ceil(images.length / pagination);
    console.log(`Pages : ${pages}`);
    return pages;
}