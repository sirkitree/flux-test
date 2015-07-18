/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

// var MainSection = require('./MainSection.react');
var React = require('react');

var FluxApp = React.createClass({
  render: function() {
    return (
      <div>MainSection</div>
    )
  }
});

module.exports = FluxApp;