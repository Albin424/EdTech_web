$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
      $('section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 200;
        var top = $(window).scrollTop();
        if(top >= offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
      });
  
    });
  
  });

  const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => container.classList.add('right_pannel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right_pannel-active'));

function myfunction(){
  document.getElementById("payment").style.display = "block";
}

function myfunction1(){
  document.getElementById("payment").style.display = "none";
}

