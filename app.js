App({
  onLaunch(options) {
    console.log('App Launch', JSON.stringify(options, null, 4))
    console.log('getSystemInfoSync', dd.getSystemInfoSync())
    console.log('SDKVersion', dd.SDKVersion)
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
})
