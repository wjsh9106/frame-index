import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/icons'

import 'element-plus/dist/index.css'

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import Prism from 'prismjs'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'

import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html'
import '@kangc/v-md-editor/lib/style/preview-html.css'

// editor、preview、preview-html共用
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

VMdPreview.use(vuepressTheme, {
  Prism
})

const app = createApp(App)
SvgIcon(app)
app
  .use(store)
  .use(router)
  .use(VueMarkdownEditor)
  .use(VMdPreview)
  .use(VMdPreviewHtml)
  .mount('#app')
