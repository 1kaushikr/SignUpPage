const exp = require("express");
const bod  = require("body-parser");
const req = require("request");
const ht = require("https");
const app = exp();

app.use(exp.static("public"));
app.use(bod.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const fname = req.body.f;
  const lname = req.body.l;
  const email = req.body.e;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };
  const json = JSON.stringify(data);
  const url  = "https://us6.api.mailchimp.com/3.0/lists/38e06fdb10";
  const options = {
    method: "POST",
    auth: "Kaushik:9a129f5a58ce25306f922c71afab3b6b-us6"
  }
});

app.listen(4000,function(){
    console.log("Server started at 4000");
});
