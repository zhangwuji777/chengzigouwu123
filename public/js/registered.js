class Register{
    constructor(){
        this.user = $("#mobile");
        this.pass = $("#password");
        this.pass2 = $("#password2");
        this.tel2 = $("rePassword");
        this.btn = $(".submit");
        this.msg = $(".msg");
        this.error1 =$(".fieldError1")
        this.error2 =$(".fieldError2")
        this.error3 =$(".fieldError3")
        //判断是否可以提交
        this.t=true;
        this.p =true;
        this.p2 =true;
        this.yz=true;
        //验证码
        console.log(this.pass2.val())
        this.init();
     
    }
    init(){
        this.btn.click(()=>{
            this.tijiao();
        })
        this.user.blur(()=>{
            this.yz1();
         })
         this.pass.blur(()=>{
            this.yz2();
         })
         this.pass2.blur(()=>{
            this.yz3();
         })
      
    }
    yz1(){
        var reg = /^1[3-9]\d{9}$/;
        console.log(this.user.val())
    if(reg.test(this.user.val())){
        this.error1.css({
            display:"none",
        })
        
        this.t = true;
    }else if(this.user.val()==""){
        this.error1.html("必填")
        }else{
            this.error1.html("手机格式错误")
            this.error1.css({
            display:"inline"
           
            })
            this.t = false ;
        }
        
    }
    yz2(){
        var z_passReg = /^.{4,}$/;
        console.log()
        if(z_passReg.test(this.pass.val())){
			this.error2.css({
				display:"none",
			})
			this.p = true;
		}else if(this.pass.val()==""){
            this.error2.html("必填")
            this.p = false;
        }else{
            this.error2.html("长度不允许小于4")
			this.error2.css({
				display:"inline"
			})
			this.p = false;
		};

    }
    yz3(){
        if(this.pass.val()==this.pass2.val()){
			this.error3.css({
				display:"none",
			})
			this.p2 = true;
		}else if(this.pass2.val()==""){
            this.error3.html("必填")
            this.p2 = false;
        }else{
            this.error3.html("两次输入不一致")
			this.error3.css({
				display:"inline"
			})
			this.p2 = false;
		};

    }
    tijiao(){
        if(this.t&&this.p&&this.p2){
             var onoff=0;    
            this.usermsg = localStorage.getItem("usermsg");        
            if(this.usermsg == null){
                this.usermsg = [{
                    user:this.user.val(),
                    pass:this.pass.val(),
                    onoff:0
                }]
                
            }else{
                this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
                for(var i=0;i<this.usermsg.length;i++){
                    if(this.usermsg[i].user == this.user.value){
                        this.msg.innerHTML = "重名";
                        break;
                    }
                }
            
                this.usermsg.push({
                    user:this.user.val(),
                    pass:this.pass.val(),
                    onoff:0
                })
            }
            console.log(this.usermsg)
            console.log("点击")
            localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
        }
           
    }
    
        
    
            

}
       new  Register;