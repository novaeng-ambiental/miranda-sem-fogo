(function () {
  'use strict';
  var reduzir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- menu no celular ---------- */
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  menuBtn.addEventListener('click', function () {
    var aberto = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!aberto));
    menu.classList.toggle('aberto', !aberto);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menuBtn.setAttribute('aria-expanded', 'false'); menu.classList.remove('aberto'); }
  });

  /* ---------- frases "Enquanto…" ---------- */
  document.querySelectorAll('#frases button').forEach(function (b) {
    b.addEventListener('click', function () {
      var aberto = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!aberto));
      b.querySelector('.frase__dica').textContent = aberto ? 'ver o final' : 'fechar';
    });
  });

  /* ---------- carrosséis ---------- */
  var GALERIAS = {
    enquanto: [
      { src: 'assets/img/posts/enquanto-1.webp', t: 'Face 1 · Fauna', alt: 'Enquanto você reclama da fumaça… eles fogem para sobreviver. Araras voando sobre área em chamas.', c: 'Imagem ilustrativa (montagem com IA). Fotos: Bruno Kelly / Amazônia Real (CC BY 2.0) e Thays Natani Silva dos Santos (CC BY-SA 4.0), adaptadas. Licença: CC BY-SA 4.0.' },
      { src: 'assets/img/posts/enquanto-2.webp', t: 'Face 2 · Povos indígenas', alt: 'Enquanto você reclama da fumaça… comunidades indígenas podem estar protegendo suas casas, seu território e sua história. Brigadistas na fumaça.', c: 'Foto: Airton Pereira Sebastião / Prevfogo-Ibama (CC BY-SA 2.0).' },
      { src: 'assets/img/posts/enquanto-3.webp', t: 'Face 3 · Biodiversidade', alt: 'Enquanto o fogo avança… espécies da fauna, da flora e da funga podem desaparecer. Onça-pintada na beira da água.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/enquanto-4.webp', t: 'Face 4 · Futuro', alt: 'Enquanto um descuido dura segundos… a recuperação do Pantanal pode levar décadas. Broto verde em mata queimada.', c: 'Imagem ilustrativa gerada por IA.' },
      { src: 'assets/img/posts/enquanto-5.webp', t: 'Face 5 · Responsabilidade', alt: 'Enquanto muitos esperam que alguém resolva… a prevenção começa com cada um de nós. Pequenas atitudes podem evitar grandes perdas. Linha de fogo na floresta vista do alto.', c: 'Foto: Bruno Kelly / Amazônia Real (12/08/2020, CC BY 2.0).' },
      { src: 'assets/img/posts/enquanto-6.webp', t: 'Face 6 · Canais de denúncia', alt: 'Ao identificar um foco de incêndio, acione imediatamente os contatos: Corpo de Bombeiros 193, Polícia Militar 190, Defesa Civil Estadual (67) 99607-1525, Disque Denúncia Estadual 181, Prefeitura de Miranda (67) 3242-1508.', c: 'Arte da campanha.' }
    ],
    causas: [
      { src: 'assets/img/posts/fogo-destroi-1.webp', t: 'Face 1 · Abertura', alt: 'O fogo destrói, mas você pode ajudar a prevenir. Entenda as causas e saiba como evitar incêndios.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/fogo-destroi-2.webp', t: 'Face 2 · O clima', alt: 'O clima pode favorecer a propagação dos incêndios: seca e vegetação ressecada, ventos intensos, baixa umidade do ar. Nessas condições, o risco é ainda maior.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/fogo-destroi-3.webp', t: 'Face 3 · As atitudes', alt: 'Mas o fogo também pode começar com nossas atitudes: bitucas jogadas na vegetação, queima de lixo, folhas e galhos, fogo próximo à vegetação. Um descuido pode causar um grande incêndio.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/fogo-destroi-4.webp', t: 'Face 4 · Como evitar', alt: 'Como evitar? A prevenção começa com você: não jogue bitucas na vegetação, não queime lixo, folhas ou galhos, respeite as restrições ao uso do fogo, mantenha terrenos e quintais limpos. Cada atitude conta.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/fogo-destroi-5.webp', t: 'Face 5 · A lei', alt: 'Queimar lixo é proibido! Em Miranda, a queima de lixo, folhas, galhos e outros resíduos vegetais é proibida em todo o município. Na cidade e no campo, a lei deve ser respeitada. Lei Complementar Municipal nº 110/2021, art. 14, § 2º, III.', c: 'Foto: Canva.' },
      { src: 'assets/img/posts/fogo-destroi-6.webp', t: 'Face 6 · Canais de denúncia', alt: 'Viu fogo? Aja rápido. Ligue 193, Corpo de Bombeiros. Canais de denúncia: Corpo de Bombeiros 193, Polícia Militar 190, WhatsApp Defesa Civil MS (67) 99607-1525, Disque Denúncia Estadual 181, Prefeitura de Miranda (67) 3242-1508.', c: 'Arte da campanha.' }
    ],
    pecas: [
      { src: 'assets/img/pecas/folder-externo.webp', t: 'Folder tríptico, lado externo', alt: 'Folder tríptico, lado externo', c: 'Fotos: Airton Pereira Sebastião / Prevfogo-Ibama (CC BY-SA 2.0); Charles J. Sharp (CC BY-SA 4.0).' },
      { src: 'assets/img/pecas/folder-interno.webp', t: 'Folder tríptico, lado interno', alt: 'Folder tríptico, lado interno', c: 'Fotos: Flavio André / MTur (domínio público); Lcainbinder (CC BY-SA 4.0).' },
      { src: 'assets/img/pecas/cartaz-a3.webp', t: 'Cartaz A3', alt: 'Cartaz A3', c: 'Fotos: Charles J. Sharp (CC BY-SA 4.0); Airton Pereira Sebastião / Prevfogo-Ibama (CC BY-SA 2.0).' }
    ]
  };

  function montarCarrossel(id, nome) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = GALERIAS[nome].map(function (g, i) {
      return '<figure><button type="button" data-lupa="' + nome + '" data-i="' + i + '" aria-label="Ampliar: ' + g.t + '">' +
        '<img src="' + g.src + '" alt="' + g.alt.replace(/"/g, '&quot;') + '" width="1080" height="1350" decoding="async"></button>' +
        '<figcaption><b>' + g.t + '</b>' + (g.c || '') + '</figcaption></figure>';
    }).join('');
  }
  montarCarrossel('carrossel-enquanto', 'enquanto');
  montarCarrossel('carrossel-causas', 'causas');

  /* ---------- lupa ---------- */
  var lupa = document.getElementById('lupa');
  var lupaImg = document.getElementById('lupa-img');
  var lupaLeg = document.getElementById('lupa-leg');
  var atual = { nome: null, i: 0 };
  function mostrar() {
    var g = GALERIAS[atual.nome][atual.i];
    lupaImg.src = g.src; lupaImg.alt = g.alt;
    lupaLeg.textContent = g.t + (g.c ? ' · ' + g.c : '');
  }
  function abrir(nome, i) {
    atual.nome = nome; atual.i = i; mostrar();
    if (typeof lupa.showModal === 'function') lupa.showModal(); else lupa.setAttribute('open', '');
  }
  function fechar() { if (lupa.close) lupa.close(); else lupa.removeAttribute('open'); }
  function passo(d) { var n = GALERIAS[atual.nome].length; atual.i = (atual.i + d + n) % n; mostrar(); }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lupa]');
    if (b) abrir(b.dataset.lupa, +b.dataset.i);
  });
  document.getElementById('lupa-fechar').addEventListener('click', fechar);
  document.getElementById('lupa-ant').addEventListener('click', function () { passo(-1); });
  document.getElementById('lupa-prox').addEventListener('click', function () { passo(1); });
  lupa.addEventListener('click', function (e) { if (e.target === lupa) fechar(); });
  lupa.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') passo(-1);
    if (e.key === 'ArrowRight') passo(1);
  });

  /* ---------- barras: animam ao entrar na tela (estado de repouso já é o final) ---------- */
  var barras = document.getElementById('barras');
  if (barras && 'IntersectionObserver' in window && !reduzir) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { barras.classList.add('anima'); io.disconnect(); } });
    }, { threshold: 0.5 });
    io.observe(barras);
  }

  /* ---------- copiar números ---------- */
  document.querySelectorAll('.copiar').forEach(function (b) {
    b.addEventListener('click', function () {
      var num = b.dataset.num;
      function ok() { b.textContent = 'Copiado'; setTimeout(function () { b.textContent = 'Copiar'; }, 1600); }
      function selecionar() {
        var alvo = b.parentNode.querySelector('.contato__num');
        var r = document.createRange(); r.selectNodeContents(alvo);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        b.textContent = 'Selecionado';
        setTimeout(function () { b.textContent = 'Copiar'; }, 1600);
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(num).then(ok, selecionar);
        else selecionar();
      } catch (err) { selecionar(); }
    });
  });

  /* ---------- player do spot ---------- */
  var audio = document.getElementById('audio');
  var play = document.getElementById('play');
  var icoPlay = document.getElementById('ico-play');
  var icoPausa = document.getElementById('ico-pausa');
  var onda = document.getElementById('onda');
  var tAtual = document.getElementById('t-atual');
  var tTotal = document.getElementById('t-total');
  var trechos = Array.prototype.slice.call(document.querySelectorAll('#transcricao span'));
  var picos = null;

  function fmt(s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

  // marcos de cada trecho, proporcionais ao número de letras (sincronia aproximada)
  var letras = trechos.map(function (s) { return s.textContent.length; });
  var somaL = letras.reduce(function (a, b) { return a + b; }, 0);

  function desenharOnda() {
    var dpr = window.devicePixelRatio || 1;
    var w = onda.clientWidth, h = onda.clientHeight;
    if (!w) return;
    onda.width = w * dpr; onda.height = h * dpr;
    var c = onda.getContext('2d');
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, w, h);
    var n = Math.max(24, Math.floor(w / 4));
    var prog = audio.duration ? audio.currentTime / audio.duration : 0;
    for (var i = 0; i < n; i++) {
      var v = picos ? picos[Math.floor(i / n * picos.length)] : 0.25 + 0.2 * Math.abs(Math.sin(i * 0.7)) * Math.abs(Math.cos(i * 0.23));
      var bh = Math.max(2, v * (h - 6));
      c.fillStyle = (i / n) < prog ? '#f7941d' : '#5a4a3e';
      c.fillRect(i * (w / n), (h - bh) / 2, Math.max(1.5, w / n - 1.5), bh);
    }
  }
  function carregarPicos() {
    if (!window.fetch || !(window.AudioContext || window.webkitAudioContext)) return;
    fetch(audio.getAttribute('src')).then(function (r) { return r.arrayBuffer(); }).then(function (buf) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      var ctx = new Ctx();
      return new Promise(function (res, rej) { ctx.decodeAudioData(buf, res, rej); }).then(function (ab) {
        var d = ab.getChannelData(0), N = 300, bloco = Math.floor(d.length / N), arr = [], max = 0;
        for (var i = 0; i < N; i++) {
          var m = 0;
          for (var j = 0; j < bloco; j += 16) { var a = Math.abs(d[i * bloco + j]); if (a > m) m = a; }
          arr.push(m); if (m > max) max = m;
        }
        picos = arr.map(function (v) { return max ? v / max : 0; });
        if (ctx.close) ctx.close();
        desenharOnda();
      });
    }).catch(function () { /* sem forma de onda real: segue a decorativa */ });
  }
  function atualizarTrecho() {
    if (!audio.duration) return;
    var p = audio.currentTime / audio.duration, acc = 0, idx = -1;
    for (var i = 0; i < letras.length; i++) {
      acc += letras[i] / somaL;
      if (p <= acc) { idx = i; break; }
    }
    trechos.forEach(function (s, i) { s.classList.toggle('falando', !audio.paused && i === idx); });
  }
  play.addEventListener('click', function () {
    if (audio.paused) { var pr = audio.play(); if (pr && pr.catch) pr.catch(function () {}); } else audio.pause();
  });
  audio.addEventListener('play', function () { icoPlay.hidden = true; icoPausa.hidden = false; play.setAttribute('aria-label', 'Pausar o spot'); });
  audio.addEventListener('pause', function () { icoPlay.hidden = false; icoPausa.hidden = true; play.setAttribute('aria-label', 'Tocar o spot'); atualizarTrecho(); });
  audio.addEventListener('ended', function () { audio.currentTime = 0; desenharOnda(); });
  audio.addEventListener('loadedmetadata', function () { tTotal.textContent = fmt(audio.duration); desenharOnda(); });
  audio.addEventListener('timeupdate', function () { tAtual.textContent = fmt(audio.currentTime); desenharOnda(); atualizarTrecho(); });
  onda.addEventListener('click', function (e) {
    if (!audio.duration) return;
    var r = onda.getBoundingClientRect();
    audio.currentTime = (e.clientX - r.left) / r.width * audio.duration;
  });
  window.addEventListener('resize', desenharOnda);
  desenharOnda();
  carregarPicos();

  /* ---------- brasas subindo no topo ---------- */
  var cv = document.getElementById('brasas');
  if (cv && !reduzir) {
    var cx = cv.getContext('2d'), W = 0, H = 0, dpr = 1, faiscas = [], visivel = true, rodando = false;
    function medir() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function nova(inicio) {
      return {
        x: W * (0.25 + Math.random() * 0.75), y: inicio ? Math.random() * H : H + 10,
        r: 0.6 + Math.random() * 2.2, vy: 0.25 + Math.random() * 0.9, fase: Math.random() * 6.28,
        vida: 0, max: 220 + Math.random() * 360
      };
    }
    medir();
    for (var k = 0; k < 70; k++) faiscas.push(nova(true));
    function quadro() {
      if (!visivel) { rodando = false; return; }
      cx.clearRect(0, 0, W, H);
      cx.globalCompositeOperation = 'lighter';
      for (var i = 0; i < faiscas.length; i++) {
        var f = faiscas[i];
        f.vida++; f.y -= f.vy; f.x += Math.sin(f.fase + f.vida * 0.02) * 0.45 + 0.12;
        var a = Math.max(0, 1 - f.vida / f.max) * (0.5 + 0.5 * Math.sin(f.vida * 0.15 + f.fase));
        if (f.y < -10 || f.vida > f.max) { faiscas[i] = nova(false); continue; }
        var g = cx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 4);
        g.addColorStop(0, 'rgba(255,200,110,' + a + ')');
        g.addColorStop(0.4, 'rgba(247,148,29,' + a * 0.6 + ')');
        g.addColorStop(1, 'rgba(239,90,40,0)');
        cx.fillStyle = g;
        cx.beginPath(); cx.arc(f.x, f.y, f.r * 4, 0, 6.283); cx.fill();
      }
      cx.globalCompositeOperation = 'source-over';
      requestAnimationFrame(quadro);
    }
    function ligar() { if (!rodando && visivel) { rodando = true; requestAnimationFrame(quadro); } }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (ents) { visivel = ents[0].isIntersecting; ligar(); }).observe(cv);
    }
    window.addEventListener('resize', medir);
    ligar();
  }
})();
