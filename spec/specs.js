describe("wordOrder", function() {
  it("will returns a list of words from a string", function() {
    expect(wordOrder("the dog walks")).to.eql([[1, "walks"], [1, "the"], [1, "dog"]]);
  });

  it("will not return duplicate words", function() {
    expect(wordOrder("the dog walks the dog")).to.eql([[2, "the"], [2, "dog"], [1, "walks"]]);
  });

  it("counts the number of times duplicate words appear", function() {
    expect(wordOrder("the dog walks the dog dog")).to.eql([[3, "dog"], [2, "the"], [1, "walks"]]);
  });

  it("combines the word count with the words", function() {
    expect(wordOrder("the dog walks the dog dog")).to.eql([[3, "dog"], [2, "the"], [1, "walks"]]);
  });
});
