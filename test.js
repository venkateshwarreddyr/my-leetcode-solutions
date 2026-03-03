cl = console.log;
var partitionLabels = function (s) {
  let n = s.length;
  let an = [];

  let max = -1;
  let obj = {};
  for (let i = 0; i < n; i++) {
    obj[s[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    let startI = i;
    max = obj[s[i]];
    while (i < max) {
      max = Math.max(obj[s[i]], max);
      i++;
    }
    an.push(max - startI + 1);
  }

  cl(an);
  return an;
};

partitionLabels("sbcd");
