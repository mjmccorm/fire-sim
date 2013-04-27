var wind_mph;
var wind_gust_mph; //used to determine variance
var wind_dir;

//need to add location parameter
function getWeather(){
/* Used to get info from WeatherUnderground.com */
/*
 jQuery(document).ready(function($) { 
 $.ajax(
	{url : "http://api.wunderground.com/api/41b0abf8e556703f/geolookup/conditions/q/MI/Painesdale.json",
	dataType : "jsonp", 
	success : function(parsed_json) { 
		var location = parsed_json['location']['city'];
		var wind_mph = parsed_json['current_observation']['wind_mph'];
		var wind_dir = parsed_json['current_observation']['wind_dir'];
		var temp_f = parsed_json['current_observation']['temp_f'];
		alert("Current temperature in " + location + " is: " + temp_f + "Wind Speed:" + wind_mph + " Wind Dir:" + wind_dir); 
		$("#current_temp").text("Temperature: " + temp_f + " F");
		$("#current_wind_speed").text("Wind Speed: " + wind_mph + " MPH");
		$("#current_wind_direction").text("Wind Direction: " + wind_dir);
		} 
	}); 
}); 
*/
/* Local Testing */
	$.getJSON('json/Painesdale.json', function(data) {
	
		$.each(data.current_observation, function(index, element) {
			//console.log(index + ' ' +element);
			switch(index){
			case('display_location'):
				$('#weather_data').append($('<div>Location: '+element.full+'</div>'));
				break;
			case('temp_f'):
				$('#weather_data').append($('<div>Temp: '+element+' F</div>'));
				break;
			case('wind_string'):
				$('#weather_data').append($('<div>'+element+'</div>'));
				break;
			case('wind_mph'):
				wind_mph = element;
				$('#weather_data').append($('<div>Wind Speed: '+element+' MPH</div>'));
				break;
			case('wind_gust_mph'):
				wind_gust_mph = element;
				$('#weather_data').append($('<div>Wind Gust: '+element+' MPH</div>'));
				break;
			case('wind_dir'):
				wind_dir = element;
				$('#weather_data').append($('<div>Wind Direction: '+element+'</div>'));
				break;
			}
		});
			
	});
}//end of getWeather function
