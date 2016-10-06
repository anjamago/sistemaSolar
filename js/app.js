var Planet = function(){
  return {
        clocwise_translation: Math.round(Math.random()),
        size: Math.random()*(100-10)+10,
        speed: Math.random()*(10-1)+1, //px/seg
        color:"#AAA",
        orbit_size:Math.random()*(800-200)+200,
        orbit_position:Math.random()*360,
        getSize:function(){
          return this.size+'px';
        },
        getSpeed:function(){
          return this.size+'px';
        },
        pushDomElement:function(dom_parent){
          var li = document.createElement('li');
          var span = document.createElement('span');
          span.setAttribute('class','planet');
          li.appendChild(span);
          span.style.width = this.getSize();
          span.style.height = this.getSize();
          li.style.position = "relative";
          li.style.width=this.orbit_size;
          li.style.height = this.orbit_size;
          span.style.position = "absolute";
          span.style.bottom = 0;
          span.style.right = 0;

          dom_parent.appendChild(li);
        },
      };//return
};//fin de la funcion planeta

var number_planet =9;
var planets = [];

while(number_planet -- > 0){
  planets.push(Planet());
}
console.log(planets);
