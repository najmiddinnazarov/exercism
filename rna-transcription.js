const toRna = (rna) => {
  const obj = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return rna.replace(/[GCTA]/g, (x) => obj[x]);
};
console.log(toRna("CG"));
