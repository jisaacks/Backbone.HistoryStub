module.exports = (function() {
  var stubs;

  stubs = {
    _history: {
      location: {
        href: "",
        pathname: "/"
      },
      stop: function() {
        clearInterval(this._checkUrlInterval);
      }
    },
    _global:{
      window:    {},
      document:  {},
      navigator: { userAgent:"" }
    }
  };

  function HistoryStub() {}

  HistoryStub.stub = function() {
    _.extend( global,           stubs._global  )
    _.extend( Backbone.history, stubs._history )
  };

  return HistoryStub;

})();
