  $(document).ready(function() {
    $.ajaxSetup({ cache: false });
    $(".button").on("click", function() {
      console.log("laboom");
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) { 
      var quote = json[0].content;
      var striped_quote = $("<p>").html(quote).text();
      // console.log(json[0].title);
      $(".quote-text").html(striped_quote);
      $(".author").html("<br/> ----"+json[0].title);

        // alert("success");
    }).fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    });
  });
    });