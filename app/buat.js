document.getElementById('mapel').addEventListener('input', function() {
  const mapel = this.value;
  const guruInput = document.getElementById('guru');

  // Define the mapping between subjects and teachers
const mapelGuruMapping = {
  'Sejarah': 'SELVI FARIDA',
  'Jepang': 'SITI AISYAH',
  'Mjt': 'TARYANTO',
  'Dt': 'BAYHAQY',
  'Ipas': 'HENISAH PASARIBU',
  'Pjok': 'DONNY ZUSTITIAWAN',
  'Pb': 'SEPTIANDARI',
  'Bahasa Sunda': 'Dra. SUDIARTI',
  'Matematika': 'NURUL HIKMAH',
  'K3lh': 'NUR SULAIMAN',
  'Bahasa Indonesia': 'SONNIA SEPTIANI',
  'Pau': 'IHYA ULUMUDDIN',
  'Seni Budaya': 'RURI RAKASIWI',
  'Pk': 'SEPTIANDARI',
  'Bahasa Inggris': 'BATARI RAHMA SYAFINA',
  'Agama': 'NUR INAYAH',
  'Informatika': 'ADAM MALIK MUIS'
};


  // If the selected subject has a corresponding teacher, set it automatically
  if (mapelGuruMapping[mapel]) {
      guruInput.value = mapelGuruMapping[mapel];
  } else {
      guruInput.value = '';  // Clear the field if no match is found
  }
});


  document.addEventListener('DOMContentLoaded', function () {
      const deadlineInput = document.getElementById('deadline');
      const calendarIcon = document.getElementById('calendar-icon');
      const calendarPopup = document.getElementById('calendar-popup');

      const generateCalendar = (year, month) => {
          const daysInMonth = new Date(year, month + 1, 0).getDate();
          const startDay = new Date(year, month, 1).getDay();

          let calendarHTML = '<table>';
          calendarHTML += '<thead><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>';
          calendarHTML += '<tbody><tr>';

          for (let i = 0; i < startDay; i++) {
              calendarHTML += '<td></td>';
          }

          for (let day = 1; day <= daysInMonth; day++) {
              if ((startDay + day - 1) % 7 === 0) {
                  calendarHTML += '</tr><tr>';
              }
              calendarHTML += `<td class="calendar-day">${day}</td>`;
          }

          calendarHTML += '</tr></tbody></table>';
          return calendarHTML;
      };

      const showCalendarPopup = () => {
          const today = new Date();
          calendarPopup.innerHTML = generateCalendar(today.getFullYear(), today.getMonth());
          calendarPopup.classList.remove('hidden');
      };

      const hideCalendarPopup = () => {
          calendarPopup.classList.add('hidden');
      };

      calendarIcon.addEventListener('click', function () {
          showCalendarPopup();
      });

      calendarPopup.addEventListener('click', function (e) {
          if (e.target.classList.contains('calendar-day')) {
              const day = e.target.textContent;
              const today = new Date();
              const selectedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${day.padStart(2, '0')}/${today.getFullYear()}`;
              deadlineInput.value = selectedDate;
              hideCalendarPopup();
          }
      });

      document.addEventListener('click', function (e) {
          if (!calendarPopup.contains(e.target) && e.target !== calendarIcon) {
              hideCalendarPopup();
          }
      });
  });
