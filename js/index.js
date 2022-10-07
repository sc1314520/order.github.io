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
    var fn=document.getElementById("filterName");
    var img=document.getElementsByTagName("img");
    var name=document.getElementsByClassName("name");
    var score=document.getElementsByClassName("score");
    var money=document.getElementsByClassName("money");
    var intro =document.getElementsByClassName("intro");
    var obj=[];
    var high=[];
    var bys = [];
    var bym=[];
    for(r=0;r<content.length;r++){
        obj[r]={
            "index":r,
            //"image":"images/"+img[r].src.split("/")[4], //<-- 下載後使用
            "image":"images/"+img[r].src.split("/")[5], // <-- github pages
            "name":name[r].innerHTML,
            "intro":intro[r].innerHTML,
            "score":score[r].innerHTML,
            "money":money[r].innerHTML
        }
        high[r]=Number.parseFloat(score[r].innerHTML) ;
        bys[r]=[obj[r]];
        bym[r]=[obj[r]];
    }
    bys.sort(function(o1,o2){
        return parseFloat(o2[0].score)-parseFloat(o1[0].score);
    });
    bym.sort(function(o1,o2){
        return parseInt(o2[0].money.split(' ')[1].split(",")[0]+o2[0].money.split(' ')[1].split(",")[1])
        -parseInt(o1[0].money.split(' ')[1].split(",")[0]+o1[0].money.split(' ')[1].split(",")[1]);
    });
    console.log(bym);
    one.onclick=function(){  
        set(bym,"依照價格");
    };
    two.onclick=function(){
        set(bys,"依照評分");
    };
    function set(m,str){
        for(var i=0;i<m.length;i++){
            img[i].src=m[i][0].image;
            name[i].innerHTML=m[i][0].name;
            score[i].innerHTML=m[i][0].score;
            money[i].innerHTML=m[i][0].money;
            intro[i].innerHTML=m[i][0].intro;
        }
        fn.innerHTML=str;
    }
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