import { sunflower } from "./lyrics/1"
import { goodbye } from "./lyrics/2"
const SongList = [
    { id: 0, songName: 'sunflower', singer: 'Post Malone / Swae Lee', lyrics: sunflower, songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.jpg', resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/0.mp3'},
    { id: 1, songName: 'goodbye', singer: 'Post Malone / Young Thug', lyrics: goodbye, songCover: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.jpg', resource: 'https://music-1305899292.cos.ap-shanghai.myqcloud.com/1.mp3'}
]

export function getSongList() {
    return Promise.resolve(SongList)
}