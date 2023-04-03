<template>
  <div class="content_box whitebg">
    <h2 class="htitle" v-if="articInfo !== null">{{ articInfo.navName }}</h2>
    <h1 class="con_tilte" v-if="articInfo !== null">
      {{ articInfo.articleName }}
    </h1>
    <p class="bloginfo">
      <svg-icon icon="shijian" class="svg-container"></svg-icon>
      <span v-if="articInfo !== null">{{
        articInfo.updateTime.substring(0, 10)
      }}</span>
      <svg-icon icon="browse" class="svg-container"></svg-icon>
      <span v-if="articInfo !== null">{{ articInfo.articleViews }}</span>
      <a style="color: #999" class="comment-link-a">
        <svg-icon icon="aixin" class="svg-container"></svg-icon>
        <span v-if="articInfo !== null">{{ articInfo.articleLikes }}</span>
      </a>
    </p>
    <p class="con_info" v-if="articInfo !== null">
      <b>简介</b>
      {{ articInfo.articleDesc }}
    </p>
    <div class="con_text">
      <div class="articleDetail" ref="article">
        <!-- preview-class 为主题的样式类名，例如vuepress就是vuepress-markdown-body -->
        <v-md-preview-html
          v-if="articInfo !== null"
          :html="articInfo.contentHtml"
          preview-class="vuepress-markdown-body"
        ></v-md-preview-html>
      </div>
      <p></p>
      <!--<div class="nextinfo">
                    <p>上一篇：<a href="/xd/">返回列表</a></p>
                    <p>下一篇：<a href="/xd/2.html">网易博客关闭，何不从此开始潇洒行走江湖！</a></p>
                </div>-->

      <div
        class="readall_box"
        style="background: linear-gradient(rgba(255, 255, 255, 0), #fff)"
      >
        <div
          class="read_more_mask"
          style="background: linear-gradient(rgba(255, 255, 255, 0), #fff)"
        ></div>
        <a
          class="button"
          style="
            top: -25px;
            position: relative;
            font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
          "
          >阅读全文</a
        >
      </div>

      <div class="thumbs-content">
        <span class="thumbs-button fa">
          <svg-icon icon="dianzan_kuai" style="margin-right: 3px"></svg-icon
          >点赞 <span id="loveCount">2</span></span
        >
      </div>
    </div>
  </div>
  <div class="whitebg gbook">
    <h2 class="htitle">文章评论</h2>
    <div>
      <el-input v-model="input" placeholder="昵称(必填)" />
      <el-input v-model="input" placeholder="QQ（可获取头像和昵称）" />
      <el-input v-model="input" placeholder="邮箱" />
      <el-input
        v-model="input"
        placeholder="我来说两句~"
        type="textarea"
        style="width: 98%; margin-top: 10px; margin-bottom: 10px"
      />
      <div style="text-align: right; margin-right: 15px">
        <el-button type="primary" round>发表评论</el-button>
      </div>
      <el-divider />
      <div style="padding-top: 20px">
        <div class="commentList comment" id="commentList">
          <li>
            <div class="comment-body" id="comment-97">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 15:51:54 </span>
                </div>
                <div class="comment-content">
                  <div class="comment-parent">
                    <div class="comment-parent-user">
                      <a
                        class="comment-link"
                        data-link="comment-89"
                        @click="linkComment($event)"
                        >@1111</a
                      >
                    </div>
                    <div class="comment-parent-content">
                      4444444444444444444444
                    </div>
                  </div>
                  0000000000000000
                </div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="97">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <svg-icon icon="dianzan" style="margin-left: 3px"></svg-icon>
                  <span biz-id="97">0</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-96">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:35:35 </span>
                </div>
                <div class="comment-content">99999999999999999999999999</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="96">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="96"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-95">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:35:31 </span>
                </div>
                <div class="comment-content">88888888888888888888</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="95">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="95"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-94">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:35:13 </span>
                </div>
                <div class="comment-content">pppppppppppppppppppppppppp</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="94">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="94"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-93">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:35:06 </span>
                </div>
                <div class="comment-content">yyyyyyyyyyyyyy</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="93">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="93"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-92">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:34:51 </span>
                </div>
                <div class="comment-content">
                  <div class="comment-parent">
                    <div class="comment-parent-user">
                      <a class="comment-link" data-link="comment-91">@QWERTY</a>
                    </div>
                    <div class="comment-parent-content">tttttttttttttttt</div>
                  </div>
                  uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                </div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="92">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="92"
                    >2</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-91">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:34:38 </span>
                </div>
                <div class="comment-content">
                  <div class="comment-parent">
                    <div class="comment-parent-user">
                      <a class="comment-link" data-link="comment-90">@QWERTY</a>
                    </div>
                    <div class="comment-parent-content">
                      eeeeeeeeeeeeeeeeeee
                    </div>
                  </div>
                  tttttttttttttttt
                </div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="91">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="91"
                    >0</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-90">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567891&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">QWERTY</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:29:35 </span>
                </div>
                <div class="comment-content">eeeeeeeeeeeeeeeeeee</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="90">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="90"
                    >1</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-89">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567890&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">1111</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:26:52 </span>
                </div>
                <div class="comment-content">4444444444444444444444</div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="89">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="89"
                    >2</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="comment-body" id="comment-88">
              <div class="comment-user-img">
                <img
                  src="http://q1.qlogo.cn/g?b=qq&amp;nk=1234567890&amp;s=100"
                  onerror="this.src='/blog/img/user-default.png'"
                />
              </div>
              <div class="comment-info">
                <div class="comment-top">
                  <span class="comment-nickname">
                    <a href="javascript:void(0)">1111</a>
                  </span>
                  <span class="comment-time">2022-10-19 11:26:18 </span>
                </div>
                <div class="comment-content">
                  <div class="comment-parent">
                    <div class="comment-parent-user">
                      <a class="comment-link" data-link="comment-87">@1111</a>
                    </div>
                    <div class="comment-parent-content">
                      2222222222222222222222
                    </div>
                  </div>
                  333333333333333333333
                </div>
                <div class="comment-footer">
                  <span class="reply mr-5" reply-id="88">回复</span>
                  <span class="cancel-reply mr-5" style="display: none"
                    >取消回复</span
                  >
                  <span
                    class="comment-support pointer fa fa-thumbs-o-up"
                    biz-id="88"
                    >2</span
                  >
                </div>
              </div>
            </div>
          </li>
          <div id="comment-more" data-page="2" class="comment-more">
            加载更多
          </div>
        </div>
        <div class="no-comment">暂无评论，快来占领宝座</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import $ from 'jquery'
import { ref, onMounted, nextTick } from 'vue'
import { articleDetails } from '@/api/article'
import elementResizeDetectorMaker from 'element-resize-detector'
import { useStore } from 'vuex'

const store = useStore()

// $(function () {
//   console.log('document.body.clientHeight1:', document.body.offsetHeight)
//   if ($('.articleDetail').height() >= 1200) {
//     $('.articleDetail').attr('style', 'height:1200px;overflow-y:hidden;')
//     $('.readall_box').show()
//   }

//   $('.readall_box a.button').click(function () {
//     $(this).parents().find('.articleDetail').attr('style', '')
//     $(this).parents('.readall_box').hide()
//   })
// })

onMounted(() => {
  watchArticleSize()

  // 展示文章全部
  $('.readall_box a.button').click(function () {
    $(this).parents().find('.articleDetail').attr('style', '')
    $(this).parents('.readall_box').hide()
  })
})

const article = ref(null)
let isShowAll = false
// 监控文章内容高度，大于1200隐藏一部分
const watchArticleSize = () => {
  const erd = elementResizeDetectorMaker()
  erd.listenTo(article.value, (element) => {
    // // 元素可见高度
    // console.log('element.clientHeight:', element.clientHeight)
    // console.log('element.offsetHeight:', element.offsetHeight)
    // // 元素可见+不可见高度
    // console.log('element.scrollHeight:', element.scrollHeight)

    // dom元素更新后执行
    nextTick(() => {
      if (element.scrollHeight >= 1200 && !isShowAll) {
        // $('.articleDetail').attr('style', 'height:1200px;overflow-y:hidden;')
        element.style.height = '1200px'
        element.style.overflowY = 'hidden'
        $('.readall_box').show()
        isShowAll = true
      }
    })
  })
}

const route = useRoute()

const articInfo = ref(null)
const initArticle = async () => {
  const res = await articleDetails(route.params.articleId)
  articInfo.value = res.result
  // console.log('initArticle', res.result)
  store.commit('app/updateHeaderMenuActive', {
    navId: articInfo.value.navId,
    navName: articInfo.value.navName
  })
}

initArticle()

const linkComment = (event) => {
  const linkId = event.target.getAttribute('data-link')
  const target = document.getElementById(linkId)
  target.scrollIntoView()
}
</script>
<style lang="scss" scoped>
.svg-container {
  //   padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  display: inline-block;
  margin: 0 5px;
}
.whitebg {
  background: #fff !important;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}
.htitle {
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  color: #484848;
  font-weight: normal;
  position: relative;
  margin-bottom: 10px;
}
.htitle::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 2px;
  content: '';
  background: #000;
  left: 0;
  bottom: 0;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.htitle:hover:after {
  width: 80px;
}
.con_tilte {
  font-size: 22px;
  margin-top: 20px;
}
.bloginfo {
  margin-top: 20px;
  overflow: hidden;
  color: #999;
  line-height: 34px;
}
.bloginfo span {
  margin: 0 5px;
  color: #999;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 fonteditor;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.con_info {
  color: #888888;
  border: 1px solid #f3f3f3;
  padding: 10px;
  margin: 10px auto 0;
  line-height: 23px;
  background: none repeat 0 0 #f6f6f6;
}
.con_info b {
  margin-right: 10px;
  color: #000;
}
.con_text {
  line-height: 24px;
  margin-top: 20px;
}
.readall_box {
  position: relative;
  z-index: 9999;
  padding: 0 0 0px;
  margin-top: -268px;
  text-align: center;
}
.readall_box .read_more_mask {
  height: 268px;
  background: -moz-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  background: -webkit-gradient(
    linear,
    0 top,
    0 bottom,
    from(rgba(255, 255, 255, 0)),
    to(#fff)
  );
  background: -o-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
}
.readall_box a.button {
  cursor: pointer;
}
.con_text a {
  color: #09c;
  word-break: break-all;
}
.readall_box a.button {
  cursor: pointer;
}
.thumbs-content {
  width: 291px;
  margin: 30px auto 10px;
  text-align: center;
}
.thumbs-button {
  text-align: center;
  margin: 5px auto;
  padding: 0 20px;
  line-height: 36px;
  color: #fbfbfb;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s;
}
.thumbs-button {
  background-color: #444;
}

.commentGrid .commentList {
  padding-top: 20px;
}
::v-deep .el-input {
  width: 31.5%;
  float: left;
  margin-right: 15px;
}
::v-deep .el-textarea__inner {
  background: #f6f6f6;
  padding: 10px 15px;
}
.comment-more,
.no-comment {
  padding: 5px;
  text-align: center;
  background: #f5f5f5;
  color: #bbb;
  border-radius: 4px;
  font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
ul,
li {
  list-style: none;
}
.comment li {
  padding: 10px 0;
  border-bottom: 1px dashed #e5e5e5;
}
.comment-body .comment-user-img {
  float: left;
}
.comment-body .comment-user-img > img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.comment-body .comment-info {
  margin-left: 55px;
}
.comment-body .comment-info .comment-time {
  float: right;
  color: #c0c0c0;
}
.comment-body .comment-info .comment-content {
  color: #566573;
  margin-top: 5px;
}
.comment-body .comment-info .comment-footer {
  color: #999;
  text-align: right;
}
.comment-body .comment-info .reply,
.comment-body .comment-info .cancel-reply {
  cursor: pointer;
}
.comment-body .comment-parent .comment-parent-content {
  padding: 5px 10px;
  background: #eeeeee;
  border-radius: 4px;
  margin: 5px 0;
}
a,
button,
input,
textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  text-decoration: none;
}
a {
  text-decoration: none;
  color: #333;
}

.articleDetail p {
  font: 15px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  color: #333;
}
</style>
