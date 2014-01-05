## Backbone.HistoryStub

Stubs out necessary properties in Backbone.history and the global namespace (i.e. window, document) to allow Backbone.history to run outside of browser. ( *Mainly for testing purposes* )

### Usage

install the node package: `npm install backbone.history_stub

Then stub before calling `Backbone.history.start()`:

```javascript
require("backbone.history_stub").stub();
Backbone.history.start();
```

### Contributing

Add specs for any new functionality. To run the specs:

* Install [jasmine-node](https://github.com/mhevery/jasmine-node): `npm install -g jasmine-node`
* Run specs: `jasmine-node spec/`