# blog

- Welcome to my personal blog repository! This repository contains the source code for my personal blog website. The blog is built using Node.js, Express, EJS, and MongoDB.

Features
- Home page displaying a collection of blog posts
- Individual blog post pages with unique URLs
- About page providing information about the author and the blog's     
  purpose
- Contact page for users to get in touch with the author
- Compose page to create and publish new blog posts
- Ability to delete blog posts
- Responsive design for optimal viewing on different devices

Installation
 Clone the repository using the following command:
- bash: git clone https://github.com/tanvirkamble/blog.git
- Install the required dependencies by running: npm install
- Create a MongoDB database and update the connection URL in the app.js  
 file: mongoose.connect('your-mongodb-connection-url')
 
Usage

1.Start the server by running: node app.js

2.Access the blog website by navigating to http://localhost:3000 in your web browser.

3.Home Page:
- The home page displays a collection of blog posts. You can read the posts and click on their titles to view the full content of a specific post.
- To add a new blog post, click on the "Compose" button in the navigation bar to go to the compose page.

4.Compose Page:
- On the compose page, enter the title and content for your new blog post.
- Click the "Publish" button to publish the post.
- The new post will now be visible on the home page.

5.Individual Blog Post Pages:
- Each blog post has its own page with a unique URL.
- To view a specific blog post, click on its title from the home page.
- On the individual post page, you can read the full content of the post.

6.About Page:
- The about page provides information about the author and the purpose of the blog.
- To access the about page, click on the "About" link in the navigation bar.

7.Contact Page:
- The contact page allows you to get in touch with the author.
- To access the contact page, click on the "Contact" link in the navigation bar.
- Fill in the contact form with your details and message, and click the "Submit" button to send a message to the author.

8.Delete Blog Post:
- To delete a blog post, go to the home page and find the post you want to delete.
- Click on the "Delete" button associated with that post.
- The post will be deleted from the database and will no longer appear on the home page.

Contributing
- Contributions to this blog repository are welcome! If you find any bugs, have suggestions for improvements, or want to add new features, please feel free to submit a pull request.

Contact
- If you have any questions or want to connect, you can reach me at tanukamble22@gmail.com. 

You can also visit my personal website [here](https://tanvir-blog.onrender.com).

Thank you for visiting my blog repository! Feel free to use it as a starting point for your own
