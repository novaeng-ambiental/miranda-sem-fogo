/* Jogo "Um Dia de Estiagem" · Campanha Miranda Sem Fogo
   Situações, respostas e explicações tiradas dos materiais da campanha (NOVAeng, 2026).
   Os animais sempre fogem do fogo: nenhum é atingido. */
(function () {
  'use strict';
  var reduzir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var CENAS = [
    {
      mes: 'Julho',
      texto: 'O quintal da sua casa está cheio de <b>folhas e galhos secos</b>. Dá vontade de juntar tudo e resolver logo.',
      opcoes: [
        { t: 'Junto tudo num canto e ponho fogo. É rápido e o quintal fica limpo.', certo: false },
        { t: 'Junto tudo, mas não queimo. Mantenho o quintal limpo sem usar fogo.', certo: true }
      ],
      explica: 'Em Miranda, a queima de lixo, folhas, galhos e outros resíduos vegetais é proibida em todo o município. Manter terrenos e quintais limpos, sem fogo, é uma das formas de evitar incêndios.',
      fonte: 'Carrossel “O fogo destrói”; Lei Complementar Municipal nº 110/2021, art. 14, § 2º, III.',
      enquanto: ['Enquanto o fogo avança…', 'espécies da fauna, da flora e da funga podem desaparecer.'],
      infracao: 'Queima de folhas e galhos no quintal',
      base: 'Lei Complementar Municipal nº 110/2021, art. 14, § 2º, III'
    },
    {
      mes: 'Julho',
      texto: 'No sítio, o <b>lixo de casa</b> acumulou e ainda falta para a coleta passar.',
      opcoes: [
        { t: 'Queimo o lixo num tambor no fundo do terreno.', certo: false },
        { t: 'Não queimo. Queimar lixo é proibido, na cidade e no campo.', certo: true }
      ],
      explica: 'A lei federal proíbe queimar resíduos a céu aberto ou em recipientes, instalações e equipamentos não licenciados. A queima de lixo doméstico está entre as causas recorrentes de incêndio na estiagem.',
      fonte: 'Lei nº 12.305/2010, art. 47, III; cartaz e projeto da campanha.',
      enquanto: ['Enquanto você sente o cheiro da fumaça…', 'comunidades indígenas podem estar protegendo suas casas, seu território e sua história.'],
      infracao: 'Queima de lixo doméstico em tambor',
      base: 'Lei nº 12.305/2010, art. 47, III'
    },
    {
      mes: 'Agosto',
      texto: 'Voltando pela estrada, você termina um cigarro. O <b>acostamento é só capim seco</b>.',
      opcoes: [
        { t: 'Jogo a bituca pela janela. Ela já está quase apagada.', certo: false },
        { t: 'Apago a bituca e guardo no carro até achar uma lixeira.', certo: true }
      ],
      explica: 'Bitucas jogadas na vegetação estão entre as causas do fogo. A orientação da campanha é clara: não descarte bitucas de cigarro em áreas de vegetação.',
      fonte: 'Folder, cartaz e carrossel “O fogo destrói”.',
      enquanto: ['Enquanto um descuido dura segundos…', 'a recuperação do Pantanal pode levar décadas.'],
      infracao: 'Bituca de cigarro jogada na vegetação',
      base: 'Orientação da campanha'
    },
    {
      mes: 'Agosto',
      texto: 'Dia de <b>seca, vento forte e ar muito seco</b>. Um vizinho quer limpar o pasto com fogo hoje mesmo.',
      opcoes: [
        { t: 'Tudo bem. É um fogo pequeno e ele sabe controlar.', certo: false },
        { t: 'Aviso que fogo só com autorização e com os cuidados necessários. E que hoje o risco é ainda maior.', certo: true }
      ],
      explica: 'Seca, vegetação ressecada, ventos intensos e baixa umidade do ar favorecem a propagação dos incêndios. O fogo só deve ser usado quando autorizado e com os cuidados necessários. Queimadas de manejo mal controladas estão entre as causas recorrentes de incêndio.',
      fonte: 'Carrossel “O fogo destrói”; folder; projeto da campanha.',
      enquanto: ['Enquanto você reclama da fumaça…', 'eles fogem para sobreviver.'],
      infracao: 'Fogo no pasto sem autorização, em dia de risco',
      base: 'Orientação da campanha'
    },
    {
      mes: 'Setembro',
      texto: 'Numa festa de família, alguém aparece com um <b>balão</b> para soltar.',
      opcoes: [
        { t: 'Deixo soltar. Fica bonito no céu.', certo: false },
        { t: 'Não deixo. Balão pode cair aceso no mato.', certo: true }
      ],
      explica: '“Pensou em queimar lixo, jogar bitucas de cigarro às margens das estradas ou soltar balões? Não faça! Pequenos descuidos podem provocar grandes incêndios.”',
      fonte: 'Legenda do carrossel “Enquanto…”.',
      enquanto: ['Enquanto o fogo avança…', 'espécies da fauna, da flora e da funga podem desaparecer.'],
      infracao: 'Soltura de balão',
      base: 'Orientação da campanha'
    },
    {
      mes: 'Setembro',
      texto: 'Você vê <b>fumaça subindo da mata</b>, perto de uma área protegida.',
      opcoes: [
        { t: 'Espero um pouco para ver se apaga sozinho.', certo: false },
        { t: 'Ligo na hora para o Corpo de Bombeiros, no 193.', certo: true },
        { t: 'Faço um vídeo e posto nas redes sociais.', certo: false }
      ],
      explica: 'Ao identificar um foco de incêndio, a orientação é avisar imediatamente os órgãos competentes. Corpo de Bombeiros: 193. Viu fogo? Aja rápido.',
      fonte: 'Folder, cartaz, spot e carrossel “O fogo destrói”.',
      enquanto: ['Enquanto um descuido dura segundos…', 'a recuperação do Pantanal pode levar décadas.'],
      infracao: 'Foco de incêndio não comunicado ao 193',
      base: 'Orientação da campanha'
    },
    {
      mes: 'Outubro',
      texto: 'Um terreno do seu bairro <b>vive sendo queimado com lixo</b>.',
      opcoes: [
        { t: 'Não é problema meu. Alguém vai resolver.', certo: false },
        { t: 'Denuncio: Disque Denúncia Estadual, 181, ou Prefeitura de Miranda, (67) 3242-1508.', certo: true }
      ],
      explica: 'Ao identificar um foco de incêndio ou uma queimada irregular, denuncie! Disque Denúncia Estadual: 181. Ou entre em contato com a Prefeitura de Miranda: (67) 3242-1508.',
      fonte: 'Spot de rádio da campanha.',
      enquanto: ['Enquanto muitos esperam que alguém resolva…', 'a prevenção começa com cada um de nós.'],
      infracao: 'Queimada irregular não denunciada',
      base: 'Orientação da campanha'
    }
  ];

  var ZONAS = CENAS.length;
  var LETRAS = 'ABC';

  var painel = document.getElementById('painel');
  var hudCena = document.getElementById('hud-cena');
  var hudCertas = document.getElementById('hud-certas');
  var hudQueimada = document.getElementById('hud-queimada');
  var hudMes = document.getElementById('hud-mes');
  var palcoMes = document.getElementById('palco-mes');
  var palcoMsg = document.getElementById('palco-msg');
  var palco = palcoMsg ? palcoMsg.parentNode : null;
  var caixaJogo = document.getElementById('jogo-caixa');
  var cv = document.getElementById('paisagem');
  if (!painel || !cv) return;
  var cx = cv.getContext('2d');

  /* ---------- estado ---------- */
  var cena = -1, certas = 0, erros = [], ordemZonas = [], zonas = [], aves = [], faiscas = [], fumaca = [], agua = [];
  var bichos = [], caminhoes = [], pma = null;

  function embaralhar(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- paisagem ---------- */
  var W = 0, H = 0, dpr = 1, cenario = null;
  function rnd(s) { var x = Math.sin(s * 127.1) * 43758.5453; return x - Math.floor(x); }

  function gerarCenario() {
    var arvores = [], capins = [];
    for (var z = 0; z < ZONAS; z++) {
      var n = 3 + Math.floor(rnd(z + 1) * 3);
      for (var k = 0; k < n; k++) {
        var s = z * 10 + k + 1;
        arvores.push({
          z: z, x: (z + 0.1 + rnd(s * 3.1) * 0.8) / ZONAS, y: 0.62 + rnd(s * 5.7) * 0.12,
          h: 0.16 + rnd(s * 7.3) * 0.14, palmeira: rnd(s * 9.9) > 0.55
        });
      }
      for (var c = 0; c < 26; c++) {
        var s2 = z * 100 + c + 7;
        capins.push({ z: z, x: (z + rnd(s2 * 1.3)) / ZONAS, y: 0.7 + rnd(s2 * 2.1) * 0.28, h: 0.02 + rnd(s2 * 3.7) * 0.03 });
      }
    }
    arvores.sort(function (a, b) { return a.y - b.y; });
    capins.sort(function (a, b) { return a.y - b.y; });
    return { arvores: arvores, capins: capins };
  }

  // animais: aves nas árvores e bichos no chão, pelo menos um por zona
  var TIPOS_CHAO = ['capivara', 'tamandua', 'cervo', 'capivara', 'cervo', 'tamandua', 'capivara'];
  var TIPOS_AVE = ['arara', 'tucano'];
  function gerarBichos() {
    bichos = [];
    for (var z = 0; z < ZONAS; z++) {
      bichos.push({ tipo: TIPOS_CHAO[z], z: z, x: (z + 0.25 + rnd(z * 5.3 + 2) * 0.5) / ZONAS, y: 0.74 + rnd(z * 3.9 + 1) * 0.09, dir: rnd(z * 8.1) > 0.5 ? 1 : -1, estado: 'parado', dx: 0, dy: 0, t: rnd(z) * 3000, voa: false });
      var arvs = cenario.arvores.filter(function (a) { return a.z === z; });
      if (arvs.length && (z % 2 === 0 || z === 5)) {
        var a = arvs[Math.floor(rnd(z * 2.7 + 4) * arvs.length)];
        bichos.push({ tipo: TIPOS_AVE[z % 2], z: z, x: a.x, y: a.y - a.h * 1.02, dir: rnd(z * 4.4) > 0.5 ? 1 : -1, estado: 'parado', dx: 0, dy: 0, t: rnd(z * 7) * 3000, voa: true });
      }
    }
  }

  function medir() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function zerarZonas() {
    zonas = [];
    for (var z = 0; z < ZONAS; z++) zonas.push({ estado: 'viva', frente: 0, t: 0, apos: 0, ritmo: 1 });
  }

  function queimadas() { return zonas.filter(function (z) { return z.estado !== 'viva'; }).length; }

  function queima(zIdx, xNorm) {
    var z = zonas[zIdx];
    if (z.estado === 'viva') return 0;
    if (z.estado === 'cinza') return 1;
    var local = (xNorm * ZONAS - zIdx);
    return local < z.frente ? 1 : 0;
  }

  function mix(a, b, t) {
    return 'rgb(' + Math.round(a[0] + (b[0] - a[0]) * t) + ',' + Math.round(a[1] + (b[1] - a[1]) * t) + ',' + Math.round(a[2] + (b[2] - a[2]) * t) + ')';
  }

  /* ---------- desenho dos animais ---------- */
  function desenharBicho(b, tempo) {
    if (b.estado === 'salvo') return;
    var s = Math.max(13, Math.min(W, H) * 0.075);
    var px = b.x * W + b.dx, py = b.y * H + b.dy;
    var correndo = b.estado === 'fugindo';
    var passo = Math.sin((tempo + b.t) / (correndo ? 60 : 400));
    cx.save();
    cx.translate(px, py);
    cx.scale(b.dir, 1);
    if (b.tipo === 'capivara') {
      var pe = correndo ? passo * s * 0.15 : 0;
      cx.strokeStyle = '#3b2616'; cx.lineWidth = s * 0.12; cx.lineCap = 'round';
      cx.beginPath();
      cx.moveTo(-s * 0.35, -s * 0.15); cx.lineTo(-s * 0.35 + pe, s * 0.05);
      cx.moveTo(s * 0.3, -s * 0.15); cx.lineTo(s * 0.3 - pe, s * 0.05);
      cx.stroke();
      cx.fillStyle = '#7a5434';
      cx.beginPath(); cx.ellipse(0, -s * 0.32, s * 0.55, s * 0.28, 0, 0, 6.283); cx.fill();
      cx.beginPath(); cx.ellipse(s * 0.55, -s * 0.4, s * 0.24, s * 0.17, -0.2, 0, 6.283); cx.fill();
      cx.fillStyle = '#4a311d'; cx.beginPath(); cx.arc(s * 0.5, -s * 0.58, s * 0.06, 0, 6.283); cx.fill();
      cx.fillStyle = '#120d0a'; cx.beginPath(); cx.arc(s * 0.62, -s * 0.44, s * 0.035, 0, 6.283); cx.fill();
    } else if (b.tipo === 'tamandua') {
      var pe2 = correndo ? passo * s * 0.15 : 0;
      cx.strokeStyle = '#2a1f17'; cx.lineWidth = s * 0.1; cx.lineCap = 'round';
      cx.beginPath();
      cx.moveTo(-s * 0.25, -s * 0.15); cx.lineTo(-s * 0.25 + pe2, s * 0.05);
      cx.moveTo(s * 0.3, -s * 0.15); cx.lineTo(s * 0.3 - pe2, s * 0.05);
      cx.stroke();
      cx.fillStyle = '#5b4a3c';
      cx.beginPath(); cx.moveTo(-s * 0.45, -s * 0.35); cx.quadraticCurveTo(-s * 1.05, -s * 1.0, -s * 0.95, -s * 0.2); cx.closePath(); cx.fill();
      cx.fillStyle = '#7a6656';
      cx.beginPath(); cx.ellipse(0, -s * 0.3, s * 0.5, s * 0.22, 0, 0, 6.283); cx.fill();
      cx.beginPath(); cx.moveTo(s * 0.4, -s * 0.38); cx.lineTo(s * 1.0, -s * 0.22); cx.lineTo(s * 0.42, -s * 0.2); cx.closePath(); cx.fill();
      cx.strokeStyle = '#1b130d'; cx.lineWidth = s * 0.09;
      cx.beginPath(); cx.moveTo(-s * 0.05, -s * 0.5); cx.lineTo(s * 0.32, -s * 0.22); cx.stroke();
    } else if (b.tipo === 'cervo') {
      var pe3 = correndo ? passo * s * 0.22 : 0;
      cx.strokeStyle = '#3a2210'; cx.lineWidth = s * 0.07; cx.lineCap = 'round';
      cx.beginPath();
      cx.moveTo(-s * 0.3, -s * 0.45); cx.lineTo(-s * 0.3 + pe3, s * 0.05);
      cx.moveTo(-s * 0.18, -s * 0.45); cx.lineTo(-s * 0.18 - pe3, s * 0.05);
      cx.moveTo(s * 0.25, -s * 0.45); cx.lineTo(s * 0.25 - pe3, s * 0.05);
      cx.moveTo(s * 0.37, -s * 0.45); cx.lineTo(s * 0.37 + pe3, s * 0.05);
      cx.stroke();
      cx.fillStyle = '#a5562a';
      cx.beginPath(); cx.ellipse(0, -s * 0.55, s * 0.48, s * 0.2, 0, 0, 6.283); cx.fill();
      cx.beginPath(); cx.moveTo(s * 0.32, -s * 0.62); cx.lineTo(s * 0.55, -s * 1.0); cx.lineTo(s * 0.66, -s * 0.94); cx.lineTo(s * 0.45, -s * 0.55); cx.closePath(); cx.fill();
      cx.beginPath(); cx.ellipse(s * 0.66, -s * 0.98, s * 0.17, s * 0.09, 0.3, 0, 6.283); cx.fill();
      cx.strokeStyle = '#e8d8c0'; cx.lineWidth = s * 0.05;
      cx.beginPath(); cx.moveTo(s * 0.58, -s * 1.05); cx.lineTo(s * 0.5, -s * 1.3); cx.moveTo(s * 0.53, -s * 1.2); cx.lineTo(s * 0.42, -s * 1.28);
      cx.moveTo(s * 0.64, -s * 1.06); cx.lineTo(s * 0.7, -s * 1.3); cx.stroke();
      cx.fillStyle = '#120d0a'; cx.beginPath(); cx.arc(-s * 0.48, -s * 0.6, s * 0.06, 0, 6.283); cx.fill();
    } else {
      // aves: arara ou tucano; pousadas ou voando
      var arara = b.tipo === 'arara';
      var corpo = arara ? '#c8322a' : '#151515';
      var bate = correndo ? passo : 0;
      cx.fillStyle = corpo;
      if (arara) {
        cx.strokeStyle = '#c8322a'; cx.lineWidth = s * 0.08;
        cx.beginPath(); cx.moveTo(-s * 0.2, -s * 0.05); cx.lineTo(-s * (correndo ? 0.85 : 0.35), correndo ? -s * 0.02 : s * 0.55); cx.stroke();
      }
      cx.beginPath(); cx.ellipse(0, -s * 0.15, s * 0.28, s * 0.17, correndo ? 0 : -0.9, 0, 6.283); cx.fill();
      cx.beginPath(); cx.arc(s * 0.22, -s * 0.38 + (correndo ? s * 0.2 : 0), s * 0.13, 0, 6.283); cx.fill();
      if (arara) { cx.fillStyle = '#f4f0e6'; cx.beginPath(); cx.arc(s * 0.27, -s * 0.39 + (correndo ? s * 0.2 : 0), s * 0.05, 0, 6.283); cx.fill(); }
      else { cx.fillStyle = '#f4f0e6'; cx.beginPath(); cx.arc(s * 0.2, -s * 0.28 + (correndo ? s * 0.2 : 0), s * 0.1, 0, 6.283); cx.fill(); }
      cx.fillStyle = arara ? '#e8e0cc' : '#f28c1e';
      var by = -s * 0.38 + (correndo ? s * 0.2 : 0);
      cx.beginPath(); cx.moveTo(s * 0.32, by - s * 0.05); cx.lineTo(s * (arara ? 0.45 : 0.75), by + s * 0.02); cx.lineTo(s * 0.32, by + s * 0.08); cx.closePath(); cx.fill();
      // asa
      cx.fillStyle = arara ? '#2b62b5' : '#0b0b0b';
      cx.beginPath();
      if (correndo) { cx.moveTo(-s * 0.1, -s * 0.15); cx.lineTo(s * 0.05, -s * 0.15 - bate * s * 0.6); cx.lineTo(s * 0.2, -s * 0.12); }
      else { cx.moveTo(-s * 0.15, -s * 0.25); cx.lineTo(s * 0.12, -s * 0.12); cx.lineTo(-s * 0.2, s * 0.05); }
      cx.closePath(); cx.fill();
      if (arara && !correndo) { cx.fillStyle = '#f2c23a'; cx.beginPath(); cx.arc(-s * 0.05, -s * 0.12, s * 0.05, 0, 6.283); cx.fill(); }
    }
    cx.restore();
  }

  /* ---------- caminhão de bombeiros e carro da PMA ---------- */
  function rodas(x, y, r, giro) {
    [x - r * 2.6, x + r * 2.6].forEach(function (rx) {
      cx.fillStyle = '#0d0d0d'; cx.beginPath(); cx.arc(rx, y, r, 0, 6.283); cx.fill();
      cx.fillStyle = '#9a9a9a'; cx.beginPath(); cx.arc(rx, y, r * 0.45, 0, 6.283); cx.fill();
      cx.strokeStyle = '#3a3a3a'; cx.lineWidth = r * 0.18;
      cx.beginPath(); cx.moveTo(rx + Math.cos(giro) * r * 0.45, y + Math.sin(giro) * r * 0.45); cx.lineTo(rx - Math.cos(giro) * r * 0.45, y - Math.sin(giro) * r * 0.45); cx.stroke();
    });
  }
  function tamanhoVeiculo() { var w = Math.max(70, Math.min(W * 0.13, 150)); return { w: w, h: w * 0.42 }; }

  function desenharCaminhao(c, tempo) {
    var t = tamanhoVeiculo(), w = t.w, h = t.h, x = c.x, y = H * 0.975;
    var r = h * 0.2;
    cx.fillStyle = 'rgba(0,0,0,.35)'; cx.beginPath(); cx.ellipse(x, y + 2, w * 0.55, h * 0.1, 0, 0, 6.283); cx.fill();
    // carroceria
    cx.fillStyle = '#c4231c'; cx.fillRect(x - w * 0.5, y - h - r * 0.4, w * 0.68, h);
    // cabine
    cx.fillRect(x + w * 0.18, y - h * 0.82 - r * 0.4, w * 0.3, h * 0.82);
    cx.fillStyle = '#bfe3f2'; cx.fillRect(x + w * 0.3, y - h * 0.74 - r * 0.4, w * 0.15, h * 0.3);
    // faixa e texto
    cx.fillStyle = '#f3e9dc'; cx.fillRect(x - w * 0.5, y - h * 0.45 - r * 0.4, w * 0.98, h * 0.08);
    cx.fillStyle = '#f3e9dc'; cx.font = '600 ' + Math.round(h * 0.26) + 'px "Bebas Neue", Impact, sans-serif'; cx.textBaseline = 'middle';
    cx.fillText('BOMBEIROS 193', x - w * 0.46, y - h * 0.72 - r * 0.4);
    // escada
    cx.strokeStyle = '#d9d0c4'; cx.lineWidth = Math.max(1, h * 0.05);
    cx.beginPath(); cx.moveTo(x - w * 0.48, y - h - r * 0.4 - h * 0.1); cx.lineTo(x + w * 0.12, y - h - r * 0.4 - h * 0.1); cx.stroke();
    for (var i = 0; i < 6; i++) { var lx = x - w * 0.46 + i * w * 0.11; cx.beginPath(); cx.moveTo(lx, y - h - r * 0.4 - h * 0.1); cx.lineTo(lx, y - h - r * 0.4); cx.stroke(); }
    // sirene
    var pisca = Math.floor(tempo / 220) % 2;
    cx.fillStyle = pisca ? '#ff3b30' : '#ffb3a8'; cx.fillRect(x + w * 0.24, y - h * 0.82 - r * 0.4 - h * 0.12, w * 0.12, h * 0.12);
    if (pisca && !reduzir) { cx.fillStyle = 'rgba(255,60,40,.25)'; cx.beginPath(); cx.arc(x + w * 0.3, y - h * 0.9 - r * 0.4, h * 0.5, 0, 6.283); cx.fill(); }
    rodas(x - w * 0.05, y - r * 0.4, r, c.giro);
    // canhão de água
    cx.strokeStyle = '#8c8c8c'; cx.lineWidth = Math.max(2, h * 0.08);
    cx.beginPath(); cx.moveTo(x - w * 0.15, y - h - r * 0.4); cx.lineTo(x - w * 0.15 + (c.mira || 0) * w * 0.15, y - h - r * 0.4 - h * 0.3); cx.stroke();
  }

  function desenharPMA(p, tempo) {
    var t = tamanhoVeiculo(), w = t.w * 0.9, h = t.h * 0.85, x = p.x, y = H * 0.975, r = h * 0.22;
    cx.fillStyle = 'rgba(0,0,0,.35)'; cx.beginPath(); cx.ellipse(x, y + 2, w * 0.55, h * 0.1, 0, 0, 6.283); cx.fill();
    cx.fillStyle = '#2b2e30';
    cx.beginPath();
    cx.moveTo(x - w * 0.5, y - r * 0.4); cx.lineTo(x - w * 0.5, y - h * 0.62 - r * 0.4); cx.lineTo(x - w * 0.22, y - h * 0.62 - r * 0.4);
    cx.lineTo(x - w * 0.1, y - h - r * 0.4); cx.lineTo(x + w * 0.22, y - h - r * 0.4); cx.lineTo(x + w * 0.34, y - h * 0.62 - r * 0.4);
    cx.lineTo(x + w * 0.5, y - h * 0.55 - r * 0.4); cx.lineTo(x + w * 0.5, y - r * 0.4); cx.closePath(); cx.fill();
    cx.fillStyle = '#bfe3f2';
    cx.fillRect(x - w * 0.06, y - h * 0.92 - r * 0.4, w * 0.12, h * 0.26);
    cx.fillRect(x + w * 0.09, y - h * 0.92 - r * 0.4, w * 0.11, h * 0.26);
    cx.fillStyle = '#f7941d'; cx.fillRect(x - w * 0.5, y - h * 0.5 - r * 0.4, w, h * 0.13);
    cx.fillStyle = '#f3e9dc'; cx.font = '600 ' + Math.round(h * 0.24) + 'px "Bebas Neue", Impact, sans-serif'; cx.textBaseline = 'middle';
    cx.fillText('PMA', x - w * 0.42, y - h * 0.22 - r * 0.4);
    cx.font = '500 ' + Math.round(h * 0.13) + 'px "IBM Plex Mono", monospace';
    cx.fillStyle = '#0c0907'; cx.fillText('MIRANDA SEM FOGO', x - w * 0.46, y - h * 0.435 - r * 0.4);
    var pisca = Math.floor(tempo / 200) % 2;
    cx.fillStyle = pisca ? '#2f6bff' : '#ff3b30'; cx.fillRect(x - w * 0.02, y - h - r * 0.4 - h * 0.1, w * 0.1, h * 0.1);
    cx.fillStyle = pisca ? '#ff3b30' : '#2f6bff'; cx.fillRect(x + w * 0.08, y - h - r * 0.4 - h * 0.1, w * 0.1, h * 0.1);
    rodas(x, y - r * 0.4, r, p.giro);
    if (p.estado === 'parado') {
      // policial ambiental ao lado do carro, com a prancheta
      var ph = h * 1.15, ox = x - w * 0.72, oy = y;
      cx.fillStyle = '#2f3a2c'; cx.fillRect(ox - ph * 0.1, oy - ph * 0.45, ph * 0.08, ph * 0.45); cx.fillRect(ox + ph * 0.02, oy - ph * 0.45, ph * 0.08, ph * 0.45);
      cx.fillStyle = '#4d5e46'; cx.fillRect(ox - ph * 0.14, oy - ph * 0.85, ph * 0.28, ph * 0.42);
      cx.fillStyle = '#c9946b'; cx.beginPath(); cx.arc(ox, oy - ph * 0.95, ph * 0.1, 0, 6.283); cx.fill();
      cx.fillStyle = '#2b2e30'; cx.fillRect(ox - ph * 0.12, oy - ph * 1.07, ph * 0.24, ph * 0.06); cx.fillRect(ox - ph * 0.08, oy - ph * 1.12, ph * 0.16, ph * 0.06);
      cx.fillStyle = '#f3e9dc'; cx.fillRect(ox + ph * 0.1, oy - ph * 0.75, ph * 0.16, ph * 0.2);
      cx.fillStyle = '#f7941d'; cx.fillRect(ox + ph * 0.12, oy - ph * 0.7, ph * 0.12, ph * 0.03); cx.fillRect(ox + ph * 0.12, oy - ph * 0.64, ph * 0.1, ph * 0.03);
    }
  }

  /* ---------- cena ---------- */
  function desenhar(tempo) {
    if (!W) return;
    var q = queimadas() / ZONAS;
    var ceu = cx.createLinearGradient(0, 0, 0, H * 0.7);
    ceu.addColorStop(0, mix([38, 30, 44], [40, 22, 16], q));
    ceu.addColorStop(0.6, mix([196, 112, 58], [150, 60, 24], q));
    ceu.addColorStop(1, mix([242, 170, 92], [210, 92, 36], q));
    cx.fillStyle = ceu; cx.fillRect(0, 0, W, H);

    var sx = W * 0.78, sy = H * 0.5, sr = Math.min(W, H) * 0.11;
    var sol = cx.createRadialGradient(sx, sy, 0, sx, sy, sr * 3);
    sol.addColorStop(0, 'rgba(255,214,150,' + (0.95 - q * 0.5) + ')');
    sol.addColorStop(0.3, 'rgba(255,170,80,' + (0.5 - q * 0.25) + ')');
    sol.addColorStop(1, 'rgba(255,140,60,0)');
    cx.fillStyle = sol; cx.beginPath(); cx.arc(sx, sy, sr * 3, 0, 6.283); cx.fill();

    cx.fillStyle = mix([92, 54, 48], [60, 34, 28], q);
    cx.beginPath(); cx.moveTo(0, H * 0.6);
    for (var i = 0; i <= 40; i++) {
      var x = i / 40;
      var y = 0.52 - 0.07 * Math.sin(x * 5.2 + 0.6) - 0.05 * Math.sin(x * 11.3) - 0.03 * Math.cos(x * 2.1);
      cx.lineTo(x * W, y * H);
    }
    cx.lineTo(W, H * 0.6); cx.closePath(); cx.fill();

    for (var z = 0; z < ZONAS; z++) {
      var x0 = z / ZONAS * W, x1 = (z + 1) / ZONAS * W;
      var est = zonas[z];
      var viva = cx.createLinearGradient(0, H * 0.58, 0, H);
      viva.addColorStop(0, '#8a7a3e'); viva.addColorStop(1, '#4e4a22');
      cx.fillStyle = viva; cx.fillRect(x0 - 0.5, H * 0.58, x1 - x0 + 1, H * 0.42);
      if (est.estado !== 'viva') {
        var fr = est.estado === 'cinza' ? 1 : est.frente;
        cx.fillStyle = '#211a16';
        cx.fillRect(x0 - 0.5, H * 0.58, (x1 - x0) * fr + 1, H * 0.42);
      }
    }
    var nev = cx.createLinearGradient(0, H * 0.55, 0, H * 0.66);
    nev.addColorStop(0, 'rgba(230,150,80,.35)'); nev.addColorStop(1, 'rgba(230,150,80,0)');
    cx.fillStyle = nev; cx.fillRect(0, H * 0.55, W, H * 0.11);

    cx.beginPath();
    for (var j = 0; j <= 60; j++) {
      var xx = j / 60, yy = 0.86 + 0.02 * Math.sin(xx * 9 + 1) + 0.01 * Math.sin(xx * 23);
      if (j === 0) cx.moveTo(0, yy * H); else cx.lineTo(xx * W, yy * H);
    }
    for (var j2 = 60; j2 >= 0; j2--) {
      var xb = j2 / 60, yb = 0.9 + 0.02 * Math.sin(xb * 9 + 1.4) + 0.01 * Math.cos(xb * 17);
      cx.lineTo(xb * W, yb * H);
    }
    cx.closePath();
    cx.fillStyle = mix([214, 140, 80], [120, 60, 30], q);
    cx.globalAlpha = 0.75; cx.fill(); cx.globalAlpha = 1;

    cx.lineWidth = 1.2;
    cenario.capins.forEach(function (c) {
      var b = queima(c.z, c.x);
      var px = c.x * W, py = c.y * H, ph = c.h * H;
      if (py > H * 0.85 && py < H * 0.92) return;
      cx.strokeStyle = b ? '#120d0a' : '#b39a52';
      cx.beginPath();
      cx.moveTo(px, py); cx.lineTo(px - ph * 0.3, py - ph * (b ? 0.3 : 1));
      cx.moveTo(px, py); cx.lineTo(px + ph * 0.25, py - ph * (b ? 0.25 : 0.9));
      cx.moveTo(px, py); cx.lineTo(px, py - ph * (b ? 0.35 : 1.1));
      cx.stroke();
    });

    // bichos do chão atrás das árvores mais próximas
    bichos.forEach(function (b) { if (!b.voa) desenharBicho(b, tempo); });

    cenario.arvores.forEach(function (a) {
      var b = queima(a.z, a.x);
      var px = a.x * W, py = a.y * H, ph = a.h * H;
      var balanco = reduzir ? 0 : Math.sin(tempo / 900 + a.x * 20) * ph * 0.015;
      cx.strokeStyle = b ? '#0b0806' : '#3a2a1c';
      cx.lineWidth = Math.max(1.5, ph * (a.palmeira ? 0.05 : 0.07));
      cx.beginPath(); cx.moveTo(px, py); cx.lineTo(px + balanco, py - ph); cx.stroke();
      if (a.palmeira) {
        cx.lineWidth = Math.max(1, ph * 0.03);
        cx.strokeStyle = b ? '#0b0806' : '#3d5a2c';
        for (var f = 0; f < 9; f++) {
          if (b && f % 3) continue;
          var ang = -Math.PI + (f / 8) * Math.PI;
          var len = ph * (b ? 0.18 : 0.32);
          cx.beginPath();
          cx.moveTo(px + balanco, py - ph);
          cx.quadraticCurveTo(px + balanco + Math.cos(ang) * len * 0.6, py - ph + Math.sin(ang) * len * 0.8 - len * 0.2,
            px + balanco + Math.cos(ang) * len, py - ph + Math.sin(ang) * len * 0.5 + (b ? len * 0.4 : len * 0.15));
          cx.stroke();
        }
      } else if (!b) {
        cx.fillStyle = '#34502a';
        var r = ph * 0.3;
        cx.beginPath();
        cx.arc(px + balanco - r * 0.5, py - ph + r * 0.1, r * 0.8, 0, 6.283);
        cx.arc(px + balanco + r * 0.55, py - ph + r * 0.15, r * 0.75, 0, 6.283);
        cx.arc(px + balanco, py - ph - r * 0.35, r * 0.9, 0, 6.283);
        cx.fill();
        cx.fillStyle = 'rgba(240,160,80,.18)';
        cx.beginPath(); cx.arc(px + balanco + r * 0.45, py - ph - r * 0.3, r * 0.5, 0, 6.283); cx.fill();
      } else {
        cx.lineWidth = Math.max(1, ph * 0.03);
        cx.beginPath();
        cx.moveTo(px, py - ph * 0.7); cx.lineTo(px - ph * 0.18, py - ph * 0.95);
        cx.moveTo(px, py - ph * 0.8); cx.lineTo(px + ph * 0.16, py - ph * 1.02);
        cx.stroke();
      }
    });

    // aves nas copas
    bichos.forEach(function (b) { if (b.voa) desenharBicho(b, tempo); });

    for (var z2 = 0; z2 < ZONAS; z2++) {
      if (zonas[z2].estado === 'viva') continue;
      var fr2 = zonas[z2].estado === 'cinza' ? 1 : zonas[z2].frente;
      for (var e = 0; e < 14; e++) {
        var ex = (z2 + rnd(z2 * 31 + e) * fr2) / ZONAS * W, ey = (0.64 + rnd(z2 * 17 + e * 3) * 0.34) * H;
        if (ey > H * 0.85 && ey < H * 0.92) continue;
        var pulso = reduzir ? 0.5 : 0.5 + 0.5 * Math.sin(tempo / 300 + e * 1.7 + z2);
        cx.fillStyle = 'rgba(247,120,30,' + (0.25 + pulso * 0.5) + ')';
        cx.fillRect(ex, ey, 2, 2);
      }
    }

    fumaca.forEach(function (s) {
      cx.fillStyle = 'rgba(60,48,42,' + s.a + ')';
      cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill();
    });
    cx.globalCompositeOperation = 'lighter';
    faiscas.forEach(function (p) {
      var g = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, 'rgba(255,220,140,' + p.a + ')');
      g.addColorStop(0.4, 'rgba(247,148,29,' + p.a * 0.8 + ')');
      g.addColorStop(1, 'rgba(239,90,40,0)');
      cx.fillStyle = g; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill();
    });
    cx.globalCompositeOperation = 'source-over';

    // jato d'água
    agua.forEach(function (g) {
      cx.fillStyle = 'rgba(190,225,255,' + g.a + ')';
      cx.beginPath(); cx.arc(g.x, g.y, g.r, 0, 6.283); cx.fill();
    });

    caminhoes.forEach(function (c) { desenharCaminhao(c, tempo); });
    if (pma) desenharPMA(pma, tempo);

    aves.forEach(function (v) {
      var bat = Math.sin(v.t / 140) * v.s * 0.5;
      cx.strokeStyle = '#1a120d'; cx.lineWidth = Math.max(1.5, v.s * 0.12);
      cx.beginPath();
      cx.moveTo(v.x - v.s, v.y - bat); cx.quadraticCurveTo(v.x - v.s * 0.4, v.y - v.s * 0.2, v.x, v.y);
      cx.quadraticCurveTo(v.x + v.s * 0.4, v.y - v.s * 0.2, v.x + v.s, v.y - bat);
      cx.moveTo(v.x, v.y); cx.lineTo(v.x + v.s * 0.9, v.y + v.s * 0.08);
      cx.stroke();
    });
  }

  /* ---------- animação ---------- */
  var ultimo = 0, visivel = true, rodando = false;
  function passo(tempo) {
    if (!visivel) { rodando = false; return; }
    var dt = Math.min(50, tempo - (ultimo || tempo)); ultimo = tempo;
    var esc = W / 1000;

    zonas.forEach(function (z, i) {
      if (z.estado !== 'fogo') return;
      z.t += dt;
      if (z.frente < 1) z.frente = Math.min(1, z.frente + dt / 3200 * z.ritmo);
      else z.apos += dt;
      var intens = z.ritmo < 1 ? 0.45 : 1;
      var n = reduzir ? 1 : Math.max(1, Math.round(4 * intens));
      for (var k = 0; k < n; k++) {
        var fx = (i + z.frente * Math.random()) / ZONAS * W;
        if (Math.random() < 0.6) fx = (i + Math.max(0, z.frente - Math.random() * 0.25)) / ZONAS * W;
        faiscas.push({ x: fx, y: H * (0.62 + Math.random() * 0.3), r: (6 + Math.random() * 16) * (0.6 + intens * 0.4), a: 0.9 * intens + 0.1, vy: 0.4 + Math.random() * 0.9 });
      }
      if (Math.random() < 0.35) fumaca.push({ x: (i + z.frente * Math.random()) / ZONAS * W, y: H * 0.6, r: 10 + Math.random() * 14, a: 0.35, vx: 0.15 + Math.random() * 0.3 });
      if (z.frente >= 1 && z.apos > 900) z.estado = 'cinza';
    });
    zonas.forEach(function (z, i) {
      if (z.estado === 'cinza' && Math.random() < (reduzir ? 0.02 : 0.08)) fumaca.push({ x: (i + Math.random()) / ZONAS * W, y: H * 0.66, r: 6 + Math.random() * 10, a: 0.2, vx: 0.1 + Math.random() * 0.2 });
    });

    // bichos fugindo: correm ou voam para fora da tela, sempre na frente do fogo
    bichos.forEach(function (b) {
      if (b.estado !== 'fugindo') return;
      if (b.voa) { b.dx += b.dir * 3.2 * esc * dt / 16; b.dy -= 1.6 * esc * dt / 16; }
      else { b.dx += b.dir * 3.4 * esc * dt / 16; }
      var px = b.x * W + b.dx, py = b.y * H + b.dy;
      if (px < -60 || px > W + 60 || py < -60) b.estado = 'salvo';
    });

    // caminhões de bombeiros
    caminhoes.forEach(function (c) {
      var z = zonas[c.zona];
      var tw = tamanhoVeiculo().w;
      if (c.estado === 'chegando') {
        var v = Math.max(3, W / 90) * dt / 16;
        c.x = Math.min(c.alvo, c.x + v); c.giro += v / 6;
        if (c.x >= c.alvo) { c.estado = 'jogando'; z.ritmo = 0.5; }
      } else if (c.estado === 'jogando') {
        c.mira = 0.6 + 0.4 * Math.sin(tempo / 300);
        if (!reduzir || Math.random() < 0.3) {
          for (var k = 0; k < 3; k++) {
            var bx = c.x - tw * 0.15 + c.mira * tw * 0.15, by = H * 0.975 - tamanhoVeiculo().h * 1.4;
            var alvoX = (c.zona + 0.5) / ZONAS * W;
            agua.push({ x: bx, y: by, vx: (alvoX - bx) / 40 + (Math.random() - 0.5) * 1.2, vy: -3.2 - Math.random() * 1.2, r: 1.5 + Math.random() * 1.8, a: 0.85 });
          }
        }
        if (z.estado === 'cinza') { c.estado = 'saindo'; }
      } else if (c.estado === 'saindo') {
        var v2 = Math.max(3, W / 90) * dt / 16; c.x += v2; c.giro += v2 / 6;
        if (c.x > W + tw) c.estado = 'fora';
      }
    });
    caminhoes = caminhoes.filter(function (c) { return c.estado !== 'fora'; });

    // carro da PMA
    if (pma) {
      if (pma.estado === 'chegando') {
        var v3 = Math.max(3, W / 100) * dt / 16;
        pma.x = Math.max(pma.alvo, pma.x - v3); pma.giro -= v3 / 6;
        if (pma.x <= pma.alvo) { pma.estado = 'parado'; pma.t = 0; }
      } else if (pma.estado === 'parado') {
        pma.t += dt;
        if (pma.t > 900 && pma.aoParar) { var f = pma.aoParar; pma.aoParar = null; f(); }
      }
    }

    faiscas = faiscas.filter(function (p) { p.y -= p.vy * dt / 16; p.r *= 0.985; p.a -= dt / 900; return p.a > 0 && p.r > 1; });
    fumaca = fumaca.filter(function (s) { s.y -= dt / 40; s.x += s.vx * dt / 16; s.r += dt / 60; s.a -= dt / 9000; return s.a > 0 && s.y > -40; });
    agua = agua.filter(function (g) { g.x += g.vx * dt / 16; g.y += g.vy * dt / 16; g.vy += 0.12 * dt / 16; g.a -= dt / 1400; return g.a > 0 && g.y < H; });
    aves = aves.filter(function (v) { v.t += dt; v.x += v.vx * dt / 16; v.y += Math.sin(v.t / 600) * 0.15; return v.x < W + 40; });
    bichos.forEach(function (b) { b.t += dt; });
    desenhar(tempo);
    requestAnimationFrame(passo);
  }
  function ligar() { if (!rodando && visivel) { rodando = true; ultimo = 0; requestAnimationFrame(passo); } }

  function acender() {
    var z = ordemZonas.shift();
    if (z === undefined) return;
    zonas[z].estado = 'fogo'; zonas[z].t = 0; zonas[z].frente = 0; zonas[z].apos = 0; zonas[z].ritmo = 1;
    // os bichos da área fogem para o lado mais perto da borda
    bichos.forEach(function (b) {
      if (b.z !== z || b.estado !== 'parado') return;
      b.estado = 'fugindo';
      b.dir = (b.x < 0.5) ? -1 : 1;
    });
    // o caminhão de bombeiros sai da borda esquerda até a área do fogo
    var tw = tamanhoVeiculo().w;
    var alvo = Math.min(W - tw * 0.55, Math.max(tw * 0.6, (z + 0.5) / ZONAS * W - tw * 0.2));
    caminhoes.push({ zona: z, x: reduzir ? alvo : -tw, alvo: alvo, estado: reduzir ? 'jogando' : 'chegando', giro: 0, mira: 0.6 });
    if (reduzir) zonas[z].ritmo = 0.5;
    ligar();
  }
  function soltarAve() {
    if (reduzir) return;
    var s = Math.max(10, Math.min(W, H) * 0.035);
    aves.push({ x: -30, y: H * (0.18 + Math.random() * 0.15), vx: 1.4 + Math.random() * 0.6, s: s, t: Math.random() * 1000 });
    if (Math.random() < 0.6) aves.push({ x: -80, y: H * (0.2 + Math.random() * 0.15), vx: 1.3 + Math.random() * 0.6, s: s * 0.8, t: Math.random() * 1000 });
    ligar();
  }
  function chamarPMA(depois) {
    var tw = tamanhoVeiculo().w;
    var alvo = W * 0.62;
    pma = { x: reduzir ? alvo : W + tw, alvo: alvo, estado: reduzir ? 'parado' : 'chegando', giro: 0, t: 0, aoParar: depois };
    ligar();
    if (reduzir) { pma.aoParar = null; depois(); }
  }

  /* ---------- painel ---------- */
  function hud() {
    hudCena.textContent = Math.max(0, Math.min(cena + 1, ZONAS)) + ' de ' + ZONAS;
    hudCertas.textContent = certas;
    hudQueimada.textContent = Math.round(queimadas() / ZONAS * 100) + '%';
    var mes = cena >= 0 && cena < ZONAS ? CENAS[cena].mes : (cena >= ZONAS ? 'Outubro' : 'Julho');
    hudMes.textContent = mes; palcoMes.textContent = mes;
  }

  function mostrarMsg(on) {
    if (!palcoMsg) return;
    palcoMsg.hidden = !on;
    palco.classList.toggle('com-msg', on);
    if (!on) palcoMsg.innerHTML = '';
    medir(); desenhar(performance.now());
  }
  function irParaPalco() {
    var r = palco.getBoundingClientRect();
    var cab = 80;
    if (r.top < cab || r.bottom > window.innerHeight) {
      var y = window.pageYOffset + r.top - cab;
      try { window.scrollTo({ top: y, behavior: reduzir ? 'auto' : 'smooth' }); } catch (e) { window.scrollTo(0, y); }
    }
  }
  function irParaJogo() {
    var topo = caixaJogo.getBoundingClientRect().top;
    if (topo < 0 || topo > window.innerHeight * 0.4) { try { caixaJogo.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'start' }); } catch (e) { caixaJogo.scrollIntoView(); } }
  }
  function mostrarCena() {
    var c = CENAS[cena];
    var ops = embaralhar(c.opcoes);
    hud();
    painel.innerHTML = '<p class="jogo__cena">' + c.texto + '</p>' +
      '<div class="opcoes">' + ops.map(function (o, i) {
        return '<button type="button" class="opcao" data-certo="' + (o.certo ? 1 : 0) + '"><span class="opcao__l">' + LETRAS[i] + '</span><span>' + o.t + '</span></button>';
      }).join('') + '</div><div id="retorno"></div>';
    var primeiro = painel.querySelector('.opcao'); if (primeiro) primeiro.focus({ preventScroll: true });
    mostrarMsg(false);
    if (cena > 0) irParaJogo();
  }

  function responder(btn) {
    var c = CENAS[cena];
    var certo = btn.dataset.certo === '1';
    painel.querySelectorAll('.opcao').forEach(function (b) {
      b.disabled = true;
      if (b.dataset.certo === '1') b.classList.add('certa');
      else if (b !== btn) b.hidden = true;
    });
    if (!certo) btn.classList.add('errada');
    if (certo) { certas++; soltarAve(); } else { erros.push(cena); acender(); }
    hud();
    var ultimo = cena === ZONAS - 1;
    palcoMsg.innerHTML = '<div class="retorno ' + (certo ? 'retorno--certo' : 'retorno--errado') + '">' +
      '<div class="retorno__topo"><p class="retorno__t">' + (certo ? 'Boa decisão. O Pantanal continua vivo.' : 'Um foco acendeu na paisagem. Os bichos fugiram e os bombeiros estão a caminho.') + '</p>' +
      '<button type="button" class="botao" id="seguir">' + (ultimo ? 'Ver o resultado' : 'Próxima situação ›') + '</button></div>' +
      (certo ? '' : '<p class="retorno__enquanto"><b>' + c.enquanto[0] + '</b> ' + c.enquanto[1] + '</p>') +
      '<p>' + c.explica + '</p>' +
      '<p class="retorno__fonte">Fonte: ' + c.fonte + '</p></div>';
    mostrarMsg(true);
    requestAnimationFrame(function () { irParaPalco(); });
    document.getElementById('seguir').focus({ preventScroll: true });
  }

  function resultadoHTML() {
    var pct = Math.round(queimadas() / ZONAS * 100);
    var msg = certas === ZONAS
      ? 'A paisagem inteira ficou de pé. Natureza viva hoje e sempre.'
      : certas >= 4
        ? 'Boa parte do Pantanal ficou de pé. Mas cada foco deixou marcas, e a recuperação pode levar décadas.'
        : 'O fogo tomou conta da paisagem. Um descuido dura segundos; a recuperação do Pantanal pode levar décadas.';
    return {
      nota: '<p class="final__nota">' + certas + ' de ' + ZONAS + '</p>',
      linha: '<p class="jogo__cena">decisões certas. Paisagem queimada: <b>' + pct + '%</b>.</p>',
      msg: '<p>' + msg + '</p>',
      enquanto: '<p class="retorno__enquanto"><b>Enquanto muitos esperam que alguém resolva…</b> a prevenção começa com cada um de nós.</p>',
      acoes: '<div class="jogo__acoes"><button type="button" class="botao" id="denovo">Jogar de novo</button><a class="botao botao--linha" href="#denuncia">Canais de denúncia</a></div>'
    };
  }

  function dataHoje() {
    try { return new Date().toLocaleDateString('pt-BR'); } catch (e) { return ''; }
  }

  function final() {
    mostrarMsg(false);
    cena = ZONAS; hud();
    var r = resultadoHTML();
    if (!erros.length) {
      painel.innerHTML = r.nota + r.linha + r.msg + r.enquanto + r.acoes;
      return;
    }
    painel.innerHTML = '<p class="jogo__cena">A <b>Polícia Militar Ambiental</b> está chegando para registrar o que aconteceu…</p>';
    chamarPMA(function () {
      var num = 'MSF-' + new Date().getFullYear() + '-' + String(Math.floor(1000 + Math.random() * 9000));
      painel.innerHTML =
        '<article class="multa" aria-label="Auto de infração educativo">' +
          '<header class="multa__topo"><span>Auto de infração educativo</span><span class="multa__num">Nº ' + num + '</span></header>' +
          '<div class="multa__corpo">' +
            '<dl class="multa__campos">' +
              '<div><dt>Emitido por</dt><dd>Jogo Um Dia de Estiagem · Campanha Miranda Sem Fogo</dd></div>' +
              '<div><dt>Local</dt><dd>Miranda/MS · Pantanal</dd></div>' +
              '<div><dt>Período</dt><dd>Estiagem, julho a outubro</dd></div>' +
              '<div><dt>Data</dt><dd>' + dataHoje() + '</dd></div>' +
            '</dl>' +
            '<div class="multa__bloco"><p class="multa__rot">Ocorrências registradas (' + erros.length + ')</p><ol class="multa__lista">' +
              erros.map(function (i) { return '<li><span>' + CENAS[i].infracao + '</span><small>' + CENAS[i].base + '</small></li>'; }).join('') +
            '</ol></div>' +
            '<div class="multa__bloco multa__resultado"><p class="multa__rot">Resultado</p>' + r.nota + r.linha + r.msg + '</div>' +
            r.enquanto +
            '<p class="multa__aviso">Notificação educativa do jogo, sem valor legal. Na vida real, a queima de lixo, folhas e galhos é proibida em Miranda, e cada descuido pode virar um incêndio.</p>' +
            r.acoes +
          '</div>' +
        '</article>';
      var multa = painel.querySelector('.multa');
      if (multa && multa.scrollIntoView) { try { multa.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'nearest' }); } catch (e) { /* segue */ } }
    });
  }

  function comecar() {
    mostrarMsg(false);
    cena = 0; certas = 0; erros = []; faiscas = []; fumaca = []; aves = []; agua = []; caminhoes = []; pma = null;
    zerarZonas();
    gerarBichos();
    ordemZonas = embaralhar([0, 1, 2, 3, 4, 5, 6]);
    mostrarCena(); ligar();
  }

  if (palcoMsg) palcoMsg.addEventListener('click', function (e) {
    if (e.target.closest('#seguir')) { cena++; if (cena >= ZONAS) final(); else mostrarCena(); }
  });
  painel.addEventListener('click', function (e) {
    var t = e.target;
    var op = t.closest('.opcao');
    if (op && !op.disabled) { responder(op); return; }
    if (t.closest('#seguir')) { cena++; if (cena >= ZONAS) final(); else mostrarCena(); return; }
    if (t.closest('#comecar') || t.closest('#denovo')) comecar();
  });

  /* ---------- início ---------- */
  cenario = gerarCenario();
  zerarZonas();
  gerarBichos();
  medir();
  hud();
  desenhar(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (ents) { visivel = ents[0].isIntersecting; if (visivel) ligar(); }).observe(cv);
  }
  window.addEventListener('resize', function () { medir(); desenhar(performance.now()); });
  ligar();
})();
