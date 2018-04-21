Date.prototype.offsetDay = function (num = 0) {
  return new Date(+this + num * 24 * 60 * 60 * 1000)
}
Date.prototype.format = function () {
  const now = new Date()

  const tmr = now.offsetDay(1)
  const dATmr = now.offsetDay(2)

  if (this.toDateString() === now.toDateString()) {
    var isTd = !0
  } else if (this.toDateString() === tmr.toDateString()) {
    var isTmr = !0
  } else if (this.toDateString() === dATmr.toDateString()) {
    var isDATmr = !0
  }

  const d = {}
  d.date = this
  d.dateStr = this.toDateString()
  d.y = this.getFullYear()
  d.m = this.getMonth() + 1
  d.d = this.getDate()
  d.isTd = Boolean(isTd)
  d.isTmr = Boolean(isTmr)
  d.isDATmr = Boolean(isDATmr)

  return d
}