'use strict';

{
    function createColumn(col) {
        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }

        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        return column;
    }

    const columns = []
    for (let i = 0; i < 5; i++) {
        columns[i] = createColumn(i);
    }

    columns[2][2] = 'FREE';

    console.table(columns);

    const bingo = [];

    for (let row = 0; row < 5; row++){
        bingo[row] = [];
        for (let col = 0; col < 5; col++) {
            bingo[row][col] = columns[col][row];
        }
    }

    console.table(bingo)

    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.textContent = bingo[row][col];
            tr.appendChild(td);
        }
        document.querySelector('tbody').appendChild(tr);
    }
}