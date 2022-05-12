let arr = [];
let x = 'X';
let o = 'O';
let count = 1;
Arr();
table();




function table() {
    let table = document.getElementById("table");
    let tbl = '';
    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tbl += `<td  onclick="Click(${i},${j})" >  ${arr[i][j] == undefined ? "" : arr[i][j]} </td>`;
        }
        tbl += `</tr>`;
    }

    table.innerHTML = tbl;
};



function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}

function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        }
        count++;
        table();
        Check();
    }
}


function Check() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            alert("uddun");
        }
    };

    for (let j = 0; j < 3; j++) {
        if (arr[0][j] !== undefined && arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]) {
            alert("uddun");
        }
    };




    for (let j = 0; j < 3; j++) {
        if (arr[0][0] !== undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            alert("uduunuz");
        }
    };



    for (let i = 0; i < 3; i++) {
        if (arr[0][2] !== undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
            alert("uduunuz")

        }
    };

    for (let i = 0; i < 3; i++) {
        if ( arr[0][0] !== undefined && arr[0][1] !== undefined && arr[0][2] !== undefined && arr[1][0] !== undefined && arr[1][1] !== undefined && arr[1][2] !== undefined &&
            arr[2][0] !== undefined && arr[2][1] !== undefined && arr[2][2] !== undefined )     {
                alert("berabere qaldiniz")
            }
    }

}
