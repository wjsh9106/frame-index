import request from './request'

/**
 * 根据导航/分类ID获取文章分页信息
 * @param nav     导航/分类ID
 * @param current 当前页
 * @return
 */
export const articlePage = (nav, current) => {
  return request({
    url: `article/category/${nav}/${current}`,
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
