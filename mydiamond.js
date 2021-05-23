// Create 2-dimensioanl array with 11 rows and 10 columns.
const twoDimArray = new Array(11).fill(0).map(() => new Array(10).fill(0));

function mark2DimArray(arr, innerArr = 0, outerArr = 0, diamondRange = 0) {
    var diamondArray        = arr;
    var diamondTotalLength  = (diamondRange * 2) + 1;

    if (diamondTotalLength > diamondArray[0].length) {
        console.log("Diamond range is too long");
        return;
    }

    if (innerArr + diamondRange + 1 > diamondArray[0].length || innerArr - diamondRange < 0) {
        console.log("Inner range in the center is out of range");
        return;
    }

    // Mark elements in the center array
    diamondArray[outerArr][innerArr] = 1;
    for (var i = 1; i <= diamondRange; i++) {
        diamondArray[outerArr][innerArr - i] = 1;
        diamondArray[outerArr][innerArr + i] = 1;
    }

    // Mark the elements in before and after the center array
    for (var j = 1; j <= diamondRange; j++) {
        var newRange        = diamondRange - j;
        var beforeOuterArr  = outerArr - j;
        var afterOuterArr   = outerArr + j;

        if (beforeOuterArr < 0 || afterOuterArr + 1 > diamondArray.length) {
            console.log("Outer array out of range");
            return;
        }

        diamondArray[beforeOuterArr][innerArr] = 1;
        diamondArray[afterOuterArr][innerArr]  = 1;

        for (var i = 1; i <= newRange; i++) {
            diamondArray[beforeOuterArr][innerArr - i] = 1;
            diamondArray[beforeOuterArr][innerArr + i] = 1;
            diamondArray[afterOuterArr][innerArr - i]  = 1;
            diamondArray[afterOuterArr][innerArr + i]  = 1;
        }
    }

    // print formated array
    console.log(JSON.stringify(diamondArray)
        .replace(/(\[\[)(.*)(\]\])/g, '[\n  [$2]\n]').replace(/],/g, '],\n  ')
    );
}

mark2DimArray(twoDimArray, 4, 4, 4)
