    const imgList = document.querySelectorAll('.img img');
    const fixedBox = document.getElementById('fixed-box');
    const innerImg = document.getElementById('inner-img');

    for (let i = 0; i < imgList.length; i++) {
        imgList[i].addEventListener('click', function () {
            console.log('hii');
            
        });
    }

