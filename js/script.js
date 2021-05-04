const btnoptionSelected = document.querySelector("#btnSelectedScheduler");
btnoptionSelected.addEventListener("click", arrangeEvents);

const btnShowNotification = document.querySelector("#btnShowNotification");
btnShowNotification.addEventListener("click", showNotification);

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
  if (optionSelected.value === "date") {
    arrangeEventsbyDate(titles, times, dates);
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

function arrangeEventsbyDate(titles, times, dates) {
  // to hold node values
  let arrangedDates = [];

  var event = {};

  // loop through the Events
  for (let index = 0; index < times.length; index++) {
    event["title"] = titles[index].textContent;
    event["time"] = times[index].textContent.trim();
    event["date"] = new Date(dates[index].textContent.trim());

    arrangedDates.push(event);
    event = {};
  }

  const datesElements = arrangedDates.map((element) => element.date);

  // sort topics by numeric order
  datesElements.sort((a, b) => a - b);

  let current = "";
  for (let index = 0; index < datesElements.length; index++) {
    current = datesElements[index];
    console.log(current);
  }

  let element = "";
  for (let index = 0; index < datesElements.length; index++) {
    // array the topic in order
    element += datesElements[index].getFullYear();
    element += "-0";
    element += datesElements[index].getMonth() + 1;
    element += "-";
    element += datesElements[index].getDate();

    dates[index].textContent = element;

    element = "";

    //   get the time and date of the topic
    const txt = arrangedDates.find(
      (element) => element.date === datesElements[index]
    );

    titles[index].textContent = txt.title;
    times[index].textContent = txt.time;
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

// functionality with Jquery

let applyArrnagementSelection = $("#myselect");

applyArrnagementSelection.change(function () {
  // aquire option selected from the dropdown menu
  var selectedOption = $("#myselect option:selected");

  if (selectedOption.val() === "topic") {
    topicArrangement();
  }

  if (selectedOption.val() === "time") {
    timeArrangement();
  }
});

function topicArrangement() {
  // to hold the values from Event Card

  let arragedEvents = [];

  var event = {};

  $(".titleofEvent").each(function () {
    event["title"] = this.textContent;

    event["time"] = "";

    event["date"] = "";

    arragedEvents.push(event);

    event = {};
  });

  $(".timeofEvent").each(function (index) {
    arragedEvents[index]["time"] = this.textContent;
  });

  $(".dateofEvent").each(function (index) {
    arragedEvents[index]["date"] = this.textContent;
  });

  const topics = arragedEvents.map((element) => element.title);

  topics.sort();

  $(".titleofEvent").each(function (index) {
    this.textContent = topics[index];
  });
}

function timeArrangement() {
  alert("I am here from topic");
}

function setEventTime() {}

function setEventDate() {}
