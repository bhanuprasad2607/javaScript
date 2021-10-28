// To run this Program in  node.js install esm
// npm install esm
// To run the files 
// node -r esm filename.js


import person from './person.js';


// import { clean, clean as clear } from './utility.js';

import * as bundled  from './utility.js'

bundled.clean('Ram');
console.log(bundled.dataVariable);
console.log(person);