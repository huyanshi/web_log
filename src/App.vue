<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <FileBrowser msg="file Browser" style="width: 500px; height: 600px;"/>
    <!-- 文件列表 -->
    <div style="width: 500px; height: 600px; background-color:red">
      <h1>aaaaaaaaaaaassssssssss</h1>

    </div>

    <h1>测试测试</h1>
    <div style="width: 1000px; height: 600px;">
    <log-viewer ref="logView" :log="logStr" :loading="isLoading" :height="500" :width='900' :hasNumber='false'/>
   </div>
    <center>
     <div style="width: 200px; height: 600px; background-color:black;word-wrap:break-word; word-break:normal">
        <span style="display: block;width: 200px">
          aaaaaaaaaaaassssssssss\n&#10;ssssssssssssaa&#10;avvvaaaaaaaaa北包包
        </span>
        <span style="display: block;width: 200px">
          bbbbbbbbbbbbbbb\n&#10;ssssssssssssaa&#10;avvvaabbbbb
        </span>
     </div>
    </center>

  </div>
</template>

<script>
import FileBrowser from './fileBrowser/fileBrowser.vue'
import logViewer from './logViews'
import {getFileListWithPath} from './api/data.js'
// import logViewer from './logViews/log-index.js'
// import logViewer from './logViews/log-viewer.vue'

export default {
  name: 'App',
  components: {
    FileBrowser,logViewer
  },
  computed: {
    logStr() {
      return this.log.join("\n")
    }
  },
  data() {
    return {
      log: ["123", "455"],
      isLoading: true,
    };
  },
  async mounted(){
     this.processSocketData()
    // setInterval(() => {
    //   this.log.push("2222\n")
    // }, 1000);
    console.log('aaaa')
    // 页面渲染出来
    //  let result = await getFileListWithPath('/')
    //  console.log(result)
  },
  methods:{
    processSocketData(){
      const socketUrl = '172.16.168.47:9999'
      const socketContent = new WebSocket(`ws://${socketUrl}`)
      socketContent.onmessage = (messageEvent) => {
        console.log(messageEvent)
        const da = JSON.parse(messageEvent.data)
        // let data = messageEvent
        // this.log.push(da['msg'])
        this.$refs.logView.pushLog(da['msg'])
        // this.logView.pushLog(da['msg'])
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
