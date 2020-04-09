import React from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';
import { Container, Button } from '../../common';
import { inlineStyles } from './constants';

export function Buttons({ editorState, updateEditorState }) {
  const applyStyle = (style) => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style) => {
    const currentStyle = editorState.getCurrentInlineStyle();

    return currentStyle.has(style);
  };

  return (
    <Container>
      {inlineStyles.map((item, i) => (
        <Button
          isActive={isActive(item.style)}
          // eslint-disable-next-line react/no-array-index-key
          key={`${item.label}-${i}`}
          onClick={() => applyStyle(item.style)}
        >
          {item.label}
        </Button>
      ))}
    </Container>
  );
}

Buttons.propTypes = {
  editorState: PropTypes.shape().isRequired,
  updateEditorState: PropTypes.func.isRequired,
};
