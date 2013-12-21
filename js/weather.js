/*
Weather
	
wind speed affects particle velocity
wind direction affects direction
weather (snow, rain) affects velocity, and others

*/

function Weather() {

	this.wind_mph = 0;
	this.wind_gust_mph = 0;
	this.wind_dir = 0;
	this.temp = 0;
	this.display_location = 0;

	this.weather_data = '';
	this.testing = true;
}
Weather.prototype.getLocation = function() {
	return this.display_location;
};
Weather.prototype.getTemp = function() {
	return this.temp;
};
Weather.prototype.getWindSpeed = function() {
	return this.wind_mph
};
Weather.prototype.getWindGustSpeed = function() {
	return this.wind_gust_mph;
};
Weather.prototype.getWindDirection = function() {
	return this.wind_dir;
};

Weather.prototype.setWeather = function() {
	console.log('setWeather');
	
	if(this.testing == false){
		console.log('using data from wunderground');
		// Used to get info from WeatherUnderground.com 
		//jQuery(document).ready(function($) { 
		 this.weather_data = 
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
		
	
	}else{
		// Local Testing 
		console.log('using data from local');
		this.weather_data = 
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
	}
	
	
}// end of setWeather

Weather.prototype.getWeather = function(){
	return this.weather_data;
}//end of getWeather function
