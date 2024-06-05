import React, { Component } from 'react';
import './Keyboard.css';

class Keyboard extends Component {
  handleKeyClick = (key) => {
    const newKey = this.props.isUpperCase ? key.toUpperCase() : key;
    this.props.onTextChange(newKey);
  };

  render() {
    const { language } = this.props;


    const keys = {
      English: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      Hebrew: 'אבגדהוזחטיכלמנסעפצקרשת'.split(''),
      Emoji: [
        '😆', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😜',
        '👍', '👏', '🇮🇱'
      ]
    };

    return (
      <div className="keyboard">
        {keys[language].map((key, index) => (
          <button key={index} className="key" onClick={() => this.handleKeyClick(key)}>
            {key}
          </button>
        ))}
      </div>
    );
  }
}

export default Keyboard;
