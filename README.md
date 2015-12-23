# videojs-suggestedVideoEndcap
Creates an end-cap screen with a grid of suggested video links to watch, similar to YouTube. Inspired by Funny or Die’s [videojs-relatedCarousel](https://github.com/funnyordie/videojs-relatedCarousel).
____


### Purpose
Recirculation is important for increasing page views and disseminating your videos. This Suggested Video Endcap looks to offer such a solution. By displaying a grid of suggested video content, a la YouTube, users may be more inclined to stay on your site and click around to content, not necessarily just videos.


### Usage
This plugin requires [Video.js](https://github.com/videojs/video.js) and was created with version 5.4.4.

1. Install [Video.js](https://github.com/videojs/video.js)
2. Add the videojs-suggestedVideoEndcap CSS to your page
3. Add the videojs-suggestedVideoEndcap JavaScript to your page
4. Initialize the plugin with some related endcap content in JSON format
5. Test to see that, after the video ends, the related endcap appears with your related content

### Example
Below is a sample use case. Feel free to add the videojs-suggestedVideoEndcap CSS/JS to your own project how you see fit. Separated here as an example.

```html
<link rel="stylesheet" href="videojs-suggestedVideoEndcap">
<video id="my-video" data-setup="{}" preload="auto" controls">
  <source src="my-video.mp4">
  <source src="my-video.webm">
</video>
<script src="videojs-suggestedVideoEndcap"></script>
<script>
  'use strict';
  
  var video = videojs('my-video');
  video.suggestedVideoEndcap({
    header: 'You may also like…',
    suggestions: [
      {
        title: 'Suggested Video One',
        url: '/another-video.html',
        image: 'http://placehold.it/250', // could be an animated GIF
        alt: 'Description of photo', // optional photo description, defaults to the title
        target: '_blank' // can be any anchor target type
      },
      {
        title: 'Suggested Article One',
        url: '/a-different-article.html',
        image: 'http://placehold.it/250',
        target: '_self' // defaults to self if no target value is present
      }
    ]
  });
</script>
```