### BONiii-player

[![npm version](https://img.shields.io/npm/v/boniii-player.svg?style=flat-square)](https://www.npmjs.org/package/boniii-player)    [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=boniii-player&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=boniii-player)    [![npm downloads](https://img.shields.io/npm/dm/boniii-player.svg?style=flat-square)](https://npm-stat.com/charts.html?package=boniii-player)

A fast access compact music player for React projects

![](https://music-1305899292.cos.ap-shanghai.myqcloud.com/example.png)

### Install

```
$ npm i boniii-player
```

### Usage

```jsx
import React from 'react';

function Test() {
//You can also obtain the play and pause functions of the player through ref
  const player_ref = useRef(null)
  const play = () => {
    player_ref.play()
  }
  const pause = () => {
    player_ref.pause()
  }
  return (
      <BONiiiPlayer ref={player_ref} songList={songList}/>
  );
}
```

For example, the songList format must be

```js
const SongList = [
    { id: 0, songName: 'sunflower', singer: 'Post Malone / Swae Lee', lyrics: '', songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.jpg', resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.mp3'},
    { id: 1, songName: 'goodbye', singer: 'Post Malone / Young Thug', lyrics: '', songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.jpg', resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.mp3'}
]
```

The format of lyrics must be

```
"[00:02.29]Ayy, ayy, ayy, ayy (ooh)\n[00:09.49]Ooh, ooh, ooh, ohh (ooh)\n[00:15.61]Ayy, ayy\n[00:19.40]Ooh, ooh, ooh, ohh\n[00:27.08]Needless to say, I keep a check\n[00:29.50]She was all bad-bad, nevertheless (yeah)\n[00:32.20]Callin' it quits now, baby, I'm a wreck (wreck)\n[00:34.83]Crash at my place, baby, you're a wreck (wreck)\n[00:37.54]Needless to say, I'm keepin' a check\n[00:40.10]She was all bad-bad, nevertheless\n[00:42.85]Callin' it quits now, baby, I'm a wreck\n[00:45.41]Crash at my place, baby, you're a wreck\n[00:48.16]Thinkin' in a bad way, losin' your grip\n[00:50.82]Screamin' at my face, baby don't trip\n[00:53.44]Someone took a big L, don't know how that felt\n[00:56.09]Lookin' at you sideways, party on tilt\n[00:58.72]Ooh-ooh, some things you just can't refuse\n[01:03.87]She wanna ride me like a cruise\n[01:06.45]And I'm not tryna lose\n[01:10.34]Then you're left in the dust\n[01:12.95]Unless I stuck by ya\n[01:15.63]You're a sunflower\n[01:18.26]I think your love would be too much\n[01:21.06]Or you'll be left in the dust\n[01:23.88]Unless I stuck by ya\n[01:26.31]You're the sunflower\n[01:29.00]You're the sunflower\n[01:31.40]Every time I'm leavin' on you\n[01:33.92]You don't make it easy, no, no\n[01:36.56]Wish I could be there for you\n[01:39.12]Give me a reason to go\n[01:42.28]Every time I'm walkin' out\n[01:44.19]I can hear you tellin' me to turn around\n[01:46.82]Fightin' for my trust and you won't back down\n[01:49.44]Even if we gotta risk it all right now, oh\n[01:52.75]I know you're scared of the unknown (-known)\n[01:55.00]You don't wanna be alone (alone)\n[01:57.78]I know I always come and go (and go)\n[02:00.24]But it's out of my control\n[02:03.54]And you'll be left in the dust\n[02:06.37]Unless I stuck by ya\n[02:09.01]You're a sunflower\n[02:11.78]I think your love would be too much\n[02:14.52]Or you'll be left in the dust\n[02:17.17]Unless I stuck by ya\n[02:19.70]You're the sunflower\n[02:22.56]You're the sunflower\n[02:24.66]Yeah\n"
```

