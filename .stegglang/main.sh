steggy-run() {
	echo node '~/.stegglang/src/index.js'
	node '~/.stegglang/src/index.js' `pwd`/$1 
}