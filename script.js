function stringChop(str, size) {
  if (str == null)
	  return [];
	size = Number(size);
	if (!Number.isInteger(size) || size <= 0)
		return[];

	const out = [];
	for (let i  = 0; i < str.length; i += size){
		out.push(str.slice(i, i + size));
	}
	return out;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
