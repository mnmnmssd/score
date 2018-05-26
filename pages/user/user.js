// pages/user/user.js
var noAuthorized;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          noAuthorized = true;
          wx.getUserInfo({
            success: function (res) {
              // var userdateil = {
              //   noAuthorized: noAuthorized,
              //   userName: res.userInfo.nickName
              // }
              that.setData({
                data_key: noAuthorized
              })
            }
          })
        } else {
            wx.showModal({
              title: '请点击授权',
              content: '授权后获得更好的用户体验',
              success:function(res){
                if(res.cancel){
                  wx.showToast({
                    title: '未授权用户',
                    icon:'none'
                  })
                }
              }
            })
            noAuthorized= false;
            that.setData({
              data_key: noAuthorized
            })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    var that = this
    wx.getSetting({
      success:function(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          noAuthorized = true;
          that.setData({
            data_key: noAuthorized
          })
        } else {
          noAuthorized = false;
          that.setData({
            data_key: noAuthorized
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("bb")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("dd")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})