## Backbone.HistoryStub

Stubs out necessary properties in Backbone.history and the global namespace (i.e. window, document) to allow Backbone.history to run outside of browser.

### Usage

install the node package: `npm install backbone.history_stub

Then stub before calling `Backbone.history.start()`:

```javascript
require("../src/backbone.history_stub.js").stub();
Backbone.history.start();
```

### Contributing

Add specs for any new functionality. To run the specs:

* Install [jasmine-node](https://github.com/mhevery/jasmine-node): `npm install -g jasmine-node`
* Run specs: `jasmine-node spec/`