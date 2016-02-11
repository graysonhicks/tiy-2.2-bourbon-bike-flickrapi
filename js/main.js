  $(document).ready(function(){

    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: "bike",
      format: "json"
    };
    function displayPhotos(data) {

      $.each(data.items, function(i, photo) {
        var photoHTML = '<div class="slide"><img src="';
        photoHTML += photo.media.m + '"></img></div>';
        $('.slides').append(photoHTML);
        return i<5

      }); // end each

    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    });
