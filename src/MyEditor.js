import React, { useState } from 'react';

import { EditorState, Editor, convertToRaw } from 'draft-js';
import { Buttons } from './components/buttons/Buttons';
import { MyEditorWrapper,
  MyEditorContainer,
  Button,
  MyEditorOutput } from './common';
import './MyEditor.scss';
import { styleMap } from './components/buttons/constants';

export function MyEditor() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  const [jsonField, setJsonField] = useState(null);

  const toJson = () => {
    const rawDraftContentState = convertToRaw(editorState.getCurrentContent());

    setJsonField(rawDraftContentState);
  };

  return (
    <MyEditorWrapper>
      <Buttons
        editorState={editorState}
        updateEditorState={setEditorState}
      />
      <MyEditorContainer>
        <Editor
          placeholder="Enter you text..."
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={styleMap}
        />
      </MyEditorContainer>
      <Button onClick={() => toJson()}>ToJSON</Button>
      <MyEditorOutput>
        {jsonField && jsonField.blocks.map(item => (
          <div key={item.key}>
            <span className="mainText">
              text:
              {' '}
              {item.text}
              ;
            </span>
            {item.inlineStyleRanges.map(style => (
              <div key={`${item.key}-${style.offset}-${style.style}`}>
                <p>
                  Styled text:
                  {' '}
                  {item.text.slice(style.offset, style.length + style.offset)}
                  ;
                </p>
                <span>
                  Style:
                  {' '}
                  {style.style}
                  {', '}
                </span>
                <span>
                  Styled length:
                  {' '}
                  {style.length}
                  {', '}
                </span>
                <span>
                  Styled offset:
                  {' '}
                  {style.offset}
                  ;
                </span>
              </div>
            ))}
          </div>
        ))}
      </MyEditorOutput>
    </MyEditorWrapper>
  );
}
