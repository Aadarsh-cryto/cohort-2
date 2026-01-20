// chota code kaise bhi like lo bade code ko guideline mein likhenge 
// hame maodular ,scalable, maintaable ,easy to read , easy to manage iskw liye ham oops ke paradigm 
// ka use krte h mtlb ham isse objects classes and function mein thod dete h

class Bottle{
    // jb bhi ham class chalate h constryctor chlta h 
    constructor() {
            //default value set krna use hota h
            this.color = "blue";
            this.material = "plastic"
    }
    fill(){}
    drink () {}
}

  let a = new Bottle();


// new ek blank object h iss class ka naam likte ho class chal jati h phir constructor chal jata h
// this ka mtlb wahin blank object ussi this ke nadr color naam ki property bni and uski value blue ho gayi
// class Bottle { ... }
// JavaScript reads the class.

// No object is created yet.

// Methods inside the class:

// constructor()

// fill()

// drink()

// 👉 Nothing executes yet, only definition happens.

// new Bottle() means:

// Create a new empty object

// Call the constructor automatically
// constructor() {
//     this.color = "blue";
//     this.material = "plastic";
// }
// this refers to the new object a

// Properties are assigned:
// a.color = "blue";
// a.material = "plastic";
// Object Stored in Variable a
// a = {
//   color: "blue",
//   material: "plastic",
//   fill: function() {},
//   drink: function() {}
// }


// itne sare variable banane ki jagh ek obj banao uske andr properties liokh do
// construcyor ke andr jo bhi woh obj ke khud ka hoga and 3 bar new kiya kiya toh sbka apna chaar hoga color
// hoga teeno ke paas speak and walk nahi hoga woh shared hoga

// class Sketch{
//     constructor(){
//         this.character = "doremon";
//         this.color = "blue";
//     }
//     speak(){}
//     walk(){}
// }


// this ek special keyword hota h lyuli this ki avlue bdl jati h likhte time decider nahi hoti chalne waqt decide hoti h

// global mein this ki value window h
// console.log(this);
// function mein window
// function abcd(){
//     console.log(this);
// }
// abcd();
//  es5fun inside a obj is obj
// let obj = {
//     func: function(){
//         console.log(this);
//     },
// };
// obj.func();
// es6fun inside a obj is window 
// let obj = {
//     func: ()=>{
//        console.log(this);
//     },
// };
// obj.func();
// es5 fun inside es5 fun inside obj is window
// let obj = {
//     fnc: function(){
//         function ancd(){
//             console.log(this);
//         }
//         ancd();
//     },
// };
// obj.fnc();

// es6 fnc inside es5 fun inside a obj is obj
// let obj = {
//     fnc : ()=>{
//         function abcd(){
//             console.log(this);
//         }
//         abcd();
//     },
// };
// obj.fnc();


// call apply bind
// ek fnc mein this ki value window hoti h agar aap chahate ho woh value window na ho toh  koi aur obj ho
// tb app use krte ho call apply bind ka 
// let obj = {
// name:"harsh",
// };

// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);
// call mein obj ko call krte h

// 

// let obj2 = {
// name:"harsh",
// };

// function abcd(a,b,c,d){
//     console.log(this,a,b,c,d);
// }
// abcd.apply(obj2,[1,2,3,4]);

let obj = {
name:"harsh",
};

function abcd(a,b,c,d){
    console.log(this,a,b,c,d);
}
 let nfc = abcd.bind(obj, 1 ,2,3,4);

//ye h aapko naya fnc dega jsime this value obj hogi jo store hoga nfx mein

nfc();



// call fnc chalta h amd this ki value set krta h 
// apply wahin krta h jo call krta h and arguments phli value this ki hoti h and dusri value arrY ki hoti h
//bind wahin krta h jo call krta h and aapko naya fnc deta h
