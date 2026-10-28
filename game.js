(() => {
  "use strict";
  const SAVE_KEY = "myLittleLife_tandskoterska_v1";
  const locations = {
    home: {name:"Sweet Home", eyebrow:"YOUR SAFE PLACE", emoji:"🏡", description:"Căn hộ nhỏ ấm áp, nơi Miso và Boba thường nằm chờ bạn bên cửa sổ.", actions:[
      {id:"feed",emoji:"🐈",title:"Cho mèo ăn",desc:"Hai cái bụng nhỏ đang réo. Chăm mèo làm bạn thấy vui hơn.",cost:0,time:20,energy:-3,mood:8,cat:35,goal:"cats",result:"Miso ăn trước, còn Boba thì nhất định phải kiểm tra bát của bạn cùng nhà."},
      {id:"clean",emoji:"🧹",title:"Dọn căn hộ",desc:"Dọn khay cát, xếp chăn và làm phòng dễ chịu hơn.",cost:0,time:25,energy:-8,mood:7,goal:"home",result:"Căn hộ gọn gàng hơn hẳn. Một việc nhỏ, cảm giác nhẹ nhõm lớn."},
      {id:"studyhome",emoji:"📚",title:"Ôn Parodontologi",desc:"Học 20 phút trước khi những việc khác cuốn bạn đi.",cost:0,time:30,energy:-12,knowledge:8,mood:2,goal:"study",result:"Bạn ôn lại gingivit, parodontit và cách phòng bệnh. Kiến thức tăng lên!"},
      {id:"rest",emoji:"🛋️",title:"Nghỉ ngơi một chút",desc:"Pha trà, cuộn mình trên sofa và nghe mưa ngoài cửa sổ.",cost:0,time:30,energy:18,mood:12,result:"Bạn dành một khoảng nghỉ cho mình. Không phải lúc nào cũng cần năng suất."},
      {id:"decorate",emoji:"🪴",title:"Trang trí căn hộ",desc:"Dùng món đồ đang có để làm góc nhà xinh hơn.",cost:0,time:25,energy:-5,mood:10,goal:"decor",result:"Bạn sắp xếp lại góc nhỏ cạnh cửa sổ. Căn hộ bắt đầu giống mình hơn."}
    ]},
    school: {name:"YH School",eyebrow:"FUTURE TANDSKÖTERSKA",emoji:"🦷",description:"Một ngày học tập để tiến gần hơn đến công việc tandsköterska. Mang theo sổ tay và chút can đảm.",actions:[
      {id:"class",emoji:"🦷",title:"Tham gia buổi học",desc:"Nghe giảng, ghi chú và học điều mới.",cost:0,time:90,energy:-22,knowledge:12,mood:2,goal:"study",result:"Bạn ghi lại những ý quan trọng và hiểu bài hơn một chút."},
      {id:"library",emoji:"📖",title:"Học ở thư viện",desc:"Tập trung ôn bài, không lướt điện thoại.",cost:0,time:60,energy:-17,knowledge:16,mood:-2,goal:"study",result:"Một giờ tập trung hiệu quả. Bạn tự hào vì đã kiên trì."},
      {id:"lunch",emoji:"🥪",title:"Mua bữa trưa",desc:"Nạp năng lượng trước tiết học tiếp theo.",cost:65,time:25,energy:8,mood:5,result:"Một bữa trưa đơn giản giúp bạn tỉnh táo hơn."},
      {id:"internship",emoji:"🩺",title:"Luyện kỹ năng LIA",desc:"Ôn quy trình, giao tiếp với bệnh nhân và làm việc nhóm.",cost:0,time:75,energy:-20,knowledge:10,mood:4,goal:"study",result:"Bạn luyện cách chuẩn bị dụng cụ và đặt sự an toàn, thoải mái của bệnh nhân lên trước."}
    ]},
    thrift: {name:"Secondhand Boutique",eyebrow:"HUNT FOR TREASURES",emoji:"🧥",description:"Một cửa hàng secondhand nhỏ với quần áo len, đồ sứ, khung tranh và những món đồ có câu chuyện.",actions:[
      {id:"browse",emoji:"🔎",title:"Ngắm đồ vintage",desc:"Đi một vòng xem có món nào khiến tim rung rinh.",cost:0,time:25,energy:-5,mood:8,result:"Bạn tìm thấy vài món thật đẹp, nhưng quyết định chờ xem thêm. Săn đồ không nhất thiết phải mua."},
      {id:"cardigan",emoji:"🧶",title:"Mua cardigan vintage",desc:"Một chiếc cardigan màu kem, dễ phối đồ.",cost:120,time:20,energy:-3,mood:12,item:"cardigan",goal:"thrift",result:"Bạn tìm được chiếc cardigan hoàn hảo với giá hời. Nó sẽ hợp với rất nhiều bộ đồ."},
      {id:"lamp",emoji:"🪔",title:"Mua đèn bàn cổ",desc:"Ánh sáng ấm áp cho góc đọc sách.",cost:95,time:20,energy:-3,mood:10,item:"lamp",goal:"thrift",result:"Chiếc đèn nhỏ khiến bạn tưởng tượng ra bao buổi tối đọc sách ấm áp."},
      {id:"vase",emoji:"🏺",title:"Mua bình hoa gốm",desc:"Một chiếc bình nhỏ cho bàn ăn.",cost:55,time:15,energy:-2,mood:7,item:"vase",goal:"thrift",result:"Một chiếc bình gốm xinh xắn đã có nhà mới."}
    ]},
    market: {name:"ICA Market",eyebrow:"LITTLE EVERYDAY ERRANDS",emoji:"🥕",description:"Đi mua những thứ cần thiết cho tuần mới. Nhớ nhìn ngân sách trước khi bỏ đồ vào giỏ nhé.",actions:[
      {id:"groceries",emoji:"🥕",title:"Mua đồ ăn cơ bản",desc:"Bánh mì, rau, sữa và vài thứ để nấu ở nhà.",cost:85,time:30,energy:-7,mood:3,goal:"errand",result:"Bạn mua đủ đồ cơ bản để có thể chuẩn bị vài bữa ăn ở nhà."},
      {id:"catfood",emoji:"🐟",title:"Mua thức ăn cho mèo",desc:"Bổ sung thức ăn cho Miso và Boba.",cost:49,time:15,energy:-3,cat:15,goal:"cats",result:"Túi đồ ăn của mèo đã được bổ sung. Hai bé sẽ không phải lo bữa tới."},
      {id:"treat",emoji:"🍪",title:"Mua món ăn vặt",desc:"Một món nhỏ để tự thưởng sau ngày dài.",cost:25,time:10,energy:2,mood:8,result:"Bạn chọn một món ăn vặt nhỏ. Đôi khi niềm vui không cần đắt tiền."}
    ]},
    cafe: {name:"Cozy Café",eyebrow:"SLOW DOWN A LITTLE",emoji:"☕",description:"Quán cà phê cạnh con phố nhỏ. Mùi cà phê, tiếng trò chuyện và một chỗ ngồi bên cửa sổ.",actions:[
      {id:"coffee",emoji:"☕",title:"Uống cà phê",desc:"Một ly ấm nóng và khoảng thời gian không vội.",cost:38,time:25,energy:8,mood:10,result:"Bạn ngồi bên cửa sổ, nhâm nhi cà phê và nhìn mọi người đi qua."},
      {id:"journal",emoji:"✍️",title:"Viết nhật ký",desc:"Ghi lại ba điều nhỏ khiến hôm nay đáng nhớ.",cost:0,time:25,energy:-3,mood:12,goal:"journal",result:"Bạn viết vài dòng cho chính mình. Một ngày bình thường cũng có những điều đáng giữ lại."},
      {id:"friends",emoji:"💌",title:"Nhắn tin cho bạn",desc:"Hỏi thăm một người bạn và lên kế hoạch gặp nhau.",cost:0,time:15,energy:0,mood:10,result:"Một cuộc trò chuyện ngắn khiến bạn cảm thấy kết nối hơn."}
    ]}
  };
  const outfits = [
    {id:"cozy",name:"Cozy Student",emoji:"👩🏻‍🎓",desc:"Áo len mềm, quần thoải mái và giày dễ đi học.",owned:true},
    {id:"classic",name:"Vintage Classic",emoji:"👗",desc:"Váy tối màu và cardigan thanh lịch.",owned:true},
    {id:"weekend",name:"Slow Sunday",emoji:"🧸",desc:"Đồ mặc nhà mềm mại cho một ngày chậm rãi.",owned:true},
    {id:"cardigan",name:"Secondhand Darling",emoji:"🧥",desc:"Cardigan vintage màu kem, tìm thấy ở cửa hàng đồ cũ.",item:"cardigan"},
    {id:"rainy",name:"Rainy Day",emoji:"🧣",desc:"Khăn len ấm và áo khoác cho ngày mưa.",price:75}
  ];
  const itemCatalog = {
    cardigan:{id:"cardigan",name:"Vintage cardigan",emoji:"🧶",type:"fashion",description:"Một chiếc cardigan màu kem."},
    lamp:{id:"lamp",name:"Đèn bàn cổ",emoji:"🪔",type:"decor",description:"Đèn bàn ánh sáng ấm."},
    vase:{id:"vase",name:"Bình hoa gốm",emoji:"🏺",type:"decor",description:"Bình gốm nhỏ màu đất."},
    plant:{id:"plant",name:"Cây xanh",emoji:"🪴",type:"decor",description:"Một chút xanh cho căn hộ."}
  };
  const chapters = [
    {title:"A Fresh Start",desc:"Bắt đầu một nhịp sống mới: học hành, chăm mèo và tìm niềm vui trong những điều giản dị.",goals:["cats","study","home"]},
    {title:"Little Treasures",desc:"Tìm một món đồ secondhand thật sự yêu thích và làm căn hộ ấm áp hơn.",goals:["thrift","decor","journal"]},
    {title:"Finding Your Balance",desc:"Học cách cân bằng việc học, nghỉ ngơi và ngân sách của mình.",goals:["study","errand","rest"]},
    {title:"Future Tandsköterska",desc:"Bạn đang xây nền tảng cho tương lai — từng buổi học, từng lựa chọn nhỏ.",goals:["study","cats","journal"]}
  ];
  const defaultState = () => ({
    day:1, hour:8, minute:0, money:850, energy:75, mood:80, knowledge:12, catCare:58,
    location:"home", outfit:"cozy", inventory:[], completed:[], dailyCompleted:[], journal:[],
    chapter:0, sound:false, lastAction:"", goalsDone:[], endOfDay:false
  });
  let state = loadGame();
  let selectedOutfit = state.outfit;
  let modalCallback = null;
  let toastTimer = null;
  const $ = id => document.getElementById(id);
  const clamp = (n,min=0,max=100) => Math.max(min,Math.min(max,n));
  function loadGame(){try{const raw=localStorage.getItem(SAVE_KEY);return raw?{...defaultState(),...JSON.parse(raw)}:defaultState()}catch(e){return defaultState()}}
  function saveGame(silent=false){try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));if(!silent)toast("Đã lưu game trên thiết bị này 💾")}catch(e){toast("Không thể lưu tự động trên trình duyệt này.")}renderStats()}
  function toast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
  function fmtTime(){return `${String(state.hour).padStart(2,"0")}:${String(state.minute).padStart(2,"0")}`}
  function weekday(){return ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"][(state.day-1)%7]}
  function renderStats(){
    $("day-label").textContent=`${weekday()} · DAY ${state.day}`;
    $("clock-label").textContent=fmtTime();
    $("money-stat").textContent=`${state.money} kr`;
    $("energy-stat").textContent=`${state.energy}%`;
    $("mood-stat").textContent=`${state.mood}%`;
    $("knowledge-stat").textContent=state.knowledge;
    $("cat-status").textContent=state.catCare>70?"Hai bé no bụng và đang rất vui vẻ.":state.catCare>35?"Hai bé đang chờ bạn để ý một chút.":"Hai bé cần được chăm sóc sớm nhé.";
    $("cat-meter").style.width=`${state.catCare}%`;
    $("weather-icon").textContent=(state.day%4===0)?"🌧️":(state.day%3===0)?"☁️":"🌤️";
    $("weather-label").textContent=(state.day%4===0)?"6°C · Có mưa":(state.day%3===0)?"7°C · Nhiều mây":"8°C · Se lạnh";
    renderChapter();
  }
  function renderChapter(){
    let c=chapters[Math.min(state.chapter,chapters.length-1)];
    $("chapter-tag").textContent=`CHAPTER ${state.chapter+1}`;
    $("chapter-title").textContent=c.title;
    $("chapter-desc").textContent=c.desc;
    const done=c.goals.filter(g=>state.goalsDone.includes(g)).length;
    $("chapter-progress").style.width=`${done/c.goals.length*100}%`;
    $("chapter-progress-label").textContent=`${done} / ${c.goals.length} mục tiêu hoàn thành`;
  }
  function showScreen(name){
    document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));
    const target=$(name==="map"?"map-screen":name==="wardrobe"?"wardrobe-screen":name==="inventory"?"inventory-screen":name==="journal"?"journal-screen":"location-screen");
    target.classList.remove("hidden");
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.go===name));
    if(name==="wardrobe")renderWardrobe();
    if(name==="inventory")renderInventory();
    if(name==="journal")renderJournal();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function goLocation(id){
    const loc=locations[id];if(!loc)return;
    state.location=id;
    $("location-art").textContent=loc.emoji;
    $("location-title").textContent=loc.name;
    $("location-eyebrow").textContent=loc.eyebrow;
    $("location-description").textContent=loc.description;
    $("action-grid").innerHTML="";
    loc.actions.forEach(a=>{
      const card=document.createElement("button");card.className="action-card";
      card.innerHTML=`<span class="action-emoji">${a.emoji}</span><strong>${a.title}</strong><p>${a.desc}</p><span class="action-meta"><span>${a.cost?`💰 ${a.cost} kr`:"♡ Miễn phí"}</span><span>⏳ ${a.time} phút</span></span>`;
      card.addEventListener("click",()=>doAction(a,id));$("action-grid").appendChild(card);
    });
    showScreen("location");
  }
  function doAction(a,locationId){
    if(a.cost && state.money<a.cost){openModal("💸","Chưa đủ ngân sách","Ví của bạn chưa đủ để mua món này. Bạn có thể chọn hoạt động miễn phí hoặc quay lại sau.",`Còn ${state.money} kr`,()=>{});return}
    if(state.energy<8 && a.energy<0 && a.id!=="rest"){openModal("😴","Lisa cần nghỉ một chút","Bạn đang khá mệt. Nghỉ ngơi sẽ giúp bạn có thêm năng lượng cho những việc quan trọng.",`Năng lượng hiện tại: ${state.energy}%`,()=>{});return}
    state.money-=a.cost||0;
    if(a.energy!==undefined)state.energy=clamp(state.energy+a.energy);
    if(a.mood!==undefined)state.mood=clamp(state.mood+a.mood);
    if(a.knowledge)state.knowledge+=a.knowledge;
    if(a.cat)state.catCare=clamp(state.catCare+a.cat);
    advanceTime(a.time);
    if(a.item){
      if(!state.inventory.includes(a.item))state.inventory.push(a.item);
      else {state.money+=Math.floor((a.cost||0)*0.5);a.result+=" Bạn đã có món tương tự nên nhận lại một phần tiền."}
      if(a.item==="cardigan"&&!outfits.find(o=>o.id==="cardigan").owned)outfits.find(o=>o.id==="cardigan").owned=true;
    }
    if(a.goal){state.goalsDone=[...new Set([...state.goalsDone,a.goal])];state.dailyCompleted=[...new Set([...state.dailyCompleted,a.goal])];}
    if(a.id==="rest"){state.goalsDone=[...new Set([...state.goalsDone,"rest"])]}
    state.lastAction=a.title;
    addJournal(a.title,a.result);
    saveGame(true);
    openModal(a.emoji,a.title,a.result,`${a.cost?`−${a.cost} kr · `:""}${a.time} phút · ${fmtTime()}`,()=>{showScreen("map");if(state.hour>=22)endDay()});
    renderStats();
  }
  function advanceTime(mins){state.minute+=mins;while(state.minute>=60){state.minute-=60;state.hour++}if(state.hour>=24){state.hour-=24;endDay()}}
  function endDay(){
    if(state.endOfDay)return;state.endOfDay=true;
    const rentDue=state.day%7===0?180:0;
    if(rentDue){state.money-=rentDue;toast(`Cuối tuần: đã trừ ${rentDue} kr chi phí nhà ở.`)}
    state.day++;state.hour=8;state.minute=0;state.energy=clamp(state.energy+35);state.mood=clamp(state.mood+10);state.catCare=clamp(state.catCare-22);state.dailyCompleted=[];state.endOfDay=false;
    if(state.chapter<chapters.length-1){
      const c=chapters[state.chapter];
      if(c.goals.every(g=>state.goalsDone.includes(g))){state.chapter++;openModal("🌷","Một chương mới bắt đầu",`Bạn đã hoàn thành mục tiêu của chương "${c.title}". Câu chuyện của Lisa tiếp tục với những điều mới để khám phá.`,`CHAPTER ${state.chapter+1}`,()=>showScreen("map"));}
    }
    addJournal("Một ngày khép lại",`Ngày ${state.day-1} kết thúc. Bạn đã làm: ${state.lastAction||"nghỉ ngơi"}. Ngày mai là một cơ hội mới.`);
    saveGame(true);renderStats();
  }
  function addJournal(title,text){state.journal.unshift({day:state.day,time:fmtTime(),title,text});if(state.journal.length>60)state.journal.pop()}
  function openModal(emoji,title,text,extra,callback){$("modal-emoji").textContent=emoji;$("modal-title").textContent=title;$("modal-text").textContent=text;$("modal-extra").textContent=extra||"";$("modal-backdrop").classList.remove("hidden");modalCallback=callback||null}
  function closeModal(){ $("modal-backdrop").classList.add("hidden");const cb=modalCallback;modalCallback=null;if(cb)cb()}
  function renderWardrobe(){
    $("outfit-grid").innerHTML="";
    outfits.filter(o=>o.owned||o.id==="rainy").forEach(o=>{
      const owned=o.owned||o.id==="cozy"||o.id==="classic"||o.id==="weekend"||o.id==="rainy"||state.inventory.includes(o.item);
      const card=document.createElement("div");card.className="outfit-card"+(state.outfit===o.id?" selected":"");
      card.innerHTML=`<div class="outfit-emoji">${o.emoji}</div><strong>${o.name}</strong><small>${owned?(state.outfit===o.id?"Đang mặc":"Đã sở hữu"):`${o.price} kr · Chưa có`}</small><button>${owned?"Thử bộ này":"Mua trang phục"}</button>`;
      card.querySelector("button").addEventListener("click",()=>{
        if(!owned){if(state.money<o.price){toast("Bạn chưa đủ tiền mua bộ này.");return}state.money-=o.price;o.owned=true;state.inventory.push("rainy");}
        selectedOutfit=o.id;
        $("look-preview").textContent=o.emoji;$("look-name").textContent=o.name;$("look-description").textContent=o.desc;
        $("wear-btn").textContent="Mặc bộ này ✓";
        card.classList.add("selected");document.querySelectorAll(".outfit-card").forEach(c=>{if(c!==card)c.classList.remove("selected")});
        card.querySelector("small").textContent="Đã chọn";
        saveGame(true);toast(`Đã chọn ${o.name}.`);
      });
      $("outfit-grid").appendChild(card);
    });
    const current=outfits.find(o=>o.id===selectedOutfit)||outfits[0];
    $("look-preview").textContent=current.emoji;$("look-name").textContent=current.name;$("look-description").textContent=current.desc;$("wardrobe-avatar").textContent=current.emoji;
  }
  function renderInventory(){
    const grid=$("inventory-grid");grid.innerHTML="";
    const starter=[{id:"plant",name:"Cây xanh",emoji:"🪴",type:"decor",description:"Món đồ trang trí khởi đầu."}];
    const ids=[...new Set([...starter.map(x=>x.id),...state.inventory])];
    ids.forEach(id=>{
      const item=itemCatalog[id]|| (id==="rainy"?{name:"Khăn len Rainy Day",emoji:"🧣",type:"fashion",description:"Một món đồ ấm áp."}:null);
      if(!item)return;
      const card=document.createElement("div");card.className="item-card";card.innerHTML=`<div class="item-emoji">${item.emoji}</div><strong>${item.name}</strong><small>${item.type==="decor"?"Trang trí căn hộ":"Thời trang"} · ${item.description}</small>`;
      grid.appendChild(card);
    });
    const decor=ids.filter(id=>(itemCatalog[id]||{}).type==="decor").length;
    $("decor-count").textContent=`Bạn có ${decor} món đồ trang trí.`;
    $("cozy-score").textContent=`♡ ${1+decor*2}`;
  }
  function renderJournal(){
    const list=$("journal-list");list.innerHTML="";
    const entries=state.journal.length?state.journal:[{day:1,time:"08:00",title:"Dear diary…",text:"Hành trình của Lisa bắt đầu từ đây. Hãy đi học, chăm mèo, tìm món đồ vintage và tạo nên nhịp sống của riêng mình."}];
    entries.forEach(e=>{const el=document.createElement("article");el.className="journal-entry";el.innerHTML=`<div class="journal-day">${String(e.day).padStart(2,"0")}</div><div><h3>${escapeHtml(e.title)}</h3><p><strong>${escapeHtml(e.time||"")}</strong> · ${escapeHtml(e.text)}</p></div>`;list.appendChild(el)});
  }
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  document.addEventListener("click",e=>{
    const go=e.target.closest("[data-go]");
    if(go){e.preventDefault();const name=go.dataset.go;if(name==="home"||name==="school"||name==="thrift"||name==="market"||name==="cafe"){goLocation(name)}else showScreen(name);return}
    const pin=e.target.closest("[data-location]");if(pin){goLocation(pin.dataset.location);return}
  });
  $("modal-close").addEventListener("click",closeModal);
  $("modal-confirm").addEventListener("click",closeModal);
  $("modal-backdrop").addEventListener("click",e=>{if(e.target===$("modal-backdrop"))closeModal()});
  $("save-button").addEventListener("click",()=>saveGame());
  $("wear-btn").addEventListener("click",()=>{state.outfit=selectedOutfit;saveGame(true);toast("Đã lưu outfit hôm nay 👗")});
  $("sound-toggle").addEventListener("click",()=>{state.sound=!state.sound;$("sound-toggle").textContent=state.sound?"♫":"♪";toast(state.sound?"Đã bật biểu tượng âm thanh (nhạc nền sẽ được thêm ở bản sau).":"Đã tắt âm thanh.")});
  window.addEventListener("beforeunload",()=>saveGame(true));
  renderStats();showScreen("map");
})();