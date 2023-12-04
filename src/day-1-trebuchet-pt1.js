const fs = require('fs');

const file = fs.readFileSync('data/day-1-input');
const input = Buffer.from(file).toString('utf-8');

const answer = input.split('\n')
                .map(x => x.replace(/[A-z]*/g, '')
                           .replace(/(\d)\d*(\d)/, (_, p1, p2) => `${p1}${p2}`))
                .reduce((acc, next) =>
                    next.length === 1
                        ? acc + Number(next.repeat(2))
                        : acc + Number(next)
                , 0);

console.log(answer);