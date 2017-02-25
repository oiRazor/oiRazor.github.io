var mapimg;

var clat = 40.735657;
var clon = -74.172363;

var ww = 1024;
var hh = 512;

var zoom = 1;
var earthquakes;

function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clat + ',' + clon + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw');
  // earthquakes = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
  earthquakes = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}



function setup() {
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

}
