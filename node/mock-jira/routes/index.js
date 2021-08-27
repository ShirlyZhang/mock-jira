var express = require('express');
var router = express.Router();

function data(code, data, message) {
  return {
    code: code,
    data: data,
    message: message
  }
}


/* 登录接口 */
router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});
// 注册接口
router.get('/register', function (req, res, next) {
  let _req = req.query
  const infoObj = {
    userName: '用户名',
    userPassword: '密码',
    userMobile: '手机号',
    userEmail: '邮箱',
    userSex: '手机号',
  }
  try {
    let reqKey = Object.keys(_req)
    Object.keys(infoObj).forEach(item => {
      if (!reqKey.includes(item) || _req[key] == '') {
        throw infoObj[key]
      }
    })
    // req.createTime = new Date()
    res.send(_req)
  } catch (err) {
    res.send(data(500, '', '请输入' + err))
  }
})

module.exports = router;
