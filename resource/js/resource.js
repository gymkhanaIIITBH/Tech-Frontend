/* Open the sidenav */
$(document).ready((x) => {
          $(".sideBarButton").click((_) => {
            $(".navdesign").css("width", "250px");
          });

          /* Close/hide the sidenav */
          $(".closebtn").click((_) => {
            $(".navdesign").css("width", "0%");
          });
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".navdesign").css("width", "250px");
    }
    else {
              $(".navdesign").css("width", "0");
    }
  });
});
