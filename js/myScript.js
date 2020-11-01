var transitionToCard;

function change() {
  transitionToCard = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("mainBody").style.display = "block";
  document.getElementById("particles-js").style.visibility = "visible";
  document.getElementById("footer").style.display = "flex";
}

particlesJS.load('particles-js', 'particles.json', function () { });


function playAudioOpen() {
  setTimeout(function () {
    document.getElementById("myAudioOpen").play();
  }, 50)
}

function playAudioClose() {
  setTimeout(function () {
    document.getElementById("myAudioClose").play();
  }, 1050)
}

(function (jq, doc, win) {

  handleClickOnExitButton = function (e) {
    parentCard = $(e.currentTarget).parents('article.card');
    parentCard.toggleClass('open');
  }

  handleClickOnCard = function (e) {
    if ($('article.card').hasClass('open') === true) {
      return;
    }
    if ($(e.target).is('button.close-card')) {
      e.preventDefault();
      return;
    }
    $(e.currentTarget).toggleClass('open');
  }

  var init = function () {
    $('button.close-card').on('click', handleClickOnExitButton);
    $('article.card:not(button.close-card)').on('click', handleClickOnCard);
  }

  $(doc).ready(init);

}($, document, window))

var typeLoad = new Typed('#typeLoad', {
  strings: ['<span style="color:#0067ac; font-weight:bold;">T</span><span style="color:#de412e; font-weight:bold;">D</span><span style="color:#0067ac; font-weight:bold;">T</span>'],
  typeSpeed: 140,
  showCursor: false,
});

var typed = new Typed('#typed', {
  strings: ['🌹Một bông hồng em dành tặng cô🌹<br>🎶Một bài ca hát riêng tặng thầy🎶<br>🎁Những món quà bé nhỏ đơn sơ🎁<br>❤️Nhưng chứa chan niềm kính yêu vô bờ❤️<br><br><br>Chúc mừng ngày nhà giáo Việt Nam 20/11', 'Click on me!'],
  startDelay: 2100,
  typeSpeed: 40,
  showCursor: false,
  backSpeed: 50,
  // loop: true,
  // loopCount: Infinity,
  // backDelay: 1000,
});

$('.f-building').click(
  function () {
    $('.intro, .c_building, .a_building, .b_building, .e_building').hide();
    $('.f_building').show();
  }
),


  $('.c-building').click(
    function () {
      $('.intro, .f_building, .a_building, .b_building, .e_building').hide();
      $('.c_building').show();
    }
  ),


  $('.a-building').click(
    function () {
      $('.intro, .c_building, .f_building, .b_building, .e_building').hide();
      $('.a_building').show();
    }
  ),

  $('.b-building').click(
    function () {
      $('.intro, .c_building, .a_building, .f_building, .e_building').hide();
      $('.b_building').show();
    }
  ),

  $('.e-building').click(
    function () {
      $('.intro, .c_building, .a_building, .b_building, .f_building').hide();
      $('.e_building').show();
      setTimeout(function () {
        document.getElementById("partAway").play();
      }, 50);
    }
  );