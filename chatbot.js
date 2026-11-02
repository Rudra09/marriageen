(function () {
  const CONFIG = {
    coupleNames: 'Abhishek & Priya',
    whatsappNumber: '+918094073911',   // digits are cleaned automatically (the + is removed for the WhatsApp link)
    phoneNumber: '+917014457411',      // used for the 'Call the family' button
    weddingDate: new Date('November 25, 2026 20:00:00'),
    mapSangeetHaldi: 'https://www.google.com/maps/search/?api=1&query=Vinay+Vaatika+Bhatta+Colony+Hanumangarh+Rajasthan+335512',
    mapWedding: 'https://www.google.com/maps/place/?q=place_id:ChIJL5n6b1DzFjkRBq65AoYZm3I'
  };

  // current language, set by lang.js ('en' or 'hi')
  const lang = () => (window.getLang ? window.getLang() : 'en');

  const TEXT = {
    en: {
      head: '💍 Wedding Helper',
      placeholder: 'Ask about the wedding…',
      send: 'Send',
      open: 'Open wedding helper chat',
      close: 'Close chat',
      greeting: 'Jai Shree Shyam 🙏 I am the wedding helper for ' + CONFIG.coupleNames + '. Ask me about the schedule, venue, family, photo booth, or tap a button below.',
      fallback: "I'm not sure about that 🙏 Try one of the buttons below, or ask about the schedule, venue, family, countdown or photo booth.",
      started: 'The wedding celebrations have begun! 🎊 Thank you for being part of our special days.',
      countdown: (d, h) => '⏳ ' + d + ' days and ' + h + ' hours to go until the wedding ceremony on 25 November 2026!',
      contactWith: 'For anything else, please reach the family directly 🙏',
      contactWithout: 'For anything else, please contact the family directly. We will be delighted to help 🙏',
      whatsapp: 'Chat on WhatsApp',
      call: 'Call the family',
      events: 'Here is the wedding schedule 🎉\n\n🎵 Sangeet — 7:00 PM, 23 Nov 2026\n💛 Haldi — 3:00 PM, 24 Nov 2026\n💍 Wedding Ceremony — 8:00 PM, 25 Nov 2026',
      venue: 'The wedding ceremony is at GM Resort on 25 November 2026 at 8:00 PM 💍\n\nSangeet and Haldi are at Vinay Vaatika, Bhatta Colony, Hanumangarh, Rajasthan.',
      family: "👑 Groom's side — Garg Family\nFather: Mr. Hardeep Kumar Garg\nMother: Mrs. Meenu Garg\n\n👑 Bride's side — Bansal Family\nFather: Mr. Raj Kumar Bansal\nMother: Mrs. Manju Bansal",
      photo: 'Try our Royal Photo Booth 📸 — turn on your camera or upload a photo, then snap & download your memory from the wedding!',
      gallery: 'Our precious memories are in the gallery ✨',
      vows: 'Walk through the 7 sacred vows (Saptapadi) with Abhishek & Priya step by step 🔥',
      music: 'Tap the golden "🎵 Play Music" button at the bottom-right corner to play the wedding song 🎶',
      thanks: 'You are most welcome! 😊 We eagerly await your blessings and gracious presence 🙏',
      mapSangeet: 'Sangeet & Haldi map',
      mapWedding: 'Wedding venue map',
      goFamily: 'See Family & Friends',
      goPhoto: 'Open Photo Booth',
      goGallery: 'Open Gallery',
      goVows: 'Start Sacred Vows',
      goCountdown: 'See Countdown'
    },
    hi: {
      head: '💍 विवाह सहायक',
      placeholder: 'विवाह के बारे में पूछें…',
      send: 'भेजें',
      open: 'विवाह सहायक चैट खोलें',
      close: 'चैट बंद करें',
      greeting: 'जय श्री श्याम 🙏 मैं अभिषेक और प्रिया के विवाह का सहायक हूँ। कार्यक्रम, स्थान, परिवार या फोटो बूथ के बारे में पूछें, या नीचे दिए बटन दबाएँ।',
      fallback: 'मुझे इसकी जानकारी नहीं है 🙏 कृपया नीचे दिए बटन आज़माएँ, या कार्यक्रम, स्थान, परिवार, उलटी गिनती या फोटो बूथ के बारे में पूछें।',
      started: 'विवाह के उत्सव शुरू हो चुके हैं! 🎊 हमारे खास दिनों का हिस्सा बनने के लिए धन्यवाद।',
      countdown: (d, h) => '⏳ 25 नवंबर 2026 के विवाह समारोह में अभी ' + d + ' दिन और ' + h + ' घंटे बाकी हैं!',
      contactWith: 'और किसी जानकारी के लिए कृपया सीधे परिवार से संपर्क करें 🙏',
      contactWithout: 'और किसी जानकारी के लिए कृपया सीधे परिवार से संपर्क करें। हमें आपकी मदद करके खुशी होगी 🙏',
      whatsapp: 'WhatsApp पर चैट करें',
      call: 'परिवार को कॉल करें',
      events: 'विवाह का कार्यक्रम 🎉\n\n🎵 संगीत — शाम 7:00 बजे, 23 नवंबर 2026\n💛 हल्दी — दोपहर 3:00 बजे, 24 नवंबर 2026\n💍 विवाह समारोह — रात 8:00 बजे, 25 नवंबर 2026',
      venue: 'विवाह समारोह 25 नवंबर 2026 को रात 8:00 बजे जी.एम. रिसॉर्ट में है 💍\n\nसंगीत और हल्दी विनय वाटिका, भट्टा कॉलोनी, हनुमानगढ़, राजस्थान में होंगे।',
      family: '👑 वर पक्ष — गर्ग परिवार\nपिता: श्री हरदीप कुमार गर्ग\nमाता: श्रीमती मीनू गर्ग\n\n👑 वधू पक्ष — बंसल परिवार\nपिता: श्री राज कुमार बंसल\nमाता: श्रीमती मंजू बंसल',
      photo: 'हमारा शाही फोटो बूथ आज़माएँ 📸 — कैमरा चालू करें या फोटो अपलोड करें, फिर विवाह की अपनी याद खींचकर डाउनलोड करें!',
      gallery: 'हमारी अनमोल यादें गैलरी में हैं ✨',
      vows: 'अभिषेक और प्रिया के साथ सात पवित्र वचन (सप्तपदी) कदम-दर-कदम देखें 🔥',
      music: 'पेज के नीचे दाईं ओर सुनहरे "🎵 संगीत चलाएँ" बटन को दबाकर विवाह का गीत चलाएँ 🎶',
      thanks: 'आपका स्वागत है! 😊 हमें आपके आशीर्वाद और गरिमामयी उपस्थिति की प्रतीक्षा है 🙏',
      mapSangeet: 'संगीत और हल्दी का नक्शा',
      mapWedding: 'विवाह स्थल का नक्शा',
      goFamily: 'परिवार और मित्र देखें',
      goPhoto: 'फोटो बूथ खोलें',
      goGallery: 'गैलरी खोलें',
      goVows: 'पवित्र वचन शुरू करें',
      goCountdown: 'उलटी गिनती देखें'
    }
  };
  const S = () => TEXT[lang()];

  function answer(key) {
    const s = S();
    const both = () => [[s.mapWedding, CONFIG.mapWedding], [s.mapSangeet, CONFIG.mapSangeetHaldi]];
    switch (key) {
      case 'hi': return { text: s.greeting };
      case 'thanks': return { text: s.thanks };
      case 'events': return { text: s.events, links: [[s.mapSangeet, CONFIG.mapSangeetHaldi], [s.mapWedding, CONFIG.mapWedding]] };
      case 'venue': return { text: s.venue, links: both() };
      case 'family': return { text: s.family, scroll: '#hosts', scrollLabel: s.goFamily };
      case 'photo': return { text: s.photo, scroll: '#selfie', scrollLabel: s.goPhoto };
      case 'gallery': return { text: s.gallery, scroll: '#gallery', scrollLabel: s.goGallery };
      case 'vows': return { text: s.vows, scroll: '#seven-pheras', scrollLabel: s.goVows };
      case 'music': return { text: s.music };
      case 'countdown': return countdownAnswer();
      case 'contact': return contactAnswer();
      default: return { text: s.fallback };
    }
  }

  function countdownAnswer() {
    const s = S();
    const ms = CONFIG.weddingDate - new Date();
    if (ms <= 0) return { text: s.started };
    const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24;
    return { text: s.countdown(d, h), scroll: '#countdown', scrollLabel: s.goCountdown };
  }

  function contactAnswer() {
    const s = S();
    const links = [];
    if (CONFIG.whatsappNumber) links.push([s.whatsapp, 'https://wa.me/' + String(CONFIG.whatsappNumber).replace(/\D/g, '')]);
    if (CONFIG.phoneNumber) links.push([s.call, 'tel:' + CONFIG.phoneNumber]);
    return { text: links.length ? s.contactWith : s.contactWithout, links: links };
  }

  // keyword -> answer key (English, Hinglish and Hindi)
  const RULES = [
    [/\b(hi|hello|hey|namaste|namaskar|pranam|jai shree shyam|jai shri shyam|ram ram|sita ram|radhe radhe|good (morning|evening))\b|नमस्ते|नमस्कार|प्रणाम|जय श्री श्याम|राम राम|सीता राम|राधे राधे|हेलो|हाय/, 'hi'],
    [/(thank|thanks|shukriya|dhanyavad|dhanyawad)|धन्यवाद|शुक्रिया/, 'thanks'],
    [/(countdown|days left|kitne din|kitna time|how long|how many days|baki)|उलटी गिनती|कितने दिन|कितना समय|बाकी/, 'countdown'],
    [/(music|song|audio|gana|sound)|गाना|गीत|म्यूजिक|संगीत चलाएँ|संगीत चलाएं|संगीत बजा/, 'music'],
    [/(schedule|event|function|program|ceremony|sangeet|haldi|time|kab|kitne baje|timing|date|tarikh|when)|कार्यक्रम|समारोह|संगीत|हल्दी|समय|कब|तारीख|तिथि|कितने बजे/, 'events'],
    [/(venue|where|location|map|address|kaha|kahan|resort|direction|route|how to reach|pata)|स्थान|कहाँ|कहां|नक्शा|पता|रिसॉर्ट|लोकेशन|रास्ता/, 'venue'],
    [/(family|parents|father|mother|groom|bride|garg|bansal|mummy|papa|parivar)|परिवार|माता|पिता|वर पक्ष|वधू पक्ष|गर्ग|बंसल|दूल्हा|दुल्हन/, 'family'],
    [/(photo|selfie|camera|booth|picture)|फोटो|सेल्फी|कैमरा|बूथ/, 'photo'],
    [/(gallery|memories|pictures|album)|गैलरी|यादें|तस्वीर/, 'gallery'],
    [/(vow|phera|pheras|saptapadi|varmala|mandap)|वचन|फेरा|फेरे|सप्तपदी|वरमाला|मंडप/, 'vows'],
    [/(contact|call|phone|number|whatsapp|rsvp|help|invite|baat)|संपर्क|फोन|नंबर|कॉल|व्हाट्सएप|मदद/, 'contact']
  ];

  const CHIPS = {
    en: [['📅 Schedule', 'schedule'], ['📍 Venue', 'venue'], ['⏳ Countdown', 'countdown'],
         ['👨‍👩‍👧 Family', 'family'], ['📸 Photo booth', 'photo'], ['📞 Contact', 'contact']],
    hi: [['📅 कार्यक्रम', 'कार्यक्रम'], ['📍 स्थान', 'स्थान'], ['⏳ उलटी गिनती', 'उलटी गिनती'],
         ['👨‍👩‍👧 परिवार', 'परिवार'], ['📸 फोटो बूथ', 'फोटो बूथ'], ['📞 संपर्क', 'संपर्क']]
  };

  function reply(q) {
    const s = q.toLowerCase();
    for (const [re, key] of RULES) if (re.test(s)) return answer(key);
    return answer('fallback');
  }

  function build() {
    const css = document.createElement('style');
    css.textContent = `
#wbot-fab{position:fixed;left:18px;bottom:22px;z-index:9998;width:56px;height:56px;border-radius:50%;border:2px solid #fff;cursor:pointer;
background:linear-gradient(135deg,#d4af37,#ffd700);color:#58181f;font-size:26px;line-height:1;box-shadow:0 6px 18px rgba(88,24,31,.4);
display:flex;align-items:center;justify-content:center;transition:transform .25s ease;will-change:transform}
#wbot-fab:active{transform:scale(.92)}
#wbot-panel{position:fixed;left:18px;bottom:90px;z-index:9998;width:330px;max-width:calc(100vw - 36px);height:430px;max-height:calc(100vh - 130px);
background:#fffdf9;border:1.5px solid #d4af37;border-radius:16px;box-shadow:0 12px 36px rgba(88,24,31,.35);display:flex;flex-direction:column;overflow:hidden;
opacity:0;transform:translateY(14px) scale(.97);pointer-events:none;transition:opacity .22s ease,transform .22s ease;font-family:'Lato',Arial,sans-serif}
#wbot-panel.open{opacity:1;transform:none;pointer-events:auto}
#wbot-head{background:linear-gradient(135deg,#58181f,#7a2630);color:#ffd700;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;font-family:'Playfair Display',serif;font-weight:700;font-size:15px}
#wbot-head button{background:none;border:0;color:#ffd700;font-size:20px;cursor:pointer;line-height:1}
#wbot-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.wbot-m{max-width:86%;padding:9px 12px;border-radius:14px;font-size:13.5px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}
.wbot-bot{background:#f6efe0;color:#3b1d20;align-self:flex-start;border-bottom-left-radius:4px}
.wbot-user{background:#58181f;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.wbot-link{display:inline-block;margin:6px 6px 0 0;padding:6px 11px;border-radius:14px;background:#d4af37;color:#58181f;font-weight:700;font-size:12.5px;text-decoration:none;border:0;cursor:pointer;font-family:inherit}
#wbot-chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 10px;max-height:96px;overflow-y:auto;border-top:1px solid #eadfc2}
#wbot-chips button{flex:none;border:1px solid #d4af37;background:#fff;color:#58181f;border-radius:14px;padding:6px 11px;font-size:12.5px;cursor:pointer;font-family:inherit}
#wbot-form{display:flex;gap:6px;padding:8px 10px;border-top:1px solid #eadfc2}
#wbot-input{flex:1;border:1px solid #d9c98f;border-radius:18px;padding:8px 12px;font-size:16px;outline:none;font-family:inherit;min-width:0}
#wbot-send{border:0;border-radius:18px;background:#58181f;color:#ffd700;padding:0 14px;font-weight:700;cursor:pointer;font-family:inherit}
@media (max-width:480px){#wbot-fab{width:50px;height:50px;font-size:23px;bottom:18px;left:14px}#wbot-panel{left:10px;bottom:78px;width:calc(100vw - 20px);max-width:none}}`;
    document.head.appendChild(css);

    const fab = document.createElement('button');
    fab.id = 'wbot-fab';
    fab.textContent = '💬';

    const panel = document.createElement('div');
    panel.id = 'wbot-panel';
    panel.setAttribute('role', 'dialog');
    panel.innerHTML = '<div id="wbot-head"><span></span><button type="button"></button></div>' +
      '<div id="wbot-msgs"></div><div id="wbot-chips"></div>' +
      '<div id="wbot-form"><input id="wbot-input" type="text" autocomplete="off"><button id="wbot-send" type="button"></button></div>';
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const msgs = panel.querySelector('#wbot-msgs');
    const input = panel.querySelector('#wbot-input');
    const chips = panel.querySelector('#wbot-chips');
    const closeBtn = panel.querySelector('#wbot-head button');
    let greeted = false;

    function add(who, text) {
      const d = document.createElement('div');
      d.className = 'wbot-m wbot-' + who;
      d.textContent = text;
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
      return d;
    }

    function botSay(ans) {
      const d = add('bot', ans.text);
      (ans.links || []).forEach(([label, href]) => {
        const a = document.createElement('a');
        a.className = 'wbot-link';
        a.textContent = label;
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener';
        d.appendChild(document.createElement('br'));
        d.appendChild(a);
      });
      if (ans.scroll) {
        const b = document.createElement('button');
        b.className = 'wbot-link';
        b.type = 'button';
        b.textContent = ans.scrollLabel;
        b.onclick = () => {
          const el = document.querySelector(ans.scroll);
          if (el) { el.scrollIntoView({ behavior: 'smooth' }); if (innerWidth < 600) toggle(false); }
        };
        d.appendChild(document.createElement('br'));
        d.appendChild(b);
      }
      msgs.scrollTop = msgs.scrollHeight;
    }

    function ask(q) {
      q = q.trim();
      if (!q) return;
      add('user', q);
      setTimeout(() => botSay(reply(q)), 250);
    }

    function toggle(open) {
      const willOpen = open === undefined ? !panel.classList.contains('open') : open;
      panel.classList.toggle('open', willOpen);
      fab.textContent = willOpen ? '×' : '💬';
      if (willOpen && !greeted) { greeted = true; botSay(answer('hi')); }
    }

    // labels and quick buttons follow the page language
    function applyLanguage() {
      const s = S();
      panel.setAttribute('aria-label', s.head);
      panel.querySelector('#wbot-head span').textContent = s.head;
      closeBtn.textContent = '×';
      closeBtn.setAttribute('aria-label', s.close);
      fab.setAttribute('aria-label', s.open);
      input.placeholder = s.placeholder;
      input.setAttribute('aria-label', s.placeholder);
      panel.querySelector('#wbot-send').textContent = s.send;
      chips.innerHTML = '';
      CHIPS[lang()].forEach(([label, q]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = label;
        b.onclick = () => ask(q);
        chips.appendChild(b);
      });
    }

    fab.onclick = () => toggle();
    closeBtn.onclick = () => toggle(false);
    panel.querySelector('#wbot-send').onclick = () => { ask(input.value); input.value = ''; };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { ask(input.value); input.value = ''; } });
    window.addEventListener('langchange', applyLanguage);
    applyLanguage();
  }

  // start only after the page has loaded and the browser is idle
  function start() { (window.requestIdleCallback || (f => setTimeout(f, 800)))(build, { timeout: 3000 }); }
  if (document.readyState === 'complete') start(); else window.addEventListener('load', start, { once: true });
})();
