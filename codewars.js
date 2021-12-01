


function getMiddle(s)
{
/*	let i = (s.length / 2) | 0;
	if( s.length % 2 )
		return s.substr(i, 1);
	
	return s.substr(i-1, 2);
*/
	if( s.length % 2 )
		return s.substr((s.length - 1) / 2, 1);
	
	return s.substr(s.length/2 - 1, 2);
}

//document.getElementById("demo1").innerHTML = '1. Result of getMiddle("test"): ' + getMiddle("test");

function highAndLow(numbers){
  let arr = numbers.split(" ");
  let max = min = Number(arr[0]);
	for( let i = 0; i < arr.length; i++) {
	  if(Number(arr[i]) > Number(max) )
		  max = arr[i];
	  if(Number(arr[i]) < Number(min) )
		  min = arr[i];
  }
  return max + " " + min;
}

//document.getElementById("demo1").innerHTML = '1. Result of highAndLow("1 2 3 4 5"): ' + highAndLow("1 2 3 4 5");

String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  let res = "";
  for( let i = 0; i < arr.length; i++) {
	  if(res.length)
		  res += " ";
	  res += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return res;
};
//let str = "превет медвет!"
//document.getElementById("demo1").innerHTML = '1. Result of toJadenCase: ' + str.toJadenCase();

function disemvowel(str) {
/*  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  let res = "";

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (!vowels[letter]) {
      res += str[i];
    }
  };
  return res;
*/
 return str.replace(/[aeiou]/gi, "");
}

//document.getElementById("demo1").innerHTML = "1. Result of disemvowel(`No offense but,\nYour writing is among the worst I've ever read`): " 
//	+ disemvowel("No offense but,\nYour writing is among the worst I've ever read");

function isIsogram(str){
  let s = str.toLowerCase();
  let letters = "";
  for(let i = 0; i < s.length; i++)
	  if(letters.indexOf(s[i]) < 0)
		  letters += s[i];
	  else
		  return false;
	  
  return true;
}

//document.getElementById("demo1").innerHTML = '1. Result of isIsogram("isogram"): ' + isIsogram("isogram");

function nicknameGenerator(name){
  if( name.length < 4)
	  return "Error: Name too short";
  let vowels = "aeiou";
  if( vowels.indexOf(name[2]) > -1)
	  return name.slice(0, 4);
  
  return name.slice(0, 3);
}

//document.getElementById("demo1").innerHTML = '1. Result of nicknameGenerator("Jimmy"): ' + nicknameGenerator("Jimmy");

function explode(s) {
  let res = "";
   for(let i = 0; i < s.length; i++)
	   res += s[i].repeat(Number(s[i]));
   
  return res;
}

//document.getElementById("demo1").innerHTML = '1. Result of explode("102269"): ' + explode("102269");

function getParticipants(handshakes){
  let mans = 1;
  let h = handshakes
  while(h > 0) {
	  h -= mans;
	  mans++;
  }
	  
  return mans;
}

//document.getElementById("demo1").innerHTML = '1. Result of getParticipants("6"): ' + getParticipants("6");

function revrot(str, sz) {
	if( sz <= 0 || !str.length || sz > str.length )
		return "";
    let res = "";
	for( let i = 0; i + sz <= str.length; i += sz ) {
		let s = str.slice(i, i+sz);
		let sum3 = 0;
		for(let j = 0; j < s.length; j++) {
			sum3 += Math.pow(Number(s[j]),3);
		}
		if( sum3 % 2 )
			res = res + s.slice(1) + s[0];
		else
			res += s.split("").reverse().join("");
	}
	return res;
}

//document.getElementById("demo1").innerHTML = '1. Result of revrot("733049910872815764", 5): ' + revrot("733049910872815764", 5);



function solution(number){
  if(number < 4)
	  return 0;
  let sum = 0;
  for(let i = 3; i < number; i++)
	  if( !(i % 3) || !(i % 5) )

		  sum += i;
  return sum;  
}

//document.getElementById("demo1").innerHTML = '1. Result of solution(10): ' + solution(10);
//============================
//   Arrays
//=============================
function head(arr) {
	return arr[0];
}

function last(arr) {
	return arr[arr.length -1];
}

function init(arr) {
	return arr.slice(0, arr.length - 1);
}

function tail(arr) {
	return arr.slice(1);
}

/*
document.getElementById("demo1").innerHTML = '1. Result of init/tail/head/last([1,5,7,9]): '
 + init([1,5,7,9]) + " "
 + tail([1,5,7,9]) + " "
 + head([1,5,7,9]) + " "
 + last([1,5,7,9]);
*/
//------------------------------------------------------------------
function deepCount(a){
  let res = 0;
  count(a);
  return res;

  function count(arr) {
    arr.forEach(e => {
		res++;
      if (Array.isArray(e)) {
        count(e);
      }
    });
  };
}

//document.getElementById("demo1").innerHTML = '1. Result of deepCount([[[[[[[[[]]]]]]]]]): ' + deepCount([[[[[[[[[]]]]]]]]]);
//document.getElementById("demo1").innerHTML = '1. Result of deepCount([1, 2, [3, 4, [5]]]): ' + deepCount([1, 2, [3, 4, [5]]]);
//------------------------------------------------------------------



var validWord = function(dictionary, word) {
	let res = false;
	tree(word);
	return res;
	
	function tree(str) {
		if( !str.length ) {
			res = true;
			return;
		}
		let arr1 = [];
		dictionary.forEach((item) => {if(item[0] === str[0]) arr1.push(item);});
		for(let i = 0; i < arr1.length; i++ ) {
			if(str.indexOf(arr1[i]) === 0) {
				let str1 = str.replace(arr1[i], "");
				if( !str1.length ) {
					res = true;
					return;
				}
				tree(str1);
			}
		}
	}
};
/*
document.getElementById("demo1").innerHTML = '1. Result of validWord(true): ' 
	+ validWord(['w','y','vyz','mysu','wvz','vyfm','exrl','v','qylv','avt','j',
	'ru','h','e','v','fvu','gch','p','ji','xldb','z','bhuz','gmxd','diba','qs','fjw'],
 'wyvyzmysuwvzvyfmexrlvqylvavt');
*/
//-----------------------
function tickets(peopleInLine){
  let bills = {
	  25: 0,
	  50: 0,
	  100: 0
  };
  for(let i = 0; i < peopleInLine.length; i++) {
	 switch (peopleInLine[i]) {
		  case 25:
			bills[25]++;
			break;
		  case 50:
			bills[50]++;
			if(!bills[25])
				return "NO";
			bills[25]--;
			break;
		  case 100:
			bills[100]++;
			if( bills[50] && bills[25]) {
				bills[50]--;
				bills[25]--;
			} else if(bills[25] >= 3)
				bills[25] -= 3;
			else
				return "NO";
	  }
  }
  return "YES";
}

//document.getElementById("demo1").innerHTML = '1. Result of tickets([25, 25, 50]): ' + tickets([25, 25, 50]);


function sortByBit(arr) {
return arr.sort((a, b)=>{
	  let x = a? a.toString(2).match(/1/gi).length : 0;
	  let y = b? b.toString(2).match(/1/gi).length : 0;
	return x !== y? (x - y) : (a - b);})
}

//document.getElementById("demo1").innerHTML = '1. Result of sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0]): ' + sortByBit([9,4,5,3,5,7,2,56,8,2,6,8, 0]);


//=============================
// Functions
//=============================
function createFunctions(n) {
  var callbacks = [];
  
  for (var i=0; i<n; i++) {
	  let res = i;
    callbacks.push(() =>{
		return res;
    });
  }
  return callbacks;
}
/*
var callbacks = createFunctions(5);

    for (var i=0; i<callbacks.length; i++) {
      let j = callbacks[i]();
	  let a = j;
    }
*/
//-----------------------

function createSecretHolder(secret) {
  let s = secret;
  return {
    getSecret: () => s,
    setSecret: (val) => s = val
  };
}

/*!!! Нажатие на кнопку "Test" даёт непонятный результат,
 но на "Attempt" - проходит все тесты!!!
*/
/*
let str1 = "";
let obj1 = createSecretHolder(5);
str1 += obj1.getSecret();
obj1.setSecret(2);
str1 += " " + obj1.getSecret();

document.getElementById("demo1").innerHTML = '1. Result of createSecretHolder(secret): ' + str1;
*/


//=============================
// Date
//=============================

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	if( enteredCode !== correctCode || Date.parse(currentDate) > Date.parse(expirationDate) )
		return false;
	
  return true;
}

//document.getElementById("demo1").innerHTML = "1. Result of checkCoupon('123','123','September 5, 2014','October 1, 2014'): " 
 //+ checkCoupon('123','123','September 5, 2014','October 1, 2014');

//-----------------------

function unluckyDays(year){
	let res = 0;
	for (let month = 0; month < 12; month++) {
		let d = new Date(year, month, 13);
		if (d.getDay() === 5) {
			res++;
		}
	}
	return res;
}

//document.getElementById("demo1").innerHTML = '1. Result of unluckyDays(2065): ' + unluckyDays(2065);

//-----------------------
function formatDuration (seconds) {
  if(seconds === 0)
	return "now";
  let arr = [];
  let obj = null; 
  let t = seconds;
  let years = Math.floor(t / ( 60 * 60 * 24 * 365));
  if(years > 0) {
	  obj = new Object();
	  obj.val = years;
	  if(years > 1)
		  obj.str = "years";
	  else
		  obj.str = "year"
	  arr.push(obj);
  }
  t -= years * ( 60 * 60 * 24 * 365);
  let days = Math.floor(t / (60 * 60 * 24));
  if(days > 0) {
	  obj = new Object();
	  obj.val = days;
	  if(days > 1)
		  obj.str = "days";
	  else
		  obj.str = "day"
	  arr.push(obj);
  }
  t -= days * (60 * 60 * 24);
  let hours = Math.floor(t / (60 * 60));
  if(hours > 0) {
	  obj = new Object();
	  obj.val = hours;
	  if(hours > 1)
		  obj.str = "hours";
	  else
		  obj.str = "hour"
	  arr.push(obj);
  }
  t -= hours * (60 * 60)
  let minutes = Math.floor(t / 60);
  if(minutes > 0) {
	  obj = new Object();
	  obj.val = minutes;
	  if(minutes > 1)
		  obj.str = "minutes";
	  else
		  obj.str = "minute"
	  arr.push(obj);
  }
  t -= minutes * 60;
  if(t > 0) {
	  obj = new Object();
	  obj.val = t;
	  if(t > 1)
		  obj.str = "seconds";
	  else
		  obj.str = "second"
	  arr.push(obj);
  }
  let res = "";
  for(let i = 0; i < arr.length; i++) {
	  if( i > 0 )
		  if( i < arr.length-1 )
			res += ", ";
		  else
			  res += " and ";

	  res += arr[i].val + " " + arr[i].str;
	  
  }
  return res;
}

//document.getElementById("demo1").innerHTML = '1. Result of formatDuration(3662): ' + formatDuration(36111162);

//=============================
// Objects
//=============================
function myLanguages(results) {
	let arr = Object.entries(results).sort((a, b) => b[1] - a[1]);
	let res = [];
	for(let i = 0; i < arr.length; i++)
		if( arr[i][1] >= 60)
			res.push(arr[i][0]);
	return res;		
}

//document.getElementById("demo1").innerHTML = '1. Result of myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}): ' + myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65});
//-------------------------
var runLengthEncoding = function(str){
    let encoding = [];
	if( !str.length )
		return encoding;
    var prev, count, i;
    for (count = 1, prev = str[0], i = 1; i < str.length; i++) {
        if (str[i] != prev) {
            encoding.push([count, prev]);
            count = 1;
            prev = str[i];
        }
        else 
            count ++;
    }
    encoding.push([count, prev]);
    return encoding;
}

//document.getElementById("demo1").innerHTML = '1. Result of runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"): '
// + runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW");

//------------------------

var WordDictionary = function () {
	this.dic = [];
};

WordDictionary.prototype.addWord = function (word) {
   this.dic.push(word);
};

WordDictionary.prototype.search = function (word) {
   return this.dic.findIndex( (item) => {
	   if(item.length !== word.length)
		   return false;
		return item.match(RegExp(word));
	   } ) > -1? true : false;
};

/*
var wd = new WordDictionary();
  wd.addWord('a');
  wd.addWord('at');
  wd.addWord('ate');
  wd.addWord('ear');
  
  let a = wd.search('a');
  let b = wd.search('at');
  let c = wd.search('a.');
  let c1 = wd.search('aa');
  let c2 = wd.search('ate');
*/
//--------------------------

function stringify(list) {
	return getData(list, true);
	
	function getData(lst,first = false) {
		let str = "";
		if(!first)
			str += " -> ";
		if(lst)
			str += lst.data + getData(lst.next);
		else
			str += "null";

		return str;	
	}
}

/*
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


stringify(new Node(1, new Node(2, new Node(3))));
document.getElementById("demo1").innerHTML = '1. Result of stringify(new Node(1, new Node(2, new Node(3)))): ' + stringify(new Node(1, new Node(2, new Node(3))));
*/

//----------------------------

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};


function arrayToTree(array) {
	let Tree;
	if(array.length) {
		Tree = new TreeNode(array.shift());
		addNodes(Tree, array);
	}
	
	function addNodes(to, arr) {
		if(arr.length)
			to.left = new TreeNode(arr.shift());
		if(arr.length)
			to.right = new TreeNode(arr.shift());
		if(arr.length)
			addNodes(to.left, arr);
	}
	
	
  return Tree; 
}
/*
function arrayToTree(array) {
	let Tree;
	let curr;
	let i = 0;
	while( i < array.length) {
		if(!Tree) {
			Tree = new TreeNode(array[i++]);
			curr = Tree;
		}
		if( i < array.length)
			curr.left = new TreeNode(array[i++]);
		if( i < array.length)
			curr.right = new TreeNode(array[i++]);
		curr = curr.left;
	}
	
	
  return Tree; 
}
*/
let expected = new TreeNode(-9965, new TreeNode(-6115, new TreeNode(2161, new TreeNode(5616,
				new TreeNode(1539, new TreeNode(1127, new TreeNode(1538), new TreeNode(7657)),
				new TreeNode(2898)), new TreeNode(-965)), new TreeNode(-7948)),
				new TreeNode(-8965)), new TreeNode(5331));

var array = [-9965, -6115, 5331, 2161, -8965, 5616, -7948, 1539, -965, 1127, 2898, 1538, 7657];
let tree = arrayToTree(array);
document.getElementById("demo1").innerHTML = '1. Result of arrayToTree([17, 0, -4, 3, 15]): ' + JSON.stringify(tree);













