'use strict';

document.getElementById('schoolName').innerHTML = NIKA.SCHOOL_NAME;
document.getElementById('cityName').innerHTML = NIKA.CITY_NAME;
document.getElementById('className').innerHTML = NIKA.CLASSES[classID];

function getData() {
  var classInputName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '7а';
  var text = '';
  var dayID;
  var classID;
  var roomID = [];
  var subjectID = [];
  var teacherID = [];
  var room = [];
  var subject = [];
  var teacher = [];
  var i, y;

  for (i in NIKA.CLASSES) {
    if (NIKA.CLASSES[i] === classInputName) {
      classID = i;
    }
  }

  for (i in NIKA.CLASS_SCHEDULE[Object.keys(NIKA.CLASS_SCHEDULE)[0]][classID]) {
    for (y in NIKA.DAY_NAMES) {
      if (i.toString()[0] === y && y !== dayID) {
        text += "<h3>".concat(NIKA.DAY_NAMES[y - 1], "</h3><br>");
        dayID = y;
      }
    }

    roomID[roomID.length] = NIKA.CLASS_SCHEDULE[Object.keys(NIKA.CLASS_SCHEDULE)[0]][classID][i].r[0];
    subjectID[teacherID.length] = NIKA.CLASS_SCHEDULE[Object.keys(NIKA.CLASS_SCHEDULE)[0]][classID][i].s[0];
    teacherID[teacherID.length] = NIKA.CLASS_SCHEDULE[Object.keys(NIKA.CLASS_SCHEDULE)[0]][classID][i].t[0];
    room[room.length] = NIKA.ROOMS[roomID[roomID.length - 1]];
    subject[subject.length] = NIKA.SUBJECTS[subjectID[subjectID.length - 1]];
    teacher[teacher.length] = NIKA.TEACHERS[teacherID[teacherID.length - 1]];
    text += "".concat(i.toString()[1] + i.toString()[2], ": ").concat(room[room.length - 1], " ").concat(subject[subject.length - 1], " - ").concat(teacher[teacher.length - 1], "<br><br>");
  }

  document.getElementById('text').innerHTML = text;
}
/*
let NIKA_SCRIPT = document.createElement('script');

while (NIKA === undefined) {  
  ddd = String(date.getDate()).padStart(2, '0');
  dmm = String(date.getMonth() + 1).padStart(2, '0');
  dyyyy = date.getFullYear();

  thh = String(date.getHours()).padStart(2, '0');
  tmm = String(date.getMinutes()).padStart(2, '0');
  tss = String(date.getSeconds()).padStart(2, '0');

  date.setSeconds(date.getSeconds() - 1)

  console.log(`https://lyceum.nstu.ru/rasp/nika_data_${ddd}${dmm}${dyyyy}_${thh}${tmm}${tss}.js`)

  
  NIKA_SCRIPT.setAttribute( 'src', `https://lyceum.nstu.ru/rasp/nika_data_${ddd}${dmm}${dyyyy}_${thh}${tmm}${tss}.js` );
  document.body.appendChild( NIKA_SCRIPT );
}*/