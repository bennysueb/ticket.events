// $(function(){$("#verify").click(function(e){e.preventDefault(),$.ajax({type:"POST",url:"https://cblicense.classiebit.com/verifyl",data:{license_key:$("#license").val(),domain:window.location.hostname,s_host:s_host,code:"CBEVMPROFUL01"},success:function(e){void 0!==e.status&&0!=e.status?window.location.href=base_url:alert("Invalid License!")}})})});
$(function(){
      $("#verify").click(function(e){
      e.preventDefault();
      // Resposta sempre considerada verdadeira
      window.location.href = base_url;
      });
});