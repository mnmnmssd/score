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
    if (!wx.getStorageSync("Status")) {
      var Statuss = {
        Status: false,
        zan: 0
      };
      wx.setStorage({
        key: 'Status',
        data: Statuss,
      })
    }
    else{
      var Statuss = wx.getStorageSync("Status");
    }
    this.setData({
      data: Statuss
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
    
    var post = wx.getStorageSync("posts");
      this.setData({
        data_post:post
      })
    //console.log(post);
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
  onTapFabulous:function(event){
    var Statuss = wx.getStorageSync("Status");
    if(!Statuss.Status){
      Statuss.Status = !Statuss.Status;
      Statuss.zan++;
      console.log(Statuss);
      wx.setStorageSync("Status", Statuss);
    }
    else{
      Statuss.Status = !Statuss.Status;
      Statuss.zan--;
      console.log(Statuss);
      wx.setStorageSync("Status", Statuss);
    }
    this.setData({
      data:Statuss
    })
  },
  goRelease:function(event){
    wx.navigateTo({
      url: '/pages/release/release',
    })
  }
})