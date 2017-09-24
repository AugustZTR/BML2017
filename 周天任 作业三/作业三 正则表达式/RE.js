var btn1 = document.getElementById("btn1");
var a,b,c=1;          
window.onload= function(){  
            var userName = document.getElementById("Name");  
            var lableName = document.getElementById("lname");  
            var password1 = document.getElementById("Pwd1");  
            var password2 = document.getElementById("Pwd2");  
            var labelPassword1 = document.getElementById("lpass1");  
            var labelPassword2 = document.getElementById("lpass2");  
            
            userName.onblur = function(){  
                var nameValue = userName.value;  
                var pattern = /^[a-zA-Z_]\w{5,19}$/g;
                var illegal = /^[\u3400-\u9FFF]+$/;  
                if(nameValue =="" || nameValue==null){
                    a=0;  
                    lableName.innerHTML = "用户名不能为空!";  
                }  
                else if(pattern.test(nameValue)){ 
                    a=1;
                    lableName.innerHTML = "正确!";  
                }  
                else if(illegal.test(nameValue)){
                    a=0;  
                    lableName.innerHTML = "含有非法字符！";  
                }  
                else{
                    a=0; 
                    lableName.innerHTML = "数字不能开头,长度在6-20位之间！";
                }
            }  
            password1.onblur = function(){  
                var passValue = password1.value;  
                var pattern = /^[^\s]{6,15}$/ig;
                var illegal = /^[\s]$/;  
                if(pattern.test(passValue)){  
                    b=1;
                    labelPassword1.innerHTML = "正确!";  
                }  
                else if(passValue =="" || passValue==null){ 
                    b=0;  
                    labelPassword1.innerHTML = "密码不能为空!";  
                }  
                else if(illegal.test(passValue)){ 
                    b=0; 
                    labelPassword1.innerHTML = "含有非法字符！";  
                }
                else
                    labelPassword1.innerHTML = "密码长度在6-15位之间！";
                }
            password2.onblur = function(){  
                var pass1Value = password1.value;  
                var pass2Value = password2.value;  
                if(pass2Value =="" || pass2Value==null){
                    c=0; 
                    labelPassword2.innerHTML = "密码不能为空!";  
                }  
                else if(pass1Value == pass2Value){
                    c=1;  
                    labelPassword2.innerHTML = "输入正确!";  
                }  
                else if(pass1Value!=pass2Value){ 
                    c=0; 
                    labelPassword2.innerHTML = "两次密码输入不一致!";  
                }  
                else{ 
                    c=0; 
                    labelPassword2.innerHTML = "密码长度在6-15位之间！";  
                }  
            }           
        } 
function judge(){
    if(a==1&&b==1&&c==1)
        alert("注册成功！");
    else
        alert("请按要求输入！")
}