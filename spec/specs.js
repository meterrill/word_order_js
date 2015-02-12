describe("wordOrder", function() {
  it("will returns a list of words from a string", function() {
    expect(wordOrder("the dog walks")).to.eql(["dog", "the", "walks"]);
  });

  it("will not return duplicate words", function() {
    expect(wordOrder("the dog walks the dog")).to.eql(["dog", "the", "walks"]);
  });

  it("counts the number of times duplicate words appear", function() {
    expect(wordOrder("the dog walks the dog dog")).to.eql(["dog", "the", "walks"], [3, 2, 1]);
  });
});
