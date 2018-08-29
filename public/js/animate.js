$("#push-me").click(function() {
  var self = $(this); 
  if (self.width() < 300) {
    self.width(350); 
    self.height(2); 
    self.removeClass('pulsing'); 
    setTimeout(sides, 1000, self); 
    setTimeout(addContent, 2000);  
    setTimeout(addArrow, 3000);  
  }
}); 

function sides(element) {
  element.height(150); 
  element.css({"border" : "2px solid white", "background-color": "rgba(170,141,57,0.6)"}); 
}

function addArrow(){
    $("#arrow-div").removeClass('hidden'); 
}

function addContent() {
    var div = document.getElementById("push-me"); 
    var logo = document.createElement("h2"); 
    var logo_subtitle = document.createElement("p"); 
    var logo_container = document.createElement("div"); 
    var text_one = document.createTextNode("Luke Blanchard"); 
    var text_two = document.createTextNode("Developer - CS Student - Writer"); 
    logo.appendChild(text_one); 
    logo_subtitle.appendChild(text_two); 
    logo.setAttribute("class", "logo-name"); 
    logo_subtitle.setAttribute("class", "logo-name"); 
	logo_container.setAttribute("class", "logo-name-inner"); 
    logo_container.appendChild(logo); 
    logo_container.appendChild(logo_subtitle); 
	div.appendChild(logo_container); 
}
