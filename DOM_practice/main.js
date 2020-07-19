'use strict';

{
  // const update = () => {
  //   document.querySelector('h1').textContent = 'Changed';
  //   // document.querySelector('#target').textContent = 'Changed';
  //   document.querySelectorAll('p').forEach((p, index) => {
  //     p.textContent = `${index}番目のpです`;
  //   })
  //   const titleNode = document.getElementById('target');
  //   titleNode.textContent = 'Changed';
  //   titleNode.title = 'This is title.';
  //   // titleNode.style.color = 'red';
  //   // titleNode.style.backgroundColor = 'skyblue';
  //   titleNode.className = 'my-color';
  // }

  document.querySelector('button').addEventListener('click', () => {
    // const item2 = document.createElement('li');
    // item2.textContent = 'item 2';

    // const ulNode = document.querySelector('ul');
    // ulNode.appendChild(item2);

    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);

  })
}