$(function(){

    let $btn = $('#btn botton');
    let $btn2 = $('#btn2 botton')
    let timer
    let index = 0
    let $window = $('#window')
    
    init()
    
    $btn.on('click',function(e){
      let current = e.currentTarget
      index = $(current).index()
      activateBtn(index)
      showPic(index)
    })
    
    $btn2.on('click',function(e){
      let current = e.currentTarget
      if($(current).hasClass('pre')){
        index-=1
        index = index<0?($btn.length-1):index
      }else{
        index+=1
        index = index>=$btn.length?0:index
      }
      activateBtn()
      showPic()
    })
    
    $window
      .on('mouseenter',clearTimer)
      .on('mouseleave',setTimer)
    
    
    
    function init(){
      activateBtn()
      showPic()
      setTimer()
    }
    
    function activateBtn(){
      $btn.eq(index)
        .addClass('active')
        .siblings('.active').removeClass('active')
    }
    
    function showPic(){
      let x = (-index*500)+'px'
      let $images = $('#images')
      $images.css({
        transform: 'translate('+x+')'
      })
    }
    
    function setTimer(){
        timer = setInterval(function(){
        index+=1
        index = index>=$btn.length?0:index
        activateBtn(index);
        showPic(index)
      },2000)
    }
    
    function clearTimer(){
      clearInterval(timer)
    } 
})