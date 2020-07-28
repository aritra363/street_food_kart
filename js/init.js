(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  $(document).ready(function() {
    $('select').material_select();
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 200, // Creates a dropdown of 200 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  
  
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
     
  $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

			
function valid()
{
    var number=document.getElementById("num");
    var pass=true;
    if (number.length<10 && number.length>10)
        {
            pass=false;
            alert(num.length);
        }
    return pass;
}
			
function show()
            {
                if (document.getElementById("map").style.display=="block")
                document.getElementById("map").style.display="none";
                else
                    document.getElementById("map").style.display="block";
            }
        function myownmap()
            {    
                          mycenter=new google.maps.LatLng(22.9868,87.8550);
                var mapProp= {
    center:mycenter,
    zoom:8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,                
};
var map=new google.maps.Map(document.getElementById("map"),mapProp);


                var infoWindow = new google.maps.InfoWindow;
                if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            
            
              map.setCenter(pos);
              map.setZoom(18);
              var mark=new google.maps.Marker({position:pos,animation:google.maps.Animation.DROP,label:'your location'});
              mark.setMap(map);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });}
                var geocoder = new google.maps.Geocoder();

google.maps.event.addListener(map, 'click', function(event) {
  geocoder.geocode({
    'latLng': event.latLng
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
    
          mark=new google.maps.Marker({position:event.latLng,animation:google.maps.Animation.DROP,label:"Business Location"});
              mark.setMap(map); 
          map.setCenter(event.latLng);
              map.setZoom(18);
          
        
           var pin = results[0].formatted_address.split(',')[results[0].formatted_address.split(',').length - 2].trim().split(' ')[2];
                        
       document.getElementById("baddress").value=results[0].formatted_address;
       document.getElementById("bpincd").value=pin;
      }
    }
  });
});
              
            }