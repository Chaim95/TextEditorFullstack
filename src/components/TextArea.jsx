import React, { Component } from 'react';
import './TextArea.css';

class TextArea extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="text-area-container">
        <div className="text-area">
          {text.map((char, index) => (
            <span
              key={index}
              style={{
                fontSize: `${char.fontSize}px`,
                color: char.color,
                fontWeight: char.fontStyle.bold ? 'bold' : 'normal',
                fontStyle: char.fontStyle.italic ? 'italic' : 'normal',
                textDecoration: char.fontStyle.underline ? 'underline' : 'none'
              }}
            >
              {char.isUpperCase ? char.content.toUpperCase() : char.content}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default TextArea;
