'use strict';

{
    const today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth();

    function getCalenderHead() {
        const dates = [];
        const d = new Date(year, month, 0).getDate();
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true
            })
        }
        return dates;
    }

    function getCalenderTail() {
        const dates = [];
        const n = 7 - new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < n; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true
            })
        }
        return dates;
    }

    function getCalenderBody() {
        const dates = [];
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }

        if (year === today.getFullYear() && month === today.getMonth()){
            dates[today.getDate() - 1].isToday = true;
        }

        return dates;
    }

    function clearCalender() {
        const tbody = document.querySelector('tbody');
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild)
        }
    }

    function renderTitle() {
        const title = document.getElementById('title');
        title.textContent = year + '/' + String(month+1).padStart(2, '0');
    }

    function renderWeeks() {
        const dates = [
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail()
        ]

        const weeks = [];
        const weekCount = dates.length / 7;

        for (let i = 0; i < weekCount; i++) {
            weeks.push(dates.splice(0, 7))
        }
        console.log(weeks);

        weeks.forEach(week => {
            const tr = document.createElement('tr');
            week.forEach(date => {
                const td = document.createElement('td');
                td.textContent = date.date;
                if (date.isToday) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disabled')
                }

                tr.appendChild(td);
            })
            document.querySelector('tbody').appendChild(tr);
        })
    }

    function createCalender() {
        clearCalender();
        renderTitle();
        renderWeeks();
    }

    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        createCalender();
    })
    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        createCalender();
    })

    document.getElementById('today').addEventListener('click', () => {
        month = today.getMonth();
        year = today.getFullYear();
        createCalender();
    })

    createCalender();
}