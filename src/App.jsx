import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TextArea from './components/TextArea';
import Controls from './components/Controls';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      language: 'English',
      fontSize: 16,
      color: 'black',
      isUpperCase: false,
      history: [],
      fontStyle: { bold: false, italic: false, underline: false }
    };
  }

  updateHistory = (newText) => {
    this.setState((prevState) => {
      const updatedHistory = [...prevState.history, newText];
      if (updatedHistory.length > 5) {
        updatedHistory.shift();
      }
      return { history: updatedHistory };
    });
  };

  handleTextChange = (newText) => {
    const { fontSize, color, isUpperCase, fontStyle } = this.state;
    const styledText = { content: newText, fontSize, color, isUpperCase, fontStyle };
    const updatedText = [...this.state.text, styledText];
    this.updateHistory([...this.state.text]);
    this.setState({ text: updatedText });
  };

  handleLanguageChange = (newLanguage) => {
    this.setState({ language: newLanguage });
  };

  handleFontSizeChange = (newSize) => {
    this.setState({ fontSize: newSize });
  };

  handleColorChange = (newColor) => {
    this.setState({ color: newColor });
  };

  toggleCase = () => {
    this.setState((prevState) => ({ isUpperCase: !prevState.isUpperCase }));
  };

  handleClear = () => {
    this.updateHistory([...this.state.text]);
    this.setState({ text: [] });
  };

  handleDelete = () => {
    if (this.state.text.length > 0) {
      const newText = this.state.text.slice(0, -1);
      this.updateHistory([...this.state.text]);
      this.setState({ text: newText });
    }
  };

  handleUndo = () => {
    if (this.state.history.length > 0) {
      const previousText = this.state.history[this.state.history.length - 1];
      const newHistory = this.state.history.slice(0, -1);
      this.setState({ history: newHistory, text: previousText });
    }
  };

  handleFontStyleChange = (style) => {
    this.setState({ fontStyle: style });
  };

  render() {
    const { fontSize, color, isUpperCase, text, fontStyle, language } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>Visual Text Editor</h1>
        </div>
        <div className="container">
          <Controls
            fontSize={fontSize}
            color={color}
            onFontSizeChange={this.handleFontSizeChange}
            onColorChange={this.handleColorChange}
            onToggleCase={this.toggleCase}
            isUpperCase={isUpperCase}
            onClear={this.handleClear}
            onDelete={this.handleDelete}
            onUndo={this.handleUndo}
            onFontStyleChange={this.handleFontStyleChange}
            fontStyle={fontStyle}
            language={language}
            onLanguageChange={this.handleLanguageChange}
          />
          <TextArea text={text} />
          <Keyboard language={language} isUpperCase={isUpperCase} onTextChange={this.handleTextChange} />
        </div>
      </div>
    );
  }
}

export default App;
