// Require needed libraries
global.Backbone = require("backbone");
global._        = require("underscore");
sinon           = require("sinon");

// Stub history (and globals)
require("../backbone.history_stub.js").stub();

// Create spy
var spy = sinon.spy();

// Create a router
var SpecRouter = Backbone.Router.extend({
  routes: {
    ""      : "root",
    "a/b/c" : "abc"
  },
  abc: function(){
    spy();
  }
});
var router = new SpecRouter();

// Start history - or why else are we here?
Backbone.history.start();

describe("Backbone.HistoryStub",function(){
  beforeEach(function() {
    router.navigate("");
  });

  it("allows router navigation",function(){
    route = "a/b/c";
    router.navigate(route);
    expect(Backbone.history.fragment).toBe(route);
  });

  it("stores handlers",function(){
    handler_count = Backbone.history.handlers.length;
    routes_count  = _.values(router.routes).length;
    expect(handler_count).toBe(routes_count);
  });

  it("calls handlers",function(){
    router.navigate("a/b/c",{trigger:true});
    expect(spy.called).toBe(true);
  });
});

// Stop history or the process won't exit
Backbone.history.stop();
