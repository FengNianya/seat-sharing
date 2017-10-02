   var code;
   function createCode(){
       //首先默认code为空字符串
       code = '';
       //设置长度，这里看需求，我这里设置了4
       var codeLength = 4;
       //设置随机字符
       var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
       //循环codeLength 我设置的4就是循环4次
       for(var i = 0; i < codeLength; i++){
           //设置随机数范围,这设置为0 ~ 36
            var index = Math.floor(Math.random()*36);
            //字符串拼接 将每次随机的字符 进行拼接
            code += random[index];
       }
       //将拼接好的字符串赋值给展示的Value
       var codeV = document.getElementById('code');
       codeV.value = code;
}
// 验证码和邀请码是否输入正确
function validate(){
  // 验证码
        var oValue = document.getElementById('inputCode').value.toUpperCase();//字符串全部变成大写的
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            createCode();
        }else{
            return true
        }
        // 邀请码
        var IvCode =document.getElementById("IvCode ");

    }
