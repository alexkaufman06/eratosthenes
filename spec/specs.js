describe("prime", function() {
  it("it returns the number 2", function() {
    expect(prime(2)).to.eql([2]);
  });

  it("returns [2, 3] for upper limit of 3", function() {
    expect(prime(3)).to.eql([2, 3]);
  });

  it("retures [2, 3] for upper limit of 4", function() {
    expect(prime(4)).to.eql([2, 3]);
  });
});
