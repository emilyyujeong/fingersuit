//top banner

const TOP_BANNER = document.querySelector('.topBanner');

const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');

const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const TOP_BANNER_SLIDE_OPTION = {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    speed: 300,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }



};

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);


//gnb

const HD_WRAP = document.querySelector('#header .hdWrap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER);


//search

const icon = document.querySelector('#icon');
const target = document.querySelector('#search');

icon.addEventListener("click", function (event) {
    event.preventDefault();
    target.style.width = "200px";
    target.style.transition = "0.5s";
});





//mainVisual

const MAIN_VISUAL_SLIDE_OPTION = {
    spaceBetween: 30,

    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

}

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);


//mainCollectionProduct Slide


const MAIN_COLLECTION_SLIDE_OPTION = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}

const MAIN_COLLECTION_SLIDE = new Swiper('.collection_pro', MAIN_COLLECTION_SLIDE_OPTION);


//Styleboard - magazine pics slide



const STYLEBOARD_SLIDE_OPTION = {

    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}

const STYLEBOARD_SLIDE = new Swiper('.style_board', STYLEBOARD_SLIDE_OPTION);


//toTop 

const TO_TOP = document.querySelector('#toTop');
const BODY = document.querySelector('html, body');


console.log(window);
const TOGGLE_TOP_BTN = () => {
    let SCT = window.scrollY;
    SCT > 500
        ? TO_TOP.classList.add('on')
        : TO_TOP.classList.remove('on')
}

window.addEventListener('scroll', TOGGLE_TOP_BTN);



const WINDOW_TOP = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
}
TO_TOP.addEventListener('click', WINDOW_TOP)



//로그인페이지

function loginCheck() {
    let loginForm = document.loginForm;
    let mb_id = document.getElementById('mb_id').value;
    let mb_pw = document.getElementById('mb_pw').value;

    if (mb_id == "") {
        alert("아이디를 입력해주세요.");
    } else if (mb_pw == "") {
        alert("비밀번호를 입력해주세요.");
    } else {
        loginForm.submit();
        alert("로그인에 성공했습니다!")
        loginForm.action = "<?php echo G5_THEME_URL ?>/index.php";
        //인덱스로 이동할수 있는지 시험해보기
        //submit - action 데이터 이동
    }

}


//카카오로그인

Kakao.init('b528263edc5755e1f0893bb6f79851b3');
function kakaoLogin() {
    Kakao.Auth.login({
        success: function (response) {
            Kakao.API.request({
                url: '/v2/user/me',
                success: function (response) {
                    console.log(response)
                },
                fail: function (error) {
                    console.log(error)
                },
            })
        },
        fail: function (error) {
            console.log(error)
        },
    })
}

