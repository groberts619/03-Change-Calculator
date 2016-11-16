var button = document.getElementById('btnCalculate');

button.onclick = function() { 
	var inputAmtDue = document.getElementById('inputAmtDue');

	var amtDue = inputAmtDue.value;

	var inputAmtGiven = document.getElementById('inputAmtGiven');

	var amtGiven = inputAmtGiven.value;

	var change = amtGiven - amtDue;

	var dollars = Math.floor(change);

	var fifties = Math.floor(dollars / 50);

	document.getElementById('fifties').innerHTML = fifties;

	var twenties = Math.floor((dollars - (fifties * 50)) / 20);

	document.getElementById('twenties').innerHTML = twenties;

	var tens = Math.floor((dollars - (fifties * 50) - (twenties * 20)) / 10);

	document.getElementById('tens').innerHTML = tens;

	var fives = Math.floor((dollars - (fifties * 50) - (twenties * 20) - (tens * 10)) / 5);

	document.getElementById('fives').innerHTML = fives;

	var ones = Math.floor((dollars - (fifties * 50) - (twenties * 20) - (tens * 10) - (fives * 5)) / 1);

	document.getElementById('ones').innerHTML = ones;

	var coins = Math.round((change % 1) * 100);

	var quarters = Math.floor(coins / 25);

	document.getElementById('quarters').innerHTML = quarters;

	var dimes = Math.floor((coins - (quarters * 25)) / 10);

	document.getElementById('dimes').innerHTML = dimes;

	var nickels = Math.floor((coins - (quarters * 25) - (dimes * 10)) / 5);

	document.getElementById('nickels').innerHTML = nickels;

	var pennies = Math.floor((coins - (quarters * 25) - (dimes * 10) - (nickels * 5)) / 1);

	document.getElementById('pennies').innerHTML = pennies;

}