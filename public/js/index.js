
//下拉菜单
$(".item").mouseover(function(){
$(this).siblings(".menu").show()
$(this).css("background","red").parent().siblings().children(".item").css({
        background:"none"
    })
})
$(".item").mouseout(function(){
$(this).siblings(".menu").hide()
$(this).css({
        background:"none"
    })

})
$(".item").siblings(".menu").mouseover(function(){
$(this).show().siblings().css("background","red")
})
$(".item").siblings(".menu").mouseout(function(){
$(this).hide().siblings().css("background","none")
})

$(".broadsideNav").children("ul").children("li").mouseover(function(){

$(this).children("a").css("display","block").parent().siblings().children("a").css("display","none")
})
$(".broadsideNav").children("ul").children("li").mouseout(function(){

$(this).children("a").css("display","none")
})
//轮播图
$(".banner1").banner({
items:$(".banner1 .imgbox").children(),
left:$(".banner2 #left"),
right:$(".banner2 #right"),
list:true,
autoPlay:true
});
//商品划过
    $(".title1").children("dd").mouseover(function(){
        $(this).css({background:"red"})
    })
    $(".title1").children("dd").mouseout(function(){
        $(this).css({background:"none"})
    })
    $(".title2").children("dd").mouseover(function(){
        $(this).css({background:"red"})
    })
    $(".title2").children("dd").mouseout(function(){
        $(this).css({background:"none"})
    })
    $(".title3").children("dd").mouseover(function(){
        $(this).css({background:"red"})
    })
    $(".title3").children("dd").mouseout(function(){
        $(this).css({background:"none"})
    })
//用json数据
class Data{
constructor(){
    // 1.选择元素
    this.list = document.querySelector(".list2");
    this.url = "http://localhost/chengzigouwu/public/json/goods1.json";
    
    // 2.请求数据
    this.load();
}
load(){
    var that = this;
    ajax({
        url:this.url,
        success:function(res){
            // 解析数据
            that.res = JSON.parse(res);
            // 3.渲染页面
            that.display()
        }
    })
}
display(){
    // console.log(this.res)
    // 开始渲染页面
          var str = "";   
        for(var i=0;i < this.res.length;i++){
            if(i< this.res.length/2){
                str += `<li>
                    <a href='details.html'>
                    <span>${this.res[i].name}</span>                           
                    <em>${this.res[i].tip}</em>
                    <strong>${this.res[i].price}</strong>
                    <img src="${this.res[i].url}" alt="" class="img"> 
                    </a>                               
                    </li>` 
            }else{
                str += `<li class="low">
                    <a href='details.html'>
                    <img src="${this.res[i].url}" alt="" class="img">  
                    <span>${this.res[i].name}</span>                           
                    <strong>${this.res[i].price}</strong>
                    </a>                            
                    </li>`

            }
                                     
        }
   
    this.list.innerHTML = str;
}
}
new Data();
class Data2{
constructor(){
    // 1.选择元素
    this.list = document.querySelector(".list3");
    this.url = "http://localhost/chengzigouwu/public/json/goods2.json";
    
    // 2.请求数据
    this.load();
}
load(){
    var that = this;
    ajax({
        url:this.url,
        success:function(res){
            // 解析数据
            that.res = JSON.parse(res);
            // 3.渲染页面
            that.display()
        }
    })
}
display(){
    // console.log(this.res)
    // 开始渲染页面
          var str = "";   
        for(var i=0;i < this.res.length;i++){
            if(i< this.res.length/2){
                str += `<li>
                    <a href='details.html'>
                    <span>${this.res[i].name}</span>                           
                    <em>${this.res[i].tip}</em>
                    <strong>${this.res[i].price}</strong>
                    <img src="${this.res[i].url}" alt="" class="img"> 
                    </a>                               
                    </li>` 
            }else{
                str += `<li class="low">
                    <a href='details.html'>
                    <img src="${this.res[i].url}" alt="" class="img">  
                    <span>${this.res[i].name}</span>                           
                    <strong>${this.res[i].price}</strong>
                    </a>                             
                    </li>`

            }
                                     
        }
   
   
    this.list.innerHTML = str;
}
}
new Data2();
class Data3{
constructor(){
    // 1.选择元素
    this.list = document.querySelector(".list4");
    this.url = "http://localhost/chengzigouwu/public/json/goods3.json";
    
    // 2.请求数据
    this.load();
}
load(){
    var that = this;
    ajax({
        url:this.url,
        success:function(res){
            // 解析数据
            that.res = JSON.parse(res);
            // 3.渲染页面
            that.display()
        }
    })
}
display(){
    // console.log(this.res)
    // 开始渲染页面
          var str = "";   
        for(var i=0;i < this.res.length;i++){
            if(i< this.res.length/2){
                str += `<li>
                    <a href='details.html'>
                    <span>${this.res[i].name}</span>                           
                    <em>${this.res[i].tip}</em>
                    <strong>${this.res[i].price}</strong>
                    <img src="${this.res[i].url}" alt="" class="img">      
                    </a>                          
                    </li>` 
            }else{
                str += `<li class="low">
                    <a href='details.html'>
                    <img src="${this.res[i].url}" alt="" class="img">  
                    <span>${this.res[i].name}</span>                           
                    <strong>${this.res[i].price}</strong>
                    </a>                              
                    </li>`

            }
                                     
        }
   
   
    this.list.innerHTML = str;
}
}
new Data3();
//登录注销
class Index{
    constructor(){
        this.notLogin = document.querySelector("#headerLogin")
        this.loginS = document.querySelector(".login-success")
        this.user = document.querySelector(".login-success span")
        this.logout = document.querySelector(".logout");
        
        
        // 获取所有的用户信息
        this.init();
        // 添加注销事件
        this.addEvent();
    }
    addEvent(){
        // 点击注销时
        this.logout.onclick = ()=>{
            for(var i=0;i<this.usermsg.length;i++){
                // 找到要注销的账号
                if(this.name == this.usermsg[i].user){
                    // 修改当前账号的登录状态为0
                    this.usermsg[i].onoff = 0;
                    // 隐藏登录成功的信息
                    this.notLogin.style.display = "block";
                    this.loginS.style.display = "none";
                    // 再将用户的信息设置回去，实现真正的注销
                    localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                    this.logout.style.display = "none";

                    // 结束
                    return ;
                }
            }
        }
    }
    init(){
        // 获取所有的用户信息直接转换，方便使用
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        // 开始验证
        this.check()
    }
    check(){
        // 拿到所有的信息
        for(var i=0;i<this.usermsg.length;i++){
            // 判断哪个用户的状态为已登录
            if(this.usermsg[i].onoff == 1){
                // 显示登录成功的信息
                this.notLogin.style.display = "none";
                this.loginS.style.display = "block";
                this.logout.style.display = "block";
                // 设置当前用户名
                this.user.innerHTML = this.usermsg[i].user;
                // 保存当前用户名，用作注销
                this.name = this.usermsg[i].user;
                
                return;
            }
        }
    }
}

new Index;