$(document).ready(function() {

  var Video = {
    // a static function that gets the video ID from the URL and creates a video object
    // convert_to_embed
    // convert_to_cropped_url
  }

  var convert_to_embed = function(video_id) {
    var width = 560,
        height = 315,
        embed_url = "<iframe width=\""+width+"\" height=\""+height+"\" src=\"http\:\/\/www.youtube.com/embed/"+video_id+"\" frameborder=\"0\" allowfullscreen></iframe>";

    return embed_url;
  },
  convert_to_cropped_url = function(video_id, start, end) {
    var url = "http://youtube.googleapis.com/v/"+video_id+"?start="+start+"&"+end+"=20&version=3"

    return url
  },
  regex = /watch\?v=(\w*)/;

  $('.youtube-url input').blur(function() {
    var $video = $(this);
    if($video.val() != "") {
      $('.youtube-video-container').empty();

      $video.id = $video.val().match(regex)[1];

      $video.embed_url = convert_to_embed($video.id);
      $('.youtube-video-container').prepend($video.embed_url);

      $video.start = $('').

      // MAKE A VIDEO CLASS--THIS IS RIDICULOUS
      $video.cropped_url = convert_to_cropped_url($video.id, $video.start, $video.end);
    }
  });

  $('.youtube-video-cropper').submit(function(e) {
    if($('.youtube-video-start').val() != "" && $('.youtube-video-end').val() != "") {

    }
    e.preventDefault();
  });

});
