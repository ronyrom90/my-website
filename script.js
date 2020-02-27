const link = document.getElementById("clickToUp");
link.addEventListener("click", e => {
  e.preventDefault();
  console.log(link.href);
  // const goal = link.href
  const goal = document.querySelector(link.getAttribute("href"));
  console.log(goal);
  goal.scrollIntoView({ behavior: "smooth" });
});
