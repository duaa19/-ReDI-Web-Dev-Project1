document.getElementById("searchButton").addEventListener("click", function() {
  const area = document.getElementById("area").value;
  const grade = document.getElementById("grade").value;
  const subject = document.getElementById("subject").value;
  const type = document.getElementById("type").value;

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // تصفير النتائج السابقة

  // تحقق من أن كل الحقول ممتلئة
  if (!area || !grade || !subject || !type) {
    resultsDiv.innerHTML = "<p style='color: red;'>Please fill in all fields to search.</p>";
    return;
  }

  // أمثلة على المعلمين (يمكنك تغييرهم لاحقًا أو جلبهم من قاعدة بيانات)
  const teachers = [
    { name: "Herr Müller", subject: "Mathematik", city: "Berlin", type: "online" , grade: "10. klasse" },
    { name: "Frau Schmidt", subject: "Deutsch", city: "Hamburg", type: "vor Ort" , grade: "10. klasse"},
    { name: "Herr Weber", subject: "Physik", city: "Köln", type: "online", grade: "10. klasse" },
    { name: "Frau Becker", subject: "Chemie", city: "München", type: "vor Ort",grade: "10. klasse" },
  ];

  // فلترة حسب الاختيارات
  const filteredTeachers = teachers.filter(teacher =>
    teacher.city === area &&
    teacher.subject === subject &&
    teacher.type === type &&
    teacher.grade.toLowerCase() === grade.toLowerCase()

  );

  if (filteredTeachers.length === 0) {
    resultsDiv.innerHTML = "<p style='color: darkblue;'>No teachers found matching your criteria.</p>";
    return;
  }

  // عرض النتائج باستخدام div مع كلاس "teacher"
  filteredTeachers.forEach(teacher => {
    const teacherDiv = document.createElement("div");
    teacherDiv.className = "teacher";
    teacherDiv.textContent = teacher.name ;
 // أضفناه للنتائج في الصفحة

  // عنصر لعرض التفاصيل عند الضغط
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "teacher-details";
  detailsDiv.style.display = "none"; // نخفيه في البداية

  // النص الذي يحتوي على التفاصيل
  const detailsTeacher = document.createElement("div");
  detailsTeacher.className = "teacher-details";

   detailsDiv.innerHTML = `
  
    <p><strong><Subject:</strong> ${teacher.subject}</p>
    <p><strong>City:</strong> ${teacher.city}</p>
    <p><strong>Grade:</strong> ${teacher.grade}</p>
    <p><strong>Type:</strong> ${teacher.type}</p>
  `;

  // عند الضغط على اسم المعلم، نعرض أو نخفي التفاصيل
  teacherDiv.addEventListener("click", () => {
    detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
  });

  // نضيف العناصر إلى نتائج الصفحة
  resultsDiv.appendChild(teacherDiv);
  resultsDiv.appendChild(detailsDiv);
});
  });
