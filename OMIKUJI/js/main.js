'use strict';

{
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    btn.textContent = omikuji();
  })

  const omikuji = () => {
    const omikujiList = ['大吉', '中吉', '小吉', '吉' ,'凶'];
    const randomIndex = Math.floor(Math.random() * omikujiList.length);
    return omikujiList[randomIndex];
  }
}