import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import { debounce } from './utils/debounce';
import { throttle } from './utils/throttle';

function App() {
  const click = throttle(() => {
    import('lodash-es').then(data=>{
      console.log(data);
    })
  }, 1000)
  return (
    <div styleName="box" onClick={click} >
      <div styleName="child"></div>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
