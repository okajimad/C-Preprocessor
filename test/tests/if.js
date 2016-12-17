/*

Test the #if command


© 2016 - Guillaume Gonnet
License GPLv2

Source at https://github.com/ParksProjets/C-Preprocessor

*/


// Create the test
var utils = require('../utils.js'),
	test = utils.test('#if');



// Random numbers
var a = utils.randint(0, 100),
	b = utils.randint(0, 100);


// Expected results
test.result('r1', true);
test.result('r2', true);
test.result('r3', true);



// Run the test
test.run(`

var r3 = true;

#define A ${a}
#define B ${b}
#define C ${a+b} 

#if defined(A) && !defined(D)
	var r1 = true;
#else
	var r1 = false;
#endif

#if A + B != C
	
	#if A == 2
		r3 = false;
	#elif A == 4
		r3 = false;
	#else
		r3 = false;
	#endif

	var r2 = false;
#elif A + B == C + 1
	var r2 = false;
#else
	var r2 = true;
#endif

`);
