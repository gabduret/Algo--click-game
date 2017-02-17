var portail = {}

portail.el = {};
portail.el.contenu = document.querySelector('.full-pixel');
portail.el.contenu.lines = portail.el.contenu.querySelectorAll('.pixel');

console.log(portail.el.contenu.lines[0]);


function delayPortail(){
  var i = 0;
  var y = 0;

  for(i = 0; i < portail.el.contenu.lines.length; i++)
  {
    if(i % 2 == 0)
    {
      var y = i * (0.016);
      portail.el.contenu.lines[i].style.transitionDelay = y + "s";
    }
    else
    {
      var w = i * (0.012);
      portail.el.contenu.lines[i].style.transitionDelay = w + "s";
    }
  }
  var z = 700 + y*1000;

  if(i == portail.el.contenu.lines.length)
  {
    setTimeout(function(){
      portail.el.contenu.style.display = 'none';
    }, z);
  }

}
delayPortail();

setTimeout(function(){
  for(var i = 0; i < portail.el.contenu.lines.length; i++)
  {
    portail.el.contenu.lines[i].classList.add('pixel-opacity');
  }
}, 200);

document.getElementById("pressToPlay").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("portail").style.display = "none";
  document.getElementById("upgradePart").style.display = "inline-block";
  document.getElementById("gamePart").style.display = "inline-block";
});


