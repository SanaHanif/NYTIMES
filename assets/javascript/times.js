$(document).ready(function () {
    var searchTerm = $(this).attr("#term-input");
    var urlQuery = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=95651a04bc884427955a1b03ffddd9b4`
    
    $.ajax({
        url:urlQuery,
        method:"GET"
    }).then(function(response){
        var headMain = response.headline.main;
        console.log(headMain);

        var authorArticle = response.docs.byline.original;
        console.log(authorArticle);

        var sourceArticle = response.docs.source;
        console.log(sourceArticle);

        var snippetArticle = response.docs.snippet;
        console.log(snippetArticle);
    })
});