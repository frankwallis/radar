var radar_data = [

// Techniques
{"name":"Message Bus", "pc":{"r":170,"t":105},"movement":"c"},
{"name":"Paging DelphiComms", "pc":{"r":380,"t":165},"movement":"s"},    
{"name":"REST (Internal)", "pc":{"r":260,"t":145},"movement":"c"},    
{"name":"Domain Driven Design", "pc":{"r":150,"t":150},"movement":"c"},
{"name":"Single-Page Web-Apps", "pc":{"r":240,"t":125},"movement":"t"},
{"name":"Vertex 5250 Handler", "pc":{"r":280,"t":110},"movement":"t"},
{"name":"Distributed Source Control", "pc":{"r":160,"t":170},"movement":"c"},
{"name":"CMS as a service", "pc":{"r":360,"t":110},"movement":"t"},
{"name":"CI as a service", "pc":{"r":330,"t":120},"movement":"t"},

// Tools
{"name":"Delphi XE5", "pc":{"r":30,"t":35},"movement":"c"},   
{"name":"Enterprise Architect", "pc":{"r":150,"t":35},"movement":"c"},   
{"name":"Gradle", "pc":{"r":360,"t":35},"movement":"s"},   
{"name":"Pacemaker", "pc":{"r":50,"t":65},"movement":"c"},   
{"name":"Nuget", "pc":{"r":240,"t":85},"movement":"c"},   
{"name":"Gulp", "pc":{"r":260,"t":55},"movement":"t"},   
{"name":"SBT", "pc":{"r":260,"t":15},"movement":"t"},
{"name":"NodeJS/NPM", "pc":{"r":150,"t":75},"movement":"t"},
{"name":"Docker", "pc":{"r":350,"t":80},"movement":"t"},
{"name":"BrowserStack", "pc":{"r":350,"t":20},"movement":"t"},
{"name":"CodeHale Metrics", "pc":{"r":250,"t":30},"movement":"t"},
{"name":"Graphite", "pc":{"r":260,"t":10},"movement":"t"},
{"name":"Hystrix", "pc":{"r":240,"t":20},"movement":"t"},

// Platforms & Languages
{"name":"HTML5 Web", "pc":{"r":80,"t":200},"movement":"c"},
{"name":"Dynamics CRM", "pc":{"r":180,"t":210},"movement":"c"},   
{"name":"Office 2013", "pc":{"r":250,"t":220},"movement":"c"},   
{"name":"WinRT", "pc":{"r":330,"t":230},"movement":"s"},   
{"name":"iSeries Linux", "pc":{"r":240,"t":240},"movement":"c"},   
{"name":"Vert.io", "pc":{"r":250,"t":250},"movement":"t"},
{"name":"Java 8", "pc":{"r":220,"t":260},"movement":"c"},
{"name":"Typescript", "pc":{"r":140,"t":240},"movement":"c"},   
{"name":"Scala", "pc":{"r":130,"t":200},"movement":"c"},   
{"name":"Python", "pc":{"r":270,"t":190},"movement":"s"},   

// Libraries & Frameworks
{"name":"JTOpen", "pc":{"r":330,"t":300},"movement":"c"},   
{"name":"Akka", "pc":{"r":350,"t":310},"movement":"c"},   
{"name":"Slick", "pc":{"r":330,"t":325},"movement":"s"},   
{"name":"Wicket", "pc":{"r":50,"t":320},"movement":"s"},
{"name":"AngularJS", "pc":{"r":250,"t":295},"movement":"t"},
{"name":"Firemonkey", "pc":{"r":330,"t":280},"movement":"c"}

];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":9},
{"name":"Tools", "start":9, "end":22},
{"name":"Platforms", "start":22, "end":32},
{"name":"Languages & Frameworks", "start":32, "end":39}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "JHC Technology Radar (Oct 2013)";
