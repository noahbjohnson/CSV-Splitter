var csvRows = [];

function upload() {
    'use strict';
    csvRows = [];
    var first = true,
        source = document.getElementById('sourceFile');
    if (document.getElementById('header').value === "Yes") {
        first = true;
    } else {
        first = false;
    }
    $('#loading').modal('show')
    Papa.parse(source.files[0], {
        header: first,
        step: function (row) {
            csvRows.push(row.data);           document.getElementById('rowsLoaded').innerHTML = csvRows.length;
        },
        complete: function () {
            showStepTwo();
            console.log("All done!");
            $('#loading').modal('hide');
        }
    });

}

function showStepTwo() {
    'use strict';
    document.getElementById('stepTwo').removeAttribute('hidden');
    setTimeout(
        function () {
            document.getElementById('linesLoaded').innerHTML = csvRows.length;
        },
        25
    );
}

function showStepThree() {
    'use strict';

    document.getElementById('stepThree').removeAttribute('hidden');

    switch (document.getElementById('splitOption').value) {
        case "Max Rows":
            console.log('Max rows');

            break;
        case "Number of Files":
            console.log('Files');
            break;
        case "Ratio":
            console.log('Ratio');
            break;
    }
}



// Verification functions
function fileSelected() {
    'use strict';
    var file = document.getElementById('sourceFile').files[0],
        type = file.type;
    console.log(file);
    if (type !== 'text/csv') {
        console.log('error, incorrect file type');
        alert('Please select a file with the extension: CSV');

        document.getElementById('sourceFile').value = null;
    } else {
        document.getElementById('uploadButton').removeAttribute('disabled');
    }
}
