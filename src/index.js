import React from 'react';
import ReactDom from  'react-dom';
import  './index.scss';
function App(){
  return (
    <div styleName="box">hello World</div>
  )
}

ReactDom.render(<App/>,document.getElementById('root'))
