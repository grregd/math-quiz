var totalQuestions=0
var initScore = 0;
var maxScore = 0;


function createQueryItem(itemNum, item) {
    var divAnswers = document.createElement('div');
    divAnswers.className = "qselections";
    for ( var i = 0; i < item.answers.length; ++i ) {
        var answerElement = document.createElement('input');
        answerElement.type = 'radio';
        answerElement.value = item.answers[i];
        answerElement.name = "question"+itemNum;
        var textElement = document.createElement('text');
        textElement.innerHTML = item.answers[i] + '<BR/>';

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

    var input = document.createElement('input');
    input.name = 'correct'+itemNum;
    input.type = 'hidden';
    input.value = item.correct;
    divItem.appendChild( input );

    input = document.createElement('input');
    input.name = 'points'+itemNum;
    input.type = 'hidden';
    input.value = item.pointsMax.value;
    divItem.appendChild( input );

    input = document.createElement('input');
    input.name = 'penalty'+itemNum;
    input.type = 'hidden';
    input.value = item.penalty;
    divItem.appendChild( input );


    return divItem;
}

function createTitleNode(innerHtml) {
    aNode = document.createElement('h3');
    aNode.innerHTML = innerHtml;
    return aNode;
}

function createQueriesNode(items, startNum) {
    var divGroup = document.createElement('div');
    for ( var i = 0; i < items.length; ++i ) {
        divGroup.appendChild(
            createQueryItem( startNum+i, items[i] ) );
        divGroup.appendChild( document.createElement('hr') );
    }

    return divGroup;
}


function setupQuiz(formElement, numInGroup, category) {
    totalQuestions = 3*numInGroup;
    initScore = numInGroup*(3+4+5)/4;
    maxScore = initScore+numInGroup*(3+4+5);

    formElement.appendChild( createTitleNode( "<b>Zadania za 3 punkty</b>" ) );
    formElement.appendChild( createQueriesNode( selectRandomItems(allItems[category][0], numInGroup), 0 ) );

    formElement.appendChild( createTitleNode( "<b>Zadania za 4 punkty</b>" ) );
    formElement.appendChild( createQueriesNode( selectRandomItems(allItems[category][1], numInGroup), 1*numInGroup ) );

    formElement.appendChild( createTitleNode( "<b>Zadania za 5 punków</b>" ) );
    formElement.appendChild( createQueriesNode( selectRandomItems(allItems[category][2], numInGroup), 2*numInGroup ) );
}

function gradeit() {
    var incorrect=null
    var totalScore = initScore;

    for ( q = 0 ; q < totalQuestions ; q++ ) {
        var thequestion = eval("document.myquiz.question"+q)
        var e = eval("document.myquiz.correct"+q)
        var correct = e.value;
        e = eval("document.myquiz.points"+q);
        var points  = +(e.value);
        e = eval("document.myquiz.penalty"+q);
        var penalty = +(e.value);

        var answered = false;
        for ( c = 0 ; c < thequestion.length ; c++ ) {
            if (thequestion[c].checked==true) {
                if (correct == thequestion[c].value) {
                    totalScore += points;
                    thequestion[c].parentNode.innerHTML
                        = thequestion[c].value + ': <B style="color: green">TAK</B>';
                }
                else if ( 'brak odpowiedzi' == thequestion[c].value) {
                    thequestion[c].parentNode.innerHTML
                        = thequestion[c].value;
                }
                else {
                    totalScore -= penalty;
                    thequestion[c].parentNode.innerHTML
                        = thequestion[c].value + ': <B style="color:red">NIE</B>'
                        + " Poprawna odpowiedź: " + correct;
                }

                answered = true;
                break;
            }
        }

        console.log( totalScore );

        if ( ! answered ) {
            thequestion[0].parentNode.innerHTML = 'brak odpowiedzi';
        }
    }
    document.getElementById('score').innerHTML
        = "Punkty: <B>" + totalScore + "</B> na " + maxScore + "<BR/>"
        + "<B>" + 100*totalScore/maxScore + "</B>%";

    disableGrade( true );
}

function disableGrade( state ) {
    document.submitForm.B1.disabled = state;
}

