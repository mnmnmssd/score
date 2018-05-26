var userpost = wx.getStorageSync("posts");
if(!userpost){
  userpost = [{}] 
  var Id = 0;
}else{
  var Id = userpost[0].userpostId
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onformSubmit: function (e) {
    var input = e.detail.value.input;
    var dateil = e.detail.value.dateil;
    var posts = {
      input:input,
      dateil:dateil,
      userpostId:0
    }
    if(!input){
      wx.showToast({
        title: '请输入标题',
        icon:'none'
      })
    }else if(!dateil){
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
    }else{
      // console.log('form发生了submit事件，携带数据为：', e.detail.value.input)
      //userpost[0] = posts;
      wx.showToast({
        title: '表白发布中',
        icon: 'loading',
        duration: 10000,
        success:function(res){
          var post = wx.getStorageSync("posts");
          console.log(post);
          if(!post){
            userpost[0] = posts;
            console.log("666");
            wx.setStorageSync("posts", userpost);
          }else{
            // userpost = post;
            console.log("haha");
            if(!userpost[0]){
              userpost[0] = posts;
              console.log("250"+userpost[0]);
            }else{
              Id++;
              console
              posts.userpostId = Id;
              userpost.unshift(posts);
              console.log("623" + userpost);
            }
            wx.setStorageSync("posts", userpost);
          }
          wx.navigateBack();
          wx.showToast({
            title: '表白发布成功',
            icon: 'success',
            duration: 2000,
            mask: true,
            success: function () {
              setTimeout(function () {
                wx.hideToast();
              }, 2000);
            }
          });
        }
      })
    }
  },
  onformReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("ssss"+userpost);
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
    
  }
})