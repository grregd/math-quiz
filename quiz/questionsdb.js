
function createItem( aQuery, aPointsMax, aAnswers, aCorrect, aPenalty ) {
    return { query: aQuery, pointsMax: aPointsMax, answers: aAnswers, correct: aCorrect, penalty: aPenalty };
}

function penalty( aPointsMax ) {
    return 1/4*aPointsMax.value;
}

function generateItems( table, yBeg, yEnd, qBeg, qEnd, points, answers, correct, aPenalty ) {
    for ( year = yBeg; year <= yEnd; ++year ) {
        for ( query = qBeg; query <= qEnd; ++query ) {
            table.push( createItem( '<img src="images/maluch/' + year + '/0' + query + '.png" width="50%"/>',
                                    points, answers, correct, aPenalty) );
        }
    }
}


var baseAnswers = ['A', 'B', 'C', 'D', 'E', 'brak odpowiedzi'];
var pts3 = { value: 3, label: '<b>3</b> punkty' };
var pts4 = { value: 4, label: '<b>4</b> punkty' };
var pts5 = { value: 5, label: '<b>5</b> punkty' };


items3Points = new Array();
items4Points = new Array();
items5Points = new Array();

generateItems( items3Points, 1993, 1995, 1, 10, pts3, baseAnswers, 'A', penalty(pts3) );
generateItems( items3Points, 1996, 1999, 1, 7,  pts3, baseAnswers, 'A', penalty(pts3) );
generateItems( items3Points, 1999, 2015, 1, 8,  pts3, baseAnswers, 'A', penalty(pts3) );

generateItems( items4Points, 1993, 1995, 11, 20, pts4, baseAnswers, 'A', penalty(pts4) );
generateItems( items4Points, 1996, 1999, 8, 14,  pts4, baseAnswers, 'A', penalty(pts4) );
generateItems( items4Points, 1999, 2015, 9, 16,  pts4, baseAnswers, 'A', penalty(pts4) );

generateItems( items5Points, 1993, 1995, 21, 30, pts5, baseAnswers, 'A', penalty(pts5) );
generateItems( items5Points, 1996, 1999, 15, 21, pts5, baseAnswers, 'A', penalty(pts5) );
generateItems( items5Points, 1999, 2015, 17, 24, pts5, baseAnswers, 'A', penalty(pts5) );


