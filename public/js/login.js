
class Login{
    constructor(){
            this.user = $(".username1");
            this.pass = $(".password1");
            this.btn = $(".submit");
            this.msg =$(".msg");
            this.init()
            console.log($(".msg"))
            console.log($(".submit"))
            console.log($(".password1"))
            console.log($(".username1"))
    }
    init(){
        var that = this;
        this.btn.click(function(){
            // 点击时先获取localStorage
            that.getUserMsg()
            console.log(1)
        })
    }
    getUserMsg(){
        // 获取的同时直接转换，方便实用
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        // 开始验证
        this.check()
    }
    check(){
        console.log(1)
        // 遍历所有的用户名
        for(var i=0;i<this.usermsg.length;i++){
            // 每次判断当前用户名是否和指定用户名密码是否符合

            if(this.usermsg[i].user == this.user.val() && this.usermsg[i].pass == this.pass.val()){
                console.log("success")
                // 如果符合，登录成功，修改账号状态
                this.usermsg[i].onoff = 1;
                // 在存回去，才能实现修改
                localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                // 给提示语句
                this.msg.innerHTML = "登录成功，三秒后跳转到首页";
                // 三秒后跳转
                setTimeout(() => {
                    location.href = "http://localhost/chengzigouwu/public/index.html";
                }, 3000);
                // 结束
                return;
            }
        }
        // 如果没结束，表示登录失败，那么显示失败信息
        this.msg.innerHTML = "账号密码不符，清重新登录，或去注册"
    }
}

new Login;
