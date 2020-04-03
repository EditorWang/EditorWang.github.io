var i = 0
if ($.cookie('name')=="True"){
layui.use('layer', function(){
    
    var layer = layui.layer;
    layer.confirm('自己做了一些Api,要去玩玩么?', {
        btn: ['带我去','谢谢不了'] //按钮
      }, function(){
        layer.msg('目前还在施工~', {icon: 1});
      }, function(){
        $.cookie('notShow', 'True',{ expires: 7000000 });
        layer.close()
      });
}); 
}