
!function(a,b){if(void 0===b[a]){b["_"+a]={},b[a]=function(c){b["_"+a].clients=b["_"+a].clients||{},b["_"+a].clients[c.projectId]=this,this._config=c},b[a].ready=function(c){b["_"+a].ready=b["_"+a].ready||[],b["_"+a].ready.push(c)};for(var c=["addEvent","setGlobalProperties","trackExternalLink","on"],d=0;d<c.length;d++){var e=c[d],f=function(a){return function(){return this["_"+a]=this["_"+a]||[],this["_"+a].push(arguments),this}};b[a].prototype[e]=f(e)}var g=document.createElement("script");g.type="text/javascript",g.async=!0,g.src="https://d26b395fwzu5fz.cloudfront.net/3.0.5/keen.min.js";var h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("Keen",this);


    //configure instance for project
    var client = new Keen({
      projectId: "53d477e733e4067ff9000003",
      writeKey: "c41a9d6f583d51981e7ffacd25462c52b1872698078a6f7bc9eedadade7105f89286f55c8075acd25150e8cd97d484b0677464c41a8b90f88d66621f2b01c34813de2c2ab27a576889e9abd021df9881e5c99c8d2a790463156b8739df78f38e3ca70f300d009a05b642be56b784bc47",
      readKey: "1026f0ce18d9a515c64bd2d723c673b17b4d2776e9ec235b2985dabfb0868048efc2a7833495bfde2bfef0b1e4849835eaae4dc1815d84ef47d1ce21d98027b5c2edb8acaab6b2e2da2525199dd85222c930dae845f42243543d0af9d77a844012b28c72776987e02565767af0527f26",
    });



  var submit = function() {

    var teams = ["LANDS END", "SUTRO", "TWIN PEAKS", "BARBARY", "PANHANDLE"]
    var t = teams[Math.floor(Math.random() * 5)]

    console.log(teams)
    console.log(t)
    var e = document.getElementById("email").value
    var fn = document.getElementById("fname").value
    var ln = document.getElementById("lname").value

    console.log(e)

    var collector = {
      id: [
        {email:e},
        {fname:fn},
        {lname:ln}
      ],
      team:t,
      keen: {
          timestamp: new Date().toISOString()
      },
    };

    client.addEvent("collectors", collector)
  }
