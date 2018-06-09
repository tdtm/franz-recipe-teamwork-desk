'use strict';

module.exports = (Franz, options) => {

document.querySelectorAll('#productSwitch, .w-nav.w-nav--main')
        .forEach(function (el) { el.style.display = 'none'; });

  function getMessages() {
    let count = 0;
    let indirectCount = 0;
    let badge = document.querySelector('.w-notification__count');

    if (badge && badge.innerText) {
      count = parseInt(badge.innerText);
    }

    Franz.setBadge(count, indirectCount);
  }

  Franz.loop(getMessages);
};