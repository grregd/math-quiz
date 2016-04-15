/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=10

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='c' //question 1 solution
correctchoices[2]='a' //question 2 solution, and so on.
correctchoices[3]='c'
correctchoices[4]='c'
correctchoices[5]='c'
correctchoices[6]='c'
correctchoices[7]='b'
correctchoices[8]='b'
correctchoices[9]='c'
correctchoices[10]='b'


function createQueryItem(itemNum, item) {
    var divAnswers = document.createElement('div');
    divAnswers.className = "qselections";
    for ( var i = 0; i < item.answers.length; ++i ) {
        var answerElement = document.createElement('input');
        answerElement.type = 'radio';
        answerElement.value = item.answers[i];
        answerElement.name = "question"+itemNum;
        var textElement = document.createElement('text');
        textElement.innerHTML = item.answers[i];

        divAnswers.appendChild( answerElement );
        divAnswers.appendChild( textElement );
    }

    var divQuery = document.createElement('div');
    divQuery.id = "query"+itemNum;
    divQuery.innerHTML = item.query;

    var divQheader = document.createElement('div');
    divQheader.className = "qheader";
    divQheader.appendChild(divQuery);

    var divItem = document.createElement('div');
    divItem.appendChild( divQheader );
    divItem.appendChild( divAnswers );

    return divItem;
}

function createGroup(groupTitleHtml, items, formElement) {
    var divGroup = document.createElement('div');
    divGroupTitle = document.createElement('div');
    divGroupTitle.innerHTML = groupTitleHtml;
    divGroup.appendChild( divGroupTitle );
    for ( var i = 0; i < items.length; ++i ) {
        divGroup.appendChild(
            createQueryItem( i, items[i] ) );
    }

    return divGroup;
}


function setupQuiz(formElement) {
    formElement.appendChild( createGroup(
        "<b>Zadania za 3 punkty", items3Points ) );
    formElement.appendChild( createGroup(
        "<b>Zadania za 4 punkty", items4Points ) );
    formElement.appendChild( createGroup(
        "<b>Zadania za 5 punków", items5Points ) );
}

/////Don't edit beyond here//////////////////////////

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Solution to Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
wrong=0
}
else
win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5><p align='center'><small><a href='http://www.javascriptkit.com' target='_new'>JavaScript Kit quiz script</a></small>")
win2.document.close()
}
