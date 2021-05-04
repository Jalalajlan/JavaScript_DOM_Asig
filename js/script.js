let currentDate = "";
let newDate = new Date();

currentDate = newDate.getFullYear() + "-";
currentDate += newDate.getMonth() + 1 + "-";
currentDate += newDate.getDate();

$("#dateofEvent").val(currentDate);

const btnoptionSelected = document.querySelector("#btnSelectedScheduler");
btnoptionSelected.addEventListener("click", arrangeEvents);

const btnShowNotification = document.querySelector("#btnShowNotification");
btnShowNotification.addEventListener("click", showNotification);

const btnApplyJs = document.querySelector("#btnApplyjs");
btnApplyJs.addEventListener("click", AddEventJavscript);

function arrangeEvents() {
  const optionSelected = document.querySelector("#selectedScheduler");

  console.log(optionSelected.value);

  const titles = document.querySelectorAll(".titleofEvent");
  const times = document.querySelectorAll(".timeofEvent");
  const dates = document.querySelectorAll(".dateofEvent");

  if (optionSelected.value === "") {
  }
  if (optionSelected.value === "topic") {
    arrangeEventsbyTopic(titles, times, dates);
  }

  if (optionSelected.value === "time") {
    arrangeEventsbyTime(titles, times, dates);
  }
}

function arrangeEventsbyTopic(titles, times, dates) {
  // to hold node values
  let arrangedTopics = [];

  var event = {};

  // loop through the Events titles
  for (let index = 0; index < titles.length; index++) {
    event["title"] = titles[index].textContent;
    event["time"] = times[index].textContent.trim();
    event["date"] = dates[index].textContent.trim();

    arrangedTopics.push(event);
    event = {};
  }

  const topics = arrangedTopics.map((element) => element.title);

  // sort topics by alphabatical order
  topics.sort();

  for (let index = 0; index < topics.length; index++) {
    // array the topic in order
    titles[index].textContent = topics[index];

    // get the time and date of the topic
    const txt = arrangedTopics.find(
      (element) => element.title === topics[index]
    );

    times[index].textContent = txt.time;
    dates[index].textContent = txt.date;
  }
}

function arrangeEventsbyTime(titles, times, dates) {
  // to hold node values
  let arrangedTimes = [];

  var event = {};

  // loop through the Events
  for (let index = 0; index < times.length; index++) {
    event["title"] = titles[index].textContent;
    event["time"] = times[index].textContent.trim();
    event["date"] = dates[index].textContent.trim();

    arrangedTimes.push(event);
    event = {};
  }

  const timesElements = arrangedTimes.map((element) => element.time);

  // sort topics by numeric order
  timesElements.sort();

  for (let index = 0; index < timesElements.length; index++) {
    // array the topic in order
    times[index].textContent = timesElements[index];

    // get the time and date of the topic
    const txt = arrangedTimes.find(
      (element) => element.time === timesElements[index]
    );

    titles[index].textContent = txt.title;
    dates[index].textContent = txt.date;
  }

  function showNotification() {}
}

function showNotification() {
  const times = document.querySelectorAll(".timeofEvent");
  let arrnageTimes = [];
  for (let index = 0; index < times.length; index++) {
    arrnageTimes[index] = times[index].textContent.trim();
  }
  arrnageTimes.sort();
  console.log(arrnageTimes);
  alert("You have the nearst meeting in " + arrnageTimes[0]);
}

function AddEventJavscript() {
  // Grab all the values from input from forms
  let eventTitle = document.querySelector("#titleofEvent").value;

  // Grab the time of the Event
  let timeSelected = document.querySelector("#time");

  // Grab the date entered
  let eventDate = document.querySelector("#dateofEvent").value;

  if (eventTitle === "" || timeSelected.value === "" || eventDate === "") {
    alert("please enter all required fields");
  } else {
    // Grab the div element that contains all the events
    let eventList = document.querySelector("#content");

    // Create an Element div with each class for styling
    let newEvent = document.createElement("div");

    // set attribute class for the div Element
    newEvent.setAttribute("class", "eventCard grid");

    // Create an Element p with each class for styling
    let titleElement = document.createElement("p");
    titleElement.setAttribute("class", "titleofEvent");

    titleElement.innerHTML = eventTitle;

    let timeElement = document.createElement("p");
    timeElement.setAttribute("class", "timeofEvent");

    timeElement.innerHTML = timeSelected.value;

    let dateElement = document.createElement("p");
    dateElement.setAttribute("class", "dateofEvent");

    dateElement.innerHTML = eventDate;

    // Append the Div Element into eventList
    eventList.appendChild(newEvent);
    newEvent.appendChild(titleElement);
    newEvent.appendChild(timeElement);
    newEvent.appendChild(dateElement);
  }
}

// adding by using Jquery

let btnApplyJquery = $("#btnApplyJquery");
btnApplyJquery.click(addEventJquery);

function addEventJquery() {
  // Grab all Element within

  let titleofEvent = $("#titleofEvent").val();
  let timeofEvent = $("#time").val();

  let dateofEvent = $("#dateofEvent").val();

  if (titleofEvent === "" || timeofEvent === null || dateofEvent === "") {
    alert("please enter all required fields");
  } else {
    // Capture div content wrapper of events
    let eventList = $("#content");
    let event = "<div class='eventCard grid'>";
    event += "<p class='titleofEvent'>" + titleofEvent + "</p>";
    event += "<p class='timeofEvent'> " + timeofEvent + " </p>";
    event += "<p class='dateofEvent'> " + dateofEvent + "</p>";
    event += "</div>";
    eventList.append(event);
  }
}
