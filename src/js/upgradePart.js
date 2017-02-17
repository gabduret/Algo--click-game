var slider = {};

slider.el                   = {};
slider.el.fullUpgrades      = document.querySelector('.full-upgrades');
slider.el.sideBar           = slider.el.fullUpgrades.querySelector('.sideBar-menu');
slider.el.upgrade           = slider.el.fullUpgrades.querySelector('.button-upgrade');
slider.el.upgradeContenu    = slider.el.fullUpgrades.querySelector('.sideBar-contenu-upgrades');
slider.el.minions           = slider.el.fullUpgrades.querySelector('.button-minions');
slider.el.minionsContenu    = slider.el.fullUpgrades.querySelector('.sideBar-contenu-minions');
slider.el.commanders        = slider.el.fullUpgrades.querySelector('.button-commanders');
slider.el.commandersContenu = slider.el.fullUpgrades.querySelector('.sideBar-contenu-commanders');


// ----------------------------------------------------- //


// Test Slider UPGRADES
slider.el.upgrade.addEventListener('click', function(event){
  event.preventDefault();

  slider.el.minionsContenu.classList.add('is-not-active');
  slider.el.minionsContenu.classList.remove('is-active');

  slider.el.commandersContenu.classList.add('is-not-active');
  slider.el.commandersContenu.classList.remove('is-active');


  if (slider.el.upgradeContenu.classList.contains('is-not-active')) {
    slider.el.upgradeContenu.classList.add('is-active');
    slider.el.upgradeContenu.classList.remove('is-not-active');
  }
});

// Test Slider MINIONS
slider.el.minions.addEventListener('click', function(event){
  event.preventDefault();

  slider.el.upgradeContenu.classList.add('is-not-active');
  slider.el.upgradeContenu.classList.remove('is-active');

  slider.el.commandersContenu.classList.add('is-not-active');
  slider.el.commandersContenu.classList.remove('is-active');

  if (slider.el.minionsContenu.classList.contains('is-not-active')) {
    slider.el.minionsContenu.classList.add('is-active');
    slider.el.minionsContenu.classList.remove('is-not-active');
  }
});

// Test Slider COMMANDERS
slider.el.commanders.addEventListener('click', function(event){
  event.preventDefault();

  slider.el.minionsContenu.classList.add('is-not-active');
  slider.el.minionsContenu.classList.remove('is-active');

  slider.el.upgradeContenu.classList.add('is-not-active');
  slider.el.upgradeContenu.classList.remove('is-active');

  if (slider.el.commandersContenu.classList.contains('is-not-active')) {
    slider.el.commandersContenu.classList.add('is-active');
    slider.el.commandersContenu.classList.remove('is-not-active');
  }
});
