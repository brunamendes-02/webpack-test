import React from 'react';
import ReactDOM from 'react-dom';

const myName = 'Bruna Mendes';

ReactDOM.render(
  <div>Name: {myName}</div>,
  document.querySelector('#app')
)

console.log('It works!');