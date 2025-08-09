document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const resultBox = document.getElementById("quizResult");
  if (quizForm && resultBox) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const a1 = document.getElementById("q1").value;
      const a2 = document.getElementById("q2").value;
      const a3 = document.getElementById("q3").value;
      const a4 = document.getElementById("q4").value;
      const a6 = document.getElementById("q6").value;
      let score = 0;
      if (a1 === "All of the above") score++;
      if (a2 === "All of the above") score++;
      if (a3 === "Lost‑wax casting") score++;
      if (a4 === "Historical events, royal figures, and everyday life") score++;
      if (a6 === "Scattered around the world in museums") score++;
      resultBox.hidden = false;
      if (score >= 4) {
        resultBox.textContent = `🎉 Amazing! You got ${score} out of 5 right!`;
        resultBox.style.color = "green";
      } else if (score >= 2) {
        resultBox.textContent = `👍 Not bad — you got ${score} out of 5.`;
        resultBox.style.color = "orange";
      } else {
        resultBox.textContent = `😅 Oops! Only ${score} out of 5. Try again!`;
        resultBox.style.color = "red";
      }
      localStorage.setItem("lastQuizScore", score);
    });
  }
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const lastMod = document.getElementById("lastModified");
  if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;
});





