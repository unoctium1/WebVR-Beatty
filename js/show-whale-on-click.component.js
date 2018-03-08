/*
*  Switches the enitity to have an animated blue whale model
*  when the entity is clicked 
*/

AFRAME.registerComponent('show-whale-on-click', {
  
  schema: {
    src: {type: 'string', default: "#blue-whale"} // The id of the blue whale model in assets. 
  },
  
  init:function() {
     
     var el = this.el;
     this.el.addEventListener('click', function (evt) {
       el.setAttribute("gltf-model", this.data.src);
       el.setAttribute("rotation", "0");
       el.setAttribute("scale", "0.07 0.07 0.07");
       el.setAttribute("animation-mixer", "");
       el.setAttribute("sound", "src: #whaleNoise; on: click");
     });
  }
  
});