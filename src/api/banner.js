import request from './request'

export const bannerInfo = () => {
  return request({
    url: 'banner/bannerInfo',
    method: 'GET'
  })
}
