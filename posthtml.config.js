module.exports = {
  plugins: [
    require('posthtml-include')({ root: 'src' }),
    require('posthtml-expressions')({}),
  ],
}

const data = [1, 2, 3, 4, 5]
const newData = []
data.forEach((item) => {
  newData.push(item * 2)
})

console.log(newData) // [2, 4, 6, 8, 10]
