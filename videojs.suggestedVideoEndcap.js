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
    var _sve;

    /**
     * Generate the DOM elements for the suggested video endcap content
     * @type {function}
     */
    function constructSuggestedVideoEndcapContent() {
      var sugs = opts.suggestions;
      var _frag = document.createDocumentFragment();
      var _aside = document.createElement('aside');
      var _div = document.createElement('div');
      var _header = document.createElement('h5');
      // can only hold eight suggestions at a time
      var i = sugs.length - 1 > 7 ? 7 : sugs.length - 1;
      var _a;
      var _img;

      _aside.className = 'vjs-suggested-video-endcap';
      _div.className = 'vjs-suggested-video-endcap-container';

      _header.innerHTML = opts.header;
      _header.className = 'vjs-suggested-video-endcap-header';

      _aside.appendChild(_header);

      // construct the individual suggested content pieces
      for (; i >= 0; --i) {
        _a = document.createElement('a');
        _a.className = 'vjs-suggested-video-endcap-link';
        _a.href = sugs[i].url;
        _a.target = sugs[i].target || '_self';
        _a.title = sugs[i].title;

        _img = document.createElement('img');
        _img.className = 'vjs-suggested-video-endcap-img';
        _img.src = sugs[i].image;
        _img.alt = sugs[i].alt || sugs[i].title;
        _a.appendChild(_img);

        _a.innerHTML += sugs[i].title;

        _div.appendChild(_a);
      }

      _aside.appendChild(_div);
      _sve = _aside;
      _frag.appendChild(_aside);
      player.el().appendChild(_frag);
    }

    // attach VideoJS event handlers
    player.on('ended', function() {
      _sve.classList.add('is-active');
    }).on('play', function() {
      _sve.classList.remove('is-active');
    });

    player.ready(function() {
      constructSuggestedVideoEndcapContent();
      if (opts.callback) {
        opts.callback();
      }
    });


  });
}(window.videojs));