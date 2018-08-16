$(document).ready(function(){
  $('#submitWeather').click(function(){
    let city = $("#city").val();

    if(city != ''){

      $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=7646dc8cdac6461b5b997f33f0a9c975",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          console.log(data);
        }
      })
    }
  })
})