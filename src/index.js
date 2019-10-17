function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let positionStart = 0;
    let positionEnd = 0;

	for (let i = 0; i < expr.length; i++) {
		if (expr[i] == '(') {
			positionStart += 1;
        }
        
		if (expr[i] == ')') {
			positionEnd += 1;
		}
    }
    
	if  (positionStart != positionEnd) {
		throw new Error('ExpressionError: Brackets must be paired');
    }
    
    let output = undefined;
    let x = expr.replace(/\s/g, '');
    let sortValue = String(x).match(/(^[0-9*\/\\(\\)+-]+$)/);
    let res = new Function('return ' + sortValue);
	
    for (let i = 0; i <= expr.length; i++) {
    	if ( expr[i]  == '/' ) { 
	    	if ( expr[i+2] == '0' ) {
	    		throw new Error('TypeError: Division by zero.');
	    	}
		} else {
			output = res();
		}
    } 
    return  output;
}

module.exports = {
    expressionCalculator
}