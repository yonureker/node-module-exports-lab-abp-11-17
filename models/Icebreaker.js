'use strict';

require ('./Question.js')

class Icebreaker{
  question(){
    Question.Find()
  }
}

const breakTheIce = Icebreaker;
module.exports = breakTheIce;
