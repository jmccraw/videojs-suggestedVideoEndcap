# videojs-suggestedVideoEndcap
Creates an end-cap screen with a grid of suggested video links to watch, similar to YouTube. Inspired by Funny or Die’s [videojs-relatedCarousel](https://github.com/funnyordie/videojs-relatedCarousel).
____

### Purpose
Recirculation is important for increasing page views and disseminating your videos. This Suggested Video Endcap looks to offer such a solution. By displaying a grid of suggested video content, a la YouTube, users may be more inclined to stay on your site and click around to content, not necessarily just videos.

![Suggested Video Endcap Screenshot](https://lh3.googleusercontent.com/u5gF5JVBM2VkMjYJmc1-M2lffMjh3XhjpLwMe57rT94KG1j08EmG-xPTuI3UXvLqDWlkAobajp9a1EZ29i4W7ydSfLskoBjk20LSE4DHcZL8_uavM7LmErM8a-Z-YxY6i9cOqAzXrz8Tkp9T0cLE-UfyNkSO_y-NKqE77u-vpdtLJC3nZZR-QztPfoGSFWDEDtbOZioCt5NQYGHImqkvvB2Ulms3XRirdi_vqhV9FmtkW-drc5KyMdN4tSK9MXzB7ZlYy82BzQEWbrnuLOs01HvqkiUQLBXhRUjfAtxw5V7ifegOpyI9d-7iHunnkT3aSRmbE7qolgJO31vyvV_guhnB1S56BH43PuKGjTQdMxs_NNYETM3ZGwd-V5ub2XENaR3hCaXx8dWk3Btms0uRe_I_2ZrGnbaMImE3Wg1jiNvYtzA4Es2MVu6gAR8z82yfTePwti20vlvXQ2lGsjMuXypFTEgqM6EdZXOamTlA0wK5LO1Y9jtYZxdnpwh4eAZwsdKaUrFKn4Y3ZbJPug-IQzMKbobJ-ol0QVTTuamXpxqG1WurZnQnsHpT19aYhzzM58SU=w1040-h593-no)

### Usage
This plugin requires [Video.js](https://github.com/videojs/video.js) and was created with version 5.4.4.

It also uses [flexbox](http://caniuse.com/flexbox).

1. Install [Video.js](https://github.com/videojs/video.js)
2. Add the [videojs-suggestedVideoEndcap](https://github.com/jmccraw/videojs-suggestedVideoEndcap/blob/master/videojs.suggestedVideoEndcap.css) CSS to your page
3. Add the [videojs-suggestedVideoEndcap](https://github.com/jmccraw/videojs-suggestedVideoEndcap/blob/master/videojs.suggestedVideoEndcap.js) JavaScript to your page
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

### Notes
The CSS needs updating to conform to the size of your given media player. Currently, it's set up for a rather large implementation and truncated in the code for this case. Should also be extended for media queries, but that's a more case-by-case level.

Let me know if you run into any bugs or recommendations.