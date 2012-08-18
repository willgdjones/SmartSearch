var ss = require('simple-storage');
var widgets = require('widget');
var data = require('self').data;
var tabs = require('tabs');
var panels = require('panel');

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
  width: 1000,
  height: 800,
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
































