window.onload=function(){
    var button=document.getElementsByClassName("button")[0];
    var line=document.getElementsByClassName("line")[0];
    var h1=document.getElementsByTagName("h1")[0];
    var flag=0;

    //模拟按钮效果
    button.addEventListener("mousedown",function(){
        this.style.background="#4469e7"
    })
    button.addEventListener("mouseup",function(){
        this.style.background="none";
    })

    //点击变换效果
    button.addEventListener("click",function(){
        if(flag%2==0){
            line.style.width=150+"px";
            h1.style.color="#4469e7";
            flag++;
        }else if(flag%2==1){
            line.style.width=0+"px";
            h1.style.color="black";
            flag++;
        }
    })
}