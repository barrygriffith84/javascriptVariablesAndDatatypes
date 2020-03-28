// These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.

// mkdir -p ~/workspace/on-boarding/exercises/javascript/variables_and_datatypes && cd $_
// touch index.html script.js

// Be sure to add boilerplate HTML to your index.html file and link it to script.js.
// 1. Today's weather

//     In your JavaScript file, instantiate and assign the following variables with information about the current weather:

//     temperature should hold a number representing the current temperature in Fahrenheit
//     conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
//     sunriseTime should hold a string representing what time the sun rose this morning
//     sunsetTime should hold a string representing what time the sun will set this evening
//     Log each variable to the console.
//     Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

var temperature = 70;
var conditions = "cloudy";
var sunriseTime = "7:34 AM";
var sunsetTime = "7:43 PM";

console.log(temperature, conditions, sunriseTime, sunsetTime);

var sentence = `The sun rises at ${sunriseTime} the temperature is ${temperature} it is {conditions} and the sun sets at ${sunsetTime}`;

console.log(sentence);

// 2. Weather Data

// In your JavaScript file, copy and paste the following array:

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

//     Print the first high temperature to the console.
//     Print the last low temperature to the console.
//     What is the average high temperature from the data set?
//     What is the average low temperature from the data set?

var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 
var highTempSum = 0;
var lowTempSum = 0;
var highTempAverage = 0;
var lowTempAverage = 0;

console.log(`The first high temperature is ${highTemperatures[0]}`)
console.log(`The last low temperature is ${lowTemperatures[5]}`)

for(i = 0; i < highTemperatures.length; i++){
    highTempSum += highTemperatures[i]
}

for(i = 0; i < lowTemperatures.length; i++){
    lowTempSum += lowTemperatures[i]
}

highTempAverage = highTempSum / highTemperatures.length;
lowTempAverage = lowTempSum / lowTemperatures.length;

console.log(`The average high temperature is ${highTempAverage}`);
console.log(`The average high temperature is ${lowTempAverage}`);

// 3. Weather Object

//     In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:
//         temperature
//         conditions

//     Log the current temperature to the console.

//     Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

var weatherObject = {
    temperature: 70,
    conditions: "cloudy"
}


console.log(weatherObject.temperature);
console.log(`It is currently ${weatherObject.temperature} and ${weatherObject.conditions}`)

// 4. Nested Weather Objects

// Refactor your weather object to include today's high and low temperature and sunrise/ sunset times. Now your object should look something like this:

// var todaysWeather = {
//   temperature: {
//     high: 55,
//     low: 32
//   },
//   conditions: "sunny",
//   astronomy: {
//     sunrise: "7:43 AM",
//     sunset: "5:09 PM"
//   }
// }
//     Log today's high temperature to the console.
//     Log today's low temperature to the console.
//     Log today's conditions to the console.
//     Log today's sunrise time to the console.
//     Use string template literals to create a more detailed description of today's weather.

var weatherObject = {
    temperature: 70,
    conditions: "cloudy",
    highTemp: 70,
    lowTemp: 46,
    sunriseTime: "7:34 AM",
    sunsetTime: "7:43 PM"
}

console.log(weatherObject.highTemp);
console.log(weatherObject.lowTemp);
console.log(weatherObject.conditions);
console.log(weatherObject.sunriseTime);

console.log(`The sun rises at ${weatherObject.sunriseTime} sets at ${weatherObject.sunsetTime} there will be a high of ${weatherObject.highTemp} a low of ${weatherObject.lowTemp} and it will be ${weatherObject.conditions}`)

// 5. Weather Forecast

// Copy and paste the following array into your JavaScript file

// var weatherForecast = [
//  {
//   day: "Today",
//   temperature: {
//     high: 55,
//     low: 32
//   },
//   conditions: "sunny",
//   astronomy: {
//     sunrise: "7:43 AM",
//     sunset: "5:09 PM"
//   }
//  },
//  {
//   day: "Saturday",
//   temperature: {
//     high: 50,
//     low: 29
//    },
//   conditions: "cloudy",
//   astronomy: {
//     sunrise: "7:44 AM",
//     sunset: "5:08 PM"
//   }
//  },
//  {
//   day: "Sunday",
//   temperature: {
//     high: 47,
//     low: 35
//    },
//   conditions: "chance of rain",
//   astronomy: {
//     sunrise: "7:45 AM",
//     sunset: "5:07 PM"
//   }
//  }
// ]

//     Log today's weather conditions to the console.
//     Log Saturday's high temperature to the console.
//     Log Saturday's sunrise time to the console.
//     Log Sunday's conditions to the console.
//     Log Sunday's sunset time to the console.
//     Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

console.log(weatherForecast[0].conditions);
console.log(weatherForecast[1].temperature.high);
console.log(weatherForecast[1].astronomy.sunrise);
console.log(weatherForecast[2].conditions);
console.log(weatherForecast[2].astronomy.sunset);
console.log(`Today will bring a high of ${weatherForecast[0].temperature.high} and a low of ${weatherForecast[0].temperature.low}. It will be ${weatherForecast[0].conditions}, the sun will rise at ${weatherForecast[0].astronomy.sunrise} and set at ${weatherForecast[0].astronomy.sunset}`);
console.log(`Saturday will bring a high of ${weatherForecast[1].temperature.high} and a low of ${weatherForecast[1].temperature.low}. It will be ${weatherForecast[1].conditions}, the sun will rise at ${weatherForecast[1].astronomy.sunrise} and set at ${weatherForecast[1].astronomy.sunset}`);

// 6. Student Grades

// In your JavaScript file, copy and paste the following array:

// var williamGrades = [62, 97, 99, 85, 73, 97];

//     Print the first grade in the array to the console.
//     Print the last grade in the array to the console.
//     Use JavaScript to find William's average grade.

var williamGrades = [62, 97, 99, 85, 73, 97];
var williamGradesSum = 0;
var williamGradesAverage = 0;

for(i = 0; i < williamGrades.length; i++){
    williamGradesSum += williamGrades[i]
}

williamGradesAverage = williamGradesSum / williamGrades.length;

console.log(williamGrades[0]);
console.log(williamGrades[5]);
console.log(`William's average grade is ${williamGradesAverage}`)

// 7. Movie Star

//     In your JavaScript file, create an object that represents a famous movie star. Your object should have the following properties:
//         firstName
//         lastName
//         age
//         favoriteFood

//     Log the movie star's favorite food to the console.

//     Use string template literals to log their full name to the console.

//     Use string template literals to log a sentence or two about your movie star to the console. (Example: "Dwayne The Rock Johnson is 46 years old. His favorite food is raw meat.")

var kurtObject = {
    firstName: "Kurt",
    lastName: "Russell",
    age: 69,
    favoriteFood: "nachos"
}

console.log(kurtObject.favoriteFood);
console.log(`${kurtObject.firstName} ${kurtObject.lastName}`);
console.log(`${kurtObject.firstName} ${kurtObject.lastName} is ${kurtObject.age} and loves ${kurtObject.favoriteFood}`);

// 8. Dwayne's Hobbies

// Refactor your movie star object to add their hobbies. Now your object should look something like this:

// var dwayneObject = {
//   firstName: "Dwayne",
//   lastName: "Johnson",
//   favoriteFood: "Eggs",
//   hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
// }

//     Log each one of their hobbies individually to the console.
//     Use string template literals to create a sentence about their hobbies. You should include how many hobbies they have in your sentence. (Hint: use the .length property.) Example output: "They have three main hobbies: jumping out of planes, personally holding the San Andreas fault together, and building muscle mass.") Store your new setnence in a variable called hobbiesSentence then log it to the console.

var kurtObject = {
    firstName: "Kurt",
    lastName: "Russell",
    age: 69,
    favoriteFood: "nachos",
    hobbies: ["throw knives", "drive fast", "remodel boat closets"]
}

console.log(kurtObject.hobbies[0]);
console.log(kurtObject.hobbies[1]);
console.log(kurtObject.hobbies[2]);

console.log(`${kurtObject.firstName} ${kurtObject.lastName} has ${kurtObject.hobbies.length} main hobbies.  He likes to ${kurtObject.hobbies[0]}, ${kurtObject.hobbies[1]}, and ${kurtObject.hobbies[2]}`)



// Use JavaScript to answer the following questions and log your answers to the console.

//     What time was sunrise this morning in Nome, AK?
//     What was the wind chill in Nome, AK when this data was generated?
//     What was the visibility?
//     What will be the high on Saturday the 8th?
//     Use string template literals to build a sentence about the weather forecast for Saturday, Dec 15. (Example: "Saturday, December 15 will be Partly Cloudy with a high of 7 and a low of -3".)
//         In the data, "Partly Cloudy" is capitalized, but in our sentence that doesn't really make sense. Look up the method to convert a string to lowercase.
//     What is the average forecasted high temperature for the next seven days?

var weatherData = {
  "query": {
   "count": 1,
   "created": "2018-12-06T20:52:22Z",
   "lang": "en-US",
   "results": {
    "channel": {
     "units": {
      "distance": "mi",
      "pressure": "in",
      "speed": "mph",
      "temperature": "F"
     },
     "title": "Yahoo! Weather - Nome, AK, US",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
     "description": "Yahoo! Weather for Nome, AK, US",
     "language": "en-us",
     "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
     "ttl": "60",
     "location": {
      "city": "Nome",
      "country": "United States",
      "region": " AK"
     },
     "wind": {
      "chill": "14",
      "direction": "68",
      "speed": "36"
     },
     "atmosphere": {
      "humidity": "90",
      "pressure": "989.0",
      "rising": "0",
      "visibility": "11.0"
     },
     "astronomy": {
      "sunrise": "11:38 am",
      "sunset": "4:7 pm"
     },
     "image": {
      "title": "Yahoo! Weather",
      "width": "142",
      "height": "18",
      "link": "http://weather.yahoo.com",
      "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
     },
     "item": {
      "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
      "lat": "64.499474",
      "long": "-165.405792",
      "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
      "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
      "condition": {
       "code": "15",
       "date": "Thu, 06 Dec 2018 11:00 AM AKST",
       "temp": "28",
       "text": "Blowing Snow"
      },
      "forecast": [
       {
        "code": "16",
        "date": "06 Dec 2018",
        "day": "Thu",
        "high": "29",
        "low": "25",
        "text": "Snow"
       },
       {
        "code": "26",
        "date": "07 Dec 2018",
        "day": "Fri",
        "high": "27",
        "low": "22",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "08 Dec 2018",
        "day": "Sat",
        "high": "22",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "34",
        "date": "09 Dec 2018",
        "day": "Sun",
        "high": "7",
        "low": "-11",
        "text": "Mostly Sunny"
       },
       {
        "code": "28",
        "date": "10 Dec 2018",
        "day": "Mon",
        "high": "3",
        "low": "-11",
        "text": "Mostly Cloudy"
       },
       {
        "code": "28",
        "date": "11 Dec 2018",
        "day": "Tue",
        "high": "10",
        "low": "2",
        "text": "Mostly Cloudy"
       },
       {
        "code": "26",
        "date": "12 Dec 2018",
        "day": "Wed",
        "high": "9",
        "low": "5",
        "text": "Cloudy"
       },
       {
        "code": "28",
        "date": "13 Dec 2018",
        "day": "Thu",
        "high": "14",
        "low": "8",
        "text": "Mostly Cloudy"
       },
       {
        "code": "30",
        "date": "14 Dec 2018",
        "day": "Fri",
        "high": "13",
        "low": "-3",
        "text": "Partly Cloudy"
       },
       {
        "code": "30",
        "date": "15 Dec 2018",
        "day": "Sat",
        "high": "7",
        "low": "-3",
        "text": "Partly Cloudy"
       }
      ],
      "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
      "guid": {
       "isPermaLink": "false"
      }
     }
    }
   }
  }
 }

console.log(weatherData["query"]["results"]["channel"]["astronomy"]["sunrise"]);
console.log(weatherData["query"]["results"]["channel"]["wind"]["chill"]);
console.log(weatherData["query"]["results"]["channel"]["atmosphere"]["visibility"]);
console.log(weatherData["query"]["results"]["channel"]["item"]["forecast"][2]["high"]);

console.log(`Today it will be ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["text"].toLowerCase()}, we'll have a high of ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["high"]} and a low of ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["low"]}`);

for(var i = 0; i < 7; i++){
  console.log(`Day ${i+1} high: ${weatherData["query"]["results"]["channel"]["item"]["forecast"][i]["high"]}`)
} 