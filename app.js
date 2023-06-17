//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { default: mongoose } = require("mongoose");
const mehtodOverride = require('method-override');

const homeStartingContent = "Welcome to our vibrant blog website, where passion meets knowledge. Immerse yourself in captivating articles, insightful perspectives, and engaging discussions. Our curated content covers a wide range of topics, ensuring there's something for every curious mind. Join our community of like-minded individuals and embark on a journey of discovery, inspiration, and personal growth. We believe in the power of ideas and aim to create a space where minds connect, where knowledge is shared, and where meaningful conversations thrive. Whether you're an avid reader, a knowledge seeker, or a passionate writer, our blog is your haven. Explore, learn, and contribute your thoughts as we collectively explore the limitless depths of human curiosity.";
const aboutContent = "Hello, I'm Tanvir, the creator of this blog. I'm a passionate writer and dedicated explorer of ideas. Through this platform, I share my insights, experiences, and knowledge on various topics close to my heart. I believe that every individual has a unique story and perspective to offer, and I invite you to join me on this exciting journey of discovery. Together, we'll delve into thought-provoking discussions, challenge our assumptions, and expand our horizons. This blog is a space for intellectual growth, creative expression, and meaningful connections. Thank you for joining me as we explore the world through the power of words.";
const contactContent =
"Thank you for your interest in reaching out to me. I would be delighted to hear from you! Whether you have a question, suggestion, or collaboration opportunity, I'm here to listen. I value your input and appreciate your engagement. Don't hesitate to connect with me via your preferred method of communication. I strive to respond promptly and foster meaningful conversations. Let's explore ideas, share thoughts, and create something remarkable together. I eagerly await your message and look forward to connecting with you. Thank you for your interest and support!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(mehtodOverride('_method'));


  //mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
  mongoose.connect('mongodb+srv://tanvirkamble123:tanvir123@cluster0.ughuea1.mongodb.net/blogDB')
  .then( () => {
  console.log('database connected');
  })
  .catch( (err) => {
  console.log('OH NO ERROR IN DB CONNECTION');
  console.log(err);
  });
  
  const blogschema = {
    blogtitle : {
      type : String,
      required: true
    },
    blogcontent: {
        type : String,
        required: true
    }
  }

  const BLOG = mongoose.model('post', blogschema);

app.get("/", function(req, res){
  BLOG.find({})
  .then((posts) => {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  }).catch((err) => {
    console.log('erorr!!!');
    console.log(err);
  });
});

app.get("/posts/:postId", function(req, res){
  const requestedId = req.params.postId;

    BLOG.findOne({_id : requestedId })
    .then((post) => {
      if (post) {
        res.render("post", {
              title: post.blogtitle,
              content: post.blogcontent,
              id: requestedId
            });
 
      } else {
        res.send('post not found')
      }
    }).catch((err) => {
      console.log(err);
      res.send("Error fetching post");
    });

  });

  app.get("/about", function(req, res){
    res.render("about", {aboutContent: aboutContent});
  });
  
  app.get("/contact", function(req, res){
    res.render("contact", {contactContent: contactContent});
  });
  
  app.get("/compose", function(req, res){
    res.render("compose");
  });  

app.post("/compose", function(req, res){
  const title = req.body.postTitle;
  const content = req.body.postBody;

  const post = new BLOG ({
    blogtitle : title,
    blogcontent : content
  })

  BLOG.create(post)
  .then( (x) => 
    {console.log('post created and added to db');
     console.log(x);
     res.redirect("/");
    })
  .catch( err => {console.log(err);})
});

app.delete('/posts/:postId', async (req,res) => {
  const requestedId = req.params.postId;
  const deletedPost = await BLOG.findByIdAndDelete(requestedId);
  res.redirect('/');
  console.log('you DELETED this ITEM');
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
