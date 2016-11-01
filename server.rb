require "sinatra"

get '/helo.txt' do
  "Hello World"
end

get '/' do
  File.open('public/hello.txt')
end
