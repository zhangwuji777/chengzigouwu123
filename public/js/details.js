function Magnifier(){
    //			2.获取元素
                this.sBox = document.querySelector(".zoomPad")
                this.bBox = document.querySelector(".zoomWindow")
                this.span = document.querySelector(".zoomPup")
                this.bImg = document.querySelector(".zoomWrapperImage img")
    //			3.绑定事件
                this.init()
            }
            Magnifier.prototype.init = function(){
                var that = this;
    //			开始绑定事件
                this.sBox.onmouseover = function(){
    //				鼠标进入事件发生时
    //				3.1显示
                    that.show()
                }
                this.sBox.onmouseout = function(){
    //				鼠标离开事件发生时
    //					3.2隐藏
                        that.hide()
                }
                this.sBox.onmousemove = function(eve){
                    var e = eve || window.event
    //				鼠标移动事件发生时
    //				3.3跟随鼠标移动,同时计算比例
                    that.move(e)
                }
            }
            Magnifier.prototype.move = function(e){
    //			跟随鼠标移动,同时计算比例
                var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth/2;
                var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight/2;
                
    //			边界限定
                if(l<0) l=0;
                if(t<0) t=0;
                if(l > this.sBox.offsetWidth - this.span.offsetWidth){
                    l = this.sBox.offsetWidth - this.span.offsetWidth;
                }
                if(t > this.sBox.offsetHeight - this.span.offsetHeight){
                    t = this.sBox.offsetHeight - this.span.offsetHeight;
                }
                
    //			生效span的位置
                this.span.style.left = l + "px";
                this.span.style.top = t + "px";
    
    //			计算比例
    //			假设班级中有60人，相关专业的同学有7人，请问相关专业同学在这个教室总人数中作战的比例是多少？	7/60
                var x = l/(this.sBox.offsetWidth - this.span.offsetWidth);
                var y = t/(this.sBox.offsetHeight - this.span.offsetHeight);
                
    //			根据比例，操作右边大图
    //			假设班级中有60人，相关专业的同学占0.12，请问相关专业同学在这个教室有多少人？		60*0.12
                this.bImg.style.left = x * -(this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
                this.bImg.style.top = y * -(this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
            }
            Magnifier.prototype.show = function(){
    //			显示
                this.span.style.display = "block";
                this.bBox.style.display = "block";
            }
            Magnifier.prototype.hide = function(){
    //			隐藏
                this.span.style.display = "none";
                this.bBox.style.display = "none";
            }
            
            new Magnifier();
          
            $(".items").children("a").mouseover(function(){
                $(this).css({background:"red"})
            })
            $(".items").children("a").mouseout(function(){
                $(this).css({background:"none"})
            })