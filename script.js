function fetchRandomDogImage() {
    // Javascript way of Ajax request handling
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURL = responseJSON.message;
        $('#dog-image').attr('src', imageURL);
    };
    xhrRequest.onerror = function(){
        console.log("request failed");
    };
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();

    // jQuery way of handling Ajax - method 1
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'get',
    //     success: function(data){
    //          //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imageURL = data.message;
    //     $('#dog-image').attr('src', imageURL);
    //     }
    // }).fail(function(){
    //     console.log("error");
    // });

    //jQuery way of handling Ajax - method 2
    // $.get('https://dog.ceo/api/breeds/image/random',  function(data){        
    //         var imageURL = data.message;
    //         $('#dog-image').attr('src', imageURL);
    //         }).fail(function(xhr, textStatus, errorThrown){
    //             console.log("Request failed");
    //         });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);