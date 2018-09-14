$(document).ready(function() {


  $("ol").on("click", ".check", function(e) {
    e.stopPropagation();
    $(this).parent().toggleClass("complete");
  });

  $("ol").on("click", ".delete", function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    })
  });

   $("ol").on("click", ".square", function(e) {
    e.stopPropagation();
    var toggler = $(this).siblings('.overlay');
    if (toggler.css('display') === 'none') {
      toggler.css('display', 'block');
    } else {
      toggler.css('display', 'none');
    }
  });

  $(".add-text-btn").on("click", function(e) {
    e.stopPropagation();
    var recipe = $(".user-input-title").val();
    var ingredients = $(".user-input-body").val();
    var color = $("#color-btn").val();
    var image = $('#url').val();
    $('.user-input-body').val("");
    $('.user-input-title').val("");
    $('#url').val("");
    $("ol").append("<li style='background:"+color+"'> <span class='delete'> <i class='far fa-trash-alt'></i></span><span class='check'> <i class='fas fa-check'></i></span>" + recipe + " <span class='square'><i class='far fa-square'></i></span> <div class='overlay' style='display:none'><div class='textContainer'><div class='text'><h2>"+ recipe + "</h2><div class='details'>"+ingredients+"</div> <div class='images'><img src='"+image+"' width='300px' height='auto'/></div></div></div></div> </li>")

  });

  $('ol').on('click','.overlay', function(e) {
    e.stopPropagation();
    $('.overlay').css('display', 'none');
  })

 
 













  // $(".add-text-btn").on("click", function(){

  //   // store values
  //   let inputKey = $(".user-input-title").val();
  //   let inputValue = $(".user-input-body").val();

  //   // clear values
  //   $(".user-input-title").val("");
  //   $(".user-input-body").val("");

  //   console.log(inputKey, inputValue);

  //   localStorage.setItem(inputKey, inputValue);
  //   // data-
  //   let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
  //   $(".display").html(itemHtml);
  //   //console.log(localStorage);
  //   // how can we delegate this event to the outer html node?
  //   // https://learn.jquery.com/events/event-delegation/

  //   $(".display-item").on("click", function(e){
  //     // plop the key:value back into the input boxes

  //     // get the values from the the divs?
  //     console.log("key=> ", e.target.dataset.storageKey); // user-input-title
  //     localStorage.getItem(e.target.dataset.storageKey); // user-input-body

  //     // set those values in the form fields
  //     $(".user-input-title").val(e.target.dataset.storageKey);
  //     $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
  //   });

  // });



  //  // TODO add back in later
  //  // $(".user-input").on("keyup", function(){
  //  //   let inputValue = $(".user-input").val();
  //  //   localStorage.setItem("testStorage", inputValue);
  //  //   $(".display").text(localStorage.getItem("testStorage"));
  //  // });

  //  $(".del-text-btn").on("click", function() {
  //    alert('item deleted? check the console'); // maybe change to a window.confirm
  //    localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
  //    $(".user-input-title").val("");
  //    $(".user-input-body").val("");
  //    // clearing display? what if I have multiple items?
  //    // after item is removed from local storage, redisplay items from local storage
  //    // refresh from storage?
  //  });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys





});