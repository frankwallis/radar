var radar_data = [

// Techniques
{"name":"Message Bus", "pc":{"r":170,"t":105},"movement":"t"},
{"name":"Paging DelphiComms", "pc":{"r":380,"t":165},"movement":"c"},    
{"name":"REST (Internal)", "pc":{"r":260,"t":145},"movement":"t"},    
{"name":"Domain Driven Design", "pc":{"r":150,"t":155},"movement":"c"},
{"name":"Single-Page Web-Apps", "pc":{"r":240,"t":125},"movement":"t"},
{"name":"Vertex 5250 Handler", "pc":{"r":280,"t":110},"movement":"t"},
{"name":"Distributed Source Control", "pc":{"r":160,"t":5},"movement":"c"},

// Tools
{"name":"Delphi XE5", "pc":{"r":30,"t":35},"movement":"t"},   
{"name":"JTOpen", "pc":{"r":330,"t":45},"movement":"c"},   
{"name":"Enterprise Architect", "pc":{"r":150,"t":65},"movement":"c"},   
{"name":"Gradle", "pc":{"r":360,"t":35},"movement":"t"},   
{"name":"Pacemaker", "pc":{"r":50,"t":65},"movement":"t"},   
{"name":"Nuget", "pc":{"r":240,"t":85},"movement":"t"},   
{"name":"Gulp", "pc":{"r":260,"t":55},"movement":"t"},   
{"name":"SBT", "pc":{"r":260,"t":15},"movement":"t"},
{"name":"NodeJS/NPM", "pc":{"r":150,"t":260},"movement":"t"},

// Platforms
{"name":"HTML5 Web", "pc":{"r":80,"t":200},"movement":"c"},
{"name":"Dynamics CRM", "pc":{"r":180,"t":220},"movement":"c"},   
{"name":"Office 2013", "pc":{"r":250,"t":230},"movement":"c"},   
{"name":"WinRT", "pc":{"r":240,"t":240},"movement":"c"},   
{"name":"iSeries Linux Partition", "pc":{"r":240,"t":250},"movement":"c"},   
{"name":"Vert.io", "pc":{"r":250,"t":260},"movement":"t"},

// Languages & Frameworks
{"name":"Java 8", "pc":{"r":350,"t":280},"movement":"c"},
{"name":"Typescript", "pc":{"r":140,"t":280},"movement":"c"},   
{"name":"Scala", "pc":{"r":130,"t":300},"movement":"c"},   
{"name":"Python", "pc":{"r":270,"t":300},"movement":"c"},   
{"name":"Akka", "pc":{"r":350,"t":310},"movement":"c"},   
{"name":"Slick", "pc":{"r":80,"t":325},"movement":"t"},   
{"name":"Wicket", "pc":{"r":50,"t":320},"movement":"s"},
{"name":"AngularJS", "pc":{"r":50,"t":335},"movement":"t"},
{"name":"Firemonkey", "pc":{"r":50,"t":350},"movement":"c"}

];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":7},
{"name":"Tools", "start":7, "end":15},
{"name":"Platforms", "start":15, "end":21},
{"name":"Languages & Frameworks", "start":21, "end":32}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "JHC Technology Radar (Oct 2013)";
