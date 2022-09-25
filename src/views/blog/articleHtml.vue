<template>
  <!-- preview-class 为主题的样式类名，例如vuepress就是vuepress-markdown-body -->
  <v-md-preview-html
    :html="html"
    preview-class="vuepress-markdown-body"
  ></v-md-preview-html>
</template>

<script>
export default {
  data() {
    return {
      html: '<div data-v-md-line="3"><div class="v-md-pre-wrapper v-md-pre-wrapper- extra-class"><pre class="v-md-prism-"><code>npm i \'@kangc/v-md-editor@next\' -S</code></pre>'
    }
  }
}
</script>
