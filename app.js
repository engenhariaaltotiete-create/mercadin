const CONFIG = {
  // Depois de publicar o Apps Script como Web App, cole aqui a URL terminada em /exec.
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyy_J5xotMuj-i4b5UJ-5qS-KfjyhFlHi2Lg3PdxWNcOwJCi7gEV4uB6L5jeNjLT_ROIQ/exec',
  USE_LOCAL_FALLBACK: true,
  SYNC_INTERVAL_MS: 30 * 60 * 1000
};

const UNIT_OPTIONS = ['UN', 'KG', 'g'];
const DEFAULT_TYPES = ['Mercado', 'Feira', 'Açougue', 'Farmácia', 'Padaria', 'Pet shop', 'Eletrodomésticos', 'Material de construção', 'Outros'];
const DEFAULT_CATALOG_DATA = [
  ['Arroz','Mercearia','UN','Mercado'],['Feijão','Mercearia','UN','Mercado'],['Macarrão','Mercearia','UN','Mercado'],['Farinha de trigo','Mercearia','UN','Mercado'],['Açúcar','Mercearia','UN','Mercado'],['Sal','Mercearia','UN','Mercado'],['Café','Mercearia','UN','Mercado'],['Óleo','Mercearia','UN','Mercado'],['Azeite','Mercearia','UN','Mercado'],['Molho de tomate','Mercearia','UN','Mercado'],['Milho','Mercearia','UN','Mercado'],['Ervilha','Mercearia','UN','Mercado'],['Atum','Mercearia','UN','Mercado'],['Sardinha','Mercearia','UN','Mercado'],['Biscoito','Mercearia','UN','Mercado'],['Cereal','Mercearia','UN','Mercado'],
  ['Leite','Laticínios','UN','Mercado'],['Manteiga','Laticínios','UN','Mercado'],['Margarina','Laticínios','UN','Mercado'],['Queijo','Laticínios','g','Mercado'],['Presunto','Frios','g','Mercado'],['Iogurte','Laticínios','UN','Mercado'],['Ovos','Frios','UN','Mercado'],
  ['Pão francês','Padaria','UN','Padaria,Mercado'],['Pão de forma','Padaria','UN','Padaria,Mercado'],['Pão de queijo','Padaria','UN','Padaria,Mercado'],['Bolo','Padaria','UN','Padaria,Mercado'],['Torrada','Padaria','UN','Padaria,Mercado'],
  ['Banana','Frutas','KG','Feira,Mercado'],['Maçã','Frutas','KG','Feira,Mercado'],['Laranja','Frutas','KG','Feira,Mercado'],['Limão','Frutas','KG','Feira,Mercado'],['Mamão','Frutas','UN','Feira,Mercado'],['Manga','Frutas','KG','Feira,Mercado'],['Uva','Frutas','KG','Feira,Mercado'],['Abacaxi','Frutas','UN','Feira,Mercado'],['Melancia','Frutas','UN','Feira,Mercado'],['Morango','Frutas','UN','Feira,Mercado'],['Abacate','Frutas','KG','Feira,Mercado'],['Pera','Frutas','KG','Feira,Mercado'],['Kiwi','Frutas','KG','Feira,Mercado'],
  ['Tomate','Legumes','KG','Feira,Mercado'],['Cebola','Legumes','KG','Feira,Mercado'],['Alho','Legumes','g','Feira,Mercado'],['Batata','Legumes','KG','Feira,Mercado'],['Batata-doce','Legumes','KG','Feira,Mercado'],['Cenoura','Legumes','KG','Feira,Mercado'],['Beterraba','Legumes','KG','Feira,Mercado'],['Abobrinha','Legumes','KG','Feira,Mercado'],['Berinjela','Legumes','KG','Feira,Mercado'],['Pepino','Legumes','KG','Feira,Mercado'],['Pimentão','Legumes','KG','Feira,Mercado'],['Alface','Verduras','UN','Feira,Mercado'],['Rúcula','Verduras','UN','Feira,Mercado'],['Couve','Verduras','UN','Feira,Mercado'],['Brócolis','Verduras','UN','Feira,Mercado'],['Couve-flor','Verduras','UN','Feira,Mercado'],
  ['Carne bovina','Carnes','KG','Açougue,Mercado'],['Carne moída','Carnes','KG','Açougue,Mercado'],['Peito de frango','Carnes','KG','Açougue,Mercado'],['Coxa de frango','Carnes','KG','Açougue,Mercado'],['Frango inteiro','Carnes','KG','Açougue,Mercado'],['Linguiça','Carnes','KG','Açougue,Mercado'],['Carne suína','Carnes','KG','Açougue,Mercado'],['Peixe','Carnes','KG','Açougue,Mercado'],['Hambúrguer','Carnes','UN','Açougue,Mercado'],['Bacon','Carnes','g','Açougue,Mercado'],
  ['Água mineral','Bebidas','UN','Mercado'],['Água com gás','Bebidas','UN','Mercado'],['Suco','Bebidas','UN','Mercado'],['Refrigerante','Bebidas','UN','Mercado'],['Chá','Bebidas','UN','Mercado'],
  ['Detergente','Limpeza','UN','Mercado'],['Sabão em pó','Limpeza','UN','Mercado'],['Sabão líquido','Limpeza','UN','Mercado'],['Amaciante','Limpeza','UN','Mercado'],['Água sanitária','Limpeza','UN','Mercado'],['Desinfetante','Limpeza','UN','Mercado'],['Esponja','Limpeza','UN','Mercado'],['Saco de lixo','Limpeza','UN','Mercado'],['Papel toalha','Limpeza','UN','Mercado'],['Papel higiênico','Higiene','UN','Mercado'],
  ['Shampoo','Higiene','UN','Farmácia,Mercado'],['Condicionador','Higiene','UN','Farmácia,Mercado'],['Sabonete','Higiene','UN','Farmácia,Mercado'],['Creme dental','Higiene','UN','Farmácia,Mercado'],['Escova de dentes','Higiene','UN','Farmácia,Mercado'],['Desodorante','Higiene','UN','Farmácia,Mercado'],['Absorvente','Higiene','UN','Farmácia,Mercado'],['Fralda','Higiene','UN','Farmácia,Mercado'],['Algodão','Farmácia','UN','Farmácia'],['Curativo adesivo','Farmácia','UN','Farmácia'],['Álcool 70%','Farmácia','UN','Farmácia'],
  ['Ração para cães','Pet','KG','Pet shop'],['Ração para gatos','Pet','KG','Pet shop'],['Areia para gatos','Pet','KG','Pet shop'],['Petisco para cães','Pet','UN','Pet shop'],['Tapete higiênico','Pet','UN','Pet shop'],
  ['Pilha','Utilidades','UN','Mercado,Eletrodomésticos'],['Lâmpada','Utilidades','UN','Mercado,Material de construção'],['Extensão elétrica','Elétrica','UN','Eletrodomésticos,Material de construção'],['Cabo USB','Eletrônicos','UN','Eletrodomésticos'],['Carregador','Eletrônicos','UN','Eletrodomésticos'],['Fone de ouvido','Eletrônicos','UN','Eletrodomésticos'],['Liquidificador','Eletrodomésticos','UN','Eletrodomésticos'],['Cafeteira','Eletrodomésticos','UN','Eletrodomésticos'],['Ventilador','Eletrodomésticos','UN','Eletrodomésticos'],
  ['Tinta','Construção','UN','Material de construção'],['Cimento','Construção','KG','Material de construção'],['Areia','Construção','KG','Material de construção'],['Parafuso','Construção','UN','Material de construção'],['Bucha','Construção','UN','Material de construção'],['Fita isolante','Construção','UN','Material de construção'],['Torneira','Construção','UN','Material de construção']
];
const DEFAULT_CATALOG = DEFAULT_CATALOG_DATA.map((x,i)=>({id:`cat_${i+1}`,name:x[0],category:x[1],defaultUnit:x[2],listTypes:x[3],active:true,isCustom:false}));

const state = {
  route: 'new',
  selectedListId: null,
  editingPending: false,
  loading: false,
  data: { lists: [], items: [], catalog: [], types: [] },
  draft: { name: '', type: 'Mercado', items: [] },
  sync: { dirty: false, syncing: false, lastSyncAt: localStorage.getItem('compras-last-sync') || '' }
};

const app = document.getElementById('app');
const pageTitle = document.getElementById('pageTitle');
const pendingBadge = document.getElementById('pendingBadge');
const modalRoot = document.getElementById('modalRoot');
const toastEl = document.getElementById('toast');
let deferredPrompt = null;

function uid(prefix='id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`;
}
function nowIso(){ return new Date().toISOString(); }
function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function formatDate(iso) {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(iso));
}
function fmtQty(q) {
  const n = Number(q);
  if (Number.isNaN(n)) return q;
  return n.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1});
}
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(()=>toastEl.classList.remove('show'),2600);
}
function confirmModal(title, text, confirmText='Confirmar', danger=false) {
  return new Promise(resolve => {
    modalRoot.innerHTML = `<div class="modal-backdrop"><div class="modal"><h3>${escapeHtml(title)}</h3><p class="muted">${escapeHtml(text)}</p><div class="btn-row"><button class="btn btn-secondary" data-modal="cancel">Voltar</button><button class="btn ${danger?'btn-danger':'btn-primary'}" data-modal="ok">${escapeHtml(confirmText)}</button></div></div></div>`;
    const done = value => { modalRoot.innerHTML=''; resolve(value); };
    modalRoot.querySelector('[data-modal="cancel"]').onclick=()=>done(false);
    modalRoot.querySelector('[data-modal="ok"]').onclick=()=>done(true);
    modalRoot.querySelector('.modal-backdrop').onclick=e=>{ if(e.target.classList.contains('modal-backdrop')) done(false); };
  });
}

const localDB = {
  key: 'compras-db-v1',
  read() {
    const raw = localStorage.getItem(this.key);
    if (raw) {
      const db=JSON.parse(raw);
      db.catalog=Array.isArray(db.catalog)?db.catalog:[]; db.types=Array.isArray(db.types)?db.types:[]; db.lists=db.lists||[]; db.items=db.items||[];
      const byName=new Map(db.catalog.map(x=>[normalizeText(x.name),x]));
      DEFAULT_CATALOG.forEach(def=>{const old=byName.get(normalizeText(def.name));if(old){if(old.isCustom!==true)Object.assign(old,{category:def.category,defaultUnit:def.defaultUnit,listTypes:def.listTypes,active:old.active!==false,isCustom:false});}else db.catalog.push({...def});});
      db.catalog.forEach(x=>{if(x.isCustom===undefined)x.isCustom=false;if(!x.listTypes)x.listTypes='Mercado';if(!x.category)x.category='Outros';if(!x.defaultUnit)x.defaultUnit='UN';});
      DEFAULT_TYPES.forEach((name,i)=>{if(!db.types.some(x=>normalizeText(x.name)===normalizeText(name)))db.types.push({id:`type_${i+1}`,name,active:true,sortOrder:i+1});});
      this.write(db); return db;
    }
    const db = {
      lists: [], items: [],
      catalog: DEFAULT_CATALOG.map(x=>({...x})),
      types: DEFAULT_TYPES.map((name,i)=>({id:`type_${i+1}`,name,active:true,sortOrder:i+1}))
    };
    this.write(db); return db;
  },
  write(db) { localStorage.setItem(this.key, JSON.stringify(db)); },
  async action(action, payload={}) {
    const db = this.read();
    const save=()=>this.write(db);
    if(action==='bootstrap') return db;
    if(action==='createList') {
      const id=uid('list'), ts=nowIso();
      db.lists.push({id,name:payload.name||'',type:payload.type||'Outros',status:'PENDENTE',createdAt:ts,startedAt:'',completedAt:'',updatedAt:ts});
      payload.items.forEach((it,index)=>db.items.push({id:uid('item'),listId:id,itemName:it.itemName,unit:it.unit,quantity:Number(it.quantity),note:it.note||'',checked:false,sortOrder:index+1,createdAt:ts,updatedAt:ts}));
      save(); return {ok:true,id};
    }
    if(action==='setItemChecked') {
      const item=db.items.find(x=>x.id===payload.itemId); if(!item) throw Error('Item não encontrado');
      item.checked=!!payload.checked; item.updatedAt=nowIso();
      const list=db.lists.find(x=>x.id===item.listId); if(list && list.status==='PENDENTE'){list.status='EM_COMPRA';list.startedAt=list.startedAt||nowIso();} if(list)list.updatedAt=nowIso();
      save(); return {ok:true};
    }
    if(action==='replaceListItems') {
      const list=db.lists.find(x=>x.id===payload.listId); if(!list) throw Error('Lista não encontrada');
      db.items=db.items.filter(x=>x.listId!==payload.listId);
      const ts=nowIso(); payload.items.forEach((it,index)=>db.items.push({id:it.id||uid('item'),listId:payload.listId,itemName:it.itemName,unit:it.unit,quantity:Number(it.quantity),note:it.note||'',checked:!!it.checked,sortOrder:index+1,createdAt:it.createdAt||ts,updatedAt:ts}));
      list.name=payload.name??list.name; list.type=payload.type??list.type; list.updatedAt=ts; save(); return {ok:true};
    }
    if(action==='cancelPurchase') {
      const list=db.lists.find(x=>x.id===payload.listId); if(!list) throw Error('Lista não encontrada');
      list.status='PENDENTE'; list.startedAt=''; list.updatedAt=nowIso(); db.items.filter(x=>x.listId===payload.listId).forEach(x=>{x.checked=false;x.updatedAt=nowIso();}); save(); return {ok:true};
    }
    if(action==='completeList') {
      const list=db.lists.find(x=>x.id===payload.listId); if(!list) throw Error('Lista não encontrada');
      list.status='CONCLUIDA'; list.completedAt=nowIso(); list.updatedAt=nowIso(); save(); return {ok:true};
    }
    if(action==='deleteList') {
      db.lists=db.lists.filter(x=>x.id!==payload.listId); db.items=db.items.filter(x=>x.listId!==payload.listId); save(); return {ok:true};
    }
    if(action==='duplicateList') {
      const src=db.lists.find(x=>x.id===payload.listId); if(!src) throw Error('Lista não encontrada');
      const sourceItems=db.items.filter(x=>x.listId===payload.listId).sort((a,b)=>a.sortOrder-b.sortOrder);
      const id=uid('list'),ts=nowIso(); db.lists.push({id,name:src.name?`${src.name} - cópia`:'',type:src.type,status:'PENDENTE',createdAt:ts,startedAt:'',completedAt:'',updatedAt:ts});
      sourceItems.forEach((it,index)=>db.items.push({id:uid('item'),listId:id,itemName:it.itemName,unit:it.unit,quantity:it.quantity,note:it.note,checked:false,sortOrder:index+1,createdAt:ts,updatedAt:ts})); save(); return {ok:true,id};
    }
    if(action==='addCatalogItem') {
      const name=String(payload.name||'').trim(); if(!name) throw Error('Informe o nome do item.');
      if(db.catalog.some(x=>x.active!==false && x.name.toLocaleLowerCase('pt-BR')===name.toLocaleLowerCase('pt-BR'))) throw Error('Este item já existe na biblioteca.');
      const item={id:uid('cat'),name,category:payload.category||'Outros',defaultUnit:payload.defaultUnit||'UN',listTypes:payload.listTypes||payload.listType||'Outros',active:true,isCustom:true}; db.catalog.push(item); save(); return {ok:true,item};
    }
    if(action==='updateCatalogItem') {
      const item=db.catalog.find(x=>x.id===payload.id); if(!item) throw Error('Item não encontrado.'); if(item.isCustom===false) throw Error('Itens padrão não podem ser editados.');
      Object.assign(item,{name:String(payload.name||item.name).trim(),category:payload.category||'Outros',defaultUnit:payload.defaultUnit||'UN',listTypes:payload.listTypes||'Outros',active:payload.active!==false,isCustom:true}); save(); return {ok:true};
    }
    if(action==='deleteCatalogItem') {
      const item=db.catalog.find(x=>x.id===payload.id); if(!item) throw Error('Item não encontrado.'); if(item.isCustom===false) throw Error('Itens padrão não podem ser excluídos.');
      item.active=false; save(); return {ok:true};
    }
    throw Error(`Ação local desconhecida: ${action}`);
  }
};

async function remoteApi(action,payload={}) {
  if (!CONFIG.APPS_SCRIPT_URL) {
    if (!CONFIG.USE_LOCAL_FALLBACK) throw Error('Configure a URL do Apps Script em app.js.');
    return localDB.action(action,payload);
  }
  const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
    method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({action,payload})
  });
  if(!response.ok) throw Error(`Falha HTTP ${response.status}`);
  const data=await response.json(); if(data.error) throw Error(data.error); return data;
}

async function api(action,payload={}) {
  // As ações do usuário são gravadas primeiro no dispositivo. A planilha é sincronizada em lote.
  if(action==='bootstrap') return remoteApi(action,payload);
  const result=await localDB.action(action,payload);
  state.data=localDB.read();
  state.sync.dirty=true;
  updateSyncUI();
  return result;
}

function syncLabel(){
  if(state.sync.syncing) return 'Sincronizando…';
  if(state.sync.dirty) return 'Alterações locais';
  if(!state.sync.lastSyncAt) return 'Ainda não sincronizado';
  const mins=Math.max(0,Math.floor((Date.now()-new Date(state.sync.lastSyncAt).getTime())/60000));
  return mins<1?'Atualizado agora':`Atualizado há ${mins} min`;
}
function updateSyncUI(){
  const el=document.getElementById('syncStatus'); if(el) el.textContent=syncLabel();
  const btn=document.getElementById('refreshBtn'); if(btn){btn.disabled=state.sync.syncing;btn.classList.toggle('spinning',state.sync.syncing);}
}
async function syncNow({manual=false,initial=false}={}) {
  if(state.sync.syncing) return;
  state.sync.syncing=true; updateSyncUI();
  try {
    if(!CONFIG.APPS_SCRIPT_URL){ state.data=localDB.read(); }
    else if(initial && !state.sync.dirty){
      const remote=await remoteApi('bootstrap'); state.data=remote; localDB.write(remote);
    } else {
      const local=localDB.read();
      await remoteApi('syncSnapshot',{data:local});
      const remote=await remoteApi('bootstrap'); state.data=remote; localDB.write(remote); state.sync.dirty=false;
    }
    state.sync.lastSyncAt=nowIso(); localStorage.setItem('compras-last-sync',state.sync.lastSyncAt);
    updateBadge(); render(); if(manual) toast('Dados atualizados.');
  } catch(e){ console.error(e); if(manual) toast(`Erro ao atualizar: ${e.message}`); }
  finally { state.sync.syncing=false; updateSyncUI(); }
}

async function refresh() {
  // Mantido para compatibilidade interna: apenas redesenha o estado local, sem consultar a planilha.
  state.data=localDB.read(); updateBadge(); render(); updateSyncUI();
}
function updateBadge(){
  const count=state.data.lists.filter(x=>x.status!=='CONCLUIDA').length;
  pendingBadge.textContent=count;
  pendingBadge.classList.toggle('hidden',count===0);
}
function setRoute(route,listId=null){
  state.route=route; state.selectedListId=listId; state.editingPending=false;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
  window.scrollTo({top:0,behavior:'smooth'}); render();
}

function render(){
  const titles={new:'Nova lista',pending:'Compras pendentes',archive:'Arquivo',library:'Biblioteca'};
  pageTitle.textContent = state.selectedListId ? 'Detalhes da lista' : titles[state.route];
  if(state.loading){ app.innerHTML='<div class="card empty"><strong>Carregando…</strong>Sincronizando suas listas.</div>'; return; }
  if(state.route==='new') renderNew();
  else if(state.route==='pending') renderPending();
  else if(state.route==='archive') renderArchive();
  else renderLibrary();
}

function renderNew(){
  const types=(state.data.types?.length?state.data.types:DEFAULT_TYPES.map(name=>({name}))).filter(x=>x.active!==false);
  app.innerHTML=`
    <section class="card">
      <div class="field"><label>Nome da lista <span class="muted">(opcional)</span></label><input id="listName" class="input" maxlength="80" placeholder="Ex.: Compra da semana" value="${escapeHtml(state.draft.name)}"></div>
      <div class="field"><label>Tipo de lista</label><select id="listType">${types.map(t=>`<option ${t.name===state.draft.type?'selected':''}>${escapeHtml(t.name)}</option>`).join('')}</select></div>
    </section>
    <section class="card">
      <div class="section-head"><h2>Itens</h2><span class="chip">${state.draft.items.length} ${state.draft.items.length===1?'item':'itens'}</span></div>
      <div id="draftItems">${state.draft.items.length ? state.draft.items.map((it,i)=>itemRow(it,{draft:true,index:i})).join('') : '<div class="empty"><strong>Lista vazia</strong>Adicione o primeiro item abaixo.</div>'}</div>
      ${itemEditorHtml('new')}
    </section>
    <div class="btn-row"><button id="cancelDraft" class="btn btn-secondary">Cancelar</button><button id="saveDraft" class="btn btn-primary">Concluir lista</button></div>`;
  bindDraftHeader(); bindAutocomplete('new'); bindItemEditor('new'); bindDraftItemActions();
  document.getElementById('cancelDraft').onclick=async()=>{
    if(!state.draft.items.length && !state.draft.name) return;
    if(await confirmModal('Cancelar montagem?','Os itens desta lista em criação serão descartados.','Descartar',true)){ state.draft={name:'',type:'Mercado',items:[]}; render(); }
  };
  document.getElementById('saveDraft').onclick=saveDraft;
}
function bindDraftHeader(){
  document.getElementById('listName').oninput=e=>state.draft.name=e.target.value;
  document.getElementById('listType').onchange=e=>state.draft.type=e.target.value;
}
function itemEditorHtml(prefix,item={}){
  return `<div class="item-form" id="${prefix}Editor">
    <div class="field autocomplete"><label>Item</label><input id="${prefix}ItemName" class="input" autocomplete="off" placeholder="Pesquisar item…" value="${escapeHtml(item.itemName||'')}"><div id="${prefix}Suggestions" class="suggestions hidden"></div></div>
    <div class="grid-2">
      <div class="field"><label>Unid.</label><select id="${prefix}Unit">${UNIT_OPTIONS.map(u=>`<option ${u===(item.unit||'UN')?'selected':''}>${u}</option>`).join('')}</select></div>
      <div class="field"><label>Quant.</label><input id="${prefix}Qty" class="input" type="number" inputmode="decimal" min="0.1" step="0.1" value="${item.quantity??1}"></div>
    </div>
    <div class="field"><label>Obs. <span class="muted">(opcional)</span></label><textarea id="${prefix}Note" maxlength="180" placeholder="Marca, tamanho, preferência…">${escapeHtml(item.note||'')}</textarea></div>
    <button id="${prefix}AddItem" class="btn btn-secondary" type="button">＋ Adicionar item</button>
  </div>`;
}
function currentListType(prefix){
  if(prefix==='new'||prefix==='modal') return state.draft.type||'Mercado';
  const editType=document.getElementById('editListType');
  if(editType) return editType.value;
  const list=state.data.lists.find(x=>x.id===state.selectedListId);
  return list?.type||'Mercado';
}
function normalizeText(v=''){return String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');}
function catalogFor(type){
  const catalog=(state.data.catalog?.length?state.data.catalog:DEFAULT_CATALOG).filter(x=>x.active!==false);
  return [...catalog].sort((a,b)=>{
    const aTypes=String(a.listTypes||'').split(',').map(x=>x.trim()), bTypes=String(b.listTypes||'').split(',').map(x=>x.trim());
    const ap=aTypes.includes(type)?0:1, bp=bTypes.includes(type)?0:1;
    return ap-bp || a.name.localeCompare(b.name,'pt-BR');
  });
}
function bindAutocomplete(prefix){
  const input=document.getElementById(`${prefix}ItemName`), box=document.getElementById(`${prefix}Suggestions`);
  if(!input||!box)return;
  const show=()=>{
    const q=normalizeText(input.value.trim()), type=currentListType(prefix), catalog=catalogFor(type);
    const matches=catalog.filter(x=>!q||normalizeText(x.name).includes(q)).slice(0,10);
    const exact=catalog.some(x=>normalizeText(x.name)===q);
    box.innerHTML=matches.map(x=>`<button type="button" class="suggestion" data-name="${escapeHtml(x.name)}" data-unit="${escapeHtml(x.defaultUnit||'UN')}"><span><strong>${escapeHtml(x.name)}</strong><small>${escapeHtml(x.category||'Outros')}</small></span>${String(x.listTypes||'').split(',').map(v=>v.trim()).includes(type)?'<em>Recomendado</em>':''}</button>`).join('') + (q&&!exact?`<button type="button" class="suggestion add-suggestion" data-add-catalog="${escapeHtml(input.value.trim())}">＋ Adicionar “${escapeHtml(input.value.trim())}” à biblioteca</button>`:'');
    box.classList.toggle('hidden',!box.innerHTML);
    box.querySelectorAll('[data-name]').forEach(b=>b.onclick=()=>{input.value=b.dataset.name;const unit=document.getElementById(`${prefix}Unit`);if(unit&&UNIT_OPTIONS.includes(b.dataset.unit))unit.value=b.dataset.unit;box.classList.add('hidden');});
    box.querySelectorAll('[data-add-catalog]').forEach(b=>b.onclick=()=>openQuickCatalogAdd(b.dataset.addCatalog,type,prefix));
  };
  input.oninput=show; input.onfocus=show; input.onblur=()=>setTimeout(()=>box.classList.add('hidden'),180);
}
async function openQuickCatalogAdd(name,listType,prefix){
  const category=listType==='Feira'?'Feira':listType==='Açougue'?'Carnes':listType==='Padaria'?'Padaria':listType==='Farmácia'?'Farmácia':listType==='Pet shop'?'Pet':listType==='Eletrodomésticos'?'Eletrodomésticos':listType==='Material de construção'?'Construção':'Outros';
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><h3>Adicionar à biblioteca</h3><div class="field"><label>Item</label><input id="quickCatName" class="input" value="${escapeHtml(name)}"></div><div class="field"><label>Categoria</label><input id="quickCatCategory" class="input" value="${escapeHtml(category)}"></div><div class="field"><label>Unidade padrão</label><select id="quickCatUnit">${UNIT_OPTIONS.map(u=>`<option>${u}</option>`).join('')}</select></div><p class="small muted">Este item ficará associado inicialmente ao tipo “${escapeHtml(listType)}”.</p><div class="btn-row"><button id="quickCatCancel" class="btn btn-secondary">Cancelar</button><button id="quickCatSave" class="btn btn-primary">Adicionar</button></div></div></div>`;
  document.getElementById('quickCatCancel').onclick=()=>modalRoot.innerHTML='';
  document.getElementById('quickCatSave').onclick=async()=>{try{const r=await api('addCatalogItem',{name:document.getElementById('quickCatName').value.trim(),category:document.getElementById('quickCatCategory').value.trim()||'Outros',defaultUnit:document.getElementById('quickCatUnit').value,listTypes:listType});await refresh();modalRoot.innerHTML='';const inp=document.getElementById(`${prefix}ItemName`);if(inp)inp.value=r.item?.name||name;toast('Item adicionado à biblioteca.');}catch(e){toast(`Erro: ${e.message}`);}};
}
function readEditor(prefix){
  const name=document.getElementById(`${prefix}ItemName`).value.trim();
  const quantity=Number(document.getElementById(`${prefix}Qty`).value);
  if(!name){toast('Informe o item.');return null;} if(!(quantity>0)){toast('Informe uma quantidade maior que zero.');return null;}
  return {itemName:name,unit:document.getElementById(`${prefix}Unit`).value,quantity:Number(quantity.toFixed(1)),note:document.getElementById(`${prefix}Note`).value.trim(),checked:false};
}
function clearEditor(prefix){document.getElementById(`${prefix}ItemName`).value='';document.getElementById(`${prefix}Qty`).value='1';document.getElementById(`${prefix}Note`).value='';document.getElementById(`${prefix}ItemName`).focus();}
function bindItemEditor(prefix,onAdd){
  document.getElementById(`${prefix}AddItem`).onclick=()=>{
    const it=readEditor(prefix); if(!it)return;
    if(onAdd)onAdd(it); else {state.draft.items.push(it); clearEditor(prefix); render();}
  };
}
function itemRow(it,opt={}){
  const editActions=opt.draft||opt.editing;
  return `<div class="shopping-item ${it.checked?'done':''}" data-item-row="${escapeHtml(it.id||String(opt.index))}">
    ${opt.checkbox?`<input class="check" type="checkbox" ${it.checked?'checked':''} data-check="${it.id}" aria-label="Marcar ${escapeHtml(it.itemName)} como comprado">`:'<span></span>'}
    <div><div class="item-name">${escapeHtml(it.itemName)}</div><div class="item-meta">${fmtQty(it.quantity)} ${escapeHtml(it.unit)}</div>${it.note?`<div class="item-note">${escapeHtml(it.note)}</div>`:''}</div>
    ${editActions?`<div class="item-actions"><button class="mini-btn" data-edit-item="${opt.draft?opt.index:it.id}">Editar</button><button class="mini-btn danger" data-remove-item="${opt.draft?opt.index:it.id}">Excluir</button></div>`:'<span></span>'}
  </div>`;
}
function bindDraftItemActions(){
  app.querySelectorAll('[data-remove-item]').forEach(b=>b.onclick=()=>{state.draft.items.splice(Number(b.dataset.removeItem),1);render();});
  app.querySelectorAll('[data-edit-item]').forEach(b=>b.onclick=()=>editDraftItem(Number(b.dataset.editItem)));
}
function editDraftItem(index){
  const it=state.draft.items[index];
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><h3>Editar item</h3>${itemEditorHtml('modal',it)}<button id="closeModal" class="btn btn-secondary" style="width:100%;margin-top:10px">Cancelar</button></div></div>`;
  document.getElementById('modalAddItem').textContent='Salvar alterações'; bindAutocomplete('modal');
  document.getElementById('modalAddItem').onclick=()=>{const updated=readEditor('modal');if(!updated)return;state.draft.items[index]={...it,...updated};modalRoot.innerHTML='';render();};
  document.getElementById('closeModal').onclick=()=>modalRoot.innerHTML='';
}
async function saveDraft(){
  if(!state.draft.items.length){toast('Adicione pelo menos um item.');return;}
  try{await api('createList',state.draft);state.draft={name:'',type:'Mercado',items:[]};await refresh();setRoute('pending');toast('Lista criada.');}catch(e){toast(`Erro: ${e.message}`);}
}

function pendingLists(){return state.data.lists.filter(x=>x.status!=='CONCLUIDA').sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt));}
function itemsFor(listId){return state.data.items.filter(x=>x.listId===listId).sort((a,b)=>Number(a.sortOrder)-Number(b.sortOrder));}
function renderPending(){
  if(state.selectedListId){renderPendingDetail();return;}
  const lists=pendingLists();
  app.innerHTML=lists.length?lists.map(list=>{
    const its=itemsFor(list.id), done=its.filter(x=>x.checked).length, pct=its.length?Math.round(done/its.length*100):0;
    return `<section class="card list-card" data-open-list="${list.id}"><div class="list-title-row"><div><h2 class="list-title">${escapeHtml(list.name||list.type)}</h2><div class="small muted">${escapeHtml(list.type)} · ${its.length} ${its.length===1?'item':'itens'}</div></div><span class="chip">${list.status==='EM_COMPRA'?'Em compra':'Pendente'}</span></div><div class="progress"><span style="width:${pct}%"></span></div><div class="small muted" style="margin-top:7px">${done} de ${its.length} comprados</div></section>`;
  }).join(''):'<div class="card empty"><strong>Nenhuma compra pendente</strong>Crie uma nova lista para começar.</div>';
  app.querySelectorAll('[data-open-list]').forEach(el=>el.onclick=()=>setRoute('pending',el.dataset.openList));
}
function renderPendingDetail(){
  const list=state.data.lists.find(x=>x.id===state.selectedListId);
  if(!list||list.status==='CONCLUIDA'){state.selectedListId=null;renderPending();return;}
  const its=itemsFor(list.id), pending=its.filter(x=>!x.checked), done=its.filter(x=>x.checked);
  if(state.editingPending){renderPendingEdit(list,its);return;}
  app.innerHTML=`
    <button id="backPending" class="btn btn-ghost" type="button">← Voltar</button>
    <section class="card"><div class="list-title-row"><div><h2 class="list-title">${escapeHtml(list.name||list.type)}</h2><div class="small muted">${escapeHtml(list.type)} · criada em ${formatDate(list.createdAt)}</div></div><span class="chip">${list.status==='EM_COMPRA'?'Em compra':'Pendente'}</span></div></section>
    <div class="section-head"><h2>Pendentes</h2><span class="chip">${pending.length}</span></div>
    <section class="card flat">${pending.length?pending.map(it=>itemRow(it,{checkbox:true})).join(''):'<div class="empty"><strong>Tudo marcado</strong>Todos os itens estão na seção Comprados.</div>'}</section>
    <div class="divider-title">Comprados · ${done.length}</div>
    <section class="card flat">${done.length?done.map(it=>itemRow(it,{checkbox:true})).join(''):'<div class="empty small">Nenhum item comprado ainda.</div>'}</section>
    <div class="btn-row"><button id="editPending" class="btn btn-secondary">Editar lista</button><button id="cancelPurchase" class="btn btn-secondary">Cancelar compra</button><button id="completePurchase" class="btn btn-primary">Concluir compra</button><button id="deletePending" class="btn btn-danger">Excluir lista</button></div>`;
  document.getElementById('backPending').onclick=()=>setRoute('pending');
  document.getElementById('editPending').onclick=()=>{state.editingPending=true;render();};
  app.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>toggleCheck(c.dataset.check,c.checked,list.id));
  document.getElementById('cancelPurchase').onclick=()=>cancelPurchase(list.id,its.some(x=>x.checked));
  document.getElementById('completePurchase').onclick=()=>completePurchase(list.id,pending.length);
  document.getElementById('deletePending').onclick=()=>deleteList(list.id);
}
async function toggleCheck(itemId,checked,listId){
  try{await api('setItemChecked',{itemId,checked});await refresh();state.selectedListId=listId; if(itemsFor(listId).length && itemsFor(listId).every(x=>x.checked)) await completeAllChecked(listId);}
  catch(e){toast(`Erro: ${e.message}`);}
}
async function completeAllChecked(listId){
  try{await api('completeList',{listId});await refresh();setRoute('archive');toast('Compra concluída automaticamente.');}catch(e){toast(`Erro: ${e.message}`);}
}
async function cancelPurchase(listId,hasChecked){
  const text=hasChecked?'A lista será mantida em Pendentes e os itens já marcados serão desmarcados.':'A lista continuará disponível em Pendentes.';
  if(!await confirmModal('Cancelar esta compra?',text,'Cancelar compra'))return;
  try{await api('cancelPurchase',{listId});await refresh();state.selectedListId=listId;render();toast('Compra cancelada; lista mantida.');}catch(e){toast(`Erro: ${e.message}`);}
}
async function completePurchase(listId,pendingCount){
  if(pendingCount>0 && !await confirmModal('Concluir com itens pendentes?',`${pendingCount} ${pendingCount===1?'item ficará registrado como não comprado':'itens ficarão registrados como não comprados'} no histórico.`,'Concluir')) return;
  try{await api('completeList',{listId});await refresh();setRoute('archive');toast('Compra concluída.');}catch(e){toast(`Erro: ${e.message}`);}
}
async function deleteList(listId){
  if(!await confirmModal('Excluir lista?','Esta ação remove a lista e seus itens.','Excluir',true))return;
  try{await api('deleteList',{listId});await refresh();setRoute('pending');toast('Lista excluída.');}catch(e){toast(`Erro: ${e.message}`);}
}
function renderPendingEdit(list,its){
  app.innerHTML=`<button id="cancelEditPending" class="btn btn-ghost">← Cancelar edição</button>
    <section class="card"><div class="field"><label>Nome da lista</label><input id="editListName" class="input" value="${escapeHtml(list.name||'')}"></div><div class="field"><label>Tipo</label><select id="editListType">${(state.data.types||[]).filter(x=>x.active!==false).map(t=>`<option ${t.name===list.type?'selected':''}>${escapeHtml(t.name)}</option>`).join('')}</select></div></section>
    <section class="card"><div class="section-head"><h2>Editar itens</h2><span class="chip">${its.length}</span></div><div id="editableItems">${its.map(it=>itemRow(it,{editing:true})).join('')}</div>${itemEditorHtml('pendingEdit')}</section>
    <button id="savePendingEdit" class="btn btn-primary" style="width:100%">Salvar alterações</button>`;
  let working=its.map(x=>({...x}));
  const redraw=()=>{
    document.getElementById('editableItems').innerHTML=working.map(it=>itemRow(it,{editing:true})).join('');
    document.querySelectorAll('[data-remove-item]').forEach(b=>b.onclick=()=>{working=working.filter(x=>x.id!==b.dataset.removeItem);redraw();});
    document.querySelectorAll('[data-edit-item]').forEach(b=>b.onclick=()=>openPendingItemEdit(b.dataset.editItem));
  };
  const openPendingItemEdit=id=>{
    const idx=working.findIndex(x=>x.id===id),it=working[idx];
    modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><h3>Editar / substituir item</h3>${itemEditorHtml('modalPending',it)}<button id="closeModalPending" class="btn btn-secondary" style="width:100%;margin-top:10px">Cancelar</button></div></div>`;
    document.getElementById('modalPendingAddItem').textContent='Salvar alterações'; bindAutocomplete('modalPending');
    document.getElementById('modalPendingAddItem').onclick=()=>{const updated=readEditor('modalPending');if(!updated)return;working[idx]={...it,...updated,checked:it.checked};modalRoot.innerHTML='';redraw();};
    document.getElementById('closeModalPending').onclick=()=>modalRoot.innerHTML='';
  };
  bindAutocomplete('pendingEdit'); bindItemEditor('pendingEdit',it=>{working.push({...it,id:uid('temp')});clearEditor('pendingEdit');redraw();}); redraw();
  document.getElementById('cancelEditPending').onclick=()=>{state.editingPending=false;render();};
  document.getElementById('savePendingEdit').onclick=async()=>{
    if(!working.length){toast('A lista precisa ter pelo menos um item.');return;}
    try{await api('replaceListItems',{listId:list.id,name:document.getElementById('editListName').value.trim(),type:document.getElementById('editListType').value,items:working});await refresh();state.selectedListId=list.id;state.editingPending=false;render();toast('Lista atualizada.');}catch(e){toast(`Erro: ${e.message}`);}
  };
}

function renderArchive(){
  if(state.selectedListId){renderArchiveDetail();return;}
  const lists=state.data.lists.filter(x=>x.status==='CONCLUIDA').sort((a,b)=>new Date(b.completedAt)-new Date(a.completedAt));
  app.innerHTML=lists.length?lists.map(list=>{
    const its=itemsFor(list.id),done=its.filter(x=>x.checked).length;
    return `<section class="card list-card" data-open-archive="${list.id}"><div class="list-title-row"><div><h2 class="list-title">${escapeHtml(list.name||list.type)}</h2><div class="small muted">${escapeHtml(list.type)} · ${formatDate(list.completedAt)}</div></div><span class="chip">${done}/${its.length}</span></div></section>`;
  }).join(''):'<div class="card empty"><strong>Arquivo vazio</strong>As compras concluídas aparecerão aqui.</div>';
  app.querySelectorAll('[data-open-archive]').forEach(el=>el.onclick=()=>setRoute('archive',el.dataset.openArchive));
}
function renderArchiveDetail(){
  const list=state.data.lists.find(x=>x.id===state.selectedListId); if(!list){setRoute('archive');return;}
  const its=itemsFor(list.id),done=its.filter(x=>x.checked),notDone=its.filter(x=>!x.checked);
  app.innerHTML=`<button id="backArchive" class="btn btn-ghost">← Voltar</button><section class="card"><h2 class="list-title">${escapeHtml(list.name||list.type)}</h2><div class="small muted">${escapeHtml(list.type)} · concluída em ${formatDate(list.completedAt)}</div></section>
    <div class="section-head"><h2>Comprados</h2><span class="chip">${done.length}</span></div><section class="card flat">${done.length?done.map(it=>itemRow({...it,checked:true})).join(''):'<div class="empty small">Nenhum item foi marcado como comprado.</div>'}</section>
    ${notDone.length?`<div class="divider-title">Não comprados · ${notDone.length}</div><section class="card flat">${notDone.map(it=>itemRow(it)).join('')}</section>`:''}
    <button id="duplicateList" class="btn btn-primary" style="width:100%">Criar nova lista a partir desta</button>`;
  document.getElementById('backArchive').onclick=()=>setRoute('archive');
  document.getElementById('duplicateList').onclick=async()=>{try{const r=await api('duplicateList',{listId:list.id});await refresh();setRoute('pending',r.id);toast('Nova lista criada a partir do histórico.');}catch(e){toast(`Erro: ${e.message}`);}};
}

function renderLibrary(){
  const catalog=(state.data.catalog?.length?state.data.catalog:DEFAULT_CATALOG).filter(x=>x.active!==false).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
  const custom=catalog.filter(x=>x.isCustom===true||String(x.isCustom).toLowerCase()==='true');
  app.innerHTML=`<section class="card"><div class="section-head"><div><h2>Biblioteca de compras</h2><p class="small muted" style="margin:4px 0 0">${catalog.length} itens disponíveis · ${custom.length} personalizados</p></div><button id="addLibraryItem" class="btn btn-primary">＋ Novo</button></div><div class="field" style="margin:12px 0 0"><input id="librarySearch" class="input" placeholder="Pesquisar na biblioteca…"></div></section><div id="libraryItems"></div>`;
  const draw=()=>{const q=normalizeText(document.getElementById('librarySearch').value), rows=catalog.filter(x=>!q||normalizeText(`${x.name} ${x.category}`).includes(q));document.getElementById('libraryItems').innerHTML=rows.length?rows.map(x=>`<section class="card flat library-row"><div><div class="item-name">${escapeHtml(x.name)}</div><div class="item-meta">${escapeHtml(x.category||'Outros')} · ${escapeHtml(x.defaultUnit||'UN')} · ${escapeHtml(x.listTypes||'Todos')}</div></div><div>${x.isCustom===true||String(x.isCustom).toLowerCase()==='true'?`<button class="mini-btn" data-lib-edit="${x.id}">Editar</button><button class="mini-btn danger" data-lib-delete="${x.id}">Excluir</button>`:'<span class="chip">Padrão</span>'}</div></section>`).join(''):'<div class="card empty"><strong>Nenhum item encontrado</strong>Tente outra pesquisa.</div>';document.querySelectorAll('[data-lib-edit]').forEach(b=>b.onclick=()=>openLibraryEditor(catalog.find(x=>x.id===b.dataset.libEdit)));document.querySelectorAll('[data-lib-delete]').forEach(b=>b.onclick=()=>deleteLibraryItem(catalog.find(x=>x.id===b.dataset.libDelete)));};
  document.getElementById('librarySearch').oninput=draw;document.getElementById('addLibraryItem').onclick=()=>openLibraryEditor();draw();
}
function openLibraryEditor(item=null){
  const types=(state.data.types?.length?state.data.types:DEFAULT_TYPES.map(name=>({name}))).filter(x=>x.active!==false);
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><h3>${item?'Editar item':'Novo item'}</h3><div class="field"><label>Nome</label><input id="libName" class="input" value="${escapeHtml(item?.name||'')}"></div><div class="field"><label>Categoria</label><input id="libCategory" class="input" value="${escapeHtml(item?.category||'Outros')}"></div><div class="field"><label>Unidade padrão</label><select id="libUnit">${UNIT_OPTIONS.map(u=>`<option ${u===(item?.defaultUnit||'UN')?'selected':''}>${u}</option>`).join('')}</select></div><div class="field"><label>Tipos de lista relacionados</label><div class="type-checks">${types.map(t=>`<label><input type="checkbox" value="${escapeHtml(t.name)}" ${(String(item?.listTypes||'').split(',').map(x=>x.trim()).includes(t.name))?'checked':''}> ${escapeHtml(t.name)}</label>`).join('')}</div></div><div class="btn-row"><button id="libCancel" class="btn btn-secondary">Cancelar</button><button id="libSave" class="btn btn-primary">Salvar</button></div></div></div>`;
  document.getElementById('libCancel').onclick=()=>modalRoot.innerHTML='';document.getElementById('libSave').onclick=async()=>{const name=document.getElementById('libName').value.trim();if(!name){toast('Informe o nome do item.');return;}const listTypes=[...modalRoot.querySelectorAll('.type-checks input:checked')].map(x=>x.value).join(',')||'Outros';const payload={name,category:document.getElementById('libCategory').value.trim()||'Outros',defaultUnit:document.getElementById('libUnit').value,listTypes};try{await api(item?'updateCatalogItem':'addCatalogItem',item?{...payload,id:item.id}:payload);await refresh();modalRoot.innerHTML='';setRoute('library');toast(item?'Item atualizado.':'Item adicionado.');}catch(e){toast(`Erro: ${e.message}`);}};
}
async function deleteLibraryItem(item){if(!await confirmModal('Excluir item personalizado?',`“${item.name}” deixará de aparecer nas próximas listas. As listas antigas não serão alteradas.`,'Excluir',true))return;try{await api('deleteCatalogItem',{id:item.id});await refresh();setRoute('library');toast('Item removido da biblioteca.');}catch(e){toast(`Erro: ${e.message}`);}}

// navegação
for(const btn of document.querySelectorAll('.nav-btn')) btn.onclick=()=>setRoute(btn.dataset.route);

document.getElementById('refreshBtn').onclick=()=>syncNow({manual:true});

// PWA
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('installBtn').classList.remove('hidden');});
document.getElementById('installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById('installBtn').classList.add('hidden');};
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(console.warn));

state.data=localDB.read(); updateBadge(); render(); updateSyncUI();
syncNow({initial:true});
setInterval(()=>syncNow(), CONFIG.SYNC_INTERVAL_MS);
document.addEventListener('visibilitychange',()=>{ if(!document.hidden && (!state.sync.lastSyncAt || Date.now()-new Date(state.sync.lastSyncAt).getTime()>=CONFIG.SYNC_INTERVAL_MS)) syncNow(); });
