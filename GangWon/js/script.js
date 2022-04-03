$(function(){
    //navigation
    $('.lnb').slideUp(0); // 초기에는 lnb가 안보이게 설정

    $('.gnb').mouseenter(function(){ //gnb에 마우스를 올리면
        $(this).find('+ .lnb').stop().slideDown('fast'); //현재 hover된 gnb의 lnb항목을 나타나게 처리

        $(this).parent().mouseleave(function(){ //현재 마우스를 올린 a태그의 부모(li태그)에서 마우스가 떠나면
            $(this).find('.lnb').stop().slideUp('fast'); //lnb가 사라지게 처리
        });
    });

    //slide
    $('.slide a').fadeOut(0); //모든 사진 안보이게 처리
    
    let n = 0; //배열번호 변수
    $('.slide a').eq(n).fadeIn(0); //첫번째 사진만 보이게 처리

    setInterval(function(){ //3초마다 바뀌게 설정

        if(n<2){
            n++; //마지막 사진까지 배열번호 1씩 증가
        }else{
            n = 0;//마지막 사진이면 배열번호 0으로 초기화
        }

        $('.slide a').fadeOut('slow');//모든 사진 안보이게 처리

        $('.slide a').eq(n).fadeIn('slow');//현재 배열번호와 같은 배열에 있는 사지만 보이게 처리
    },3000);

    //board
    //초기설정
    $('.board .tab li').first().addClass('active'); //첫번째 탭 활성화
    $('.contents > div').first().fadeIn(0); //첫번째 컨텐츠(공지사항) 보이게 함

    //탭 클릭시
    $('.board .tab li a').click(function(){
        $('.board .tab li').removeClass('active'); //미리 활성화 된 탭 초기화
        $(this).parent().addClass('active'); //클릭한 탭의 부모(li)요소에 활성화

        let i = $(this).parent().index(); //클릭한 버튼의 부모(li)의 배열번호 변수

        $('.contents > div').fadeOut(0); //모든 컨텐츠 안보이게 처리
        $('.contents > div').eq(i).fadeIn(0); //클릭한 버튼의 부모 배열번호와 같은 컨텐츠 박스만 보이게 처리
    });

    //popup
    $('.popup').fadeOut(0); //팝업창 안보이게 처리

    $('.popupOpen').click(function(){ /*첫번째 리스트 클릭했을 때*/
        $('.popup').fadeIn(0); /*팝업창 보이게 처리*/
    });

    $('.popup a').click(function(){ /*닫기버튼 클릭했을 때*/
        $('.popup').fadeOut(0); /*팝업창 안보이게 처리*/
    });
    
})