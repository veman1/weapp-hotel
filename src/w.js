import wepy from 'wepy'

module.exports = {
  showErr (msg) {
    wepy.showToast({
      title: msg,
      image: '/images/error.png'
    })
  }
}