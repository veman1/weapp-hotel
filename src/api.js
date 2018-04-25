const host = 'https://_/WXAPI'

function r (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}

module.exports =  {
  getHotelById: (id) => r(`/<api>?id=${id}`)
}