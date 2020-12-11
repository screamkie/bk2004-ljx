/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function () {


  //添加操作


  const headerInp = document.querySelector('.headerInp')

  var str = ''
  headerInp.onkeydown = function (e) {
    e = e || window.event
    // var code = e.keyCode || e.which
    var flag = true
    const value = headerInp.value

    // if(headerInp.value = ''){
    //   console.log('12')
    //   flag = false
    // }

    if(event.keyCode ==13) {
      event.returnValue = false
      

      // console.log(value)
      // console.log('我执行了')
    
      str =`
      <li>
      <input type="checkbox" />
      <p onclick="edit(1)">${ value }</p>
      <a href="javascript:;" index="">-</a>
  </li>
      `
      $('.demo-box').append(str)

      headerInp.value = ''
     
    }

    $('#todocount').text(($('.demo-box').children().length))
      
  }


  // 删除操作


  $('.demo-box').on('click','li>a', function () {

    $(this).parent().remove()
    
    $('#todocount').text(($('.demo-box').children().length))

  })


  // 
  $('.demo-box2').on('click', 'li>a', function () {
     $(this).parent().remove()

    $('#donecount').text(($('.demo-box2').children().length))
    
  })






  })





