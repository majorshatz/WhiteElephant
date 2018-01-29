var shown=0;
var currentPlayer=1;
function add(){
    if (shown<9) {
        shown++;
        if (shown == 1) {
            document.getElementById('p1').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pOne').style.display = "inline";
        }
        else if (shown == 2) {
            document.getElementById('p2').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pTwo').style.display = "inline";
        }
        else if (shown == 3){
            document.getElementById('p3').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pThree').style.display = "inline";
            }
        else if (shown==4){
            document.getElementById('p4').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pFour').style.display = "inline";
            }
        else if (shown==5){
            document.getElementById('p5').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pFive').style.display = "inline";
            }
        else if (shown==6){
            document.getElementById('p6').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pSix').style.display = "inline";
            }
        else if (shown==7){
            document.getElementById('p7').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pSeven').style.display = "inline";
            }
        else if (shown==8){
            document.getElementById('p8').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pEight').style.display = "inline";
            }
        else if (shown==9){
            document.getElementById('p9').innerHTML=prompt("Insert new user's name: ", "name");
            document.getElementById('pNine').style.display = "inline";
            }
        }
}
function remove() {
    if (shown > 0) {
        if (shown == 1) {
            document.getElementById('pOne').style.display = "none";
        }
        if (shown == 2) {
            document.getElementById('pTwo').style.display = "none";
        }
        if (shown == 3) {
            document.getElementById('pThree').style.display = "none";
        }
        if (shown == 4) {
            document.getElementById('pFour').style.display = "none";
        }
        if (shown == 5) {
            document.getElementById('pFive').style.display = "none";
        }
        if (shown == 6){
            document.getElementById('pSix').style.display = "none";
        }
        if (shown == 7) {
            document.getElementById('pSeven').style.display = "none";
        }
        if (shown == 8) {
            document.getElementById('pEight').style.display = "none";
        }
        if (shown == 9) {
            document.getElementById('pNine').style.display = "none";
        }
        shown--;
    }
}
function newGift(){
     if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=prompt("Insert new gift name","gift");
        }
    else if (document.getElementById('i9').value=="")
        {
            document.getElementById('i9').value=prompt("Insert new gift name","gift");
        }
}


function stealGift1(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
    else if (document.getElementById('i9').value=="")
        {
            document.getElementById('i9').value=document.getElementById('i1').value;
            document.getElementById('i1').value="";
        }
}
function stealGift2(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   document.getElementById('i9').value=document.getElementById('i2').value;
            document.getElementById('i2').value="";
        }
}

function stealGift3(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i3').value;
            document.getElementById('i3').value="";
        }
}

function stealGift4(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i4').value;
            document.getElementById('i4').value="";
        }
}

function stealGift5(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i5').value;
            document.getElementById('i5').value="";
        }
}

function stealGift6(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i6').value;
            document.getElementById('i6').value="";
        }
}
function stealGift7(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i8').value=="")
        {
            document.getElementById('i8').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i7').value;
            document.getElementById('i7').value="";
        }
}
function stealGift8(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
    else if (document.getElementById('i9').value=="")
        {   
            document.getElementById('i9').value=document.getElementById('i8').value;
            document.getElementById('i8').value="";
        }
}

function stealGift9(){
    //Move gift document.getElementById from the line the button clicked s1 = player1 to currentPlayer;
    //Change currentPlayer to player that was stolen from;
    //Version 2 will have array that keeps track of what items have been stolen more than once. Maybe prompt makes item class and at 3 stealls it can no longer be stolen.
    if (document.getElementById('i1').value=="")
        {
            document.getElementById('i1').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i2').value=="")
        {
            document.getElementById('i2').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i3').value=="")
        {
            document.getElementById('i3').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i4').value=="")
        {
            document.getElementById('i4').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i5').value=="")
        {
            document.getElementById('i5').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i6').value=="")
        {
            document.getElementById('i6').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i7').value=="")
        {
            document.getElementById('i7').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
    else if (document.getElementById('i8').value=="")
        {   
            document.getElementById('i8').value=document.getElementById('i9').value;
            document.getElementById('i9').value="";
        }
}
function pin1()
{document.getElementById('size1').innerHTML=document.getElementById('i1').value.length+1;}
function pin2()
{document.getElementById('size2').innerHTML=document.getElementById('i2').value.length+1;}
function pin3()
{document.getElementById('size3').innerHTML=document.getElementById('i3').value.length+1;}
function pin4()
{document.getElementById('size4').innerHTML=document.getElementById('i4').value.length+1;}
function pin5()
{document.getElementById('size5').innerHTML=document.getElementById('i5').value.length+1;}
function pin6()
{document.getElementById('size6').innerHTML=document.getElementById('i6').value.length+1;}
function pin7()
{document.getElementById('size7').innerHTML=document.getElementById('i7').value.length+1;}
function pin8()
{document.getElementById('size8').innerHTML=document.getElementById('i8').value.length+1;}
function pin9()
{document.getElementById('size9').innerHTML=document.getElementById('i9').value.length+1;}
