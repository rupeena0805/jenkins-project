let mongoose = require('mongoose')
mongodb+srv://rupeena:Rupeena0805@cluster0.gvovnaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const dbPath = 'mongodb+srv://dbuser:dbpassword@mongo.vk6tb.mongodb.net/kizaTexttiles'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
