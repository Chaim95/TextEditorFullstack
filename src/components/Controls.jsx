import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  render() {
    const {
      fontSize, color, onFontSizeChange, onColorChange, onToggleCase, isUpperCase,
      onClear, onDelete, onUndo, onFontStyleChange, fontStyle, language, onLanguageChange
    } = this.props;

    const colors = ['black', 'red', 'green', 'blue', 'purple', 'orange', 'brown', 'pink', 'gray'];
    const fontStyles = [
      { label: 'Normal', value: { bold: false, italic: false, underline: false } },
      { label: 'Bold', value: { bold: true, italic: false, underline: false } },
      { label: 'Italic', value: { bold: false, italic: true, underline: false } },
      { label: 'Underline', value: { bold: false, italic: false, underline: true } }
    ];
    const languages = ['English', 'Hebrew', 'Emoji'];

    return (
      <div className="controls-container">
        <div className="language-switcher">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={language === lang ? 'active' : ''}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="controls">
          <div className="control-group">
            <label>Font Size:</label>
            <select value={fontSize} onChange={(e) => onFontSizeChange(Number(e.target.value))}>
              {[12, 14, 16, 18, 20, 24, 30, 36, 48].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label>Color:</label>
            <select value={color} onChange={(e) => onColorChange(e.target.value)}>
              {colors.map(color => (
                <option key={color} value={color} style={{ backgroundColor: color }}>{color}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label>Font Style:</label>
            <select value={JSON.stringify(fontStyle)} onChange={(e) => onFontStyleChange(JSON.parse(e.target.value))}>
              {fontStyles.map(style => (
                <option key={style.label} value={JSON.stringify(style.value)}>{style.label}</option>
              ))}
            </select>
          </div>
          <button className="case-button" onClick={onToggleCase}>{isUpperCase ? 'lower case' : 'UPPER CASE'}</button>
          <button className="clear-button" onClick={onClear}>CLEAR</button>
          <button className="delete-button" onClick={onDelete}>DELETE</button>
          <button className="undo-button" onClick={onUndo}>UNDO</button>
        </div>
      </div>
    );
  }
}

export default Controls;
