import API from './api'

export default function ajax(apiName, params = {}) {
  dd.showLoading(loadingOptions)

  const api = API[apiName]
  const token = dd.getStorageSync({ key: 'token' }).data
  const data = Object.assign(params, { token })

  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url: API.baseURL + api.url,
      dataType: 'text', // 默认的好像有编码的坑，所以使用 text，然后 success 里面自行解析
      method: api.method,
      data: api.json ? JSON.stringify(data) : data,
      success(res) {
        const data = JSON.parse(res.data)

        if (data.status === 'OK') {
          resolve(data)
        } else {
          reject(data)
        }
      },
      fail({ error, errorMsg }) {
        // 如果不是请求被取消
        if (error !== 12) {
          reject({ msg: errorMsg })
        }
      },
      complete() {
        dd.hideLoading()
      }
    })
  })
}