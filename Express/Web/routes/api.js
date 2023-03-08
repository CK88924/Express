const router = require ('express').Router ();
const member = require ('../models/member');
const bodyParser = require ('body-parser'); //設定取得req.body
router.use ( bodyParser.json () ); //req.body支援json格式
router.use ( bodyParser.urlencoded ( { extended: true } ) ); //解析內容

router.post ('/create', async(req, res) => {
  res.send (await member.create (req, res));
  });
  //創建
router.post ('/read', async(req, res) => {
  res.send (await member.read (req, res));
});
  //讀取

router.post ('/update', async(req, res) => {
  res.send (await member.update (req, res));
});
  //更新

router.post ('/delete', async(req, res) => {
    res.send (await member.delete (req, res));
});
  //刪除

  module.exports = router ;

