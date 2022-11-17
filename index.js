
$(document).ready(() => {
  const aboutLayer = $(".about_hiddenlayer");
  const aboutButton = $(".about_content_wrapper_button");
  const arrow = $(".about_arrow");

  aboutLayer.hide();

  aboutButton.click(() => {
    aboutLayer.slideToggle();
    arrow.toggleClass("about_rotate");
  });

});
