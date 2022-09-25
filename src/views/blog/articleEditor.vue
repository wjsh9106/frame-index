<template>
  <v-md-editor
    v-model="text"
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
    @save="handleSave"
    height="500px"
  ></v-md-editor>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
// example
// # 一级标题
// ## 二级标题
// ### 三级标题
// #### 四级标题
// ``` js
// const handleUpload = (op) => {
//   getPolicy(op)
// }
// ```
// ::: tip
//   dsa
// :::
// ::: warning
//   在此输入内容
// :::
// ::: danger
//   在此输入内容
// :::
// ::: details
//   内容
// :::

const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files)
  console.log(event)
  console.log(insertImage)

  // 此处只做示例
  insertImage({
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    desc: '七龙珠'
    // width: 'auto',
    // height: 'auto',
  })
}

const handleSave = (text, html) => {
  console.log('md===>', text)
  console.log('html===>', html)
}
</script>
<style lang="scss" scoped></style>
