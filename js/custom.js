/*************************************************************************
 * Custom JavaScript for Smart Medicine Storage Monitor (MSM)
 * Handles smooth scrolling and interactive UX enhancements
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    // Smooth scrolling for anchor links (handles dynamically loaded menu items)
    $(document).on("click", "a[href^='#']", function (e) {
      var targetId = $(this).attr("href");
      if (targetId && targetId !== "#" && $(targetId).length) {
        e.preventDefault();
        var targetOffset = $(targetId).offset().top - 70; // 70px offset for sticky/fixed headers
        $("html, body").animate(
          {
            scrollTop: targetOffset
          },
          400
        );
      }
    });
  });
})();