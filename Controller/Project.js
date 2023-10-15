const ejs = require('ejs');
const path = require('path');
const model = require('../Models/Project');

const gamesResult = model.Game;
exports.getHomePage=async (req,res)=>{
    const games1 = await  gamesResult.find({catagory:"windows"}).sort({_id:-1}).limit(3);
    const games2 = await  gamesResult.find({catagory:"android"}).sort({_id:-1}).limit(3);
    const games3 = await  gamesResult.find({catagory:"IOS"}).sort({_id:-1}).limit(3);
   ejs.renderFile(path.resolve(__dirname, '../View/index.ejs'), {games1:games1,games2:games2,games3:games3},function(err, str){
        res.send(str);
        console.log(games1);
    });
}

exports.getGamesPage=async (req,res)=>{
    const games = await  gamesResult.find();
    ejs.renderFile(path.resolve(__dirname, '../View/GamePage.ejs'), {games:games},function(err, str){
         res.send(str);
         console.log(games);
     });
}

exports.getrobotstxt=async (req,res)=>{
    res.type('application/xml');
    res.sendFile(path.resolve(__dirname, '../public/robots.txt'));
    }
    
    exports.getsitemap=async (req,res)=>{
    res.type('application/xml');
    res.sendFile(path.resolve(__dirname, '../public/sitemap.xml'));
    }

exports.getfilterdata=async (req,res)=>{
if(req.query.catagory=="All"){
    const games = await  gamesResult.find();
    ejs.renderFile(path.resolve(__dirname, '../View/dynamicgamepage.ejs'), {games:games},function(err, str){
         res.send(str);
         console.log(games);
     });
}

else{
  let Catagory = req.query.catagory;
  const games = await gamesResult.find({catagory:Catagory});
  ejs.renderFile(path.resolve(__dirname, '../View/dynamicgamepage.ejs'), {games:games},function(err, str){
    res.send(str);
  });
}
}

exports.getContactPage = async (req,res)=>{
   ejs.renderFile(path.resolve(__dirname, '../View/contact.ejs'),function(err, str){
        res.send(str);
       
    });
}

exports.getGameDetailPage = async (req,res)=>{
    try{
   const  id = req.params.id;
    const game = await gamesResult.findById(id);
    ejs.renderFile(path.resolve(__dirname, '../View/GameDetailPage.ejs'), {game:game},function(err, str){
        res.send(str);
      });
    }
    catch(err){
        console.log(err);
    }
}
