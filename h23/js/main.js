// 1
var someText = "Lorem ipsum dolor /completed by Dima Andriychack\\ sit amet, consectetur adipisicing elit. Libero at distinctio fugit illum excepturi suscipit sed fuga quo eum quis, laborum odio aspernatur officia voluptatibus quae nulla voluptas dolores repudiandae nesciunt nemo accusamus. Aliquid tenetur ipsum dolorum quis beatae quisquam, dolor illo tempore soluta totam nesciunt! Id non minus optio quo, vitae sed cupiditate dolore repellat harum necessitatibus deserunt, molestias numquam distinctio cum? Aut sint dolore perspiciatis tempora iusto distinctio rerum excepturi ipsum quibusdam  laborum deleniti eos, non adipisci necessitatibus eum est dicta eligendi, autem ducimus accusantium ut. Dignissimos dolorum libero culpa. Fugiat rerum at labore, fuga aliquid consequuntur qui sequi, hic, expedita, architecto necessitatibus vitae vero. Dicta sit beatae natus aspernatur laudantium quos rem quas, molestias quidem fugit odit minus quam rerum veritatis id iure, iste saepe cupiditate"
while(someText.length>=140){
  someText.splice(140, someText.length - 140, '...');
};
console.log(someText);
// 2
var str = "не старайся бути кращим за інших старайся бути кращим за себе вчорашнього";
function titleCase(str) {
  return str.split(' ').map(function(val){
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
  }).join(' ');
};
console.log(titleCase(str));
// 3
function nomats(txt) {
  return txt.split(' ').map(function(val){
    if (val == bad){
       val = "******";
       return val;
} else {
   return val
}
  }).join(' ');
};
console.log(nomats(txt));
