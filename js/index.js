window.onload=function(){
    var content =document.getElementsByClassName("content");
    var check =document.getElementsByTagName("input");
    var btn =document.getElementById("ready");
    var btn2 =document.getElementById("reset");
    var how =document.getElementById("how");
    var x=0;
    content[0].pro=[0,1,2];
    content[1].pro=[1,2,3];
    content[2].pro=[2,3,4];
    content[3].pro=[3,4,5];
    content[4].pro=[4,5];
    btn.onclick=function(){
        btn.setAttribute('style','display:none');
        btn2.setAttribute('style','display:block');
        for(var z=0;z<content.length;z++){
            content[z].setAttribute('style','display:none');
        }
        for(var k=0;k<=5;k++){
            cert(k,k);
        }
        for(var s=0;s<content.length;s++){
            console.log(content[s].getAttribute('style'));
            if(content[s].getAttribute('style')=='display:flex'){
                x++;
            }
        }
        how.innerHTML=" "+x+" ";

    }
    btn2.onclick=function(){
        how.innerHTML=" 5 ";
        x=0;
        btn.setAttribute('style','display:block');
        btn2.setAttribute('style','display:none;');
        for(var z=0;z<content.length;z++){
            content[z].setAttribute('style','display:flex');
        }
        for(m=0;m<check.length;m++){
            check[m].checked=false;
        }
    }
    function cert(index,num){
        if(check[index].checked){
            for(var i=0;i<content.length;i++){
                for(var j=0;j<content[i].pro.length;j++){
                    if(content[i].pro[j]==num){
                        content[i].setAttribute('style','display:flex');
                    }
                }
            }
        }
    }
    var one =document.getElementById("one");
    var two =document.getElementById("two");
    var obj=[];
    var high=[];
    for(r=0;r<content.length;r++){
        obj[r]={
            //"image":"images/"+document.getElementsByTagName("img")[r].src.split("/")[4],
            "image":document.getElementsByTagName("img")[r].src;
            "name":document.getElementsByClassName("name")[r].innerHTML,
            "location":document.getElementsByClassName("intro")[r].innerHTML,
            "score":document.getElementsByClassName("score")[r].innerHTML,
            "money":document.getElementsByClassName("money")[r].innerHTML
        }
        high[r]=Number.parseFloat(document.getElementsByClassName("score")[r].innerHTML) ;
    }
    console.log(obj);
    var fn=document.getElementById("filterName");
    one.onclick=function(){
        var m =[2,1,3,0,4];
        var img=document.getElementsByTagName("img");
        var name=document.getElementsByClassName("name");
        var score=document.getElementsByClassName("score");
        var money=document.getElementsByClassName("money");
        //2,1,3,0,4
        for(var i=0;i<m.length;i++){
            img[i].src=obj[m[i]].image;
            name[i].innerHTML=obj[m[i]].name;
            score[i].innerHTML=obj[m[i]].score;
            money[i].innerHTML=obj[m[i]].money;
        }
        fn.innerHTML="依照價格";
    };
    two.onclick=function(){
        var m =[0,4,3,1,2];
        var img=document.getElementsByTagName("img");
        var name=document.getElementsByClassName("name");
        var score=document.getElementsByClassName("score");
        var money=document.getElementsByClassName("money");
        //0,4,3,1,2
        for(var i=0;i<m.length;i++){
            img[i].src=obj[m[i]].image;
            name[i].innerHTML=obj[m[i]].name;
            score[i].innerHTML=obj[m[i]].score;
            money[i].innerHTML=obj[m[i]].money;
        }
        fn.innerHTML="依照評分";
    };
    


    
};
$(document).ready(function () {
    $('.check-title').click(function (event) {
        event.preventDefault();
        $('.check-list').toggleClass("hide");
      });
    $('.filter').click(function (event) {
        event.preventDefault();
        $('.filter-text').toggleClass("show");
      });
});