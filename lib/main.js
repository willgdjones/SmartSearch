var ss = require('sdk/simple-storage');
var widgets = require('sdk/widget');
var data = require('sdk/self').data;
var tabs = require('sdk/tabs');
var panels = require('sdk/panel');

var contains = function(a,b){return !!~a.indexOf(b)};

ss.storage.URLlist = []
ss.storage.URLobject = {}


var widget1 = widgets.Widget({
  id: "widget1",
  label: "widget1",
  contentURL: "http://www.mozilla.org/favicon",
  onClick: function() {
  	//
  	panel1.show()

    //console.log(tabs.activeTab.url);
  }
})


var panel1 = panels.Panel({
  width: 500,
  height: 500,
  contentURL: data.url("panel.html"),
  contentScriptFile: [data.url("jquery-1.7.2.min.js"),data.url("panel.js"),data.url("raphael-min.js"),data.url("d3.v2.min.js")]

})

// When the widget is clicked, emit the message 'widgetClicked' carrying the stored urls
widget1.on('click', function() {
  panel1.port.emit('widgetClicked',ss.storage.URLobject);
})


var parentURL 
// When a new page is loaded in the active tab, store the URL
tabs.activeTab.on('ready', function(tab){
  currentURL = tab.url;

  if (!parentURL) {
    parentURL = 'home';
    ss.storage.URLobject[parentURL] = [];
  }

  if (!contains(ss.storage.URLlist,currentURL)) {
    ss.storage.URLobject[currentURL] = []
    ss.storage.URLobject[parentURL].push(currentURL);
  }

  ss.storage.URLlist.push(currentURL);

  parentURL = currentURL;






})









// ************************

// var parentURL 
// // When a new page is loaded in the active tab, store the URL
// tabs.activeTab.on('ready', function(tab){

//   currentURL = tab.url;
//   // add URL to the URL list
//   ss.storage.URLlist.push(currentURL);

//   // Set the root to 'home' and let it point to the first page that has loaded.
//   if (!parentURL) {
//     parentURL = 'home';
//     ss.storage.URLobject[parentURL] = [currentURL];
//   }

//   // If the currentURL is not a Key.
//   //   Add the currentURL as a Key with an empty Array as its Value.
//   if (!ss.storage.URLobject[currentURL]) {
//     ss.storage.URLobject[currentURL] = [];
//   }
  
//   // If x is not already in the Value Array of y, and y is not in the Value Array of x.
//   //   Add x to the Value Array of y.
//   if (!contains(ss.storage.URLobject[parentURL],currentURL) && !contains(ss.storage.URLobject[currentURL],parentURL)) {
//     ss.storage.URLobject[parentURL].push(currentURL);
//   }

//   for (var urlKey in ss.storage.URLobject) {
//     var urlValue = ss.storage.URLobject[urlKey];
//     console.log(urlKey, '\n\n' + ss.storage.URLobject[urlKey] + '\n\n');
//   }

//   parentURL = currentURL;

//   ******************************
//   });
































