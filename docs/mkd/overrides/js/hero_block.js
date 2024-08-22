console.clear();

// Manage top face zIndexes
[...document.querySelectorAll('.top .pixel')].forEach((el, ind, arr) => {
  
  el.style.zIndex = (10 - (Math.floor(ind / Math.sqrt(arr.length)))) + '' + ind%10;
  
});

// Manage right face zIndexes
[...document.querySelectorAll('.right .inner .pixel')].reverse().forEach((el, ind) => {
  
  el.style.zIndex = ind;
  
});

// Manage left face zIndexes
var arr = [...document.querySelectorAll('.left .inner .pixel')];
var ln = arr.length/10;

var ar = [];
for(var i = 0; i < ln; i++) {
  var a = [];
  while(a.length < 10) {
    a.push(arr.shift());
  }
  ar.push(a);
}

var zIndex = -1;
ar.reverse().forEach((row, ind) => {
  row.forEach(pixel => {
    zIndex++;
    pixel.style.zIndex = zIndex;
  });
});
