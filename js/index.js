$(document).ready(function () {
             
    $('.fa-align-justify').click(function (e) { 
        $('.sidebar_main').fadeIn();
        $('body').css({
            'overflow': 'hidden',
        });
        $('.sidebar_main').css({
            'display': 'flex',
        });
        $('div.items li a').css({
            'color':'white',
            'transition': 'all 0.5s',
            'padding': '0 10px',
            'display': 'block',
            'font-weight': '500',
            'font-size':'1.1em',
        })
        $('.sidebar_main').addClass('sidebar_main_on');
        $('div.items li ul').css('color', '#fff');
        $('a').click(function (e) { 
            e.preventDefault();
            href =this.href
            $('.sidebar_main').fadeOut(500, function () {
                window.open(href,"_self")
            });
        });
        $('.off').click(function (e) { 
            $('.sidebar_main').fadeOut();
            $('body').css({
                'overflow': 'auto',
            });
            $('.Index_side>a,.Fenlei_side>a,.Api_side>a,.Link_side>a,.About_side>a').css({
                'color':'#333 !important',
                'transition': 'all 0.5s',
                'padding': '0 10px',
                'display': 'block',
                'font-weight': '500',
            })
            $('.post-title-link').css({
                    'font-size': '24px',
                    'margin': '0',
                    'padding': '0',
                    'align-self': 'center',
                    '-webkit-line-clamp': '1',
                    'overflow': 'hidden',
                    'line-height': '27px',
                    'display': '-webkit-box',
                    '-webkit-box-orient': 'vertical',
            })
            /*
            $('.sidebar_main').removeClass('sidebar_main_on');
            $('.sidebar_main').css({
                'display': 'none'
            });*/
        });
    });
    hrefs = window.location.href.split('/')
    console.log(hrefs)
    lists_=['categories','archive',' ']
    const element = hrefs[3];
    for (let i = 0; i < hrefs.length; i++) {
        if (element==lists_[i]){
            console.log(element)
        }
    }
});