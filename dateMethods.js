// 1. new Date()
console.log(new Date());

// 2. Date.parse()
let v= Date.parse('June 24, 2020');
console.log(v);


// 3. Date.UTC()
let y= Date.UTC(2020, 06, 20);
console.log(y);


// 4. getDate()
console.log(new Date(2021-01-11).getDate());

// 5. getMonth()
console.log(new Date(2021-01-11).getMonth());

// 6. getFullYear()
console.log(new Date(2021-01-11).getFullYear());

// 7. getDay()
console.log(new Date(2021-01-11).getDay());

// 8. getHours()
console.log(new Date().getHours());

// 9. getMinutes()
console.log(new Date().getMinutes());

// 10. getSeconds()
console.log(new Date().getSeconds());

// 11. getMilliseconds()
console.log(new Date().getMilliseconds());

// 12. setDate()
let a= new Date().setDate(20)
console.log(new Date(a));

// 13. setMonth()
let c= new Date().setMonth(10)
console.log(new Date(c));

// 14. setFullYear()
let d= new Date().setFullYear(2020)
console.log(new Date(d));

// 15. setHours()
let b= new Date().setHours(10)
console.log(new Date(b));

// 16. setMinutes()
let e= new Date().setMinutes(50)
console.log(new Date(e));

// 17. setSeconds()
let f= new Date().setSeconds(45)
console.log(new Date(f));

// 18. setMilliseconds()
let g= new Date().setMilliseconds(20)
console.log(new Date(g));

// 19. toDateString()
let z= new Date().toDateString()
console.log(z);

// 20. toLocaleDateString()
let q= new Date().toLocaleDateString()
console.log(q);

// 21. toTimeString()
let o= new Date().toTimeString()
console.log(o);

// 22. toLocaleTimeString()
let m= new Date().toLocaleTimeString()
console.log(m);

// 23. getUTCDate()
console.log(new Date().getUTCDate());

// 24. getUTCDay()
console.log(new Date().getUTCDay());

// 25. getUTCFullYear()
console.log(new Date().getUTCFullYear());

// 26. getUTCHours()
console.log(new Date().getUTCHours());

// 27. getUTCMinutes()
console.log(new Date().getUTCMinutes());

// 28. getUTCSeconds()
console.log(new Date().getUTCSeconds());

// 29. getUTCMilliseconds()
console.log(new Date().getUTCMilliseconds());

// 30. setUTCDate()
let h= new Date().setUTCDate(12)
console.log(new Date(h));

// 31. setUTCFullYear()
let i= new Date().setUTCFullYear(2025)
console.log(new Date(i));

// 32. setUTCHours()
let j= new Date().setUTCHours(10)
console.log(new Date(j));

// 33. setUTCMinutes()
let k= new Date().setUTCMinutes(40)
console.log(new Date(k));

// 34. setUTCSeconds()
let l= new Date().setUTCSeconds(58)
console.log(new Date(l));

// 35. setUTCMilliseconds()
let r= new Date().setUTCMilliseconds(12)
console.log(new Date(r));
