var ss = require('simple-storage');
var widgets = require('widget');
var data = require('self').data;
var tabs = require('tabs');
var panels = require('panel');


ss.storage.URLlist = []


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
  width: 600,
  height: 200,
  contentURL: data.url("panel.html"),
  contentScriptFile: [data.url("jquery-1.7.2.min.js"),data.url("panel.js")]

})

// When the widget is clicked, emit the message 'widgetClicked' carrying the stored annotations
widget1.on('click', function() {
  panel1.port.emit('widgetClicked',ss.storage.URLlist);
})


// When a new page is loaded in the active tab, store the URL
tabs.activeTab.on('ready', function(tab){
  console.log(tab.url);
  ss.storage.URLlist.push(tab.url)
  });




