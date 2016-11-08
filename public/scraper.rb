require 'httparty'
require 'sinatra'
require "nokogiri"


get '/' do
  cl_jobs_url = "http://miami.craigslist.org/search/sof"
  response = HTTParty.get(cl_jobs_url)
  dom = Nokogiri::HTML(response.body)
  job_title_links = dom.css('a.hdrlnk')
  job_titles = []
  job_titles = job_title_links.map(&:content)
  job_titles
end
