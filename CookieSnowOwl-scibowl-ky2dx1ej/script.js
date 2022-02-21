const url = "https://scibowldb.com/api/questions/random"
$.getJson(url, function(result){
  console.log(result)
})