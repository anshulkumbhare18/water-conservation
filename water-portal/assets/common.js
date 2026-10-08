const G = q => "https://www.google.com/search?q=" + encodeURIComponent(q);
const GI = q => "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(q);
const YT = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const WK = p => "https://en.wikipedia.org/wiki/" + p;
const ext = (u, t) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
const linkRow = (q, w) => `<div class="links">${ext(G(q), "Google")}${ext(GI(q), "Images")}${ext(YT(q), "YouTube")}${w ? ext(WK(w), "Wikipedia") : ""}</div>`;
const pages = [["index.html", "Home"], ["learn.html", "Learn"], ["tracker.html", "Tracker"], ["schemes.html", "Schemes"], ["quiz.html", "Quiz"], ["resources.html", "Resources"]];
const here = location.pathname.split("/").pop() || "index.html";
let theme = "light"; try { theme = localStorage.getItem("theme") || "light" } catch (e) { }
document.documentElement.dataset.theme = theme;
document.body.insertAdjacentHTML("afterbegin", `<nav aria-label="Main"><b>Jal Sanrakshan</b>${pages.map(p => `<a href="${p[0]}" class="${p[0] === here ? "on" : ""}">${p[1]}</a>`).join("")}<button id="tg" aria-label="Toggle dark mode">Dark mode</button></nav>`);
document.getElementById("tg").onclick = () => { theme = theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = theme; try { localStorage.setItem("theme", theme) } catch (e) { } };
document.body.insertAdjacentHTML("beforeend", `<footer><div class="in"><div><h3>CEP / FP Project</h3><p>Water Conservation and Sustainable Water Management<br>NIT Polytechnic, Nagpur</p></div><div><h3>Team</h3><p>Akanshri Kailash Borkar (CD26D001)<br>Anshul Prakash Kumbhare (CD26D002)<br>Anushka Vikas Thakre (CD26D003)<br>Arpita Ramesh Ikhankar (CD26D004)</p></div><div><h3>Guided by</h3><p>Ms. Pratiksha Bhimte</p></div></div></footer>`);
function makeTabs(el, items, render) { items.forEach((it, i) => { const b = document.createElement("button"); b.textContent = it.t; b.setAttribute("role", "tab"); b.onclick = () => sel(i); el.appendChild(b) }); function sel(i) { [...el.children].forEach((b, j) => b.setAttribute("aria-selected", j === i)); render(items[i]) } sel(0) }
