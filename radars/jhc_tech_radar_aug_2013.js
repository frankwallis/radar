var radar_data = [

// Techniques
{"name":"Async Messaging", "pc":{"r":350,"t":95},"movement":"t"},
{"name":"iSeries Web-Service Hosting", "pc":{"r":350,"t":105},"movement":"c"},
{"name":"iSeries Parallel Processing", "pc":{"r":250,"t":115},"movement":"t"},    
{"name":"Cloud Coding Techniques", "pc":{"r":360,"t":125},"movement":"c"},    
{"name":"DelphiComms with DataQueue", "pc":{"r":380,"t":135},"movement":"c"},    
{"name":"REST", "pc":{"r":160,"t":145},"movement":"c"},    
{"name":"Domain Driven Design", "pc":{"r":150,"t":155},"movement":"t"},    

// Tools
{"name":"Distributed Source Control", "pc":{"r":260,"t":5},"movement":"t"},    
{"name":"XML Extender", "pc":{"r":150,"t":15},"movement":"t"},   
{"name":"Delphi XE4", "pc":{"r":90,"t":35},"movement":"t"},   
{"name":"JTOpen", "pc":{"r":330,"t":45},"movement":"t"},   
{"name":"Splunk", "pc":{"r":80,"t":55},"movement":"t"},   
{"name":"Enterprise Architect", "pc":{"r":150,"t":65},"movement":"t"},   
{"name":"Internal Tooling", "pc":{"r":260,"t":75},"movement":"t"},   

// Platforms
{"name":"HTML5 Mobile", "pc":{"r":310,"t":190},"movement":"c"},    
{"name":"HTML5 Web", "pc":{"r":80,"t":200},"movement":"c"},   
{"name":"Open Stack", "pc":{"r":340,"t":210},"movement":"c"},   
{"name":"Dynamics CRM", "pc":{"r":180,"t":220},"movement":"t"},   
{"name":"Office 2013", "pc":{"r":250,"t":230},"movement":"c"},   
{"name":"WinRT", "pc":{"r":240,"t":240},"movement":"t"},   
{"name":"iSeries Linux Partition", "pc":{"r":240,"t":250},"movement":"t"},   

// Languages & Frameworks
{"name":"Java 8", "pc":{"r":350,"t":290},"movement":"c"},   
{"name":"Thrift", "pc":{"r":80,"t":300},"movement":"t"},   
{"name":"Typescript", "pc":{"r":240,"t":310},"movement":"t"},   
{"name":"Scala", "pc":{"r":330,"t":320},"movement":"c"},   
{"name":"Python", "pc":{"r":270,"t":330},"movement":"t"},   
{"name":"Finagle", "pc":{"r":290,"t":345},"movement":"c"},   
{"name":"Akka", "pc":{"r":280,"t":350},"movement":"c"},   

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

var radar_title = "JHC Technology Radar (Aug 2013)";