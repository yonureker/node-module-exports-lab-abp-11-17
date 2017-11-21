'use strict';

require ('models/Question')

class Icebreaker{
  question(){
    Question.Find()
  }
}

const breakTheIce = Icebreaker;
module.exports = breakTheIce;
