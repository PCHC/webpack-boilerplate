// Import jQuery
import jQuery from "jquery";

// Import everything from autoload
import "./autoload/**/*";

jQuery(document).ready(($) => {
  const $navToggle = $('#menu-toggle');
  const $nav = $('header > nav');
  const $navLink = $('nav a');
  const activeClass = 'is-active';

  $navToggle.click(() => {
    toggleMenu();
  });

  $navLink.click(() => {
    toggleMenu(true);
  });

  function toggleMenu(close = false) {
    $nav.hasClass(activeClass) || close ? $nav.removeClass(activeClass) : $nav.addClass(activeClass);
    $navToggle.hasClass(activeClass) || close ? $navToggle.removeClass(activeClass) : $navToggle.addClass(activeClass);

    $navToggle.attr('aria-expanded') == 'true' || close ? $navToggle.attr('aria-expanded', 'false') : $navToggle.attr('aria-expanded', 'true');
  }
});
