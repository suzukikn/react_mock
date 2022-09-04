import React, { useState } from 'react'
import styles from './Chosemenu.module.css';

const style = {
  minwidth: '64px',
  lineHeight: '32px',
  borderRadius: '4px',
  padding: '16px',
  backgroundColor: '#c1ffff',
};

const Chosemenu = () => {

  const clickHandler = () => {
    console.log('Click')
  }

  const [count, setCount] = useState(0)

  return (
    <div>
      <button style={style} onClick={clickHandler}>ボタン１</button>
      <button onClick={() => setCount(count+1)}>カウントボタン {count}</button>
    </div>
  )
}

export default Chosemenu
