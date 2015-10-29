var app = angular.module('itunes');



app.service('itunesService', function ($http, $q) {

    this.getArtist = function (artist) { //when this function is called from the controller, it's going to expect an Artist parameter passed in 

            var myPromise = $q.defer();
            $http({
                method: "JSONP",
                url: "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK"
                    //            url: "http://swapi.co/api/people/1/"
            }).then(function (response) {

                var parsedResponse = response.data.results; //this is an array but it's not in the format we want, so we have to edit it 
                var newArr = [];

                var obj = {
                    AlbumArt: "",
                    Artist: "",
                    Collection: "",
                    CollectionPrice: "",
                    Play: "",
                    Type: ""
                }

                console.log("this is the parsedResponse", parsedResponse);
                for (var i = 0; i < parsedResponse.length; i++) {
                    newArr.push({
                        AlbumArt: parsedResponse[i].artworkUrl100,
                        Artist: parsedResponse[i].artistName,
                        Collection: parsedResponse[i].collectionName,
                        CollectionPrice: parsedResponse[i].CollectionPrice,
                        Play: parsedResponse[i].previewUrl,
                        Type: parsedResponse[i].wrapperType
                    })

                } myPromise.resolve(newArr); //you need to use this every time you use $q. it basically says 
            })

            return myPromise.promise;

        }
        //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
        //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.


    //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
    //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    //Note that in the above line, artist is the parameter being passed in. 
    //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

});