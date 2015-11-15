
###Environment Setup

Create package.json:
<code>npm init</code>

Install Gulp:
<code>npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0</code>

After running the command above gulp was still not available in my git bash. I had to run <code>npm install gulp -g</code>

Create a source folder:
<code>mkdir src</code>

Create a destination folder:
<code>mkdir dist</code>

Create a gulp file:
<code>touch gulpfile.js</code>

Then create all gulp tasks as per the course video.

Add .gitignore 
<code>echo node_modules/ >.gitignore</code>

Install browserify:
<code>npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0</code>

Install bootstrap and jQuery:
<code>npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0</code>

Install eslint:
<code>npm install --save gulp-eslint@0.15.0</code>

Install React, React Router, Flux:
<code>npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3</code>

Now all dependencies are configured in package.json.
To recreate the node_modules directory simply run <code>npm install</code>
