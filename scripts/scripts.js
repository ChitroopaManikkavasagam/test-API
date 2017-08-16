var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}

function myApiCall() {
  var client = new HttpClient();
  client.get('https://wapi.engage.co/api/v2/getUsers?apiKey=5e5287ce9c4979cd6acf742850fd21af&companyHash=cb15f03f140f28d81223f7b7c64e3a0d&categorySlug=customer-facing-team&sig=54eda0746989aa060b0dd5ad86eb0f1949eddb89', function(response) {
      // do something with response
      var result = JSON.parse(response);
      console.log(result);
  });
}
