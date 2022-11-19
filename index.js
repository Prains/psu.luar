$(document).ready(() => {
  const aboutLayer = $(".about_hiddenlayer");
  const aboutButton = $(".about_content_wrapper_button");
  const arrow = $(".about_arrow");
  const bottomSliderDots = $(".reviews_slider_paganation_button");
  const sliderButtonLeft = $(".reviews_slider_button_prev");
  const sliderButtonRight = $(".reviews_slider_button_next");
  const bottomDotsWrapper = $(".reviews_slider_paganation");
  const slides = $(".reviews_slider_slide");
  let count = 0;
  aboutLayer.hide();
  aboutButton.click(() => {
    aboutLayer.slideToggle();
    arrow.toggleClass("about_rotate");
  });
  bottomSliderDots.hide();
  $(slides).hide();
  $(slides[0]).addClass("toggled").show();

  sliderButtonRight.click(() => {
    slides.hide();
    count++;
    if (count == slides.length) {
      count = 0;
    }
    resetBottomDots();
    $(bottomSliderDots[count]).addClass(
      "reviews_slider_paganation_button_active"
    );
    $(slides[count]).fadeIn();
  });
  sliderButtonLeft.click(() => {
    slides.hide();
    count--;
    if (count == -1) {
      count = slides.length - 1;
    }
    resetBottomDots();
    $(bottomSliderDots[count]).addClass(
      "reviews_slider_paganation_button_active"
    );
    $(slides[count]).fadeIn();
  });

  for (let i = 0; i < slides.length; i++) {
    $(bottomSliderDots[i]).show();
  }

  function resetBottomDots() {
    for (let i = 0; i < bottomSliderDots.length; i++) {
      $(bottomSliderDots[i]).removeClass(
        "reviews_slider_paganation_button_active"
      );
    }
  }

  for (let i = 0; i < slides.length; i++) {
    $(bottomSliderDots[i]).attr("index", [i]);
  }

  bottomSliderDots.click((evt) => {
    slides.hide();
    let index = $(evt.target).attr("index");
    resetBottomDots();
    $(evt.target).addClass("reviews_slider_paganation_button_active");
    $(slides[index]).fadeIn();
  });
});
