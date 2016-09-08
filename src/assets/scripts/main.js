"use strict";

var $ = require('jquery');
//var foo = require('./modules/foo');


//  console.log(foo);

$(function() {
  $.ajax({
    type: 'get',
    url: './assets/images/svg/sprite.min.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
});
