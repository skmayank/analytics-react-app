// Requiring the module
const reader = require('xlsx')

// Reading our data file
const file = reader.readFile('./datasheet.xlsx')


const readData = () => {
let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
	data.push(res)
})
}

return data;
}

module.exports = readData;