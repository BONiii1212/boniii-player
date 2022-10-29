import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import BONiiiPlayer from '../../src';
import {getSongList} from './request'

function App() {
  const [songList, setSongList] = useState([])
  const ref = useRef(null)
  //需要一个songList
  useEffect(()=>{
    getSongList().then(res => {
      setSongList(res)
    })
  })
  const play = () => {
    ref.play()
  }
  const pause = () => {
    ref.pause()
  }

  return (
      <BONiiiPlayer ref={ref} songList={songList} pattern={'order'} size={200} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);