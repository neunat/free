function cssToObj(css) {
	let obj = {}
	let cssByLine = css.split('\n')
	cssByLine.forEach((line)=>{
		// FOR ENTRY LINE MATCH
		var entryLineMatch = line.match(/\s*([^{\d]+)\s*{/)
		if (entryLineMatch != null) {
			console.log(entryLineMatch)
			// entryLineMatch[1] is the classes and ids being referenced
			var cssObjects = entryLineMatch[1].split(' ')
			let previousObjs = undefined;
			cssObjects.forEach((object)=>{
				if (previousObjs == undefined) {
					previousObjs = obj[String(object)] = '';
				} else {
					previousObjs = obj[previousObjs][String(object)] = ''
				}
			})
		}
		// END ENTRY LINE MATCH
	})
}

cssToObj(`
.class #id {
`)