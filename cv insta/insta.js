/*

Full-page view:

https://codepen.io/GeorgePark/full/VXrwOP/

*/

// const posts = document.querySelectorAll('.gallery-item');

// posts.forEach(post => {
// 	post.addEventListener('click', () => {
// 		//Get original image URL
// 		const imgUrl = post.firstElementChild.src.split("?")[0];
// 		//Open image in new tab
// 		window.open(imgUrl, '_blank');
// 	});
// });

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("texte copier: " + copyText.value);
} 

function myFunction2() {
  /* Get the text field */
  var copyText = document.getElementById("myInput2");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("texte copier: " + copyText.value);
} 