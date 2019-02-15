<template>
  <div class="wangEditorComponent">
      <div id="editor" class="editor"  ref="myTextEditor"></div>
  </div>
</template>

<script>
import wangEditor from "wangeditor"
// import fileApi from "@/api/fileApi"

export default {
  name:"wangEditorComponent",
  components: {
      wangEditor
  },
  props:[],
  data() {
    return {
      content:"",
      currentcontent: '啊打发撒旦',     
   };
  }, 
  mounted() {
    var editor = new wangEditor('#editor')
    editor.customConfig.onchange = (html) => {
        debugger
       this.currentcontent = html
    //    this.$emit("contentGet",html)
    }
    // // editor.customConfig.uploadImgServer = '你的上传图片的接口'
    // //  editor.customConfig.uploadFileName = '你自定义的文件名'
    // //  editor.customConfig.uploadImgHeaders = {
    // //    'Accept': '*/*',
    // //    'Authorization':'Bearer ' + token  //头部token
    // //  }
 
    editor.create()
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped>
.wangEditorComponent{
    .editor {
    height: 300px;
    width: 800px;
    }
}
</style>
