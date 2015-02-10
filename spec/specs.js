describe("prime", function() {
  it("it returns the number 2", function() {
    expect(prime(2)).to.eql([2]);
  });

  it("returns [2, 3] for upper limit of 3", function() {
    expect(prime(3)).to.eql([2, 3]);
  });

  it("returns [2, 3] for upper limit of 4", function() {
    expect(prime(4)).to.eql([2, 3]);
  });

  it("returns [2, 3, 5] for upper limit of 5", function() {
    expect(prime(5)).to.eql([2, 3, 5]);
  });

  it("returns [2, 3, 5, 7, 11, 13] for upper limit of 13", function() {
    expect(prime(13)).to.eql([2, 3, 5, 7, 11, 13]);
  });

});
