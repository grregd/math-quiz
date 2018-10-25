
var startYearMal = 1993;

correctAnswers = [
    'CCAEEBDBCAACBDCDBEDCADAEBADBDD', // 1993
    'BCCECCBCDBEDDCBAEDAACACCEBCBDC', // 1994
    'BEBBBADDBDADCBCEABBCBDCBBDDBDA', // 1995
    'CDBBBBDDDCBEACDEDBCAECBED',      // 1996
    'CCBCBBCADECBECEBDEBBDCDDC',      // 1997
    'CDCDCCDCECCABDBDEDBBB',    // 1998
    'CEBCDECBEBCADADDDCCAADCA', // 1999
    'BCDABCBCBDBDBCCCBBECCAEA', // 2000
    'CDDCBEEECDEECBCACCDAABDE', // 2001
    'BCDDDCABCECAEBCEABDECDED', // 2002
    'ECDACDCCCCDACABCDEEABDAB', // 2003
    'AACCEBEBDDBBEBECECCAABEE', // 2004
    'CABBBDECCBBCDDEDBBADCEBE', // 2005
    'CBDAEDBBCEADCEACBDDEBECB', // 2006
    'CACCCECBCCACABBAEBCAABDE', // 2007
    'CDBBDAEAEDEDECBBCADEEBCD', // 2008
    'ECBABBCDCDABBDBAEDBDABEB', // 2009
    'DCCCDACBEBBDDCDAECDDEBDE', // 2010
    'AACEBADBCBBCEADCACCCEDAE', // 2011
    'ADBCBECDECECBCBDDDEEEDCD', // 2012
    'DDBCDBEBEDDAEBBDCBDCEBBC', // 2013
    'DDDAAEEEBEEBDBCBCCDBDBDD', // 2014
    'EAECEEBDADBBCBDCACADECEC', // 2015
    'EEADDCBECSBBADACEDEEBDBC'  // 2016
];

var startYearZak = 2001;

correctAnswersZak = [
    'BCCABCBABCBCBAABDB', // TEST1 2001
    'CCACCCBBBBDBBCBBBD', // TEST2 2002
    'CDDBACBBDBABCBCABC', // TEST3 2003
    'ADCDCCBBBCCABCBCDB', // TEST4 2004
    'CACBDADCCDBDABAADD', // TEST5 2005
    'BABCBABABCAADABABD', // TEST6 2006 
    'BCDBBBACBACBCBCBAB', // 2007  
    'CDCADCADDABCBCBDCB', // 2008  
    'DBCDBACDDBBCBDADCB', // 2009
    'CCCDBCDCBBBACCCAAB', // 2010
    'CBCADBBABCADDDBADB', // 2011
    'DDCCBBECABADBBBEDECCE', // 2012
    'CDBBDCBBBDEBEECDCDDDD', // 2013
    'BBDBCEDEADBBDDDDDEEAD', // 2014
    'ABCBBECDCCEEDEDDCDABE', // 2015
    'DDDBDCEEAEDBCEEBEBADB' // 2016
];


function createItem( aQuery, aPointsMax, aAnswers, aCorrect, aPenalty ) {
    return { query: aQuery, pointsMax: aPointsMax, answers: aAnswers, correct: aCorrect, penalty: aPenalty };
}

function penalty( aPointsMax, numOfAlt ) {
    return 1/numOfAlt*aPointsMax.value;
}

function generateItems( table, yBeg, yEnd, qBeg, qEnd, points, answers, correct, aPenalty, aBasePath, startYear ) {
    for ( year = yBeg; year <= yEnd; ++year ) {
        for ( query = qBeg; query <= qEnd; ++query ) {
            table.push( createItem( '<img src="' + aBasePath + year + '/' + ('0' + query).slice(-2) + '.png"/>',
                                    points, answers, correct[year-startYear][query-1], aPenalty) );
        }
    }
}

function selectRandomItems( array, numberOfItems ) {
    var randomNumbers = new Set();
    while ( randomNumbers.size != numberOfItems ) {
        randomNumbers.add( Math.floor(Math.random()*array.length) );
    }

    var result = new Array();
    randomNumbers.forEach( function(value) { result.push(array[value]); } );

    return result;
}


var baseAnswers = ['brak odpowiedzi', 'A', 'B', 'C', 'D', 'E'];
var baseAnswers4 = ['brak odpowiedzi', 'A', 'B', 'C', 'D'];
var pts3 = { value: 3, label: '<b>3</b> punkty' };
var pts4 = { value: 4, label: '<b>4</b> punkty' };
var pts5 = { value: 5, label: '<b>5</b> punkty' };

var basePath = "../../images/";

allItems = new Map();

items3Points = new Array();
items4Points = new Array();
items5Points = new Array();

generateItems( items3Points, 1993, 1995, 1, 10, pts3, baseAnswers, correctAnswers, penalty(pts3, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items3Points, 1996, 1997, 1, 9,  pts3, baseAnswers, correctAnswers, penalty(pts3, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items3Points, 1998, 1998, 1, 7,  pts3, baseAnswers, correctAnswers, penalty(pts3, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items3Points, 1999, 2016, 1, 8,  pts3, baseAnswers, correctAnswers, penalty(pts3, baseAnswers.length-1), basePath + "maluch/", startYearMal );

generateItems( items4Points, 1993, 1995, 11, 20, pts4, baseAnswers, correctAnswers, penalty(pts4, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items4Points, 1996, 1997, 10, 18, pts4, baseAnswers, correctAnswers, penalty(pts4, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items4Points, 1998, 1998, 8,  14, pts4, baseAnswers, correctAnswers, penalty(pts4, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items4Points, 1999, 2016, 9,  16, pts4, baseAnswers, correctAnswers, penalty(pts4, baseAnswers.length-1), basePath + "maluch/", startYearMal );

generateItems( items5Points, 1993, 1995, 21, 30, pts5, baseAnswers, correctAnswers, penalty(pts5, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items5Points, 1996, 1997, 19, 25, pts5, baseAnswers, correctAnswers, penalty(pts5, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items5Points, 1998, 1998, 15, 21, pts5, baseAnswers, correctAnswers, penalty(pts5, baseAnswers.length-1), basePath + "maluch/", startYearMal );
generateItems( items5Points, 1999, 2016, 17, 24, pts5, baseAnswers, correctAnswers, penalty(pts5, baseAnswers.length-1), basePath + "maluch/", startYearMal );

allItems["maluch"] = [ items3Points, items4Points, items5Points ];


items3Points = new Array();
items4Points = new Array();
items5Points = new Array();

generateItems( items3Points, 2001, 2011, 1, 6, pts3, baseAnswers4, correctAnswersZak, penalty(pts3, baseAnswers4.length-1), basePath + "zaczek/", startYearZak );
generateItems( items3Points, 2012, 2016, 1, 7, pts3, baseAnswers, correctAnswersZak, penalty(pts3, baseAnswers.length-1), basePath + "zaczek/", startYearZak );

generateItems( items4Points, 2001, 2011, 7, 12, pts4, baseAnswers4, correctAnswersZak, penalty(pts4, baseAnswers4.length-1), basePath + "zaczek/", startYearZak );
generateItems( items4Points, 2012, 2016, 8, 14, pts4, baseAnswers, correctAnswersZak, penalty(pts4, baseAnswers.length-1), basePath + "zaczek/", startYearZak );

generateItems( items5Points, 2001, 2011, 13, 18, pts5, baseAnswers4, correctAnswersZak, penalty(pts5, baseAnswers4.length-1), basePath + "zaczek/", startYearZak );
generateItems( items5Points, 2012, 2015, 15, 21, pts5, baseAnswers, correctAnswersZak, penalty(pts5, baseAnswers.length-1), basePath + "zaczek/", startYearZak );

allItems["zaczek"] = [ items3Points, items4Points, items5Points ];


