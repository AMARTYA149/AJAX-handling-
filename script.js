function fetchRandomDogImage() {
    // Javascript way of Ajax request handling
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function(){
    //     console.log(xhrRequest.response);
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     var imageURL = responseJSON.message;
    //     $('#dog-image').attr('src', imageURL);
    // };
    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();

    // jQuery way of handling Ajax - method 1
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'get',
        success: function(data){
             //     var responseJSON = JSON.parse(xhrRequest.response);
        var imageURL = data.message;
        $('#dog-image').attr('src', imageURL);
        }
    });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);