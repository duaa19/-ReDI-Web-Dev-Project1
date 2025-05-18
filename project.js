document.getElementById("searchButton").addEventListener("click", function () {
  const area = document.getElementById("area").value;
  const grade = document.getElementById("grade").value;
  const subject = document.getElementById("subject").value;
  const type = document.getElementById("type").value;

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // تصفير النتائج السابقة

  if (!area || !grade || !subject || !type) {
    resultsDiv.innerHTML = "<p style='color: red;'>Bitte füllen Sie alle Felder aus.</p>";
    return;
  }

  const cities = ["Berlin", "München", "Hamburg", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig"];
  const grades = [
    "1. Klasse", "2. Klasse", "3. Klasse", "4. Klasse", "5. Klasse", "6. Klasse",
    "7. Klasse", "8. Klasse", "9. Klasse", "10. Klasse", "11. Klasse", "12. Klasse"
  ];
  const subjects = ["Mathematik", "Deutsch", "Physik", "Chemie", "Biologie", "Geschichte"];
  const types = ["online", "vor Ort"];
  const times = ["vormittags", "nachmittags", "abends", "am Wochenende", "flexible Zeit"];
  const lastNames = ["Müller", "Schmidt", "Weber", "Schneider", "Fischer", "Koch", "Richter", "Wolf", "Bauer", "Becker"];

  const teachers = [];
  for (let i = 0; i < 10000; i++) {
    const name = `${Math.random() > 0.5 ? "Herr" : "Frau"} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    const city = cities[Math.floor(Math.random() * cities.length)];
    const gradeVal = grades[Math.floor(Math.random() * grades.length)];
    const subjectVal = subjects[Math.floor(Math.random() * subjects.length)];
    const typeVal = types[Math.floor(Math.random() * types.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    const phone = `0151-${Math.floor(1000000 + Math.random() * 9000000)}`;
    const experience = Math.floor(Math.random() * 21) + 1; // بين 1 و 21 سنة

    teachers.push({
      name,
      city,
      grade: gradeVal,
      subject: subjectVal,
      type: typeVal,
      time,
      phone,
      experience
    });
  }

  const filteredTeachers = teachers.filter(teacher =>
    teacher.city === area &&
    teacher.grade === grade &&
    teacher.subject === subject &&
    teacher.type === type
  );

  if (filteredTeachers.length === 0) {
    resultsDiv.innerHTML = "<p style='color: darkblue;'>Keine passenden Lehrer gefunden.</p>";
    return;
  }

  filteredTeachers.forEach(teacher => {
    const teacherDiv = document.createElement("div");
    teacherDiv.className = "teacher";
    teacherDiv.textContent = teacher.name;

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "teacher-details";
    detailsDiv.style.display = "none";
    detailsDiv.innerHTML = `
      <p><strong>Fach:</strong> ${teacher.subject}</p>
      <p><strong>Stadt:</strong> ${teacher.city}</p>
      <p><strong>Klasse:</strong> ${teacher.grade}</p>
      <p><strong>Typ:</strong> ${teacher.type}</p>
      <p><strong>Zeit:</strong> ${teacher.time}</p>
      <p><strong>Telefon:</strong> ${teacher.phone}</p>
      <p><strong>Erfahrung:</strong> ${teacher.experience} Jahre</p>
    `;

    teacherDiv.addEventListener("click", () => {
      detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
    });

    resultsDiv.appendChild(teacherDiv);
    resultsDiv.appendChild(detailsDiv);
  });
});
