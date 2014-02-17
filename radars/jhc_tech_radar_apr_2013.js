var radar_data = [

// Techniques
{"name":"Async Messaging", "pc":{"r":350,"t":95},"movement":"t"},
{"name":"iSeries Web-Service Hosting", "pc":{"r":350,"t":105},"movement":"c"},
{"name":"iSeries Parallel Processing", "pc":{"r":250,"t":115},"movement":"t"},    
{"name":"Cloud Coding Techniques", "pc":{"r":230,"t":125},"movement":"t"},    
{"name":"DelphiComms with DataQueue", "pc":{"r":180,"t":135},"movement":"t"},    
{"name":"REST", "pc":{"r":160,"t":145},"movement":"c"},    
{"name":"Domain Driven Design", "pc":{"r":150,"t":155},"movement":"t"},    
{"name":"Command-Query Separation", "pc":{"r":130,"t":165},"movement":"t"},    

// Tools
{"name":"Distributed Source Control", "pc":{"r":310,"t":5},"movement":"t"},    
{"name":"XML Extender", "pc":{"r":150,"t":15},"movement":"c"},   
{"name":"Delphi XE3", "pc":{"r":130,"t":25},"movement":"c"},   
{"name":"Delphi XE4", "pc":{"r":250,"t":35},"movement":"t"},   
{"name":"JTOpen", "pc":{"r":330,"t":45},"movement":"t"},   
{"name":"jOOQ", "pc":{"r":230,"t":55},"movement":"t"},   
{"name":"Splunk", "pc":{"r":260,"t":65},"movement":"t"},   

// Platforms
{"name":"HTML5 Mobile", "pc":{"r":310,"t":190},"movement":"t"},    
{"name":"HTML5 Web", "pc":{"r":210,"t":200},"movement":"c"},   
{"name":"Open Stack", "pc":{"r":240,"t":210},"movement":"t"},   
{"name":"Dynamics CRM", "pc":{"r":220,"t":220},"movement":"t"},   
{"name":"Office 2013", "pc":{"r":250,"t":230},"movement":"t"},   
{"name":"WinRT", "pc":{"r":240,"t":240},"movement":"t"},   

// Languages & Frameworks
{"name":"Java 7", "pc":{"r":90,"t":280},"movement":"t"},    
{"name":"Java 8", "pc":{"r":350,"t":290},"movement":"c"},   
{"name":"Thrift", "pc":{"r":120,"t":300},"movement":"t"},   
{"name":"Hydra", "pc":{"r":360,"t":310},"movement":"t"},   
{"name":"Bootstrap", "pc":{"r":250,"t":320},"movement":"c"},   
{"name":"Typescript", "pc":{"r":240,"t":330},"movement":"c"},   
{"name":"Scala", "pc":{"r":330,"t":340},"movement":"t"},   
{"name":"Akka", "pc":{"r":280,"t":350},"movement":"t"},   
{"name":"Finagle", "pc":{"r":290,"t":345},"movement":"t"},   

];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":8},
{"name":"Tools", "start":8, "end":15},
{"name":"Platforms", "start":15, "end":21},
{"name":"Languages", "start":21, "end":30}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "JHC Technology Radar (Apr 2013)";