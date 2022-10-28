### BONiii-player

[![npm version](https://img.shields.io/npm/v/boniii-player.svg?style=flat-square)](https://www.npmjs.org/package/boniii-player)    [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=boniii-player&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=boniii-player)    [![npm downloads](https://img.shields.io/npm/dm/boniii-player.svg?style=flat-square)](https://npm-stat.com/charts.html?package=boniii-player)

A fast access compact music player for React projects

![](https://music-1305899292.cos.ap-shanghai.myqcloud.com/example.png)

### Install

```
$ npm i boniii-player
```

### API

| Property | Description                                                  | Type              | Default |
| -------- | ------------------------------------------------------------ | ----------------- | ------- |
| songList | Song list (including song name, singer, lyrics, cover and music y | object            | null    |
| pattern  | Playback mode                                                | 'loop' \| 'order' | 'loop'  |
| isMute   | Mute or not                                                  | boolean           | False   |
| size     | Set the size of player                                       | number            | 100     |

### Usage

```jsx
import React from 'react';
import BONiiiPlayer from 'boniii-player'

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
    {
        id: 0, 
        songName: 'sunflower', 
        singer: 'Post Malone / Swae Lee', 
        lyrics: '', 
        songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.jpg', 
        resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.mp3'
    },
    {
       id: 1, 
       songName: 'goodbye', 
       singer: 'Post Malone / Young Thug', 
       lyrics: '', 
       songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.jpg', 
       resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.mp3'
    }
]
```

The format of lyrics must be

```
"[00:02.29]Ayy, ayy, ayy, ayy (ooh)\n[00:09.49]Ooh, ooh, ooh, ohh (ooh)\n[00:15.61]Ayy, ayy\n[00:19.40]Ooh, ooh, ooh, ohh\n[00:27.08]Needless to say, I keep a check\n[00:29.50]She was all bad-bad, nevertheless (yeah)\n[00:32.20]Callin' it quits now, baby, I'm a wreck (wreck)\n[00:34.83]Crash at my place, baby, you're a wreck (wreck)\n[00:37.54]Needless to say, I'm keepin' a check\n[00:40.10]She was all bad-bad, nevertheless\n[00:42.85]Callin' it quits now, baby, I'm a wreck\n[00:45.41]Crash at my place, baby, you're a wreck\n[00:48.16]Thinkin' in a bad way, losin' your grip\n[00:50.82]Screamin' at my face, baby don't trip\n[00:53.44]Someone took a big L, don't know how that felt\n[00:56.09]Lookin' at you sideways, party on tilt\n[00:58.72]Ooh-ooh, some things you just can't refuse\n[01:03.87]She wanna ride me like a cruise\n[01:06.45]And I'm not tryna lose\n[01:10.34]Then you're left in the dust\n[01:12.95]Unless I stuck by ya\n[01:15.63]You're a sunflower\n[01:18.26]I think your love would be too much\n[01:21.06]Or you'll be left in the dust\n[01:23.88]Unless I stuck by ya\n[01:26.31]You're the sunflower\n[01:29.00]You're the sunflower\n[01:31.40]Every time I'm leavin' on you\n[01:33.92]You don't make it easy, no, no\n[01:36.56]Wish I could be there for you\n[01:39.12]Give me a reason to go\n[01:42.28]Every time I'm walkin' out\n[01:44.19]I can hear you tellin' me to turn around\n[01:46.82]Fightin' for my trust and you won't back down\n[01:49.44]Even if we gotta risk it all right now, oh\n[01:52.75]I know you're scared of the unknown (-known)\n[01:55.00]You don't wanna be alone (alone)\n[01:57.78]I know I always come and go (and go)\n[02:00.24]But it's out of my control\n[02:03.54]And you'll be left in the dust\n[02:06.37]Unless I stuck by ya\n[02:09.01]You're a sunflower\n[02:11.78]I think your love would be too much\n[02:14.52]Or you'll be left in the dust\n[02:17.17]Unless I stuck by ya\n[02:19.70]You're the sunflower\n[02:22.56]You're the sunflower\n[02:24.66]Yeah\n"
```

```
"[00:00.000] 作词 : Louis Bell/Brian Lee/Austin Post/Billy Walsh/Jeffery Williams/Jessie Lauren Foutz/Val Blavatnik\n[00:01.000] 作曲 : Louis Bell/Brian Lee/Austin Post/Billy Walsh/Jeffery Williams/Jessie Lauren Foutz/Val Blavatnik\n[00:14.27]Me and Kurt feel the same, too much pleasure is pain\n[00:18.33]My girl spites me in vain, all I do is complain\n[00:21.47]She needs something to change, need to take off the e-e-edge\n[00:25.85]So f*ck it all tonight\n[00:27.95]And don't tell me to shut up\n[00:31.50]When you know you talk too much\n[00:34.84]But you don't got s**t to say (Say)\n[00:38.97]I want you out of my head\n[00:41.96]I want you out of my bedroom tonight (Bedroom)\n[00:45.38]There's no way I can save you (Save you)\n[00:48.43]'Cause I need to be saved too\n[00:51.72]I'm no good at goodbyes\n[00:53.75]We're both actin' insane, but too stubborn to change\n[00:56.71]Now I'm drinkin' again, 80 proof in my veins\n[00:59.81]And my fingertips stained, looking over the e-e-edge\n[01:04.13]Don't f*ck with me tonight\n[01:06.34]Said you needed this heart, then you got it (Got it)\n[01:09.51]Turns out that it wasn't what you wanted (Wanted)\n[01:12.60]And we wouldn't let go and we lost it\n[01:15.69]Now I'm a goner\n[01:17.35]I want you out of my head (Head)\n[01:20.63]I want you out of my bedroom tonight (Bedroom)\n[01:24.09]There's no way I can save you (Save you)\n[01:27.09]'Cause I need to be saved too (Saved too)\n[01:30.49]I'm no good at goodbyes\n[01:32.11]I want you out of my life\n[01:33.46]I want you back here tonight\n[01:34.90]I'm tryna cut you, no knife\n[01:36.47]I wanna slice you and dice you\n[01:38.42]My heart gets  possessive, it got you precise\n[01:41.67]Can you not turn off the TV? I'm watchin' a  fight\n[01:44.80]I flood the garage, blue diamond, no shark\n[01:48.00]Your Barbie life doll, is Nicki Minaj\n[01:51.32]You don't need a key to drive, your car on the charger\n[01:54.49]I just wanna see the side, the one the unbothered (Yeah)\n[01:57.80]And I don't want ya to never go outside (Outside)\n[02:00.64]I promise if they play, my ****** slidin' (Slidin')\n[02:04.12]I'm ******' her, and the tour bus still ridin' (Ridin')\n[02:07.21]Yeah, yeah, yeah, yeah, yeah\n[02:08.85]I want you out of my head (Head)\n[02:11.71]I want you out of my bedroom tonight (Bedroom)\n[02:14.92]There's no way I can save you (Save you)\n[02:18.48]'Cause I need to be saved, too (Saved, too)\n[02:21.59]I'm no good at goodbyes\n[02:23.28]Goodbye, goodbye, goodbye (Bye, bye)\n[02:27.11]Goodbye, goodbye, goodbye (Bye, bye)\n[02:30.23]Goodbye, goodbye, goodbye (Bye, bye, bye)\n[02:34.62]I'm no good at goodbyes\n[02:36.35]Goodbye, goodbye, goodbye (Bye, bye)\n[02:39.68]Goodbye, goodbye, goodbye (Bye, bye)\n[02:43.06]Goodbye, goodbye, goodbye (Bye, bye)\n[02:47.17]I'm no good at goodbyes\n"
```

