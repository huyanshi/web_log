<template>
  <div class="FileBrowser">
    <h1>{{msg}}</h1>
    <div class="fileHeader">
        <!-- header 文件路径 -->
    </div>
    <div class="listContent">
        <virtual-list
            ref="virturalList"
            :size= 30 
            :remain= 8
            :item="FileListItem"
            :itemcount="fileItemsCount"
            :itemprops="getItemsProps"
            >  
        </virtual-list>
    </div>
  </div>
</template>
 
<script>
import VirtualList from 'vue-virtual-scroll-list'
import FileListItem from './fileListItem.vue'
import {getFileListWithPath} from '@/api/data.js'
// import LineWrapper from './../logViews/components/line-wrapper.vue'


export default {
  name: 'FileBrowser',
  props: {
    msg: String
  },
  components: {
    VirtualList,FileListItem
  },
  data() {
    return {
      log: ["123", "455"],
      isLoading: true,
      FileListItem,
      fileListData:[
        { aaaa: 'Foo' },
        { aaa: 'Bar' }
      ],
      currentPath:'/'
    }
  },
  computed: {
      fileItemsCount() {
        return this.fileListData.length;
      }
  },
  async mounted(){
     let result = await getFileListWithPath('/')
     this.fileListData = result.data
     console.log(result)
     this.reloadData()
  },
  methods:{
    reloadData() {
        this.$refs.virturalList.forceRender()
    },
    // getItemsProps(itemIndex) {
    //     return this.fileListData[itemIndex]
    // }
     getItemsProps(itemIndex) {
        return {
                key: itemIndex,
                props: {
                    height: 20,
                    index: itemIndex,
                    info: this.fileListData[itemIndex].name || {}
                }
            }
    }
    
  }

}
</script>

<style >
.fileHeader {
    background-color: aquamarine;
    width: 100%;
    height: 50px;
}
.listContent {
    background-color:blanchedalmond;
    width: 100%;
    height: 90%;
    overflow-y: auto
}
</style>

