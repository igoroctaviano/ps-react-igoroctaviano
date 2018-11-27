import React, { Component } from 'react';
import PropTypes from 'prop-types';

import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

export default class CodeExample extends Component {
  componentDidMount() {
    highlight.registerLanguage('javascript', javascript);
    highlight.highlightBlock(this.element);
  }

  render() {
    return (
      <pre
        ref={ref => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
};
