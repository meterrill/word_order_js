describe("wordOrder", function() {
  it("will returns a list of words from a string", function() {
    expect(wordOrder("the dog walks")).to.eql(["the", "dog", "walks"]);
  });

  it("will not return dulicate words", function() {
    expect(wordOrder("the dog walks the dog")).to.eql(["the", "dog", "walks"]);
  });
});
