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
  	console.log("Widget is working")
  	for (var url in ss.storage.URLlist) {
  	console.log(ss.storage.URLlist[url])
  		}
  	panel1.show()

    console.log(tabs.activeTab.url);
  }
})

var panel1 = panels.Panel({
  width: 212,
  height: 200,
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel.js")

}) 


tabs.activeTab.on('ready', function(tab){
  console.log(tab.url);
  ss.storage.URLlist.push(tab.url)
  });




