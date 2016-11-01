  710  mkdir portfolio
  712  cd portfolio/
  714  git init
  716  touch server.rb Gemfile Procfile
  718  put code in server.rb
  720  bundle
  722  mkdir public
  723  cp -R ~/Dropbox/Wyncode/mobile_first/* public/
  726  ruby server.rb
  727  git add .
  729  git commit -m "My site on Heroku"
  731  heroku create
  733  git remote -v
  734  git push heroku master
  735  heroku open
  737  ruby server.rb
  738  git add .
  739  git commit -m "update homepage"
  740  git push heroku master
  742  git add .
  743  git commit -m "updated pic"
  744  git push heroku master
  745  git add server.rb
  746  git commit -m "server page from root"
  747  git push heroku master
  749  ruby server.rb
  750  heroku open
  751  git remote rm heroku
  752  heroku git:remote -a kid-eyes
  753  git remote add origin https://github.com/juan-arredondo/portfolio.git
  754  git push -u origin master
  755  git remote -v
