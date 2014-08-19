var radar_data = [

// Techniques
{"name":"Message Bus", "pc":{"r":170,"t":105}, "movement":"c"},
{"name":"Paging DelphiComms", "pc":{"r":380,"t":165}, "movement":"t"},    
{"name":"REST (Internal)", "pc":{"r":260,"t":145}, "movement":"c"},    
{"name":"Domain Driven Design", "pc":{"r":150,"t":150}, "movement":"c"},
{"name":"Single-Page Web-Apps", "pc":{"r":140,"t":135}, "movement":"t"},
{"name":"Vertex 5250 Handler", "pc":{"r":280,"t":110}, "movement":"t"},
{"name":"Distributed Source Control", "pc":{"r":160,"t":170}, "movement":"c"},
{"name":"CMS as a service", "pc":{"r":360,"t":110}, "movement":"c"},
{"name":"CI as a service", "pc":{"r":330,"t":120}, "movement":"c"},
{"name":"No SQL Database", "pc":{"r":130,"t":115}, "movement":"t"},
{"name":"System Analytics", "pc":{"r":330,"t":125}, "movement":"t"},
{"name":"Public Nexus", "pc":{"r":330,"t":145}, "movement":"t"},
{"name":"Encoded Vector Indices", "pc":{"r":230,"t":135}, "movement":"t"},

// Tools
{"name":"Delphi XE5", "pc":{"r":30,"t":35},"movement":"c"},   
{"name":"RDP 8.5", "pc":{"r":130,"t":35},"movement":"t"},   
{"name":"Enterprise Architect", "pc":{"r":150,"t":35},"movement":"c"},   
{"name":"Gradle", "pc":{"r":360,"t":35},"movement":"s"},   
{"name":"Pacemaker", "pc":{"r":50,"t":65},"movement":"c"},   
{"name":"Nuget", "pc":{"r":240,"t":85},"movement":"c"},   
{"name":"Gulp", "pc":{"r":360,"t":55},"movement":"s"},
{"name":"Component", "pc":{"r":260,"t":55},"movement":"t"},
{"name":"SBT", "pc":{"r":160,"t":15},"movement":"c"},
{"name":"NodeJS/NPM", "pc":{"r":150,"t":75},"movement":"c"},
{"name":"Docker", "pc":{"r":350,"t":80},"movement":"t"},
{"name":"BrowserStack", "pc":{"r":350,"t":10},"movement":"t"},

// Platforms & Languages
{"name":"HTML5 Web", "pc":{"r":80,"t":200},"movement":"c"},
{"name":"Dynamics CRM", "pc":{"r":180,"t":210},"movement":"c"},   
{"name":"Office 2013", "pc":{"r":250,"t":220},"movement":"c"},   
{"name":"WinRT", "pc":{"r":330,"t":230},"movement":"s"},   
{"name":"iSeries Linux", "pc":{"r":240,"t":240},"movement":"c"},   
{"name":"Open Power", "pc":{"r":250,"t":230},"movement":"t"},   
{"name":"Vert.io", "pc":{"r":150,"t":250},"movement":"t"},
{"name":"Java 8", "pc":{"r":220,"t":260},"movement":"c"},
{"name":"Typescript", "pc":{"r":140,"t":240},"movement":"c"},   
{"name":"Scala", "pc":{"r":130,"t":200},"movement":"c"},   
{"name":"Python", "pc":{"r":270,"t":190},"movement":"s"},   

// Libraries & Frameworks
{"name":"JTOpen", "pc":{"r":230,"t":350},"movement":"c"},   
{"name":"Akka", "pc":{"r":350,"t":310},"movement":"c"},   
{"name":"Slick", "pc":{"r":330,"t":325},"movement":"s"},   
{"name":"Wicket", "pc":{"r":50,"t":320},"movement":"s"},
{"name":"AngularJS", "pc":{"r":150,"t":295},"movement":"t"},
{"name":"Firemonkey", "pc":{"r":330,"t":280},"movement":"c"},
{"name":"Bootstrap", "pc":{"r":260,"t":335},"movement":"c"},
{"name":"Foundation", "pc":{"r":260,"t":345},"movement":"t"}

];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":13},
{"name":"Tools", "start":13, "end":25},
{"name":"Platforms & Languages", "start":25, "end":36},
{"name":"Libraries & Frameworks", "start":36, "end":44}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "JHC Technology Radar (Oct 2013)";
