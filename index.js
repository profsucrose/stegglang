const { readFileSync, writeFileSync } = require('fs')
const { exec } = require('child_process')
const { join } = require('path')

const steggDir = process.argv[2]

const programText = readFileSync(steggDir)
writeFileSync(join(__dirname, 'tmp.cpp'), '#include "stegg.h"\n' + programText)
exec(`g++ ${join(__dirname, 'tmp.cpp')} -o ${join(__dirname, 'a.out')} && ${join(__dirname, 'a.out')}`, (err, stdout, stderr) => {
	if (err) {
	  console.log('uh oh: ', stderr.trim())
	  return
	}

	console.log(stdout.trim())
	exec('rm tmp.cpp && rm a.out')
})