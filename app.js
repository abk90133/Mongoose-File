//jshint  esversion6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/coderDB", { useNewUrlParser: true } ); //it will connect to this url
//using this link and then look for the coderDB file and if not found inside it then it will create a new inside it.

const coderSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  company: String
});

const Coder = mongoose.model("Coder", coderSchema);
//here we have defined it all in the singular form and after sometime when we will run it it will get to the plural form itself.

const coder = new Coder ({
  name: "Shree",
  rating: 7,
  company: "XORLabs"
});

coder.save();

const companySchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Company = mongoose.model("Company", companySchema);

const company = new Company ({
  name: "XORLabs",
  age: 10
});

company.save();

const ibm = new Company ({
  name: "IBM",
  client: "Yes"
});

const tcs = new Company ({
  name: "TCS",
  client: "Yes"
});

const greyorange = new Company ({
  name: "greyorange",
  client: "Yes"
});

Company.insertMany([ibm, tcs, greyorange], function(err){
  if (err) {
    console.log(Error);
  }else{
    console.log("Successfully Loaded the data! Thank you!");
  }
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('coding'); //this is the colection inside the coderDB document that we have
  // Insert some documents
  collection.insertMany([
    {
      name: "Abhishek",
      score: 23,
      certification: 1
    },
    {
      name: "Parichay",
      score: 23,
      certification: 0
    },
    {
      name: "Shivangi",
      score: 23,
      certification: 1
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('coding');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
