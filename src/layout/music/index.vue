<template>
  <div class="music" ref="musicMain">
    <div class="music__mask" ref="musicList">
      <el-table :data="audioSrcs" style="width: 100%" max-height="200">
        <el-table-column prop="name" label="歌曲" width="180" />
        <el-table-column prop="author" label="歌手" width="180" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="playThis(scope.$index)"
              >播放</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="music__main">
      <div :class="['music__main__cover', isPlay ? 'active' : '']">
        <img :src="audioPic" @click="shouqi" />
      </div>
      <div class="music__main__right" ref="musicRight">
        <div class="music__main__title">
          <span>{{ audioName }}</span>
          <span style="font-size: 18px; color: #d1dbe5">&nbsp;--&nbsp;</span>
          <span style="font-size: 18px; color: #d1dbe5">{{ audioAuthor }}</span>
        </div>
        <div class="music__main__timeBar">
          <div class="bar" ref="bar" @click="handClickBar">
            <div class="bar__slid" ref="slid" @click="handClickBar"></div>
          </div>
          <div class="time">
            <span>{{ realMusicTime }}</span>
            <span>/</span>
            <span>{{ totalMusicTime }}</span>
          </div>
        </div>
        <div class="music__main__btn">
          <svg-icon
            icon="previous_bai_shixin"
            class="svg-container"
            @click="previousMusic"
          ></svg-icon>
          <svg-icon
            icon="play_bai_shixin"
            class="svg-container"
            @click="play"
            v-show="audioPlayShow"
          ></svg-icon>
          <svg-icon
            icon="pause_bai_cu"
            class="svg-container"
            @click="play"
            v-show="audioPauseShow"
          ></svg-icon>
          <svg-icon
            icon="next_bai_shixin"
            class="svg-container"
            @click="nextMusic"
          ></svg-icon>
          <svg-icon
            icon="danlieliebiao"
            lascs="svg-container"
            @click="listShow"
          ></svg-icon>
        </div>
      </div>
    </div>
    <audio ref="music" :src="audioSrc"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ElNotification } from 'element-plus'

onMounted(() => {
  watchMusicTime()
})

const musicMain = ref(null)
const music = ref(null)
const bar = ref(null)
const slid = ref(null)
const musicRight = ref(null)
const musicList = ref(null)

// 音乐播放按钮是否显示，默认是显示的（音乐默认是没有播放的）
const audioPlayShow = ref(true)
// 音乐播放按钮是否显示，默认是不显示的（音乐默认是没有播放的）
const audioPauseShow = ref(false)
// 当前播放音乐
let currentIndex = 0
// 播放组件是否收起，默认是不收起的
const audioShouqi = ref(true)
// 音乐列表是否收起，默认是收起的
const audioList = ref(true)

const audioSrcs = [
  {
    name: '123',
    author: '作者123',
    pic: 'http://static-dir.wjshlnn.com/md/images/image-20220524162022348.png',
    url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
  },
  {
    name: '456',
    author: '作者456',
    pic: 'http://ruoyi.wjshlnn.com/profile/material/2021/09/19/f6a4b4f0-dd93-4f5c-a52c-75717468fbb5.png',
    url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
  },
  {
    name: '789',
    author: '作者789',
    pic: 'http://ruoyi.wjshlnn.com/profile/material/2021/09/20/eea9e7cb-10e5-478a-8268-c986c50f78fa.png',
    url: 'http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3'
  }
]

const isPlay = ref(false)
const realMusicTime = ref('00:00')
const totalMusicTime = ref('00:00')
const audioName = ref(audioSrcs[currentIndex].name)
const audioAuthor = ref(audioSrcs[currentIndex].author)
const audioPic = ref(audioSrcs[currentIndex].pic)
const audioSrc = ref(audioSrcs[currentIndex].url)

// 音乐播放/暂停
const play = () => {
  if (music.value.paused) {
    music.value.play()
    isPlay.value = true
    audioPlayShow.value = false
    audioPauseShow.value = true
  } else {
    music.value.pause()
    isPlay.value = false
    audioPlayShow.value = true
    audioPauseShow.value = false
  }
}

// 播放音乐
const playMusic = () => {
  audioName.value = audioSrcs[currentIndex].name
  audioAuthor.value = audioSrcs[currentIndex].author
  audioPic.value = audioSrcs[currentIndex].pic
  audioSrc.value = audioSrcs[currentIndex].url
  music.value.load()
  // 文件下载完毕，如果不用等到全部下载完毕，可以用canplay事件
  music.value.addEventListener('canplaythrough', () => {
    music.value.play()
    isPlay.value = true
    audioPlayShow.value = false
    audioPauseShow.value = true
  })
}

// 下一首
const nextMusic = () => {
  if (currentIndex + 1 === audioSrcs.length) {
    ElNotification({
      title: '提示',
      message: '已经是最后一首了,即将从第一首开始播放！',
      type: 'info'
    })
    currentIndex = 0
  } else {
    currentIndex += 1
  }

  playMusic()
}

// 上一首
const previousMusic = () => {
  if (currentIndex === 0) {
    ElNotification({
      title: '提示',
      message: '已经是第一首了！',
      type: 'info'
    })
  } else {
    currentIndex -= 1
    playMusic()
  }
}

// 收起/展开（只剩下图标）
const shouqi = () => {
  // 收起
  if (audioShouqi.value) {
    audioShouqi.value = false
    musicRight.value.style.display = 'none'
    musicMain.value.style.width = '120px'
    if (!audioList.value) {
      listShow()
    }
  } else {
    // 展开
    audioShouqi.value = true
    musicRight.value.style.display = 'block'
    musicMain.value.style.width = '500px'
  }
}

// 音乐列表
const listShow = () => {
  if (audioList.value) {
    // 展开
    audioList.value = false
    musicList.value.style.display = 'block'
  } else {
    // 收起
    audioList.value = true
    musicList.value.style.display = 'none'
  }
}

// 播放指定音乐
const playThis = (index) => {
  // console.log(index)
  currentIndex = index
  playMusic()
}

// 处理时间
const handlMusicTime = () => {
  // 用秒数来显示当前播放进度
  const timeDisplay = Math.floor(music.value.currentTime) // 获取实时时间
  // 分钟
  let minute = parseInt(timeDisplay / 60)
  if (minute < 10) {
    minute = '0' + minute
  }
  // 秒
  let second = Math.round(timeDisplay % 60)
  if (second < 10) {
    second = '0' + second
  }
  realMusicTime.value = minute + ':' + second
}
// 处理进度条
const handMusicBar = () => {
  // const slid = slid.value
  const duration = music.value.duration
  const x = ((music.value.currentTime / duration) * 100).toFixed(2) + '%'
  slid.value.style.width = x
}
// 处理点击进度条事件
const handClickBar = (e) => {
  const barTotalWidth = bar.value.offsetWidth // bar 总宽度
  const rect = e.target.getBoundingClientRect() // 元素右边距离页面边距的距离 返回上下左右
  const length = e.pageX - rect.left
  music.value.currentTime = (length / barTotalWidth) * music.value.duration // 计算播放时间 位置百分比*总时间
  nextTick(() => {
    music.value.play()
    isPlay.value = true
  })
}
// // 切换歌曲
// const switchMusic = () => {
//   isPlay.value = false
//   const audioIndex = Math.floor(Math.random() * 3)
//   audioName.value = audioSrcs[audioIndex].name
//   audioAuthor.value = audioSrcs[audioIndex].author
//   audioPic.value = audioSrcs[audioIndex].pic
//   audioSrc.value = audioSrcs[audioIndex].url
//   music.value.load()
//   // 文件下载完毕，如果不用等到全部下载完毕，可以用canplay事件
//   music.value.addEventListener('canplaythrough', () => {
//     music.value.play()
//     isPlay.value = true
//   })
// }
// 使用事件监听方式捕捉事件
const watchMusicTime = () => {
  music.value.addEventListener(
    'timeupdate',
    () => {
      handlMusicTime()
      nextTick(() => {
        handMusicBar()
      })
    },
    false
  )
  // 播放完毕
  music.value.addEventListener('ended', () => {
    nextMusic() // 自动播放
  })
  // 捕获音频文件已准备完毕
  // 当媒体文件可以播放的时候会触发oncanplay事件,也可以用oncanplay
  music.value.oncanplaythrough = () => {
    const time = music.value.duration
    // 分钟
    let minutes = parseInt(time / 60)
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    // 秒
    let seconds = Math.round(time % 60)
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    totalMusicTime.value = minutes + ':' + seconds
  }
}
</script>
<style lang="scss" scoped>
@keyframes musicRotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.music {
  width: 500px;
  // margin: 0 auto;
  bottom: 50px;
  border-radius: 15px;
  position: fixed;
  z-index: 999999;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  background-image: url('@/assets/images/sky_cloud.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 0.9;
  &__main {
    display: flex;
    &__cover {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      background-color: #dddddd;
      cursor: pointer;
      animation: musicRotate 10s linear infinite;
      animation-play-state: paused; // 暂定动画
      img {
        width: 100%;
        height: 100%;
      }
      &.active {
        animation-play-state: running; // 运行动画
      }
    }
    &__right {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 20px;
    }
    &__title {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      span {
        font-size: 27px;
      }
    }
    &__btn {
      flex: 1;
      display: flex;
      margin-top: 15px;
      flex-direction: row;
      justify-content: space-between;
    }
    &__timeBar {
      flex: 1;
      display: flex;
      flex-direction: row;
      // justify-content: space-evenly;
      justify-content: space-between;
      // padding-left: 20px;
      box-sizing: border-box;
      .time {
        display: flex;
        justify-content: space-between;
        color: #c0c4cc;
        width: 20%;
        span {
          font-size: 12px;
          line-height: 0;
        }
      }
      .bar {
        height: 2px;
        background-color: #dfe2e5;
        border-radius: 8px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        width: 75%;
        &__slid {
          position: absolute;
          left: 0;
          top: 0;
          background-color: #3be467;
          height: 100%;
          width: 0;
          transition: width 0.3s;
        }
      }
    }
  }
  &__mask {
    margin-bottom: 20px;
    display: none;
    // background-image: url('../../assets/logo.png');
    // z-index: -2;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 50%;
    // filter: blur(15px);
    // opacity: 0.5;
    // transition: all 0.8s;
    // position: absolute;
    // top: 0;
    // right: 0;
    // left: 0;
    // bottom: 0;
    // &::before {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   left: 0;
    //   bottom: 0;
    //   z-index: -1;
    //   content: '';
    //   background-color: rgba(0, 0, 0, 0.08);
    // }
  }
}
</style>
