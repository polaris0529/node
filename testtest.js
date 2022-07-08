// let dungeonCnt = Math.floor(Math.random() * 10);

function makeNum (par1,par2){

    let num;

    if( par1 && par2 ) num = Math.floor(Math.random() * (par2 - par1) + 1)
    else if(par1) num = Math.floor(Math.random() * par1 + 1)
    else num = Math.floor(Math.random() * 10 + 1 );

    return num;
}


let dungeon = [];
let dungeonCnt = makeNum(1,8);

for(var i = 0; i < dungeonCnt; i++){

    var arr = [];
    arr[0] = makeNum();
    arr[1] = makeNum(arr[0]);
    dungeon.push(arr);

}

//console.log(dungeon);

// let dungeon = [];

// console.log(dungeonCnt);



// function solution () {

//     let dungeonCnt  = makeNum(1,8);

//     function makeNum (par1,par2){

//         let num = Math.floor(Math.random() * 10);

//         while( num >= par1 && num <= par2){
//             console.log(num)
//             num = Math.floor(Math.random() * 10);
//         }
//     }

// }
