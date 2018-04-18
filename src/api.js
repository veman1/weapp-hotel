const host = 'https://_/WXAPI'

function request (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}

export default {
  getHotelById: (id) => request(`<api>?id=${id}`)
}