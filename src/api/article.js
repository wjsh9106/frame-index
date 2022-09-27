import request from './request'

/**
 * 根据导航/分类ID获取文章分页信息
 * @param nav   导航/分类ID
 * @param size  每页显示的条数
 * @return
 */
export const articlePage = (nav, size) => {
  return request({
    url: `article/articlePage/${nav}/${size}`,
    method: 'GET'
  })
}

/**
 * 根据文章ID获取文章详情
 * @param id 文章ID
 * @return
 */
export const articleDetails = (id) => {
  return request({
    url: `article/articleDetails/${id}`,
    method: 'GET'
  })
}
