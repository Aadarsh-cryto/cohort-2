  var arr = [
    {
        team:'RCB',
     primary:'red',
     secondary:'black'
    },
    {
        team:'CSK',
     primary:'yellow',
     secondary:'yellowgreen'

    },
    {
        team:'KKR',
     primary:'purple',
     secondary:'gold'
    },
    {
        team:'Raj',
     primary:'pink',
     secondary:'blue'
    },
    {
        team:'SRH',
     primary:'orange',
     secondary:'black'
    },
    {
        team:'PUN',
     primary:'red',
     secondary:'silver'
    }
  ]
  // console.log(arr[2].team);
  //  var a = Math.floor(Math.random()*arr.length);
  //  console.log(arr[a]);
    var h1 = document.querySelector('h1');
var btn = document.querySelector('button');
var main = document.querySelector('main')
  
 btn.addEventListener('click',function(){
var num = Math.floor(Math.random()*arr.length);
// console.log(num);
// console.log(arr[num]);
// console.log(arr[num].team);
// console.log(arr[num].primary);
// console.log(arr[num].secondary);
h1.innerHTML = arr[num].team;

h1.style.color = arr[num].secondary;
main.style.backgroundColor = arr[num].primary;
 


 })