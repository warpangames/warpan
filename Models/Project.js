const mongoose  = require('mongoose');

const {Schema} = mongoose;

const gameSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    mini_discription:{
        type:String,
        required:true
       
    },
    img:{
        type:String,
        required:true,
        
    },
    main_discription1:{
        type:String,
        required:true,
       
    },
    main_discription2:{
        type:String,
        required:true
    },
    objective:{
        type:String,
        required:true
    },

    release_date:{
        type:String,
        required:true
    },

    downloadLink:{
        type:String,
        required:true
    },

    size:{
        type:String,
        required:true
    },

    catagory:{
        type:Array,
        required:true
    },

    mini_gameCardImg:{
        type:String,
        required:true
    }
});

exports.Game=mongoose.model('Game',gameSchema);