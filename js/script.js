
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    fetch(quoteUrl, {cache: "no-store"})
    .then(function(resp) {
        return resp.json();
    })
    .then(createTweet);
}