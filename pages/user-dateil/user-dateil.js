// pages/user-dateil/user-dateil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var StatusId = options.id;
    this.data.StatusId = StatusId;
    var user_dateil = wx.getStorageSync("posts");
    user_dateil.reverse();
    this.setData({
      data: user_dateil[StatusId]
    })
    var user = 0;
    this.setData({
      data_user: user
    })
    var Statused = wx.getStorageSync("Status");
    if (Statused) {
      var Statuss = Statused[StatusId];
      if(!Statuss){
        var user = 0;
        this.setData({
          data_user: user
        })
      }else{
        var user = 1;
        this.setData({
          data_user: user
        })
      }
      this.setData({
        Status:Statuss
      })
    } 
    else {
      var Statused = {};
      Statused[StatusId] = false;
      wx.setStorageSync("Status", Statused)
    }
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  },
  onTapFabulous: function (event) {
    var Statused = wx.getStorageSync("Status");
    var Statuss = Statused[this.data.StatusId];
    Statuss = !Statuss;
    Statused[this.data.StatusId] = Statuss;
    wx.setStorageSync("Status", Statused);
    this.setData({
      Status: Statuss
    })
    if (!Statuss){
      var user=0;
      this.setData({
        data_user:user
      })
    }else{
      var user = 1;
      this.setData({
        data_user: user
      })
    }
  }
})