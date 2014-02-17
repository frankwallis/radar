function init(h,w) {

 document.getElementById('project_tagline').text = radar_title;

 var activeItem = null;
 
 var shapes = {
	c: "circle",
	t: "triangle",
	s: "square" }
 
 var radar = new pv.Panel()
      .width(w)
      .height(h)
	  .top(20)
	  .left(10)
      .canvas('radar')
      // .add(pv.Panel)
     .add(pv.Dot)
       .def("active", false)
       .data(radar_data)
       .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
              console.log("name:" + d.name + ", x:" + x); return x;})
         .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                  console.log("name:" + d.name + ", y:" + y); return y;})
         .title(function(d) { return d.name;})
	 .font('14px sans-serif')
         .angle(45)
         .fillStyle(function(d) { return (activeItem == d ? "red" : "#aec7e8"); })
	 .size(60)
         .shape(function(d) {return shapes[d.movement]; })
	 .events("all")
	 .event("click", function(d) {activeItem = d; return this.parent;})
		 //.event("mousedown", pv.Behavior.select())
		 //.event("select", function(d) {activeItem = d; return this.parent;})
         .anchor("top").add(pv.Label)
         .text(function(d) { return (activeItem == d ? d.name : this.index + 1 + "");}) 
	 .title(function(d) { return d.name;})
	 //.events("all") 
	 //.event("click", function(d) {activeItem = d; return this.parent.parent;})
	 .font('14px sans-serif')
	 .textAlign("left");

function draw_legend(quad, left, top) {

  radar.add(pv.Label)
       .left(qleft)
       .top(qtop -8)
       .anchor("left")
       .add(pv.Label)
             .text(quad.name)
             .font('24pt');
  var t = radar_data.slice(quad.start,quad.end);
  
  radar.add(pv.Dot) 
      .data(t) 
      .left(qleft) 
      .top(function() {return (qtop + (this.index * 18));}) 
      .size(8) 
      .strokeStyle(null) 
      .fillStyle("#aec7e8") 
    .anchor("right")
          .add(pv.Label)
          .text(function(d) {return (quad.start + 1 + this.index) + ". " + d.name;} );
}
/*
//race conditions?
for (var i = 0; i < radar_quadrants.length; i++) {
  var qleft = 5 + (1020 * ((i+1) % 2));
  var qtop = 36 + (500 * (i > 1 ? 1: 0));
  var quad = radar_quadrants[i];
  radar.add(pv.Dot)
      .strokeStyle(null)
      .left(5)
  
  draw_legend(quad, qleft, qtop);
  
} */            

    radar.add(pv.Label)
         .left(5)
         .top(18)
         .fillStyle("#aec7e8") 
         .text(radar_quadrants[0].name)
         .font("18px sans-serif");
  
    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[0].start,radar_quadrants[0].end)) 
        .left(5) 
        .top(function() {return (36 + this.index * 20);}) 
        .size(50) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return shapes[d.movement]; })
		.fillStyle(function(d) { return (activeItem == d ? "red" : "#aec7e8"); })
		.events("all")
  	    .event("click", function(d) {activeItem = d; return this.parent;})
      .anchor("right").add(pv.Label)
	  .text(function(d) {return this.index + 1 + ". " + d.name;} )
	  .textBaseline("middle")
	  .textMargin(10)
//  	.event("mousedown", pv.Behavior.select())
//		.event("select", function(d) {alert('hello'); activeItem = d; return this.parent;})
	  .font(function(d) { return (activeItem == d ? "bold 16px sans-serif" : "16px sans-serif"); });

    radar.anchor("left").add(pv.Label)
         .left(5)
         .top(h/2 + 148)
         .fillStyle("#aec7e8") 
         .text(radar_quadrants[2].name)
         .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[2].start,radar_quadrants[2].end)) 
        .left(5) 
        .top(function() {return ((h/2) + 170 + this.index * 20);}) 
        .size(50) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return shapes[d.movement]; })
		.fillStyle(function(d) { return (activeItem == d ? "red" : "#aec7e8"); })
		.events("all")
		.event("click", function(d) {activeItem = d; return this.parent;})
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[2].start + ". " + d.name;} )
	  .textMargin(10)
	  .font(function(d) { return (activeItem == d ? "bold 16px sans-serif" : "16px sans-serif"); });

  radar.anchor("left").add(pv.Label)
       .left(w-250+30)  
       .top(18)
       .text(radar_quadrants[1].name)
       .font("18px sans-serif");
      

  radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[1].start,radar_quadrants[1].end)) 
        .left(w-250+30) 
        .top(function() {return (40 + this.index * 20);}) 
        .size(50) 
        .angle(45)
        .shape(function(d) {return shapes[d.movement]; })
        .strokeStyle(null) 
        .fillStyle(function(d) { return (activeItem == d ? "red" : "#aec7e8"); })
		.events("all")
  	    .event("click", function(d) {activeItem = d; return this.parent;})
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[1].start + ". " + d.name;} )
		.textMargin(10)
		.font(function(d) { return (activeItem == d ? "bold 16px sans-serif" : "16px sans-serif"); });

  radar.anchor("left").add(pv.Label)
       .left(w-250+30)
       .top(h/2 + 148)
       .fillStyle("#aec7e8") 
       .text(radar_quadrants[3].name)
       .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[3].start,radar_quadrants[3].end)) 
        .left(w-250+30) 
        .top(function() {return ((h/2) + 170 + this.index * 20);}) 
        .size(50) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return shapes[d.movement]; })
        .fillStyle(function(d) { return (activeItem == d ? "red" : "#aec7e8"); })
		.events("all")
		.event("click", function(d) {activeItem = d; return this.parent;})
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[3].start + ". " + d.name;} )
		.textMargin(10)
		.font(function(d) { return (activeItem == d ? "bold 16px sans-serif" : "16px sans-serif"); });

//arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")
       .add(pv.Label).text(function(d) { return d.name;})
	   .font("bold 14px sans-serif").textBaseline("top").textAlign("left").textMargin(7);

//quadrant lines
radar.add(pv.Line)
        .data([(h/2-radar_arcs[3].r),h-(h/2-radar_arcs[3].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

radar.add(pv.Line)
                .data([200,w-200])
                .lineWidth(1)
                .bottom(h/2)
                .left(function(d) {return d;})       
                .strokeStyle("#bbb");
       
 radar.anchor('radar');
 radar.render();
     
  };
