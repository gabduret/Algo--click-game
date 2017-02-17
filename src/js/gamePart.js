var game = {};

game.el = {};

game.el.gamePart                         = document.querySelector("#gamePart");

game.el.healthPointBar                   = game.el.gamePart.querySelector (".healthPointBar");
game.el.health                           = game.el.gamePart.querySelector (".health");
game.el.currentHealthPoint               = game.el.gamePart.querySelector (".currentHealthPoint");
game.el.baseHealthPoint                  = game.el.gamePart.querySelector (".baseHealthPoint");
game.el.healthPointFull                  = game.el.gamePart.querySelector (".healthPointFull");
game.el.domeHealthPointBar               = game.el.gamePart.querySelector (".domeHealthPointBar");
game.el.domeHealth                       = game.el.gamePart.querySelector (".domeHealth");
game.el.domeCurrentHealthPoint           = game.el.gamePart.querySelector (".domeCurrentHealthPoint");
game.el.domeBaseHealthPoint              = game.el.gamePart.querySelector (".domeBaseHealthPoint");
game.el.domeHealthPointFull              = game.el.gamePart.querySelector (".domeHealthPointFull");
game.el.actualHeroDamage                 = game.el.gamePart.querySelector (".actualHeroDamage");
game.el.currentHeroDamage                = game.el.gamePart.querySelector (".currentHeroDamage");
game.el.damagePerSecond                  = game.el.gamePart.querySelector (".actualDamagePerSecond");
game.el.currentDamage                    = game.el.gamePart.querySelector (".currentDamage");
game.el.actualLevel                      = game.el.gamePart.querySelector (".actualLevel");
game.el.currentLevel                     = game.el.gamePart.querySelector (".currentLevel");
game.el.actualSouls                      = game.el.gamePart.querySelector (".actualSouls");
game.el.currentSouls                     = game.el.gamePart.querySelector (".currentSouls");
game.el.city                             = game.el.gamePart.querySelector ("#city");
game.el.dome                             = game.el.gamePart.querySelector ("#dome");
game.el.hero                             = game.el.gamePart.querySelector ("#hero");
game.el.commander                        = game.el.gamePart.querySelector ("#commander");
game.el.stormtrooperArmy                 = game.el.gamePart.querySelector ("#stormtrooperArmy");
game.el.clownArmy                        = game.el.gamePart.querySelector ("#clownArmy");
game.el.zombieArmy                       = game.el.gamePart.querySelector ("#zombieArmy");
game.el.generatedStormtrooperArmyLure    = game.el.gamePart.querySelector ("#generatedStormtrooperArmyLure");
game.el.generatedClownArmyLure           = game.el.gamePart.querySelector ("#generatedClownArmyLure");
game.el.generatedZombieArmyLure          = game.el.gamePart.querySelector ("#generatedZombieArmyLure");

game.el.upgradePart              = document.querySelector("#upgradePart");

game.el.addStormtrooper                  = game.el.upgradePart.querySelector("#addStormtrooper");
game.el.addClown                         = game.el.upgradePart.querySelector("#addClown");
game.el.addZombie                        = game.el.upgradePart.querySelector("#addZombie");
game.el.currentStormtrooper              = game.el.upgradePart.querySelector(".currentStormtrooper");
game.el.currentClown                     = game.el.upgradePart.querySelector(".currentClown");
game.el.currentZombie                    = game.el.upgradePart.querySelector(".currentZombie");
game.el.currentStormtrooperPrice         = game.el.upgradePart.querySelector(".currentStormtrooperPrice");
game.el.currentClownPrice                = game.el.upgradePart.querySelector(".currentClownPrice");
game.el.currentZombiePrice               = game.el.upgradePart.querySelector(".currentZombiePrice");
game.el.currentHeroUpgradePrice          = game.el.upgradePart.querySelector(".currentHeroUpgradePrice");
game.el.currentHeroUpgradeLevel          = game.el.upgradePart.querySelector(".currentHeroUpgradeLevel");
game.el.currentSoulsUpgradePrice         = game.el.upgradePart.querySelector(".currentSoulsUpgradePrice");
game.el.currentSoulsLevel                = game.el.upgradePart.querySelector(".currentSoulsLevel");
game.el.currentDoubleDamageUpgradePrice  = game.el.upgradePart.querySelector(".currentDoubleDamageUpgradePrice");
game.el.currentDoubleDamageLevel         = game.el.upgradePart.querySelector(".currentDoubleDamageLevel");
game.el.currentDoubleSoulsUpgradePrice   = game.el.upgradePart.querySelector(".currentDoubleSoulsUpgradePrice");
game.el.currentDoubleSoulsLevel          = game.el.upgradePart.querySelector(".currentDoubleSoulsLevel");
game.el.currentHitlerPrice               = game.el.upgradePart.querySelector(".currentHitlerPrice");
game.el.currentGodzillaPrice             = game.el.upgradePart.querySelector(".currentGodzillaPrice");
game.el.currentFreezerPrice              = game.el.upgradePart.querySelector(".currentFreezerPrice");
game.el.currentJokerPrice                = game.el.upgradePart.querySelector(".currentJokerPrice");
game.el.currentDarthVaderPrice           = game.el.upgradePart.querySelector(".currentDarthVaderPrice");
game.el.currentGhostFacePrice            = game.el.upgradePart.querySelector(".currentGhostFacePrice");
game.el.currentAlienPrice                = game.el.upgradePart.querySelector(".currentAlienPrice");
game.el.currentChuckyPrice               = game.el.upgradePart.querySelector(".currentChuckyPrice");
game.el.currentDraculaPrice              = game.el.upgradePart.querySelector(".currentDraculaPrice");
game.el.currentFreddiePrice              = game.el.upgradePart.querySelector(".currentFreddiePrice");

game.el.cityImages              = ["src/images/villes/petitVillage.png","src/images/villes/village.png","src/images/villes/petiteVille.png","src/images/villes/moyenneVille.png","src/images/villes/grandeVille.png","src/images/villes/petiteCapitale.png","src/images/villes/moyenneCapitale.png","src/images/villes/grandeCapitale.png","src/images/villes/petiteMegalopole.png","src/images/villes/grandeMegalopole.png"];

/* Commander Objects */

game.el.contenu            = document.querySelector('.full-commanders');
game.el.contenu.addImg     = game.el.contenu.querySelector('#commander');


game.el.upgrade            = document.querySelector('.upgrade-template');
game.el.upgrade.link       = document.querySelectorAll('.up-price');

game.el.upgrade.hitler     = document.querySelector('.perso-hitler');
game.el.upgrade.godzilla   = document.querySelector('.perso-godzilla');
game.el.upgrade.freezer    = document.querySelector('.perso-freezer');
game.el.upgrade.joker      = document.querySelector('.perso-joker');
game.el.upgrade.darthVader = document.querySelector('.perso-darthVader');
game.el.upgrade.ghostface  = document.querySelector('.perso-ghostface');
game.el.upgrade.alien      = document.querySelector('.perso-alien');
game.el.upgrade.chucky     = document.querySelector('.perso-chucky');
game.el.upgrade.dracula    = document.querySelector('.perso-dracula');
game.el.upgrade.freddie    = document.querySelector('.perso-freddie');

var hitler     = ["src/images/commanders/PersosHitler.png"    , "commander hitler"     , 0], 
    godzilla   = ["src/images/commanders/PersosGodzilla.png"  , "commander godzilla"   , 0],
    freezer    = ["src/images/commanders/PersosFreezer.png"   , "commander freezer"    , 0],
    joker      = ["src/images/commanders/PersosJoker.png"     , "commander joker"      , 0],
    darthVader = ["src/images/commanders/PersosDark-Vador.png", "commander darth vader", 0],
    ghostface  = ["src/images/commanders/PersosGhostface.png" , "commander ghostface"  , 0],
    alien      = ["src/images/commanders/PersosAlien.png"     , "commander alien"      , 0],
    chucky     = ["src/images/commanders/PersosChucky.png"    , "commander chucky"     , 0],
    dracula    = ["src/images/commanders/PersosDracula.png"   , "commander dracula"    , 0],
    freddie    = ["src/images/commanders/PersosFreddie.png"   , "commander freedie"    , 0];

/* Messages */
var infos = {

  "0": 'Welcome in "Be The Bad Guy", you\'re a villain in search of power but hey, you\'re not popular. To correct this, please destroy the village to recover innocent souls. You will find on the way some company to help you. Good luck !',

  "1": 'Congratulations ! Your first insignificant village was wiped out! You are now a villain of "unknown" rank.',

  "2": 'Word of mouth begins to work and some people in the vicinity are afraid of you. You are now a villain of "amateur" rank.',

  "3": 'So you\'re not ashamed? These poor and innocent souls had not asked for anything! I\'m joking, make sure. You are a villain of "warned" rank.',

  "4": 'As I can see, killing becomes your new oxygen. Good job! You are a villain of "persevering" rank.',

  "5": 'Waw ! 5000 souls have been recovered today thanks to you! The neighboring cities circulate your photofit picture. Your popularity climbs to the eye! You are a villain of "passionate" rank.',

  "6": '20,000 souls and always no scruples? You do it superbly well! You are a villain of rank "crazy killer".',

  "7": 'When are you going to stop clicking? Never? I hope so! You are a villain of "professional" rank.',

  "8": 'More than 100,000 people have disappeared because of you. Or rather "thanks to you"! You are a villain of "expert" rank.',

  "9": '1 MILLION ? You are competing with the greatest dictators in our history. Congratulations! You are a villain of "evil" rank.',

  "10": 'You have passed the highest course that exists. The anthechrist, Satan, and all his joyful company fear you with all their strength. You are a villain of "supreme" rank.'

};
/* Message Box */
// SHOW DATE & TEXT
var dialogText = 0;
var date = new Date();
var h    = date.getHours();
var m    = date.getMinutes();

// FUNCTION HOUR/MINUTE
function currentHour() {
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
}

// FUNCTION SHOW TEXT_LINE
function dialogBox() {
  currentHour();
  if(dialogText >= 11){
    return false;
  } else if (dialogText >= 1) { 
    document.querySelector('.boxInfos_text_line').innerHTML += "<span>" + (h + ':' + m) + "</span>" + "<p>" + infos[dialogText] + "</p>" + "<div class='line'></div>";
    dialogText += 1;
  }
  else if (dialogText <= 0) {
    currentHour();
    document.querySelector('.boxInfos_text_line').innerHTML += "<span>" + (h + ':' + m) + "</span>" + "<p>" + infos[dialogText] + "</p>" + "<div class='line'></div>";
    dialogText += 1;
  }
}

// PLAYER MUTE

var player                = {};
player.el                 = {};
player.el.container       = document.querySelector('.playerMute');
player.el.audio           = player.el.container.querySelector('audio');

player.el.container.addEventListener('click', function (e) {
  e.preventDefault();
  if (player.el.audio.volume == 0) {
    player.el.audio.volume = 1;
    player.el.container.style.opacity = '1';
  } else {
    player.el.audio.volume = 0;
    player.el.container.style.opacity = '0.4';
  }
});

/* Sounds Effect */
function punchSound(){
  var punch = new Audio("src/musique/punchSound.mp3");
  punch.play();
  punch.currentTime=0;
}
function explosionSound(){
  var explosion = new Audio("src/musique/explosionSound.mp3");
  explosion.play();
  explosion.currentTime=0;
}
function soulsPickUp(){
  var souls = new Audio("src/musique/soulsPickUp.mp3");
  souls.play();
  souls.currentTime=0;
}

/*Souls*/

function soulsTake(){
  var actualsouls                    = (1 * game.el.actualSouls.dataset.value),
      newActualSouls                 = actualsouls + (((50 * game.el.actualLevel.dataset.value) * (1 * game.el.currentSoulsLevel.dataset.value)) * (1 * game.el.currentDoubleSoulsLevel.dataset.value) * (1 * game.el.upgrade.hitler.dataset.value));
  game.el.actualSouls.dataset.value  = newActualSouls;
  game.el.currentSouls.innerHTML     = (1 * game.el.actualSouls.dataset.value);
}

function currentHeroDamage(){
  var damage           = (1 * game.el.currentHeroUpgradeLevel.dataset.value) * (1 * game.el.currentDoubleDamageLevel.dataset.value) * ( 1 * game.el.upgrade.alien.dataset.value) * ( 1 * game.el.upgrade.godzilla.dataset.value);
  game.el.currentHeroDamage.dataset.value = damage;
  game.el.currentHeroDamage.innerHTML     = damage;
}

/* Hero Upgrades */
var currentHeroUpgradeLevel = 1;
var currentHeroUpgradePrice = game.el.currentHeroUpgradePrice.dataset.value;
game.el.currentHeroUpgradePrice.addEventListener("click", function(){
  if( (1 * game.el.currentHeroUpgradePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    currentHeroUpgradeLevel = currentHeroUpgradeLevel + 1;
    game.el.currentHeroUpgradeLevel.innerHTML     = currentHeroUpgradeLevel;
    game.el.currentHeroUpgradeLevel.dataset.value = currentHeroUpgradeLevel;

    game.el.actualSouls.dataset.value             = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentHeroUpgradePrice.dataset.value); 
    game.el.currentSouls.innerHTML                = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.innerHTML                = (1 * game.el.actualSouls.dataset.value);

    currentHeroUpgradePrice                       = Math.round(currentHeroUpgradePrice * 1.1) ;
    game.el.currentHeroUpgradePrice.innerHTML     = currentHeroUpgradePrice;
    game.el.currentHeroUpgradePrice.dataset.value = currentHeroUpgradePrice;


    currentHeroDamage();
  }
});

/* Souls Upgrades */

var currentSoulsLevel        = 1;
var currentSoulsUpgradePrice = 65;
game.el.currentSoulsUpgradePrice.addEventListener("click", function(){
  if( (1 * game.el.currentSoulsUpgradePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    currentSoulsLevel = currentSoulsLevel + 1;
    game.el.currentSoulsLevel.innerHTML     = currentSoulsLevel;
    game.el.currentSoulsLevel.dataset.value = Math.round(0.25 * currentSoulsLevel);

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentSoulsUpgradePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    currentSoulsUpgradePrice                       = Math.round(currentSoulsUpgradePrice * 1.1);
    game.el.currentSoulsUpgradePrice.innerHTML     = currentSoulsUpgradePrice;
    game.el.currentSoulsUpgradePrice.dataset.value = currentSoulsUpgradePrice;
  }

});

/* Double Damage Upgrades */
var currentDoubleDamageUpgradePrice = 1000;
game.el.currentDoubleDamageUpgradePrice.addEventListener("click", function(){
  if( (1 * game.el.currentDoubleDamageUpgradePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    game.el.currentDoubleDamageLevel.dataset.value = 2;
    game.el.currentDoubleDamageLevel.innerHTML     = 2;

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentDoubleDamageUpgradePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.currentDoubleDamageUpgradePrice.innerHTML = "---";

    currentHeroDamage();
  }
});

/* Double Souls Upgrades */
var currentDoubleSoulsLevel         = 1;
var currentDoubleSoulsUpgradePrice  = 2000;
game.el.currentDoubleSoulsUpgradePrice.addEventListener("click", function(){
  if( (1 * game.el.currentDoubleSoulsUpgradePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    game.el.currentDoubleSoulsLevel.dataset.value = 2;
    game.el.currentDoubleSoulsLevel.innerHTML     = 2; 

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentDoubleSoulsUpgradePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.currentDoubleSoulsUpgradePrice.innerHTML = "---";
  }
});

/*Commanders Generation*/

game.el.upgrade.hitler.addEventListener('click', function(event){
  event.preventDefault();
  if( (1 * game.el.currentHitlerPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(hitler[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + hitler[0] + '" alt="' + hitler[1] + '"></div>';
      hitler[2] = 1;
    }
    game.el.actualSouls.dataset.value              = (1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentHitlerPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.hitler.dataset.value           = 3;
    game.el.currentHitlerPrice.dataset.value       = "---";
    game.el.currentHitlerPrice.innerHTML           = game.el.currentHitlerPrice.dataset.value;

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }

});

game.el.upgrade.godzilla.addEventListener('click', function(event){
  event.preventDefault();
  if( (1 * game.el.currentGodzillaPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(godzilla[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div"><img src="' + godzilla[0] + '" alt="' + godzilla[1] + '"></div>';
      godzilla[2] = 1;
    }
    game.el.actualSouls.dataset.value              = (1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentGodzillaPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.godzilla.dataset.value        = 3.5;
    game.el.currentGodzillaPrice.dataset.value    = "---";
    game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;

    currentHeroDamage();

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }

});

game.el.upgrade.freezer.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentFreezerPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(freezer[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + freezer[0] + '" alt="' + freezer[1] + '"></div>';
      freezer[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentFreezerPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.freezer.dataset.value        = 1.75;
    game.el.currentFreezerPrice.dataset.value    = "---";
    game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.joker.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentJokerPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(joker[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + joker[0] + '" alt="' + joker[1] + '"></div>';
      joker[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentJokerPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.joker.dataset.value        = 3.5;
    game.el.currentJokerPrice.dataset.value    = "---";
    game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.darthVader.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentDarthVaderPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(darthVader[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + darthVader[0] + '" alt="' + darthVader[1] + '"></div>';
      darthVader[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentDarthVaderPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.darthVader.dataset.value        = 2;
    game.el.currentDarthVaderPrice.dataset.value    = "---";
    game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.ghostface.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentGhostFacePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(ghostface[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + ghostface[0] + '" alt="' + ghostface[1] + '"></div>';
      ghostface[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentGhostFacePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.ghostface.dataset.value        = 2;
    game.el.currentGhostFacePrice.dataset.value    = "---";
    game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.alien.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentAlienPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(alien[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + alien[0] + '" alt="' + alien[1] + '"></div>';
      alien[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentAlienPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.alien.dataset.value        = 3;
    game.el.currentAlienPrice.dataset.value    = "---";
    game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;

    currentHeroDamage();

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.chucky.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentChuckyPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(chucky[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + chucky[0] + '" alt="' + chucky[1] + '"></div>';
      chucky[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentChuckyPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.chucky.dataset.value        = 2;
    game.el.currentChuckyPrice.dataset.value    = "---";
    game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.dracula.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentDraculaPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(dracula[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + dracula[0] + '" alt="' + dracula[1] + '"></div>';
      dracula[2] = 1;
    }
    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentDraculaPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.dracula.dataset.value        = 2;
    game.el.currentDraculaPrice.dataset.value    = "---";
    game.el.currentDraculaPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = game.el.currentHitlerPrice.dataset.value * 2;
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = game.el.currentGodzillaPrice.dataset.value * 2;
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = game.el.currentFreezerPrice.dataset.value * 2;
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = game.el.currentJokerPrice.dataset.value  * 2;
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = game.el.currentDarthVaderPrice.dataset.value * 2;
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = game.el.currentGhostFacePrice.dataset.value * 2;
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = game.el.currentAlienPrice.dataset.value * 2;
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = game.el.currentChuckyPrice.dataset.value * 2;
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = game.el.currentDraculaPrice.dataset.value * 2;
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }

    if(game.el.currentFreddiePrice.dataset.value  != "---"){
      game.el.currentFreddiePrice.dataset.value    = game.el.currentFreddiePrice.dataset.value * 2;
      game.el.currentFreddiePrice.innerHTML        = ( 1 * game.el.currentFreddiePrice.dataset.value);
    }
    else{
      game.el.currentFreddiePrice.dataset.value    = "---";
      game.el.currentFreddiePrice.innerHTML        = game.el.currentFreddiePrice.dataset.value;
    }
  }
});

game.el.upgrade.freddie.addEventListener('click', function(event){
  event.preventDefault();

  if( (1 * game.el.currentFreddiePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    if(freddie[2] == 0) {

      game.el.contenu.addImg.innerHTML += '<div><img src="' + freddie[0] + '" alt="' + freddie[1] + '"></div>';
      freddie[2] = 1;
    }
    game.el.actualSouls.dataset.value              = (1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentFreddiePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    game.el.upgrade.freddie.dataset.value          = 0.75;
    game.el.currentFreddiePrice.dataset.value      = "---";
    game.el.currentFreddiePrice.innerHTML          = game.el.currentFreddiePrice.dataset.value;

    game.el.currentHeroUpgradePrice.dataset.value  = (1 * game.el.currentHeroUpgradePrice.dataset.value) * (1 * game.el.upgrade.freddie.dataset.value);
    game.el.currentHeroUpgradePrice.innerHTML      = (1 * game.el.currentHeroUpgradePrice.dataset.value);

    game.el.currentSoulsUpgradePrice.dataset.value = (1 * game.el.currentSoulsUpgradePrice.dataset.value) * (1 * game.el.upgrade.freddie.dataset.value);
    game.el.currentSoulsUpgradePrice.innerHTML     = (1 * game.el.currentSoulsUpgradePrice.dataset.value);

    game.el.currentZombiePrice.dataset.value       = (1 * game.el.currentZombiePrice.dataset.value) * (1 * game.el.upgrade.freddie.dataset.value);
    game.el.currentZombiePrice.innerHTML           = (1 * game.el.currentZombiePrice.dataset.value);

    game.el.currentClownPrice.dataset.value        = (1 * game.el.currentClownPrice.dataset.value) * (1 * game.el.upgrade.freddie.dataset.value);
    game.el.currentClownPrice.innerHTML            = (1 * game.el.currentClownPrice.dataset.value);

    game.el.currentStormtrooperPrice.dataset.value = (1 * game.el.currentStormtrooperPrice.dataset.value) * (1 * game.el.upgrade.freddie.dataset.value);  
    game.el.currentStormtrooperPrice.innerHTML     = (1 * game.el.currentStormtrooperPrice.dataset.value);

    if(game.el.currentHitlerPrice.dataset.value  != "---"){
      game.el.currentHitlerPrice.dataset.value    = (game.el.currentHitlerPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentHitlerPrice.innerHTML        = ( 1 * game.el.currentHitlerPrice.dataset.value);
    }
    else{
      game.el.currentHitlerPrice.dataset.value    = "---";
      game.el.currentHitlerPrice.innerHTML        = game.el.currentHitlerPrice.dataset.value;
    }

    if(game.el.currentGodzillaPrice.dataset.value  != "---"){
      game.el.currentGodzillaPrice.dataset.value    = (game.el.currentGodzillaPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentGodzillaPrice.innerHTML        = ( 1 * game.el.currentGodzillaPrice.dataset.value);
    }
    else{
      game.el.currentGodzillaPrice.dataset.value    = "---";
      game.el.currentGodzillaPrice.innerHTML        = game.el.currentGodzillaPrice.dataset.value;
    }

    if(game.el.currentFreezerPrice.dataset.value  != "---"){
      game.el.currentFreezerPrice.dataset.value    = (game.el.currentFreezerPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentFreezerPrice.innerHTML        = ( 1 * game.el.currentFreezerPrice.dataset.value);
    }
    else{
      game.el.currentFreezerPrice.dataset.value    = "---";
      game.el.currentFreezerPrice.innerHTML        = game.el.currentFreezerPrice.dataset.value;
    }

    if(game.el.currentJokerPrice.dataset.value  != "---"){
      game.el.currentJokerPrice.dataset.value    = (game.el.currentJokerPrice.dataset.value  * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentJokerPrice.innerHTML        = ( 1 * game.el.currentJokerPrice.dataset.value);
    }
    else{
      game.el.currentJokerPrice.dataset.value    = "---";
      game.el.currentJokerPrice.innerHTML        = game.el.currentJokerPrice.dataset.value;
    }

    if(game.el.currentDarthVaderPrice.dataset.value  != "---"){
      game.el.currentDarthVaderPrice.dataset.value    = (game.el.currentDarthVaderPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentDarthVaderPrice.innerHTML        = ( 1 * game.el.currentDarthVaderPrice.dataset.value);
    }
    else{
      game.el.currentDarthVaderPrice.dataset.value    = "---";
      game.el.currentDarthVaderPrice.innerHTML        = game.el.currentDarthVaderPrice.dataset.value;
    }

    if(game.el.currentGhostFacePrice.dataset.value  != "---"){
      game.el.currentGhostFacePrice.dataset.value    = (game.el.currentGhostFacePrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentGhostFacePrice.innerHTML        = ( 1 * game.el.currentGhostFacePrice.dataset.value);
    }
    else{
      game.el.currentGhostFacePrice.dataset.value    = "---";
      game.el.currentGhostFacePrice.innerHTML        = game.el.currentGhostFacePrice.dataset.value;
    }

    if(game.el.currentAlienPrice.dataset.value  != "---"){
      game.el.currentAlienPrice.dataset.value    = (game.el.currentAlienPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentAlienPrice.innerHTML        = ( 1 * game.el.currentAlienPrice.dataset.value);
    }
    else{
      game.el.currentAlienPrice.dataset.value    = "---";
      game.el.currentAlienPrice.innerHTML        = game.el.currentAlienPrice.dataset.value;
    }

    if(game.el.currentChuckyPrice.dataset.value  != "---"){
      game.el.currentChuckyPrice.dataset.value    = (game.el.currentChuckyPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentChuckyPrice.innerHTML        = ( 1 * game.el.currentChuckyPrice.dataset.value);
    }
    else{
      game.el.currentChuckyPrice.dataset.value    = "---";
      game.el.currentChuckyPrice.innerHTML        = game.el.currentChuckyPrice.dataset.value;
    }

    if(game.el.currentDraculaPrice.dataset.value  != "---"){
      game.el.currentDraculaPrice.dataset.value    = (game.el.currentDraculaPrice.dataset.value * 2) * (1 * game.el.upgrade.freddie.dataset.value);
      game.el.currentDraculaPrice.innerHTML        = ( 1 * game.el.currentDraculaPrice.dataset.value);
    }
    else{
      game.el.currentDraculaPrice.dataset.value    = "---";
      game.el.currentDraculaPrice.innerHTML        = game.el.currentDraculaPrice.dataset.value;
    }
  }
});

/*Army Generation*/

var currentStormtrooperNumber = 0;
var currentStormtrooperPrice  = 50;
game.el.addStormtrooper.addEventListener("click", function(){
  if( (1 * game.el.currentStormtrooperPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    currentStormtrooperNumber                 = currentStormtrooperNumber + 1;
    game.el.currentStormtrooper.dataset.value = (1 * currentStormtrooperNumber);
    game.el.currentStormtrooper.innerHTML     = currentStormtrooperNumber;

    var stormtrooper_army_div_height = game.el.stormtrooperArmy.offsetHeight,
        generated_army_top           = game.el.generatedStormtrooperArmyLure.getBoundingClientRect();

    if(generated_army_top.top <= 755){
      var div       = document.createElement("div");
      div.className = 'generatedStormtrooperArmy';

      document.getElementById("stormtrooperArmy").appendChild(div);
      stormtrooperArmy.insertBefore(div, stormtrooperArmy.firstChild);
    }
    else{
      var div       = document.createElement("div");
      div.className = 'generatedStormtrooperArmy';

      document.getElementById("stormtrooperArmy").appendChild(div);
      stormtrooperArmy.insertBefore(div, stormtrooperArmy.firstChild);

      var removeStormtrooperArmy = document.getElementById('stormtrooperArmy'), item = removeStormtrooperArmy.lastElementChild.previousElementSibling;
      removeStormtrooperArmy.removeChild(item);
    }

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentStormtrooperPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    currentStormtrooperPrice                       = Math.round(currentStormtrooperPrice * 1.1);
    game.el.currentStormtrooperPrice.dataset.value = currentStormtrooperPrice;
    game.el.currentStormtrooperPrice.innerHTML     = currentStormtrooperPrice;
  }

});

var currentClownNumber = 0;
var currentClownPrice  = 100 * (1 * game.el.upgrade.freddie.dataset.value);
game.el.addClown.addEventListener("click", function(){

  if( (1 * game.el.currentClownPrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    currentClownNumber                 = currentClownNumber + 1;
    game.el.currentClown.dataset.value = (1 * currentClownNumber);
    game.el.currentClown.innerHTML     = currentClownNumber;

    var clown_army_div_height = game.el.clownArmy.offsetHeight,
        generated_army_top    = game.el.generatedClownArmyLure.getBoundingClientRect();

    if(generated_army_top.top <= 755){
      var div       = document.createElement("div");
      div.className = 'generatedClownArmy';

      document.getElementById("clownArmy").appendChild(div);
      clownArmy.insertBefore(div, clownArmy.firstChild);
    }
    else{
      var div       = document.createElement("div");
      div.className = 'generatedClownArmy';

      document.getElementById("clownArmy").appendChild(div);
      clownArmy.insertBefore(div, clownArmy.firstChild);

      var removeClownArmy = document.getElementById('clownArmy'), item = removeClownArmy.lastElementChild.previousElementSibling;
      removeClownArmy.removeChild(item);
    }

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentClownPrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    currentClownPrice                       = Math.round(currentClownPrice * 1.1);
    game.el.currentClownPrice.dataset.value = currentClownPrice;
    game.el.currentClownPrice.innerHTML     = currentClownPrice;
  }
});

var currentZombieNumber = 0;
var currentZombiePrice = 250 * (1 * game.el.upgrade.freddie.dataset.value);
game.el.addZombie.addEventListener("click", function(){
  if( (1 * game.el.currentZombiePrice.dataset.value) <= (1 * game.el.actualSouls.dataset.value)){

    currentZombieNumber                       = currentZombieNumber + 1;
    game.el.currentZombie.dataset.value       = (1 * currentZombieNumber);
    game.el.currentZombie.innerHTML           = currentZombieNumber;

    var zombie_army_div_height = game.el.zombieArmy.offsetHeight,
        generated_army_top     = game.el.generatedZombieArmyLure.getBoundingClientRect();

    if(generated_army_top.top <= 755){
      var div       = document.createElement("div");
      div.className = 'generatedZombieArmy';

      document.getElementById("zombieArmy").appendChild(div);
      zombieArmy.insertBefore(div, zombieArmy.firstChild);
    }
    else{
      var div       = document.createElement("div");
      div.className = 'generatedZombieArmy';

      document.getElementById("zombieArmy").appendChild(div);
      zombieArmy.insertBefore(div, zombieArmy.firstChild);

      var removeZombieArmy = document.getElementById('zombieArmy'), item = removeZombieArmy.lastElementChild.previousElementSibling;
      removeZombieArmy.removeChild(item);
    }

    game.el.actualSouls.dataset.value              = ( 1 * game.el.actualSouls.dataset.value) - ( 1 * game.el.currentZombiePrice.dataset.value); 
    game.el.currentSouls.innerHTML                 = (1 * game.el.actualSouls.dataset.value);
    game.el.currentSouls.dataset.value             = (1 * game.el.actualSouls.dataset.value);

    currentZombiePrice                       = Math.round(currentZombiePrice * 1.1);
    game.el.currentZombiePrice.dataset.value = currentZombiePrice;
    game.el.currentZombiePrice.innerHTML     = currentZombiePrice;
  }

});


/*City Health Interaction*/

game.el.baseHealthPoint.innerHTML    = game.el.healthPointBar.dataset.total;
game.el.currentHealthPoint.innerHTML = game.el.healthPointBar.dataset.value;

game.el.city.addEventListener("click", function(){
  var total           = game.el.healthPointBar.dataset.total,
      value           = game.el.healthPointBar.dataset.value,
      damage          = (1 * game.el.currentHeroUpgradeLevel.dataset.value) * (1 * game.el.currentDoubleDamageLevel.dataset.value) * ( 1 * game.el.upgrade.alien.dataset.value) * ( 1 * game.el.upgrade.godzilla.dataset.value),
      newValue        = value - damage,
      healthBarWidth  = (newValue/total) * 100,
      level           = game.el.actualLevel.dataset.value * 1;

  game.el.baseHealthPoint.innerHTML    = game.el.healthPointBar.dataset.total;
  game.el.currentHealthPoint.innerHTML = game.el.healthPointBar.dataset.value;
  game.el.healthPointBar.dataset.value = newValue;
  game.el.currentHealthPoint.innerHTML = newValue;
  game.el.healthPointFull.style.width  = healthBarWidth + "%";
  punchSound();

  if(value <= 0 || value < damage){
    var spawnDomeChance = Math.round(Math.random() * 10);
    if(3 > spawnDomeChance && level > 50 ){
      game.el.dome.style.display               = "flex";
      game.el.domeHealthPointBar.style.display = "block";
    }
    explosionSound();
    dialogBox();
    game.el.healthPointBar.dataset.total = Math.round(game.el.healthPointBar.dataset.total * 1.1);
    game.el.baseHealthPoint.innerHTML    = game.el.healthPointBar.dataset.total;
    game.el.healthPointBar.dataset.value = game.el.healthPointBar.dataset.total;
    game.el.currentHealthPoint.innerHTML = game.el.healthPointBar.dataset.value;
    game.el.healthPointFull.style.width  = "100%";

    var nextCity = game.el.cityImages[Math.floor(Math.random() * game.el.cityImages.length)];
    document.getElementById("cityImage").src = nextCity;
    level = level + 1;
    game.el.actualLevel.dataset.value = level;
    game.el.currentLevel.innerHTML    = game.el.actualLevel.dataset.value;
    soulsTake();
    soulsPickUp();
  }
});

/*Dome Health Interaction*/

game.el.domeBaseHealthPoint.innerHTML    = game.el.domeHealthPointBar.dataset.total;
game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;

game.el.dome.addEventListener("click", function(){
  var total               = game.el.domeHealthPointBar.dataset.total,
      value               = game.el.domeHealthPointBar.dataset.value,
      damage              = (1 * game.el.currentHeroUpgradeLevel.dataset.value) * (1 * game.el.currentDoubleDamageLevel.dataset.value) * ( 1 * game.el.upgrade.alien.dataset.value) * ( 1 * game.el.upgrade.godzilla.dataset.value) * (1 * game.el.upgrade.ghostface.dataset.value),
      newValue            = value - damage,
      domeHealthBarWidth  = (newValue/total) * 100;

  game.el.domeBaseHealthPoint.innerHTML    = game.el.domeHealthPointBar.dataset.total;
  game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;
  game.el.domeHealthPointBar.dataset.value = newValue;
  game.el.domeCurrentHealthPoint.innerHTML = newValue;
  game.el.domeHealthPointFull.style.width  = domeHealthBarWidth + "%";
  punchSound();

  if(value <= 0 || value < damage){
    game.el.domeHealthPointBar.dataset.total = Math.round(game.el.domeHealthPointBar.dataset.total * 2.5);
    game.el.domeBaseHealthPoint.innerHTML    = game.el.domeHealthPointBar.dataset.total;
    game.el.domeHealthPointBar.dataset.value = game.el.domeHealthPointBar.dataset.total;
    game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;
    game.el.domeHealthPointFull.style.width  = "100%";

    explosionSound();
    game.el.dome.style.display               = "none";
    game.el.domeHealthPointBar.style.display = "none";
  }
});

/*Dome Health Regen*/
function domeHealthRegen(){
  var total               = game.el.domeHealthPointBar.dataset.total,
      totalPercent        = 0.05 * total, 
      value               = 1 * game.el.domeHealthPointBar.dataset.value,
      regen               = value + totalPercent,
      domeHealthBarWidth  = (regen/total) * 100;

  if(regen >= total || value == total || domeHealthBarWidth > 100){
    regen              = total;
    value              = total;
    domeHealthBarWidth = 100;
  }
  game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;
  game.el.domeHealthPointBar.dataset.value = regen;
  game.el.domeCurrentHealthPoint.innerHTML = regen;
  game.el.domeHealthPointFull.style.width  = domeHealthBarWidth + "%";
}
/* Damage per Second from Armys */

function army_damage(){
  var stormtrooperArmyDamage = 1.25 * game.el.currentStormtrooper.dataset.value * (1 * game.el.upgrade.darthVader.dataset.value),
      clownArmyDamage        = 2.75 * game.el.currentClown.dataset.value * (1 * game.el.upgrade.chucky.dataset.value),
      zombieArmyDamage       = 4.25 * game.el.currentZombie.dataset.value * (1 * game.el.upgrade.dracula.dataset.value),
      damagePerSecond        = stormtrooperArmyDamage + clownArmyDamage + zombieArmyDamage,
      total                  = game.el.healthPointBar.dataset.total,
      value                  = game.el.healthPointBar.dataset.value,
      newValue               = value - damagePerSecond,
      healthBarWidth         = (newValue/total) * 100,
      level                  = game.el.actualLevel.dataset.value * 1;

  game.el.baseHealthPoint.innerHTML    = game.el.healthPointBar.dataset.total;
  game.el.currentHealthPoint.innerHTML = game.el.healthPointBar.dataset.value;
  game.el.healthPointBar.dataset.value = newValue;
  game.el.currentHealthPoint.innerHTML = Math.round(newValue);
  game.el.healthPointFull.style.width  = healthBarWidth + "%";
  game.el.currentDamage.innerHTML      = damagePerSecond;

  if(value <= 0 || value < damagePerSecond){
    var spawnDomeChance = Math.round(Math.random() * 10);
    if(3 > spawnDomeChance && level > 50 ){
      game.el.dome.style.display               = "flex";
      game.el.domeHealthPointBar.style.display = "block";

    }
    game.el.healthPointBar.dataset.total = Math.round(game.el.healthPointBar.dataset.total * 1.25);
    game.el.baseHealthPoint.innerHTML    = game.el.healthPointBar.dataset.total;
    game.el.healthPointBar.dataset.value = game.el.healthPointBar.dataset.total;
    game.el.currentHealthPoint.innerHTML = game.el.healthPointBar.dataset.value;
    game.el.healthPointFull.style.width  = "100%";

    var nextCity = game.el.cityImages[Math.floor(Math.random() * game.el.cityImages.length)];
    document.getElementById("cityImage").src = nextCity;

    level = level + 1;
    game.el.actualLevel.dataset.value = level;
    game.el.currentLevel.innerHTML    = game.el.actualLevel.dataset.value;

    soulsTake();
    soulsPickUp();
    explosionSound();
    dialogBox();
  }
}   
/* Damage per Second from Armys to Dome */

function army_damage_to_dome(){
  var stormtrooperArmyDamage = 1.25 * game.el.currentStormtrooper.dataset.value * (1 * game.el.upgrade.darthVader.dataset.value),
      clownArmyDamage        = 2.75 * game.el.currentClown.dataset.value * (1 * game.el.upgrade.chucky.dataset.value),
      zombieArmyDamage       = 4.25 * game.el.currentZombie.dataset.value * (1 * game.el.upgrade.dracula.dataset.value),
      damagePerSecond        = (stormtrooperArmyDamage + clownArmyDamage + zombieArmyDamage) * (1 * game.el.upgrade.freezer.dataset.value),
      total                  = game.el.domeHealthPointBar.dataset.total,
      value                  = game.el.domeHealthPointBar.dataset.value,
      newValue               = value - damagePerSecond,
      domeHealthBarWidth     = (newValue/total) * 100;

  game.el.domeBaseHealthPoint.innerHTML    = game.el.domeHealthPointBar.dataset.total;
  game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;
  game.el.domeHealthPointBar.dataset.value = newValue;
  game.el.domeCurrentHealthPoint.innerHTML = Math.round(newValue);
  game.el.domeHealthPointFull.style.width  = domeHealthBarWidth + "%";
  game.el.currentDamage.innerHTML          = damagePerSecond;

  if(value <= 0 || value < damagePerSecond){
    game.el.domeHealthPointBar.dataset.total = Math.round(game.el.domeHealthPointBar.dataset.total * 2.5);
    game.el.domeBaseHealthPoint.innerHTML    = game.el.domeHealthPointBar.dataset.total;
    game.el.domeHealthPointBar.dataset.value = game.el.domeHealthPointBar.dataset.total;
    game.el.domeCurrentHealthPoint.innerHTML = game.el.domeHealthPointBar.dataset.value;
    game.el.domeHealthPointFull.style.width  = "100%";

    explosionSound();
    game.el.dome.style.display               = "none";
    game.el.domeHealthPointBar.style.display = "none";
  }
}   
window.setInterval(function(){
  if(game.el.dome.style.display == "flex" && game.el.domeHealthPointBar.style.display == "block"){
    army_damage_to_dome()
    domeHealthRegen();
  }
  else{
    army_damage();
  }
}, 1000);