$(function () {
  let menuLink = $(".menu-link");
  let sectionTab = $(".tab-pane");
  let hireLink = $(".hire-link");
  $.each(menuLink, function (index, value) {
    $(this).on("click", function () {
      $(".active-nav-item").removeClass("active-nav-item");
      $(".menu-link").addClass("nav-item-link");
      $(this).toggleClass("active-nav-item");
      sectionTab.hide();
      $(sectionTab[index]).show();
      hireLink.show();
    });
  });
});
