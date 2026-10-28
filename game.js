
(() => {
  "use strict";

  const SAVE_KEY = "myLittleLife_tandskoterska_v1";

  const locations = {
    home: {
      name: "Sweet Home", eyebrow: "YOUR SAFE PLACE", emoji: "🏡",
      description: "Căn hộ nhỏ ấm áp, nơi Miso và Boba chờ bạn bên cửa sổ.",
      actions: [
        { id:"feed", emoji:"🐈", title:"Cho mèo ăn", desc:"Hai cái bụng nhỏ đang réo.", cost:0,time:20,energy:-3,mood:8,cat:35,goal:"cats",result:"Miso ăn trước, còn Boba kiểm tra bát của bạn cùng nhà." },
        { id:"clean",emoji:"🧹",title:"Dọn căn hộ",desc:"Dọn khay cát, xếp chăn và làm phòng dễ chịu hơn.",cost:0,time:25,energy:-8,mood:7,goal:"home",result:"Căn hộ gọn gàng hơn hẳn. Một việc nhỏ, cảm giác nhẹ nhõm lớn." },
        { id:"studyhome",emoji:"📚",title:"Ôn Parodontologi",desc:"Học 20 phút trước khi những việc khác cuốn bạn đi.",cost:0,time:30,energy:-12,knowledge:8,mood:2,goal:"study",result:"Bạn ôn lại gingivit, parodontit và cách phòng bệnh." },
        { id:"rest",emoji:"🛋️",title:"Nghỉ ngơi một chút",desc:"Pha trà, cuộn mình trên sofa và nghe mưa.",cost:0,time:30,energy:18,mood:12,goal:"rest",result:"Bạn dành một khoảng nghỉ cho mình. Không phải lúc nào cũng cần năng suất." },
        { id:"decorate",emoji:"🪴",title:"Trang trí căn hộ",desc:"Sắp xếp lại đồ trang trí bạn đã sở hữu.",cost:0,time:25,energy:-5,mood:10,goal:"decor",result:"Bạn chăm chút góc nhỏ cạnh cửa sổ. Căn hộ bắt đầu giống mình hơn." }
      ]
    },
    school: {
      name:"YH School",eyebrow:"FUTURE TANDSKÖTERSKA",emoji:"🦷",
      description:"Một ngày học tập để tiến gần hơn đến công việc tandsköterska.",
      actions:[
        {id:"class",emoji:"🦷",title:"Tham gia buổi học",desc:"Nghe giảng, ghi chú và học điều mới.",cost:0,time:90,energy:-22,knowledge:12,mood:2,goal:"study",result:"Bạn ghi lại những ý quan trọng và hiểu bài hơn một chút."},
        {id:"library",emoji:"📖",title:"Học ở thư viện",desc:"Tập trung ôn bài, không lướt điện thoại.",cost:0,time:60,energy:-17,knowledge:16,mood:-2,goal:"study",result:"Một giờ tập trung hiệu quả. Bạn tự hào vì đã kiên trì."},
        {id:"lunch",emoji:"🥪",title:"Mua bữa trưa",desc:"Nạp năng lượng trước tiết học tiếp theo.",cost:65,time:25,energy:8,mood:5,goal:"errand",result:"Một bữa trưa đơn giản giúp bạn tỉnh táo hơn."},
        {id:"internship",emoji:"🩺",title:"Luyện kỹ năng LIA",desc:"Ôn quy trình và giao tiếp với bệnh nhân.",cost:0,time:75,energy:-20,knowledge:10,mood:4,goal:"study",result:"Bạn luyện cách chuẩn bị dụng cụ và đặt sự an toàn của bệnh nhân lên trước."}
      ]
    },
    thrift: {
      name:"Secondhand Boutique",eyebrow:"HUNT FOR TREASURES",emoji:"🧥",
      description:"Một cửa hàng đồ cũ với quần áo len, đồ sứ và những món đồ có câu chuyện.",
      actions:[
        {id:"browse",emoji:"🔎",title:"Ngắm đồ vintage",desc:"Đi một vòng xem có món nào khiến tim rung rinh.",cost:0,time:25,energy:-5,mood:8,result:"Bạn tìm thấy vài món thật đẹp. Săn đồ không nhất thiết phải mua."},
        {id:"cardigan",emoji:"🧶",title:"Mua cardigan vintage",desc:"Áo cardigan màu kem, dễ phối đồ.",cost:120,time:20,energy:-3,mood:12,item:"cardigan",goal:"thrift",result:"Bạn tìm được chiếc cardigan hoàn hảo với giá hời."},
        {id:"lamp",emoji:"🪔",title:"Mua đèn bàn cổ",desc:"Ánh sáng ấm áp cho góc đọc sách.",cost:95,time:20,energy:-3,mood:10,item:"lamp",goal:"thrift",result:"Chiếc đèn nhỏ khiến bạn tưởng tượng ra những buổi tối đọc sách."},
        {id:"vase",emoji:"🏺",title:"Mua bình hoa gốm",desc:"Một chiếc bình nhỏ cho bàn ăn.",cost:55,time:15,energy:-2,mood:7,item:"vase",goal:"thrift",result:"Một chiếc bình gốm xinh xắn đã có nhà mới."},
        {id:"plant",emoji:"🪴",title:"Mua cây xanh",desc:"Một chậu cây nhỏ cho bệ cửa sổ.",cost:45,time:15,energy:-2,mood:8,item:"plant",goal:"thrift",result:"Chậu cây nhỏ mang thêm sức sống vào căn hộ."}
      ]
    },
    market: {
      name:"ICA Market",eyebrow:"LITTLE EVERYDAY ERRANDS",emoji:"🥕",
      description:"Đi mua những thứ cần thiết cho tuần mới. Nhớ nhìn ngân sách nhé.",
      actions:[
        {id:"groceries",emoji:"🥕",title:"Mua đồ ăn cơ bản",desc:"Bánh mì, rau, sữa và đồ nấu ăn.",cost:85,time:30,energy:-7,mood:3,goal:"errand",result:"Bạn mua đủ đồ cơ bản để chuẩn bị vài bữa ăn ở nhà."},
        {id:"catfood",emoji:"🐟",title:"Mua thức ăn cho mèo",desc:"Bổ sung thức ăn cho Miso và Boba.",cost:49,time:15,energy:-3,cat:15,goal:"cats",result:"Túi thức ăn của mèo đã được bổ sung."},
        {id:"treat",emoji:"🍪",title:"Mua món ăn vặt",desc:"Một món nhỏ để tự thưởng.",cost:25,time:10,energy:2,mood:8,result:"Đôi khi niềm vui không cần đắt tiền."}
      ]
    },
    cafe: {
      name:"Cozy Café",eyebrow:"SLOW DOWN A LITTLE",emoji:"☕",
      description:"Quán cà phê nhỏ với chỗ ngồi cạnh cửa sổ.",
      actions:[
        {id:"coffee",emoji:"☕",title:"Uống cà phê",desc:"Một ly ấm nóng và khoảng thời gian không vội.",cost:38,time:25,energy:8,mood:10,result:"Bạn ngồi bên cửa sổ, nhâm nhi cà phê và nhìn mọi người đi qua."},
        {id:"journal",emoji:"✍️",title:"Viết nhật ký",desc:"Ghi lại ba điều nhỏ khiến hôm nay đáng nhớ.",cost:0,time:25,energy:-3,mood:12,goal:"journal",result:"Bạn viết vài dòng cho chính mình."},
        {id:"friends",emoji:"💌",title:"Nhắn tin cho bạn",desc:"Hỏi thăm một người bạn.",cost:0,time:15,energy:0,mood:10,result:"Một cuộc trò chuyện ngắn khiến bạn cảm thấy kết nối hơn."}
      ]
    }
  };

  const outfits = [
    {id:"cozy",name:"Cozy Student",desc:"Áo len xanh sage và quần thoải mái.",owned:true,top:"#8d9c80",bottom:"#716e68",style:"sweater"},
    {id:"classic",name:"Vintage Classic",desc:"Áo blouse kem, chân váy vintage.",owned:true,top:"#f0dfbd",bottom:"#8b5350",style:"skirt"},
    {id:"weekend",name:"Slow Sunday",desc:"Áo cardigan hồng nhạt và quần mềm.",owned:true,top:"#d8aaa3",bottom:"#b3a18b",style:"cardigan"},
    {id:"cardigan",name:"Secondhand Darling",desc:"Cardigan màu kem tìm được ở cửa hàng đồ cũ.",item:"cardigan",top:"#e8d8b8",bottom:"#71816d",style:"cardigan"},
    {id:"rainy",name:"Rainy Day",desc:"Áo khoác xanh xám, khăn len và quần tối màu.",item:"rainy",price:75,top:"#8dabb7",bottom:"#555b61",style:"coat"}
  ];

  const itemCatalog = {
    cardigan:{id:"cardigan",name:"Vintage cardigan",emoji:"🧶",type:"fashion",description:"Cardigan màu kem."},
    rainy:{id:"rainy",name:"Rainy Day outfit",emoji:"🧣",type:"fashion",description:"Trang phục ấm áp cho ngày mưa."},
    lamp:{id:"lamp",name:"Đèn bàn cổ",emoji:"🪔",type:"decor",description:"Đèn bàn ánh sáng ấm."},
    vase:{id:"vase",name:"Bình hoa gốm",emoji:"🏺",type:"decor",description:"Bình gốm nhỏ màu đất."},
    plant:{id:"plant",name:"Cây xanh",emoji:"🪴",type:"decor",description:"Một chút xanh cho căn hộ."}
  };

  const chapters = [
    {title:"A Fresh Start",desc:"Bắt đầu nhịp sống mới: học hành, chăm mèo và tìm niềm vui trong những điều giản dị.",goals:["cats","study","home"]},
    {title:"Little Treasures",desc:"Tìm món đồ secondhand yêu thích và làm căn hộ ấm áp hơn.",goals:["thrift","decor","journal"]},
    {title:"Finding Your Balance",desc:"Học cách cân bằng việc học, nghỉ ngơi và ngân sách.",goals:["study","errand","rest"]},
    {title:"Future Tandsköterska",desc:"Xây nền tảng cho tương lai qua từng buổi học và lựa chọn nhỏ.",goals:["study","cats","journal"]}
  ];

  const defaultState = () => ({
    day:1,hour:8,minute:0,money:850,energy:75,mood:80,knowledge:12,catCare:58,
    location:"home",outfit:"cozy",inventory:[],completed:[],dailyCompleted:[],
    journal:[],chapter:0,sound:false,lastAction:"",goalsDone:[],endOfDay:false,
    decorPlaced:[]
  });

  let state = loadGame();
  let selectedOutfit = state.outfit;
  let modalCallback = null;
  let toastTimer = null;
  const $ = id => document.getElementById(id);
  const clamp = (n,min=0,max=100) => Math.max(min,Math.min(max,n));

  function loadGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      const saved = raw ? JSON.parse(raw) : {};
      return {...defaultState(),...saved,
        inventory:Array.isArray(saved.inventory)?saved.inventory:[],
        journal:Array.isArray(saved.journal)?saved.journal:[],
        goalsDone:Array.isArray(saved.goalsDone)?saved.goalsDone:[],
        decorPlaced:Array.isArray(saved.decorPlaced)?saved.decorPlaced:[]
      };
    } catch (e) {
      return defaultState();
    }
  }

  function saveGame(silent=false) {
    try {
      localStorage.setItem(SAVE_KEY,JSON.stringify(state));
      if(!silent) toast("Đã lưu game trên thiết bị này 💾");
    } catch(e) {
      toast("Không thể lưu trên trình duyệt này.");
    }
    renderStats();
  }

  function toast(message) {
    const el=$("toast");
    if(!el) return;
    el.textContent=message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>el.classList.remove("show"),2600);
  }

  function fmtTime() {
    return `${String(state.hour).padStart(2,"0")}:${String(state.minute).padStart(2,"0")}`;
  }

  function weekday() {
    return ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"][(state.day-1)%7];
  }

  function setText(id,text) {
    const el=$(id);
    if(el) el.textContent=text;
  }

  function renderStats() {
    setText("day-label",`${weekday()} · DAY ${state.day}`);
    setText("clock-label",fmtTime());
    setText("money-stat",`${state.money} kr`);
    setText("energy-stat",`${state.energy}%`);
    setText("mood-stat",`${state.mood}%`);
    setText("knowledge-stat",state.knowledge);
    setText("cat-status",state.catCare>70
      ?"Hai bé no bụng và đang rất vui vẻ."
      :state.catCare>35?"Hai bé đang chờ bạn để ý một chút."
      :"Hai bé cần được chăm sóc sớm nhé.");
    const meter=$("cat-meter");
    if(meter) meter.style.width=`${state.catCare}%`;
    setText("weather-icon",state.day%4===0?"🌧️":state.day%3===0?"☁️":"🌤️");
    setText("weather-label",state.day%4===0?"6°C · Có mưa":state.day%3===0?"7°C · Nhiều mây":"8°C · Se lạnh");
    renderChapter();
  }

  function renderChapter() {
    const c=chapters[Math.min(state.chapter,chapters.length-1)];
    setText("chapter-tag",`CHAPTER ${state.chapter+1}`);
    setText("chapter-title",c.title);
    setText("chapter-desc",c.desc);
    const done=c.goals.filter(g=>state.goalsDone.includes(g)).length;
    const bar=$("chapter-progress");
    if(bar) bar.style.width=`${done/c.goals.length*100}%`;
    setText("chapter-progress-label",`${done} / ${c.goals.length} mục tiêu hoàn thành`);
  }

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));
    const id=name==="map"?"map-screen":
      name==="wardrobe"?"wardrobe-screen":
      name==="inventory"?"inventory-screen":
      name==="journal"?"journal-screen":"location-screen";
    const target=$(id);
    if(target) target.classList.remove("hidden");
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.go===name));
    if(name==="wardrobe") renderWardrobe();
    if(name==="inventory") renderInventory();
    if(name==="journal") renderJournal();
    if(name==="map") renderHomeScene();
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function goLocation(id) {
    const loc=locations[id];
    if(!loc) return;
    state.location=id;
    setText("location-art",loc.emoji);
    setText("location-title",loc.name);
    setText("location-eyebrow",loc.eyebrow);
    setText("location-description",loc.description);
    const grid=$("action-grid");
    if(!grid) return;
    grid.innerHTML="";

    loc.actions.forEach(a=>{
      const card=document.createElement("button");
      card.type="button";
      card.className="action-card";
      card.innerHTML=`<span class="action-emoji">${a.emoji}</span>
        <strong>${escapeHtml(a.title)}</strong>
        <p>${escapeHtml(a.desc)}</p>
        <span class="action-meta"><span>${a.cost?`💰 ${a.cost} kr`:"♡ Miễn phí"}</span>
        <span>⏳ ${a.time} phút</span></span>`;
      card.addEventListener("click",()=>doAction(a,id));
      grid.appendChild(card);
    });
    showScreen("location");
  }

  function doAction(a) {
    if(a.cost && state.money<a.cost) {
      openModal("💸","Chưa đủ ngân sách","Ví của bạn chưa đủ để mua món này.","Số dư: "+state.money+" kr");
      return;
    }
    if(state.energy<8 && a.energy<0 && a.id!=="rest") {
      openModal("😴","Lisa cần nghỉ một chút","Bạn đang khá mệt. Nghỉ ngơi sẽ giúp bạn có thêm năng lượng.","Năng lượng: "+state.energy+"%");
      return;
    }

    if(a.item && state.inventory.includes(a.item)) {
      toast("Bạn đã sở hữu món này rồi!");
      return;
    }

    state.money-=a.cost||0;
    if(a.energy!==undefined) state.energy=clamp(state.energy+a.energy);
    if(a.mood!==undefined) state.mood=clamp(state.mood+a.mood);
    if(a.knowledge) state.knowledge+=a.knowledge;
    if(a.cat) state.catCare=clamp(state.catCare+a.cat);

    if(a.item) {
      state.inventory.push(a.item);
      if(a.item==="cardigan"||a.item==="rainy") {
        toast("Đã thêm trang phục vào tủ đồ!");
      }
    }

    if(a.goal) {
      state.goalsDone=[...new Set([...state.goalsDone,a.goal])];
      state.dailyCompleted=[...new Set([...state.dailyCompleted,a.goal])];
    }

    advanceTime(a.time);
    state.lastAction=a.title;
    addJournal(a.title,a.result);
    saveGame(true);
    renderStats();

    openModal(a.emoji,a.title,a.result,
      `${a.cost?`−${a.cost} kr · `:""}${a.time} phút · ${fmtTime()}`,
      ()=>{showScreen("map");if(state.hour>=22)endDay();}
    );
  }

  function advanceTime(mins) {
    state.minute+=mins;
    while(state.minute>=60){state.minute-=60;state.hour++;}
    if(state.hour>=24){state.hour-=24;endDay();}
  }

  function endDay() {
    if(state.endOfDay) return;
    state.endOfDay=true;
    const previousDay=state.day;
    const rentDue=previousDay%7===0?180:0;

    if(rentDue) {
      state.money-=rentDue;
      toast(`Cuối tuần: đã trừ ${rentDue} kr chi phí nhà ở.`);
    }

    state.day++;
    state.hour=8;
    state.minute=0;
    state.energy=clamp(state.energy+35);
    state.mood=clamp(state.mood+10);
    state.catCare=clamp(state.catCare-22);
    state.dailyCompleted=[];
    state.endOfDay=false;

    const c=chapters[Math.min(state.chapter,chapters.length-1)];
    if(state.chapter<chapters.length-1 && c.goals.every(g=>state.goalsDone.includes(g))) {
      state.chapter++;
      openModal("🌷","Một chương mới bắt đầu",
        `Bạn đã hoàn thành chương "${c.title}". Câu chuyện của Lisa tiếp tục.`,
        `CHAPTER ${state.chapter+1}`,()=>showScreen("map"));
    }

    addJournal("Một ngày khép lại",
      `Ngày ${previousDay} kết thúc. Bạn đã làm: ${state.lastAction||"nghỉ ngơi"}. Ngày mai là một cơ hội mới.`);
    saveGame(true);
    renderStats();
  }

  function addJournal(title,text) {
    state.journal.unshift({day:state.day,time:fmtTime(),title,text});
    if(state.journal.length>60) state.journal.pop();
  }

  function openModal(emoji,title,text,extra,callback) {
    setText("modal-emoji",emoji);
    setText("modal-title",title);
    setText("modal-text",text);
    setText("modal-extra",extra||"");
    const backdrop=$("modal-backdrop");
    if(backdrop) backdrop.classList.remove("hidden");
    modalCallback=callback||null;
  }

  function closeModal() {
    const backdrop=$("modal-backdrop");
    if(backdrop) backdrop.classList.add("hidden");
    const cb=modalCallback;
    modalCallback=null;
    if(cb) cb();
  }

  function ownedOutfit(o) {
    if(["cozy","classic","weekend"].includes(o.id)) return true;
    return state.inventory.includes(o.item||o.id);
  }

  // SVG character: head, hair, body, outfit and legs are separate vector shapes.
  function avatarSVG(outfitId,small=false) {
    const o=outfits.find(x=>x.id===outfitId)||outfits[0];
    const top=o.top;
    const bottom=o.bottom;
    const isSkirt=o.style==="skirt";
    const isCoat=o.style==="coat";
    const isCardigan=o.style==="cardigan";
    const height=small?300:380;

    return `<svg viewBox="0 0 240 390" width="100%" height="${height}" role="img" aria-label="Lisa mặc ${escapeHtml(o.name)}">
      <defs>
        <filter id="paperShadow"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity=".12"/></filter>
      </defs>
      <ellipse cx="120" cy="366" rx="63" ry="10" fill="#b9aa91" opacity=".35"/>
      <!-- Hair behind the head -->
      <path d="M78 74 Q69 26 117 24 Q165 24 163 77 L166 128 Q151 148 143 119 L91 123 Q79 144 73 121 Z" fill="#594338"/>
      <!-- Neck -->
      <path d="M108 96 L108 121 Q120 134 132 120 L132 95" fill="#e8bca2"/>
      <!-- Face -->
      <ellipse cx="120" cy="76" rx="36" ry="45" fill="#f0c9ae"/>
      <!-- Hair fringe -->
      <path d="M84 68 Q82 28 119 31 Q153 28 157 65 Q143 48 129 48 Q110 62 84 57 Z" fill="#594338"/>
      <!-- Ears -->
      <ellipse cx="84" cy="79" rx="6" ry="10" fill="#e8bca2"/>
      <ellipse cx="156" cy="79" rx="6" ry="10" fill="#e8bca2"/>
      <!-- Eyes and brows -->
      <path d="M99 72 Q105 67 111 72 M130 72 Q136 67 142 72" stroke="#594338" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="106" cy="79" rx="2.7" ry="3.5" fill="#40372f"/>
      <ellipse cx="135" cy="79" rx="2.7" ry="3.5" fill="#40372f"/>
      <path d="M116 91 Q120 94 124 91" stroke="#b67c69" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M109 101 Q120 110 132 101" stroke="#a65f5a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="96" cy="91" rx="8" ry="4" fill="#dc938a" opacity=".38"/>
      <ellipse cx="144" cy="91" rx="8" ry="4" fill="#dc938a" opacity=".38"/>
      <!-- Arms behind the clothing -->
      <path d="M91 139 Q78 151 74 184 L66 226 Q65 237 75 238 Q84 237 87 224 L105 174 Z" fill="#e8bca2"/>
      <path d="M149 139 Q162 151 166 184 L174 226 Q175 237 165 238 Q156 237 153 224 L135 174 Z" fill="#e8bca2"/>
      <!-- Legs -->
      <path d="M98 265 L96 337 L113 337 L121 267 Z" fill="#f0c9ae"/>
      <path d="M121 267 L127 337 L144 337 L143 265 Z" fill="#f0c9ae"/>
      <!-- Trousers or skirt -->
      ${isSkirt
        ? `<path d="M87 174 Q120 186 153 174 L161 267 Q120 282 79 267 Z" fill="${bottom}" stroke="#63564b" stroke-width="1.5"/>
           <path d="M89 194 Q120 203 158 194 M84 246 Q120 257 158 246" stroke="#f5dfc0" stroke-width="2" opacity=".6" fill="none"/>`
        : `<path d="M91 174 Q120 187 149 174 L145 269 L121 269 L117 208 L112 269 L88 269 Z" fill="${bottom}" stroke="#63564b" stroke-width="1.5"/>
           <path d="M120 207 L120 265" stroke="#f1e1c9" stroke-width="1.5" opacity=".65"/>`
      }
      <!-- Shoes -->
      <path d="M93 331 Q104 328 114 335 L118 350 Q101 355 88 348 Z" fill="#655248"/>
      <path d="M128 335 Q139 328 148 333 L155 348 Q139 355 125 350 Z" fill="#655248"/>
      <path d="M91 346 Q104 350 117 347 M127 347 Q140 350 153 346" stroke="#d9c8a8" stroke-width="2" fill="none"/>
      <!-- Main top -->
      <path d="M105 119 L120 130 L135 119 Q151 124 158 141 L149 194 Q120 207 91 194 L82 141 Q89 124 105 119 Z"
        fill="${top}" stroke="#756653" stroke-width="1.5" filter="url(#paperShadow)"/>
      <!-- Neckline -->
      <path d="M105 120 Q120 145 135 120" fill="none" stroke="#f6e8d0" stroke-width="3"/>
      <!-- Sweater details -->
      ${o.style==="sweater"
        ? `<path d="M94 151 L146 151 M93 159 L147 159 M95 167 L145 167" stroke="#f2e7d3" stroke-width="1.5" opacity=".65"/>`
        : ""}
      <!-- Cardigan front panels -->
      ${isCardigan
        ? `<path d="M104 126 L109 193 L96 195 L90 139 Z" fill="#f5ead4" opacity=".8"/>
           <path d="M136 126 L131 193 L144 195 L150 139 Z" fill="#f5ead4" opacity=".8"/>
           <path d="M120 139 L120 196" stroke="#8a7661" stroke-width="1.5"/>
           <circle cx="125" cy="157" r="2" fill="#9a8062"/>
           <circle cx="125" cy="172" r="2" fill="#9a8062"/>`
        : ""}
      <!-- Rain coat collar and scarf -->
      ${isCoat
        ? `<path d="M103 122 L119 143 L106 157 L96 130 Z" fill="#d9d0b7" stroke="#776f61" stroke-width="1"/>
           <path d="M137 122 L121 143 L134 157 L144 130 Z" fill="#d9d0b7" stroke="#776f61" stroke-width="1"/>
           <path d="M112 137 Q123 143 132 136 L132 163 L119 169 L110 157 Z" fill="#c9827a" stroke="#9f6a63" stroke-width="1"/>
           <path d="M117 166 L122 185" stroke="#f3d7c7" stroke-width="2"/>`
        : ""}
      <!-- Tiny necklace -->
      ${o.style==="skirt"
        ? `<path d="M111 126 Q120 137 129 126" stroke="#b89a5b" stroke-width="1.6" fill="none"/>
           <circle cx="120" cy="136" r="3" fill="#d6b66c"/>`
        : ""}
      <!-- Hands -->
      <circle cx="71" cy="233" r="7" fill="#e8bca2"/>
      <circle cx="169" cy="233" r="7" fill="#e8bca2"/>
      <!-- Hair sides -->
      <path d="M84 70 Q77 99 89 126 L78 119 Q69 87 79 62 Z" fill="#594338"/>
      <path d="M156 70 Q163 99 151 126 L162 119 Q171 87 161 62 Z" fill="#594338"/>
      <!-- Small earrings -->
      <circle cx="84" cy="91" r="2.5" fill="#d5b46c"/>
      <circle cx="156" cy="91" r="2.5" fill="#d5b46c"/>
    </svg>`;
  }

  function renderWardrobe() {
    const grid=$("outfit-grid");
    if(!grid) return;
    grid.innerHTML="";

    outfits.forEach(o=>{
      const owned=ownedOutfit(o);
      const card=document.createElement("div");
      card.className="outfit-card"+(state.outfit===o.id?" selected":"");
      card.innerHTML=`
        <div class="outfit-preview">${avatarSVG(o.id,true)}</div>
        <strong class="outfit-name">${escapeHtml(o.name)}</strong>
        <small>${escapeHtml(o.desc)}</small>
        <p class="outfit-price">${owned?(state.outfit===o.id?"Đang mặc":"Đã sở hữu"):`${o.price||0} kr · Chưa có`}</p>
        <button type="button" class="outfit-select">${owned?"Mặc thử":"Mua trang phục"}</button>`;

      card.querySelector("button").addEventListener("click",()=>{
        if(!owned) {
          if(o.item==="cardigan") {
            toast("Hãy tìm cardigan ở cửa hàng secondhand trước nhé!");
            return;
          }
          if(state.money<(o.price||0)) {
            toast("Bạn chưa đủ tiền mua bộ này.");
            return;
          }
          state.money-=o.price||0;
          if(!state.inventory.includes(o.item||o.id)) state.inventory.push(o.item||o.id);
        }
        selectedOutfit=o.id;
        state.outfit=o.id;
        saveGame(true);
        renderWardrobe();
        toast(`Lisa đã thay bộ ${o.name}.`);
      });

      grid.appendChild(card);
    });

    const current=outfits.find(o=>o.id===selectedOutfit)||outfits[0];
    const preview=$("look-preview");
    const avatar=$("wardrobe-avatar");
    if(preview) preview.innerHTML=avatarSVG(current.id);
    if(avatar) avatar.innerHTML=avatarSVG(current.id,true);
    setText("look-name",current.name);
    setText("look-description",current.desc);
    setText("wear-btn","Đang mặc ✓");
  }

  function renderHomeScene() {
    const art=$("location-art");
    if(!art) return;
    const isHome=state.location==="home"||state.location==="map";
    if(!isHome) return;
    art.innerHTML=`
      <div class="home-scene">
        <div class="scene-window"><span>☀</span></div>
        <div class="scene-shelf"><span>📚</span><span>🏺</span><span>🪴</span></div>
        <div class="scene-sofa"><span>🐈</span><span>🐈</span></div>
        <div class="scene-caption">Miso & Boba's little home</div>
      </div>`;
  }

  function renderInventory() {
    const grid=$("inventory-grid");
    if(!grid) return;
    grid.innerHTML="";

    const items=state.inventory.map(id=>itemCatalog[id]).filter(Boolean);
    if(!items.length) {
      grid.innerHTML='<p class="empty-state">Tủ đồ còn trống. Ghé cửa hàng secondhand để tìm món đồ đầu tiên nhé!</p>';
    }

    items.forEach(item=>{
      const card=document.createElement("div");
      card.className="inventory-item";
      const placed=state.decorPlaced.includes(item.id);
      card.innerHTML=`
        <div class="inventory-item-icon">${item.emoji}</div>
        <strong class="inventory-item-name">${escapeHtml(item.name)}</strong>
        <p>${escapeHtml(item.description)}</p>
        ${item.type==="decor"?`<button type="button" class="secondary-button">${placed?"Cất khỏi căn hộ":"Đặt vào căn hộ"}</button>`:""}`;

      const button=card.querySelector("button");
      if(button) button.addEventListener("click",()=>{
        if(placed) state.decorPlaced=state.decorPlaced.filter(id=>id!==item.id);
        else state.decorPlaced.push(item.id);
        saveGame(true);
        renderInventory();
        toast(placed?"Đã cất món đồ.":"Đã đặt món đồ vào căn hộ!");
      });
      grid.appendChild(card);
    });

    const decorCount=state.decorPlaced.length;
    setText("decor-count",`Bạn đang trưng bày ${decorCount} món đồ trang trí.`);
    setText("cozy-score",`♡ ${1+decorCount*2}`);
  }

  function renderJournal() {
    const list=$("journal-list");
    if(!list) return;
    list.innerHTML="";
    const entries=state.journal.length?state.journal:[{
      day:1,time:"08:00",title:"Dear diary…",
      text:"Hành trình của Lisa bắt đầu từ đây. Hãy đi học, chăm mèo và tạo nên nhịp sống của riêng mình."
    }];

    entries.forEach(e=>{
      const el=document.createElement("article");
      el.className="journal-entry";
      const heading=document.createElement("h3");
      heading.textContent=e.title;
      const p=document.createElement("p");
      p.textContent=`${e.time||""} · ${e.text}`;
      const date=document.createElement("div");
      date.className="journal-date";
      date.textContent=`DAY ${String(e.day).padStart(2,"0")}`;
      el.append(date,heading,p);
      list.appendChild(el);
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g,c=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[c]));
  }

  document.addEventListener("click",e=>{
    const go=e.target.closest("[data-go]");
    if(go) {
      e.preventDefault();
      const name=go.dataset.go;
      if(locations[name]) goLocation(name);
      else showScreen(name);
      return;
    }
    const pin=e.target.closest("[data-location]");
    if(pin) goLocation(pin.dataset.location);
  });

  if($("modal-close")) $("modal-close").addEventListener("click",closeModal);
  if($("modal-confirm")) $("modal-confirm").addEventListener("click",closeModal);
  if($("modal-backdrop")) $("modal-backdrop").addEventListener("click",e=>{
    if(e.target===$("modal-backdrop")) closeModal();
  });
  if($("save-button")) $("save-button").addEventListener("click",()=>saveGame());
  if($("wear-btn")) $("wear-btn").addEventListener("click",()=>{
    state.outfit=selectedOutfit;
    saveGame(true);
    toast("Đã lưu trang phục hôm nay 👗");
  });
  if($("sound-toggle")) $("sound-toggle").addEventListener("click",()=>{
    state.sound=!state.sound;
    $("sound-toggle").textContent=state.sound?"♫":"♪";
    toast(state.sound?"Đã bật chế độ âm thanh.":"Đã tắt âm thanh.");
  });

  window.addEventListener("beforeunload",()=>saveGame(true));
  renderStats();
  renderWardrobe();
  renderHomeScene();
  showScreen("map");
})();

  renderStats();showScreen("map");
})();
