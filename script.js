// George notes
// whats an algorithim?
// series of steps: to solve a challenge, identifying patters, describing a process, using calculations/computations.

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//1) capture current day. day.js
//- make a function for current daye
//- use dayjs
//2) display it
// indentify target (document.getElementbyID)
// textcontent or text

//     var currentDay = document.getElementById('currentDay')


//     function todayDay () {
//       var now = dayjs();
//       currentDay.textContent = now;
//     }


// todayDay();



// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am & 5pm
//1)enter remaining time grids. 9 to 5. 
//copy and paste previous code block
// the past present of future section in the top right code is what the color is connected to.








// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// 1) define past present or future
// already done use the past preent or future classes
// 2) assign colors to each
// define present time
//interate over all of the time blocks
// conditional : if the time block is equal to the current time, give it the present class.  - if the time block is less than the current time, give it the past class. - if the time block is greater than current time, give it the future 


// WHEN I click into a timeblock
// THEN I can enter an event



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//1)Listen for when save button is clicked
// add an event listener- 
// var container = $
// 2) each block is savable independent of the other blocks


// WHEN I refresh the page
// THEN the saved events persist
//1) when page loads, use local storage to grab any data and display it to screen. 



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.







$(function () {

  var currentDay = document.getElementById('currentDay')


  function todayDay() {
    var now = dayjs().format('dddd, MMMM D');
    currentDay.textContent = now;
  }
  todayDay();



function blockClass() {
  var currentTime = dayjs().format('H');
  var timeBlockEl = document.querySelectorAll('.time-block')


  timeBlockEl.forEach(function (timeBlockEl){
    var currentHour = parseInt(timeBlockEl.getAttribute('id'));

      console.log(currentHour);
      console.log(currentTime);

      if ( currentHour < currentTime ) {
        timeBlockEl.classList.add('past');
        timeBlockEl.classList.remove('present');
        timeBlockEl.classList.remove('future');
      } else if ( currentHour == currentTime) {
        timeBlockEl.classList.add('present');
        timeBlockEl.classList.remove('past');
        timeBlockEl.classList.remove('future');
      } else {
        timeBlockEl.classList.add('future');
        timeBlockEl.classList.remove('present');
        timeBlockEl.classList.remove('past');
      }
    })
};

blockClass();



 
  
  var row9 = $('#9');

  // event.currentTarget.classList[0]
  function saveFunction(event) {
    
// If i click the save button then I wnat everything in text area to be saved into local storage
    if (event.currentTarget.children[2].children[0].classList[0] === 'fas') {
      value = event.currentTarget.children[1].textContent
      localStorage.setItem('fas', value )
      localStorage.getItem('fas')
      console.log(event.currentTarget.children[1])
    }
  };

row9.on('click', saveFunction);


    // saveBtn.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   // How do i set the value below equal to the id of timeblocks? I cant call a function into this so how else?
    //   if (saveBtn) {
    //     localStorage.setItem('value', description.value)
    //     localStorage.getItem(description.value)

    //   }
    // });
    



// var what = " waopsdifpoasfn";
// localStorage.setItem('4', what)

  // event.target.previousElementSibling.value
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
