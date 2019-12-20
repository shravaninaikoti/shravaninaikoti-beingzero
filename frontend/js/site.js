//how to make a backend call
$.getJSON('/data',function(d){
alert(JSON.stringify(d)) ;
$('name').text(d.name);
$('college').text(d.college);
$('reg').text(d.reg);  
});