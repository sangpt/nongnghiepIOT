$(document).ready(function() {
  var time = $('#time')
  var mode = $('#mode')
  var do_am_dat = $('#do_am_dat')
  var do_am_kk = $('#do_am_kk')
  var dong_co1 = $('#dong_co1')
  var dong_co2 = $('#dong_co2')
  var nhiet_do = $('#nhiet_do')
  // getData()
  setInterval(getData(), 2000);

  $('button').click(function(e) {
    var btn_id = e.target.id
    $.ajax({
      type: 'GET',
      url: './control/control.php',
      data: {
        'up_mode': btn_id[0],
        'st_value': btn_id[1]
      },
      success: function(res) {
        getData()
      }
    })
  })

  function getData() {

    $.ajax({
      type: 'GET',
      url: './api/database.php',
      success: function(res) {
        var obj = JSON.parse(res)
        time.text(obj.time)
        mode.text(obj.mode)
        do_am_dat.text(obj.do_am_dat)
        do_am_kk.text(obj.do_am_kk)
        dong_co1.text(obj.dong_co1)
        dong_co2.text(obj.dong_co2)
        nhiet_do.text(obj.nhiet_do + " °C")
      }
    })
  }
})
