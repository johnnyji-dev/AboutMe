// let pos0 = document.getElementsByClassName("cube")[0];
// let pos0 = document.getElementsByClassName("aboutme")[0];
let pos0 = document.getElementsByClassName("aboutme")[0];
const rect0 = pos0.getBoundingClientRect();
console.log(rect0);
const xPosition0 = rect0.left;
const yPosition0 = rect0.top + (rect0.height / 2);
console.log('Cube0-Position (x, y):', xPosition0, yPosition0);


// let pos1 = document.getElementsByClassName("cube")[1];
let pos1 = document.getElementsByClassName("projects")[0];
const rect1 = pos1.getBoundingClientRect();
console.log(rect1);
const xPosition1 = rect1.left;
const yPosition1 = rect1.top;
// console.log('Cube1-Position (x, y):', xPosition1, yPosition1);


// let pos2 = document.getElementsByClassName("cube")[2];
let pos2 = document.getElementsByClassName("skills")[0];
const rect2 = pos2.getBoundingClientRect();
console.log(rect2);
const xPosition2 = rect2.left;
const yPosition2 = rect2.top;
// console.log('Cube2-Position (x, y):', xPosition2, yPosition2);


// let pos3 = document.getElementsByClassName("cube")[3];
let pos3 = document.getElementsByClassName("contacts")[0];
const rect3 = pos3.getBoundingClientRect();
console.log(rect3);
const xPosition3 = rect3.left;
const yPosition3 = rect3.top;
// console.log('Cube3-Position (x, y):', xPosition3, yPosition3);


document.querySelector("#myBody").addEventListener("mousemove", function (event) {
    // console.log("mousemove!");
    // console.log(event)
    // let x = event.offsetX;
    // let y = event.offsetY;
    let x = event.screenX;
    let y = event.screenY;
    /*
        이벤트가 일어난 좌표를
        "x 좌표:100 y좌표:200" 형식의 문자열로 만들어서
        위의 div의 innerText로 출력해보세요
    */
    //    document.querySelector("#posRlt").innerText = "x 좌표:"+x+"y 좌표:"+y;
    console.log("x 좌표:" + x + ", y 좌표:" + y);
});