
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



