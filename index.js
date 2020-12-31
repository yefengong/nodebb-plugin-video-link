"use strict";

const { videoSites } = require('./video-sites')

function getIframeStr(src) {
  return `<div class="video-embed">
            <iframe
              src="${src}"
              width="640"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>`
}

const filterParsePost = function(data, callback) {
  if(!data || !data.postData || !data.postData.content) {
    return callback(null, data);
  }
  for (const item of videoSites) {
    data.postData.content = data.postData.content.replace(item.from, getIframeStr(item.to));
  }
  callback(null, data);
};

const staticAppLoad = function(data, callback) {
  console.log('Loading nodebb-plugin-video-link: ' + require('./package.json').version);
  callback();
};


module.exports = { filterParsePost, staticAppLoad }



