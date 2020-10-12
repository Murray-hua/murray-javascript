
let mya = document.querySelectorAll('#mynav a');
// mya[2].classList.add('active')
// console.log( location.href );
// console.log(mya[0].href);

let currHref = location.href;
for (let i = 0; i < mya.length; i++) {
    if (mya[i].href == currHref) {
        mya[i].classList.add("active")
    }
}
