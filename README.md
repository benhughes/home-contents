home-contents
=============

#Directions

To Start the app just git clone and run 'npm start'. This will go and get the dependencies and load up the local dev script. Which:

* runs SASS
* Runs React
* Runs Browserify
* Sets up a server
* Sets up a watch script to run SASS and Browserify if the JS or Css Changes

Once this script is run go http://localhost:8080 to see the app in action.

To run the hint/unit tests. Just type 'grunt' or 'npm test'

#Notes

For this project I decided to use a few new technologies to make it a bit more interesting. These were React, Browserify (I normally use Require but decided to try this) and firebase (for the backend). While you have to admire my early enthusiasm for using shiny new things it quickly bit me in the ass as I had to relearn alot of things. Such as how to unit test correctly with these technologies, how best arrange the app, and other best practises.

This cost me alot of time so I actually wasn't able to get the app up to what I consider my usual high standards. Unit testing is no where near as high in coverage as I am comfortable with (I'm normally a 100% man) while functional tests are non existant. Also the styling is not as pretty as it should be.

I also ran into a few issues getting technologies like istanbul to play nicely with grunt/react/browserify and just didn't have time to look too deeply into what's going wrong and had to take it out.

Still remaining on my todo list:
* Styling of the homepage
* Drag and drop
* Mobile optimization
* Functional tests
* Higher test coverage
* A production build system. It'll be the same as the dev one but will minify the code and remove the live reload script

#Good points

I really enjoyed using *react* it forces you to break everything up into a nice components, while the testing tools are pretty decent. I think I'll be using it again for my next project.

I liked using firebase I was planning to use a local backbone model to keep the state, I instead decided to use firebase itself as a model as it was nice and quick and was suitable for such a small application.

Browserify was a pleasure to use. I really enjoyed be able to require nodejs modules when needed.
