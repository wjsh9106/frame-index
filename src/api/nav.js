import request from './request'

export const navs = () => {
  return request({
    url: '/nav/navs',
    method: 'GET'
  })
}
