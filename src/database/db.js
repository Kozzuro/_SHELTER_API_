const MongoClient = require('mongodb').MongoClient;

const username = "Kozzuro";
const password = "AUeYjKGSTZ0fwYLm";
const cluster = "cluster.6ebvk";
const dbname = "shelter";

module.exports.find = (collection, query, cb) => {
    let url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    MongoClient.connect(url, { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true, }, function (err, db) {
        if (err) cb(err);
        const dbo = db.db("shelter");
        console.log('connected');
        dbo.collection(collection).find(query).toArray(function (err, result) {
            db.close();
            if (err) cb('Pricing err at DB ::', err);
            return cb(null, result);
        });
    });
}