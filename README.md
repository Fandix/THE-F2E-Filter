# 使用React.js實現一個小型的觀光網站
以THE-F2E中的題目作為React+Redux的練習，資料部分是使用axios來達到非同步請求網路數據的功能，篩選的狀態則由原本的React State更改為使用Redux來統一管理篩選數據的條件，
將React的Component劃分為負責處理數據的Container Components和負責選染UI的Presentational Components，將兩種組件分開管理以方便之後的維護與更改。

# Demo
![](https://ithelp.ithome.com.tw/upload/images/20200630/20124767d63EcKelZi.png)

Live URL : https://the-f2-e-filter-qf2g3998p.now.sh/
設計稿 : https://hexschool.github.io/THE_F2E_Design/week2-filter/?fbclid=IwAR3bp2JmF-F6cmopDn35_sW1jmUeojsV6fAbS47F55BYouLmx5UFQO-1iVQ

# 在此專案中使用了那些技術
1. React.js
2. Redux
3. React-Router-Dom
4. axios 非同步請求網路數據 (Get)
5. react-media 使用react的API 達到RWD不同的Component
6. react-transition-group 在React Component之間的轉換動畫
7. css RWD
8. css module
9. css flexbox

# 安裝
1. clone 此專案
2. Run `yarn start`

