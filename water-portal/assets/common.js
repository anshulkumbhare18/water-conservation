/* Languages: index 0 = English, 1 = Hindi, 2 = Marathi. Every text is an array [en, hi, mr]. */
const CODE = ["en", "hi", "mr"], SUF = ["", "in Hindi", "in Marathi"];
let LI = 0, theme = "light";
try { LI = +localStorage.getItem("lang") || 0; theme = localStorage.getItem("theme") || "light" } catch (e) { }
const T = a => a[LI] || a[0];
const G = q => "https://www.google.com/search?hl=" + CODE[LI] + "&q=" + encodeURIComponent((q + " " + SUF[LI]).trim());
const GI = q => "https://www.google.com/search?tbm=isch&hl=" + CODE[LI] + "&q=" + encodeURIComponent(q);
const YT = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent((q + " " + SUF[LI]).trim());
const WK = p => "https://en.wikipedia.org/wiki/" + p;
const ext = (u, t) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
const linkRow = (q, w) => `<div class="links">${ext(G(q), T(S.g))}${ext(GI(q), T(S.im))}${ext(YT(q), T(S.yt))}${w ? ext(WK(w), T(S.wk)) : ""}</div>`;
const pages = ["index.html", "learn.html", "tracker.html", "schemes.html", "quiz.html", "resources.html"];
const here = location.pathname.split("/").pop() || "index.html";
const S = {
    brand: ["Jal Sanrakshan", "जल संरक्षण", "जलसंधारण"],
    n0: ["Home", "होम", "मुख्यपृष्ठ"], n1: ["Learn", "सीखें", "शिका"], n2: ["Tracker", "ट्रैकर", "ट्रॅकर"], n3: ["Schemes", "योजनाएं", "योजना"], n4: ["Quiz", "क्विज़", "प्रश्नमंजुषा"], n5: ["Resources", "संसाधन", "संदर्भ"],
    dark: ["Dark mode", "डार्क मोड", "डार्क मोड"],
    g: ["Google", "गूगल", "गुगल"], im: ["Images", "फोटो", "फोटो"], yt: ["YouTube", "यूट्यूब", "यूट्यूब"], wk: ["Wikipedia", "विकिपीडिया", "विकिपीडिया"],
    fProj: ["CEP / FP Project", "CEP / FP प्रोजेक्ट", "CEP / FP प्रकल्प"],
    fTopic: ["Water Conservation and Sustainable Water Management", "जल संरक्षण और सतत जल प्रबंधन", "जलसंधारण आणि शाश्वत जल व्यवस्थापन"],
    fCol: ["S.B. Jain Institute of Technology, Management and Research, Nagpur", "एस.बी. जैन इंस्टिट्यूट ऑफ टेक्नोलॉजी, मैनेजमेंट एंड रिसर्च, नागपुर", "एस.बी. जैन इन्स्टिट्यूट ऑफ टेक्नॉलॉजी, मॅनेजमेंट अँड रिसर्च, नागपूर"],
    fTeam: ["Team", "टीम", "संघ"], fGuide: ["Guided by", "मार्गदर्शक", "मार्गदर्शक"],
    hP: ["A student portal to learn, track, test and explore. Click any topic and real information opens in a new tab.", "सीखने, ट्रैक करने, परखने और खोजने के लिए छात्र पोर्टल। किसी भी विषय पर क्लिक करें, नए टैब में असली जानकारी खुलेगी।", "शिकण्यासाठी, नोंद ठेवण्यासाठी, तपासण्यासाठी आणि शोधण्यासाठी विद्यार्थी पोर्टल. कोणत्याही विषयावर क्लिक करा, नवीन टॅबमध्ये खरी माहिती उघडेल."],
    ph: ["Search any water topic", "पानी से जुड़ा कोई भी विषय खोजें", "पाण्याशी संबंधित कोणताही विषय शोधा"],
    sb: ["Search on Google", "Google पर खोजें", "Google वर शोधा"],
    st1: ["of Earth's water is salty", "पृथ्वी का पानी खारा है", "पृथ्वीवरील पाणी खारट आहे"],
    st2: ["of world population lives in India", "विश्व की आबादी भारत में रहती है", "जगाची लोकसंख्या भारतात राहते"],
    st3: ["of world freshwater is in India", "विश्व का मीठा पानी भारत में है", "जगातील गोडे पाणी भारतात आहे"],
    st4: ["of water use goes to farming (approx.)", "पानी का उपयोग खेती में होता है (लगभग)", "पाण्याचा वापर शेतीत होतो (अंदाजे)"],
    hFod: ["Water fact of the day", "आज का जल तथ्य", "आजचे जल तथ्य"],
    hExp: ["Explore the portal", "पोर्टल देखें", "पोर्टल पहा"], hExpP: ["Five sections, each with something to click and do.", "पांच भाग, हर एक में कुछ करने के लिए।", "पाच विभाग, प्रत्येकात काही करण्यासारखे."],
    hTr: ["Trending topics", "चर्चित विषय", "लोकप्रिय विषय"], hTrP: ["Each card opens Google, Images, YouTube or Wikipedia in a new tab.", "हर कार्ड नए टैब में गूगल, फोटो, यूट्यूब या विकिपीडिया खोलता है।", "प्रत्येक कार्ड नवीन टॅबमध्ये गुगल, फोटो, यूट्यूब किंवा विकिपीडिया उघडतो."],
    hOpen: ["Open", "खोलें", "उघडा"],
    d1: ["Five conservation methods explained with step-by-step working.", "जल बचाने के पांच तरीके, चरण-दर-चरण समझाए गए।", "जलसंधारणाच्या पाच पद्धती, टप्प्याटप्प्याने समजावल्या."],
    d2: ["Tick habits, fill the tank, and calculate your daily water use.", "आदतें चुनें, टंकी भरें और रोज़ की पानी खपत निकालें।", "सवयी निवडा, टाकी भरा आणि रोजचा पाणी वापर मोजा."],
    d3: ["Government initiatives with links to official sites.", "सरकारी योजनाएं, आधिकारिक साइट के लिंक के साथ।", "सरकारी योजना, अधिकृत साइटच्या लिंकसह."],
    d4: ["Test yourself with instant answers and a final score.", "तुरंत उत्तर और अंतिम स्कोर के साथ खुद को परखें।", "लगेच उत्तरे व अंतिम गुणांसह स्वतःला तपासा."],
    d5: ["Google, YouTube and official sources for every topic.", "हर विषय के लिए गूगल, यूट्यूब और आधिकारिक स्रोत।", "प्रत्येक विषयासाठी गुगल, यूट्यूब व अधिकृत स्रोत."],
    learnH: ["Learn the methods", "तरीके सीखें", "पद्धती शिका"],
    learnP: ["Pick a method to see how it works, where it is used, and open more details online.", "एक तरीका चुनें और देखें कि यह कैसे काम करता है, कहां इस्तेमाल होता है, और ऑनलाइन और जानें।", "एक पद्धत निवडा आणि ती कशी कार्य करते, कुठे वापरतात ते पहा व ऑनलाइन अधिक माहिती मिळवा."],
    lHow: ["How it works", "यह कैसे काम करता है", "हे कसे कार्य करते"], lUse: ["Where it is used:", "कहां इस्तेमाल होता है:", "कुठे वापरले जाते:"], lMore: ["Learn more online", "ऑनलाइन और जानें", "ऑनलाइन अधिक जाणून घ्या"],
    trH: ["My water-saving tracker", "मेरा जल बचत ट्रैकर", "माझा जलबचत ट्रॅकर"],
    trP: ["Tick the habits you follow. The tank fills with your estimated daily saving. Figures are approximate and for awareness.", "जो आदतें आप अपनाते हैं उन पर टिक करें। टंकी आपकी अनुमानित रोज़ की बचत से भरती है। आंकड़े लगभग हैं, जागरूकता के लिए।", "तुम्ही पाळत असलेल्या सवयींवर टिक करा. टाकी तुमच्या अंदाजे रोजच्या बचतीने भरते. आकडे अंदाजे असून जागरूकतेसाठी आहेत."],
    tL: ["litres saved per day", "लीटर प्रति दिन बचत", "लिटर प्रतिदिन बचत"], tM: ["litres per month", "लीटर प्रति माह", "लिटर प्रतिमहिना"],
    tV0: ["Tick a habit to begin.", "शुरू करने के लिए आदत चुनें।", "सुरुवात करण्यासाठी सवय निवडा."], tV1: ["Good start. Add more habits.", "अच्छी शुरुआत। और आदतें जोड़ें।", "चांगली सुरुवात. आणखी सवयी जोडा."], tV2: ["Great! You are saving a lot of water.", "बहुत बढ़िया! आप बहुत पानी बचा रहे हैं।", "छान! तुम्ही खूप पाणी वाचवत आहात."], tV3: ["Excellent! You are a water champion.", "शानदार! आप जल योद्धा हैं।", "उत्कृष्ट! तुम्ही जलयोद्धा आहात."],
    cH: ["Daily use calculator", "रोज़ के पानी का कैलकुलेटर", "रोजच्या पाण्याचा कॅल्क्युलेटर"], cP: ["Enter your numbers to estimate a rough daily use.", "अपने आंकड़े भरें, लगभग रोज़ की खपत पता चलेगी।", "तुमचे आकडे भरा, अंदाजे रोजचा वापर कळेल."],
    cB: ["Buckets for bathing (about 15 L each)", "नहाने की बाल्टियां (लगभग 15 L प्रति)", "आंघोळीच्या बादल्या (सुमारे 15 L प्रत्येकी)"], cW: ["Washing machine loads (about 50 L each)", "वॉशिंग मशीन लोड (लगभग 50 L प्रति)", "वॉशिंग मशीन लोड (सुमारे 50 L प्रत्येकी)"], cC: ["Cooking, drinking and dishes (litres)", "खाना, पीना और बर्तन (लीटर)", "स्वयंपाक, पिणे व भांडी (लिटर)"],
    cGo: ["Calculate", "गणना करें", "मोजा"], cE: ["Estimated use", "अनुमानित खपत", "अंदाजे वापर"], cU: ["litres per day", "लीटर प्रति दिन", "लिटर प्रतिदिन"],
    cHi: ["This is above a commonly quoted 135 L per person guideline. Try the habits above.", "यह प्रति व्यक्ति 135 L की सामान्य सीमा से ज़्यादा है। ऊपर की आदतें अपनाएं।", "हे प्रति व्यक्ती 135 L च्या सामान्य मर्यादेपेक्षा जास्त आहे. वरील सवयी अवलंबा."],
    cLo: ["Nice, this is within a commonly quoted 135 L per person guideline.", "बढ़िया, यह प्रति व्यक्ति 135 L की सामान्य सीमा के अंदर है।", "छान, हे प्रति व्यक्ती 135 L च्या सामान्य मर्यादेत आहे."],
    scH: ["Government initiatives", "सरकारी योजनाएं", "सरकारी योजना"], scP: ["Click a scheme to expand it, then open the official website or search more.", "योजना पर क्लिक करें, फिर आधिकारिक वेबसाइट खोलें या और खोजें।", "योजनेवर क्लिक करा, मग अधिकृत वेबसाइट उघडा किंवा अधिक शोधा."],
    of: ["Official website", "आधिकारिक वेबसाइट", "अधिकृत वेबसाइट"], ow: ["Open website", "वेबसाइट खोलें", "वेबसाइट उघडा"],
    qzH: ["Test your knowledge", "अपना ज्ञान परखें", "तुमचे ज्ञान तपासा"], qzP: ["Six questions with instant answers and a final score.", "छह प्रश्न, तुरंत उत्तर और अंतिम स्कोर।", "सहा प्रश्न, लगेच उत्तरे आणि अंतिम गुण."],
    qCor: ["Correct. ", "सही। ", "बरोबर. "], qWr: ["Not quite. ", "गलत। ", "चूक. "], qSo: ["Score so far", "अब तक का स्कोर", "आतापर्यंतचा गुण"], qFin: ["Final score", "अंतिम स्कोर", "अंतिम गुण"],
    qEx: ["Excellent!", "शानदार!", "उत्कृष्ट!"], qGd: ["Good effort!", "अच्छा प्रयास!", "छान प्रयत्न!"], qRv: ["Revisit the Learn page and try again.", "'सीखें' पेज दोबारा पढ़ें और फिर कोशिश करें।", "'शिका' पान पुन्हा वाचा व पुन्हा प्रयत्न करा."], qRe: ["Try again", "फिर से कोशिश करें", "पुन्हा प्रयत्न करा"],
    rsH: ["Resources", "संसाधन", "संदर्भ"], rsP: ["Every card opens real information in a new tab.", "हर कार्ड नए टैब में असली जानकारी खोलता है।", "प्रत्येक कार्ड नवीन टॅबमध्ये खरी माहिती उघडतो."],
    rsT: ["Topics", "विषय", "विषय"], rsO: ["Official websites", "आधिकारिक वेबसाइट", "अधिकृत वेबसाइट"]
};
const TOPICS = [
    [["Water scarcity", "जल संकट", "पाणीटंचाई"], ["Why usable freshwater is limited.", "उपयोग लायक मीठा पानी सीमित क्यों है।", "वापरण्यायोग्य गोडे पाणी मर्यादित का आहे."], "water scarcity causes and solutions", "Water_scarcity"],
    [["Water conservation", "जल संरक्षण", "जलसंधारण"], ["Ways to use less water.", "कम पानी इस्तेमाल करने के तरीके।", "कमी पाणी वापरण्याचे मार्ग."], "water conservation methods", "Water_conservation"],
    [["Rainwater harvesting", "वर्षा जल संचयन", "पावसाचे पाणी साठवणे"], ["Collect and store rain.", "बारिश का पानी जमा करें और रखें।", "पावसाचे पाणी गोळा करून साठवा."], "rainwater harvesting methods", "Rainwater_harvesting"],
    [["Drip irrigation", "ड्रिप सिंचाई", "ठिबक सिंचन"], ["Efficient farm watering.", "खेत में कुशल सिंचाई।", "शेतीसाठी कार्यक्षम सिंचन."], "drip irrigation system", "Drip_irrigation"],
    [["Greywater recycling", "ग्रेवाटर पुनःउपयोग", "ग्रेवॉटर पुनर्वापर"], ["Reuse bathing and washing water.", "नहाने और धोने का पानी दोबारा इस्तेमाल करें।", "आंघोळ व धुण्याचे पाणी पुन्हा वापरा."], "greywater recycling system", "Greywater"],
    [["Watershed management", "जलग्रहण क्षेत्र प्रबंधन", "पाणलोट क्षेत्र व्यवस्थापन"], ["Manage the whole catchment.", "पूरे जलग्रहण क्षेत्र का प्रबंधन।", "संपूर्ण पाणलोट क्षेत्राचे व्यवस्थापन."], "watershed management India", "Watershed_management"],
    [["Groundwater depletion", "भूजल का गिरता स्तर", "भूजल पातळीत घट"], ["Falling water tables.", "गिरता भूजल स्तर।", "खालावत जाणारी भूजल पातळी."], "groundwater depletion India", "Groundwater_depletion"],
    [["Wastewater treatment", "अपशिष्ट जल उपचार", "सांडपाणी प्रक्रिया"], ["Cleaning used water.", "इस्तेमाल किए पानी की सफाई।", "वापरलेल्या पाण्याचे शुद्धीकरण."], "wastewater treatment process", "Sewage_treatment"],
    [["Water pollution", "जल प्रदूषण", "जलप्रदूषण"], ["Effects on rivers and drinking water.", "नदियों और पीने के पानी पर असर।", "नद्या आणि पिण्याच्या पाण्यावर परिणाम."], "water pollution causes effects", "Water_pollution"]];
document.documentElement.dataset.theme = theme;
document.body.insertAdjacentHTML("afterbegin", '<nav id="nv" aria-label="Main"></nav>');
document.body.insertAdjacentHTML("beforeend", '<footer id="ft"></footer>');
function chrome() {
    nv.innerHTML = `<b>${T(S.brand)}</b>${pages.map((p, i) => `<a href="${p}" class="${p === here ? "on" : ""}">${T(S["n" + i])}</a>`).join("")}<select id="lg" aria-label="Language / भाषा">${["English", "हिन्दी", "मराठी"].map((n, i) => `<option value="${i}" ${i === LI ? "selected" : ""}>${n}</option>`).join("")}</select><button id="tg">${T(S.dark)}</button>`;
    lg.onchange = () => setLang(+lg.value);
    tg.onclick = () => { theme = theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = theme; try { localStorage.setItem("theme", theme) } catch (e) { } };
    ft.innerHTML = `<div class="in"><div><h3>${T(S.fProj)}</h3><p>${T(S.fTopic)}<br>${T(S.fCol)}</p></div><div><h3>${T(S.fTeam)}</h3><p>Akanshri Kailash Borkar (CD26D001)<br>Anshul Prakash Kumbhare (CD26D002)<br>Anushka Vikas Thakre (CD26D003)<br>Arpita Ramesh Ikhankar (CD26D004)</p></div><div><h3>${T(S.fGuide)}</h3><p>Ms. Pratiksha Bhimte</p></div></div>`;
}
function applyS() { document.querySelectorAll("[data-t]").forEach(e => e.textContent = T(S[e.dataset.t])); document.querySelectorAll("[data-ph]").forEach(e => e.placeholder = T(S[e.dataset.ph])) }
function setLang(i) { LI = i; try { localStorage.setItem("lang", i) } catch (e) { } document.documentElement.lang = CODE[i]; chrome(); applyS(); if (typeof draw === "function") draw() }
function tabs(el, names, cur, on) { el.innerHTML = names.map((n, i) => `<button role="tab" aria-selected="${i === cur}" data-i="${i}">${T(n)}</button>`).join(""); el.querySelectorAll("button").forEach(b => b.onclick = () => on(+b.dataset.i)) }
