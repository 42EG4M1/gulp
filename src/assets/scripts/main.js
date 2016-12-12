"use strict";

// require
var $ = require('jquery');
var InsertSpan = require('./modules/insertspan');


// svg icon
$(function() {
  $.ajax({
    type: 'get',
    url: './assets/images/svg/sprite.min.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
});


// target
var testId = document.getElementById('js-testId'); // InsertSpan


// instans
var insertSpan = new InsertSpan(testId);

