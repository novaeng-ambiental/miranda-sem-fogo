/* Ações de educação ambiental de Miranda/MS (fichas técnicas NOVAeng, 2026).
   Para ligar o site de uma ação, preencha "url" com o endereço dele. */
(function () {
  'use strict';
  var PROJETOS = [
    { acao: '02', tipo: 'Projeto', titulo: 'Guardiões do Pantanal de Miranda', tema: 'Formação de professores como multiplicadores de educação ambiental, com microprojetos das turmas e vivência em área protegida.', url: null },
    { acao: '03', tipo: 'Campanha', titulo: 'Miranda Sem Fogo', tema: 'Prevenção a queimadas e proteção das Unidades de Conservação e Terras Indígenas.', url: '#inicio', atual: true },
    { acao: '07', tipo: 'Campanha', titulo: 'Água é Vida', tema: 'Conscientização sobre os recursos hídricos e as áreas úmidas da Bacia do Rio Miranda.', url: null },
    { acao: '08', tipo: 'Projeto', titulo: 'Escola no Pantanal', tema: 'Trilhas interpretativas e visitação educativa na RPPN Dona Aracy.', url: null },
    { acao: '10', tipo: 'Projeto', titulo: 'Guardiões da Biodiversidade', tema: 'Unidades de Conservação e observação de aves na REBIO.', url: null },
    { acao: '11', tipo: 'Ação pontual', titulo: 'Semana do Pantanal 2026: Achou um Bicho?', tema: 'Convivência com a fauna silvestre: o que fazer ao encontrar um animal silvestre.', url: null },
    { acao: '12', tipo: 'Ação pontual', titulo: 'Plantas nativas, exóticas e invasoras: qual é a diferença?', tema: 'Publicação digital sobre plantas nativas, exóticas e exóticas invasoras.', url: null },
    { acao: '13', tipo: 'Ação pontual', titulo: 'Mito ou verdade? Áreas protegidas de Miranda', tema: 'Publicação digital sobre Unidades de Conservação e Terras Indígenas.', url: null }
  ];
  var ul = document.getElementById('projetos');
  if (!ul) return;
  ul.innerHTML = PROJETOS.map(function (p) {
    var rodape = p.atual
      ? '<span class="projeto__status projeto__status--aqui">Você está aqui</span>'
      : p.url
        ? '<a class="projeto__link" href="' + p.url + '" target="_blank" rel="noopener">Abrir o site ›</a>'
        : '<span class="projeto__status">Site em breve</span>';
    return '<li class="projeto' + (p.atual ? ' projeto--atual' : '') + '">' +
      '<p class="projeto__meta"><span>Ação ' + p.acao + '</span><span>' + p.tipo + '</span></p>' +
      '<h3>' + p.titulo + '</h3><p class="projeto__tema">' + p.tema + '</p>' + rodape + '</li>';
  }).join('');
})();
