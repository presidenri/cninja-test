// Create 2-dimensioanl array with 11 rows and 10 columns.
const twoDimArray = new Array(11).fill(0).map(() => new Array(10).fill(0));

function mark2DimArray(arr, inArray = 0, outArray = 0, dRange = 0) {
    dArray = arr
    // Center
    // dArray[4][4] = 1;

    // dArray[4][3] = 1;
    // dArray[4][2] = 1;
    // dArray[4][5] = 1;
    // dArray[4][6] = 1;

    dArray[outArray][inArray] = 1;
    for (var i = 1; i <= dRange; i++) {
        dArray[outArray][inArray - i] = 1;
        dArray[outArray][inArray + i] = 1;
    }

    // Above
    // dArray[3][4] = 1;
    // dArray[3][3] = 1;
    // dArray[3][5] = 1;

    // dArray[2][4] = 1;

    for (var j = 1; j <= dRange; j++) {
        var newRange = dRange - j;
        var newOutArray = outArray - j
        dArray[newOutArray][inArray] = 1;
        for (var i = 1; i <= newRange; i++) {
            dArray[newOutArray][inArray - i] = 1;
            dArray[newOutArray][inArray + i] = 1;
        }
    }
    // Below
    // dArray[5][4] = 1;
    // dArray[5][3] = 1;
    // dArray[5][5] = 1;

    // dArray[6][4] = 1;

    for (var j = 1; j <= dRange; j++) {
        var newRange = dRange - j;
        var newOutArray = outArray + j
        dArray[newOutArray][inArray] = 1;
        for (var i = 1; i <= newRange; i++) {
            dArray[newOutArray][inArray - i] = 1;
            dArray[newOutArray][inArray + i] = 1;
        }
    }

    // print formated array
    console.log(JSON.stringify(dArray)
        .replace(/(\[\[)(.*)(\]\])/g, '[\n  [$2]\n]').replace(/],/g, '],\n  ')
    );
}

mark2DimArray(twoDimArray, 5, 5, 4)
