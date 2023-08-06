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


    timeBlockEl.forEach(function (timeBlockEl) {
      var currentHour = parseInt(timeBlockEl.getAttribute('id'));

      console.log(currentHour);
      console.log(currentTime);

      if (currentHour < currentTime) {
        timeBlockEl.classList.add('past');
        timeBlockEl.classList.remove('present');
        timeBlockEl.classList.remove('future');
      } else if (currentHour == currentTime) {
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
  var row10 = $('#10');
  var row11 = $('#11');
  var row12 = $('#12');
  var row13 = $('#13');
  var row14 = $('#14');
  var row15 = $('#15');
  var row16 = $('#16');
  var row17 = $('#17');

  function saveFunction(event) {
    event.preventDefault();

    if (event.currentTarget.children[2].children[0].classList[0] === 'fas') {
      value = event.currentTarget.children[1].value
      localStorage.setItem('fas', value)
      localStorage.getItem('fas')
      console.log(event.currentTarget.children[1])
    }
  };

  row9.on('click', saveFunction);
  row10.on('click', saveFunction);
  row11.on('click', saveFunction);
  row12.on('click', saveFunction);
  row13.on('click', saveFunction);
  row14.on('click', saveFunction);
  row15.on('click', saveFunction);
  row16.on('click', saveFunction);
  row17.on('click', saveFunction);

});
