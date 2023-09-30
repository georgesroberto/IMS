$(document).ready(function(){
  
    // alert("We are all set!");
  
    $('#div_id_line_six, #div_id_line_six_quantity, #div_id_line_six_unit_price, #div_id_line_six_total_price, #div_id_line_seven, #div_id_line_seven_quantity, #div_id_line_seven_unit_price, #div_id_line_seven_total_price, #div_id_line_eight, #div_id_line_eight_quantity, #div_id_line_eight_unit_price, #div_id_line_eight_total_price, #div_id_line_nine, #div_id_line_nine_quantity, #div_id_line_nine_unit_price, #div_id_line_nine_total_price, #div_id_line_ten, #div_id_line_ten_quantity, #div_id_line_ten_unit_price, #div_id_line_ten_total_price').hide()

    $('#more-line').click(function(){
        $('#div_id_line_five, #div_id_line_five_quantity, #div_id_line_five_unit_price, #div_id_line_five_total_price').slideToggle(200)
        $('#div_id_line_six, #div_id_line_six_quantity, #div_id_line_six_unit_price, #div_id_line_six_total_price').slideToggle(200)
        $('#div_id_line_seven, #div_id_line_seven_quantity, #div_id_line_seven_unit_price, #div_id_line_seven_total_price').slideToggle(200)
        $('#div_id_line_eight, #div_id_line_eight_quantity, #div_id_line_eight_unit_price, #div_id_line_eight_total_price').slideToggle(200)
        $('#div_id_line_nine, #div_id_line_nine_quantity, #div_id_line_nine_unit_price, #div_id_line_nine_total_price').slideToggle(200)
        $('#div_id_line_ten, #div_id_line_ten_quantity, #div_id_line_ten_unit_price, #div_id_line_ten_total_price').slideToggle(200)
    });

    $('#id_line_one_quantity, #id_line_one_unit_price, #id_line_two_quantity, #id_line_two_unit_price, #id_line_three_quantity, #id_line_three_unit_price, #id_line_four_quantity, #id_line_four_unit_price, #id_line_five_quantity, #id_line_five_unit_price, #id_line_six_quantity, #id_line_six_unit_price, #id_line_seven_quantity, #id_line_seven_unit_price, #id_line_eight_quantity, #id_line_eight_unit_price #id_line_nine_quantity, #id_line_nine_unit_price, #id_line_ten_quantity, #id_line_ten_unit_price').keyup(function(){
      var line_one_quantity_text = $('#id_line_one_quantity').val();
      var line_one_unit_price_text = $('#id_line_one_unit_price').val();
      var line_one_total = line_one_quantity_text * line_one_unit_price_text
  
      var line_two_quantity_text = $('#id_line_two_quantity').val();
      var line_two_unit_price_text = $('#id_line_two_unit_price').val();
      var line_two_total = line_two_quantity_text * line_two_unit_price_text
  
      var line_three_quantity_text = $('#id_line_three_quantity').val();
      var line_three_unit_price_text = $('#id_line_three_unit_price').val();
      var line_three_total = line_three_quantity_text * line_three_unit_price_text
      
      var line_four_quantity_text = $('#id_line_four_quantity').val();
      var line_four_unit_price_text = $('#id_line_four_unit_price').val();
      var line_four_total = line_four_quantity_text * line_four_unit_price_text
  
      var line_five_quantity_text = $('#id_line_five_quantity').val();
      var line_five_unit_price_text = $('#id_line_five_unit_price').val();
      var line_five_total = line_five_quantity_text * line_five_unit_price_text
  
      var line_six_quantity_text = $('#id_line_six_quantity').val();
      var line_six_unit_price_text = $('#id_line_six_unit_price').val();
      var line_six_total = line_six_quantity_text * line_six_unit_price_text
  
      var line_seven_quantity_text = $('#id_line_seven_quantity').val();
      var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
      var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text
  
      var line_eight_quantity_text = $('#id_line_eight_quantity').val();
      var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
      var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text
  
      var line_nine_quantity_text = $('#id_line_nine_quantity').val();
      var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
      var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text
  
      var line_ten_quantity_text = $('#id_line_ten_quantity').val();
      var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
      var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text
  
      var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total
  
      $('#id_line_one_total_price').val(line_one_total);
      $('#id_line_two_total_price').val(line_two_total);
      $('#id_line_three_total_price').val(line_three_total);
      $('#id_line_four_total_price').val(line_four_total);
      $('#id_line_five_total_price').val(line_five_total);
      $('#id_line_six_total_price').val(line_six_total);
      $('#id_line_seven_total_price').val(line_seven_total);
      $('#id_line_eight_total_price').val(line_eight_total);
      $('#id_line_nine_total_price').val(line_nine_total);
      $('#id_line_ten_total_price').val(line_ten_total);
      $('#id_total').val(total);
  });
   
  $('.table').paging({limit:15});

  // Scroll Top Script
   //Check to see if the window is top if not then display button
   $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},900);
    return false;
  });
 //END Scroll Top Script
});