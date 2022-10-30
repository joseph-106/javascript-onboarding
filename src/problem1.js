// @ts-check

/**
 * @param {number} page
 * @returns {number}
 */
const findMax = (page) => {
  return Math.max(
    `${page}`.split("").reduce((acc, cur) => acc + Number(cur), 0),
    `${page}`.split("").reduce((acc, cur) => acc * Number(cur), 1)
  );
};

/**
 * @param {number[]} pobi
 * @param {number[]} crong
 * @returns {number}
 */
function problem1(pobi, crong) {
  if (
    pobi[0] === 1 ||
    crong[1] === 400 ||
    pobi[0] % 2 !== 1 ||
    crong[0] % 2 !== 1 ||
    pobi[0] + 1 !== pobi[1] ||
    crong[0] + 1 !== crong[1]
  )
    return -1;

  const pobiMax = Math.max(findMax(pobi[0]), findMax(pobi[1]));
  const crongMax = Math.max(findMax(crong[0]), findMax(crong[1]));

  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax === crongMax) return 0;
  else return -1;
}

console.log(problem1([97, 98], [197, 198])); // 0
console.log(problem1([131, 132], [211, 212])); // 1
console.log(problem1([99, 102], [211, 212])); // -1

module.exports = problem1;
