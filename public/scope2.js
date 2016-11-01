var videos = {
  "resultCount":50,
  "results":
  [
    {"trackName":"Blow (Video)", "a":"stuff"}, // item 0
    {"trackName":"Partition (Video)", "a":"morestuff"}, // item 1
    {"trackName":"My Booty (Video)", "a":"morestuff"}, // item 2
    {"trackName":"Shake da Ass (Video)", "a":"morestuff"} // item 3
  ]
}

// "results": [{"trackName":"Blow (Video)", "a":"stuff"},{"trackName":"Partition (Video)", "a":"morestuff"},.........]

var videoName = videos["results"];

videoName.forEach(function(item) {
  console.log(item["trackName"]);
});
