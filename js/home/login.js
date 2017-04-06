define(['jquery'], function($) {

  // 监听表单提交事件，并阻止。转而变成ajax的请求
  $('#login-form').on('submit',function(){
    
    // 这里的this是form原生对象，对form进行包装，才可以调用jq的方法
      console.log($(this).serialize());
      console.log($(this).serializeArray());
      $.ajax({
        url:'/v6/login',
        type:'POST',
        data:$(this).serialize(),
        success:function(data){
            console.log(123);
            location.href = '/';
          
        },
        error:function(){
          console.log(arguments);
        }
      })


    // 阻止表单默认的提交
    return false;
  });

	
});
