'use strict';

const { expect } = require('chai');

const Icebreaker = require('../../models/Icebreaker');
const Question = require('../../models/Question');

describe('Icebreaker', () => {
  it("is exported into modules so it can be loaded here", () => {
    expect(Icebreaker).to.be.a("function", "Icebreaker not exported in Icebreaker.js")
  })
  
  it("requires('./Question.js')", () => {
    const icebreaker = new Icebreaker()
    expect(icebreaker.question).to.not.throw()
  })
});
