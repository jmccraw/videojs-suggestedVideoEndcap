/**
 * Video.js Suggested Video Endcap
 * Created by Justin McCraw for New York Media LLC
 * License information: https://github.com/jmccraw/videojs-suggestedVideoEndcap/blob/master/LICENSE
 * Plugin details: https://github.com/jmccraw/videojs-suggestedVideoEndcap
 */

(function(videojs) {
  'use strict';

  videojs.plugin('suggestedVideoEndcap', function(opts) {
    opts = opts || {
        header: 'You may also like…',
        suggestions: [
          {
            title: '',
            url: '',
            image: '',
            alt: '',
            target: '_self'
          }
        ]
      };
    var player = this;

    /**
     * Generate the DOM elements for the suggested video endcap content
     * @type {function}
     */
    function constructSuggestedVideoEndcapContent() {
      var sugs = opts.suggestions;
      var _frag = document.createDocumentFragment();
      var _aside = document.createElement('aside');
      var _header = document.createElement('h5');
      var _a;
      var _img;
      var _title;

      _aside.className = 'vjs-suggested-video-endcap-container';

      _header.innerHTML = opts.header;
      _header.className = 'vjs-suggested-video-endcap-header';

      _aside.appendChild(_header);
      _frag.appendChild(_aside);

      // construct the individual suggested content pieces
      for (var i = sugs.length - 1; i >= 0; --i) {
        _a = document.createElement('a');
        _a.className = 'vjs-suggested-video-endcap-link';
        _a.href = sugs[i].url;
        _a.target = sugs[i].target || '_self';
        _a.title = sugs[i].title;

        _img = document.createElement('img');
        _img.className = 'vjs-suggested-video-endcap-img';
        _img.src = sug[i].image;
        _img.alt = sug[i].alt || sug[i].title;
        _a.appendChild(_img);

        _title = document.createTextNode(sugs[i].title);
        _a.appendChild(_title);

        _frag.appendChild(_a);
      }

      player.el.appendChild(_frag);
    }

    player.ready(function() {
      constructSuggestedVideoEndcapContent();
    });


  });
}(window.videojs));