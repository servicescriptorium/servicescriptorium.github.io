/* Belnovia Studio Pro: animated setup guides.
   Usage: <div class="guide-anim" data-guide="claude|lumean|glabs|kokoro|youtube|windows"></div>
   The animation is a pure function of time (render(t)), so the same code plays on the page and
   renders the MP4 versions frame by frame. Third-party screens are simplified schematics with the
   menu names only (no logos, no copied artwork). */
(function () {
  "use strict";
  var LANGS = ["tr", "en", "de", "es", "fr", "pt"];
  function C(tr, en, de, es, fr, pt) { return { tr: tr, en: en, de: de, es: es, fr: fr, pt: pt }; }
  function pick(v, lang) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.en != null ? v.en : v.tr);
  }

  // ---------- Belnovia's own interface labels (same words as the program) ----------
  var B = {
    home: C("Ana sayfa", "Home", "Startseite", "Inicio", "Accueil", "Início"),
    newv: C("Yeni video", "New video", "Neues Video", "Nuevo vídeo", "Nouvelle vidéo", "Novo vídeo"),
    line: C("Üretim hattı", "Production line", "Produktionslinie", "Línea de producción", "Chaîne de production", "Linha de produção"),
    cal: C("Takvim", "Calendar", "Kalender", "Calendario", "Calendrier", "Calendário"),
    chans: C("Kanallar", "Channels", "Kanäle", "Canales", "Chaînes", "Canais"),
    settings: C("Ayarlar", "Settings", "Einstellungen", "Ajustes", "Paramètres", "Configurações"),
    help: C("Yardım", "Help", "Hilfe", "Ayuda", "Aide", "Ajuda"),
    keys: C("API anahtarları", "API keys", "API-Schlüssel", "Claves de API", "Clés API", "Chaves de API"),
    savetest: C("Kaydet ve dene", "Save and test", "Speichern und testen", "Guardar y probar", "Enregistrer et tester", "Salvar e testar"),
    saved: C("Kayıtlı (şifreli)", "Saved (encrypted)", "Gespeichert (verschlüsselt)", "Guardada (cifrada)", "Enregistrée (chiffrée)", "Salva (criptografada)"),
    save: C("Kaydet", "Save", "Speichern", "Guardar", "Enregistrer", "Salvar"),
    savedok: C("Kaydedildi", "Saved", "Gespeichert", "Guardado", "Enregistré", "Salvo"),
    voice: C("Ses", "Voice", "Ton", "Voz", "Voix", "Voz"),
    publish: C("Yayın", "Publishing", "Veröffentlichung", "Publicación", "Publication", "Publicação"),
    ident: C("Kimlik", "Identity", "Identität", "Identidad", "Identité", "Identidade"),
    look: C("Görünüm", "Look", "Aussehen", "Apariencia", "Apparence", "Visual"),
    rules: C("Kurallar", "Rules", "Regeln", "Reglas", "Règles", "Regras"),
    engine: C("Ses motoru", "Voice engine", "Sprach-Engine", "Motor de voz", "Moteur de voix", "Motor de voz"),
    tpl: C("Ses şablonu", "Voice template", "Stimmvorlage", "Plantilla de voz", "Modèle de voix", "Modelo de voz"),
    voicepick: C("Ses", "Voice", "Stimme", "Voz", "Voix", "Voz"),
    install: C("Kokoro'yu kur", "Install Kokoro", "Kokoro installieren", "Instalar Kokoro", "Installer Kokoro", "Instalar Kokoro"),
    notinst: C("Kokoro henüz kurulmadı.", "Kokoro is not installed yet.", "Kokoro ist noch nicht installiert.", "Kokoro aún no está instalado.", "Kokoro n'est pas encore installé.", "O Kokoro ainda não está instalado."),
    installed: C("Kokoro kuruldu", "Kokoro installed", "Kokoro installiert", "Kokoro instalado", "Kokoro installé", "Kokoro instalado"),
    listen: C("Dinle", "Listen", "Anhören", "Escuchar", "Écouter", "Ouvir"),
    connect: C("Google ile bağla", "Connect with Google", "Mit Google verbinden", "Conectar con Google", "Connecter avec Google", "Conectar com Google"),
    connected: C("Kanal YouTube'a bağlandı.", "Channel connected to YouTube.", "Kanal mit YouTube verbunden.", "Canal conectado a YouTube.", "Chaîne connectée à YouTube.", "Canal conectado ao YouTube."),
    who: C("Görselleri kim yapsın", "Who makes the images", "Wer erstellt die Bilder", "Quién hace las imágenes", "Qui crée les images", "Quem faz as imagens"),
    glauto: C("G-Labs (otomatik)", "G-Labs (automatic)", "G-Labs (automatisch)", "G-Labs (automático)", "G-Labs (automatique)", "G-Labs (automático)"),
    glkey: C("G-Labs Webhook anahtarı", "G-Labs webhook key", "G-Labs-Webhook-Schlüssel", "Clave de webhook de G-Labs", "Clé webhook G-Labs", "Chave de webhook do G-Labs"),
    lumkey: C("Lumean API anahtarı", "Lumean API key", "Lumean-API-Schlüssel", "Clave API de Lumean", "Clé API Lumean", "Chave de API do Lumean"),
    lumok: C("Lumean bağlandı.", "Lumean connected.", "Lumean verbunden.", "Lumean conectado.", "Lumean connecté.", "Lumean conectado."),
    syscheck: C("Sistem kontrolü", "System check", "Systemcheck", "Comprobación del sistema", "Vérification du système", "Verificação do sistema"),
    glready: C("G-Labs: 1 hesap hazır", "G-Labs: 1 account ready", "G-Labs: 1 Konto bereit", "G-Labs: 1 cuenta lista", "G-Labs : 1 compte prêt", "G-Labs: 1 conta pronta"),
    gconn: C("Google bağlantı anahtarları", "Google connection keys", "Google-Verbindungsschlüssel", "Claves de conexión de Google", "Clés de connexion Google", "Chaves de conexão do Google"),
    images: C("Görseller", "Images", "Bilder", "Imágenes", "Images", "Imagens"),
    paste: C("Yapıştır…", "Paste…", "Einfügen…", "Pegar…", "Coller…", "Colar…"),
    createacc: C("Hesap oluştur", "Create account", "Konto erstellen", "Crear cuenta", "Créer un compte", "Criar conta"),
    login: C("Giriş yap", "Sign in", "Anmelden", "Iniciar sesión", "Se connecter", "Entrar"),
    gmail: C("Gmail adresin", "Your Gmail address", "Deine Gmail-Adresse", "Tu dirección de Gmail", "Ton adresse Gmail", "O teu endereço Gmail")
  };
  // words used on schematic third-party screens that follow the visitor's language
  var W = {
    flowacc: C("Flow Hesapları", "Flow accounts", "Flow-Konten", "Cuentas de Flow", "Comptes Flow", "Contas do Flow"),
    gsettings: C("Ayarlar", "Settings", "Einstellungen", "Ajustes", "Paramètres", "Configurações"),
    gimages: C("Görsel üret", "Generate images", "Bilder erzeugen", "Generar imágenes", "Générer des images", "Gerar imagens"),
    active0: C("Aktif: 0 hesap", "Active: 0 accounts", "Aktiv: 0 Konten", "Activas: 0 cuentas", "Actifs : 0 compte", "Ativas: 0 contas"),
    active1: C("Aktif: 1 hesap", "Active: 1 account", "Aktiv: 1 Konto", "Activas: 1 cuenta", "Actifs : 1 compte", "Ativas: 1 conta"),
    addacc: C("Hesap ekle", "Add account", "Konto hinzufügen", "Añadir cuenta", "Ajouter un compte", "Adicionar conta"),
    activeacc: C("Aktif", "Active", "Aktiv", "Activa", "Actif", "Ativa"),
    copy: C("Kopyala", "Copy", "Kopieren", "Copiar", "Copier", "Copiar"),
    copied: C("Kopyalandı", "Copied", "Kopiert", "Copiado", "Copié", "Copiado"),
    winprot: C("Windows bilgisayarınızı korudu", "Windows protected your PC", "Der Computer wurde durch Windows geschützt", "Windows protegió su PC", "Windows a protégé votre ordinateur", "O Windows protegeu o computador"),
    winbody: C("Microsoft Defender SmartScreen, tanınmayan bir uygulamanın başlatılmasını engelledi.", "Microsoft Defender SmartScreen prevented an unrecognised app from starting.", "Von Microsoft Defender SmartScreen wurde der Start einer unbekannten App verhindert.", "Microsoft Defender SmartScreen impidió el inicio de una aplicación no reconocida.", "Microsoft Defender SmartScreen a empêché le démarrage d'une application non reconnue.", "O Microsoft Defender SmartScreen impediu o arranque de uma aplicação não reconhecida."),
    moreinfo: C("Ek bilgi", "More info", "Weitere Informationen", "Más información", "Informations complémentaires", "Mais informações"),
    runany: C("Yine de çalıştır", "Run anyway", "Trotzdem ausführen", "Ejecutar de todas formas", "Exécuter quand même", "Executar mesmo assim"),
    dontrun: C("Çalıştırma", "Don't run", "Nicht ausführen", "No ejecutar", "Ne pas exécuter", "Não executar"),
    appline: C("Uygulama: BelnoviaStudioPro-Setup.exe", "App: BelnoviaStudioPro-Setup.exe", "App: BelnoviaStudioPro-Setup.exe", "Aplicación: BelnoviaStudioPro-Setup.exe", "Application : BelnoviaStudioPro-Setup.exe", "Aplicação: BelnoviaStudioPro-Setup.exe"),
    downloads: C("İndirilenler", "Downloads", "Downloads", "Descargas", "Téléchargements", "Transferências"),
    gwarn: C("Google bu uygulamayı doğrulamadı", "Google hasn't verified this app", "Google hat diese App nicht überprüft", "Google no ha verificado esta aplicación", "Google n'a pas validé cette application", "A Google não validou esta app"),
    gwarnbody: C("Bu uygulamayı kendi Google Cloud projende sen oluşturdun.", "You created this app in your own Google Cloud project.", "Du hast diese App in deinem eigenen Google-Cloud-Projekt erstellt.", "Creaste esta aplicación en tu propio proyecto de Google Cloud.", "Tu as créé cette application dans ton propre projet Google Cloud.", "Criaste esta app no teu próprio projeto Google Cloud."),
    advanced: C("Gelişmiş", "Advanced", "Erweitert", "Configuración avanzada", "Paramètres avancés", "Avançadas"),
    goto: C("Belnovia Studio Pro'ya git (güvenli değil)", "Go to Belnovia Studio Pro (unsafe)", "Weiter zu Belnovia Studio Pro (unsicher)", "Ir a Belnovia Studio Pro (no seguro)", "Accéder à Belnovia Studio Pro (non sécurisé)", "Aceder a Belnovia Studio Pro (não seguro)"),
    backsafe: C("Güvenli sayfaya dön", "Back to safety", "Zurück zur sicheren Seite", "Volver a un sitio seguro", "Retour à la sécurité", "Voltar à segurança"),
    lumhome: C("Ana sayfa", "Home", "Start", "Inicio", "Accueil", "Início"),
    lumvoices: C("Sesler", "Voices", "Stimmen", "Voces", "Voix", "Vozes"),
    lumacc: C("Hesap", "Account", "Konto", "Cuenta", "Compte", "Conta"),
    nologo: C("Logo: boş bırak", "Logo: leave empty", "Logo: leer lassen", "Logo: dejar vacío", "Logo : laisser vide", "Logótipo: deixar vazio")
  };
  var UI = {
    play: C("Oynat", "Play", "Abspielen", "Reproducir", "Lire", "Reproduzir"),
    pause: C("Duraklat", "Pause", "Pause", "Pausa", "Pause", "Pausa"),
    replay: C("Baştan", "Replay", "Neu starten", "Repetir", "Rejouer", "Repetir"),
    kicker: C("Belnovia Studio Pro · Kurulum rehberi", "Belnovia Studio Pro · Setup guide", "Belnovia Studio Pro · Einrichtung", "Belnovia Studio Pro · Guía de configuración", "Belnovia Studio Pro · Guide d'installation", "Belnovia Studio Pro · Guia de configuração"),
    done: C("Hazır!", "Done!", "Fertig!", "¡Listo!", "C'est prêt !", "Pronto!")
  };

  // ---------- layout helpers (stage 1600 x 900) ----------
  var WX = 80, WY = 34, WW = 1440, WH = 700, BAR = 70, SIDEW = 300;
  var CX = WX + SIDEW + 44, CY = WY + BAR + 34; // content origin
  function frame(id, bar, light) {
    return [
      { id: id + "_w", k: "win", x: WX, y: WY, w: WW, h: WH, cls: light ? "light" : "" },
      { id: id + "_b", k: "bar", x: WX, y: WY, w: WW, h: BAR, cls: light ? "light" : "", bar: bar }
    ];
  }
  function sideList(items, active, light) {
    var out = [{ id: "side", k: "side", x: WX + 1, y: WY + BAR, w: SIDEW, h: WH - BAR - 1, cls: light ? "light" : "" }];
    items.forEach(function (it, i) {
      out.push({ id: it.id, k: "item", x: WX + 14, y: WY + BAR + 22 + i * 56, w: SIDEW - 28, h: 48, t: it.t, cls: (light ? "light " : "") + (it.id === active ? "on" : "") + (it.sub ? " ga-sub" : ""), hide: it.hide });
    });
    return out;
  }
  function belNav(active) {
    return sideList([
      { id: "n_home", t: B.home }, { id: "n_new", t: B.newv }, { id: "n_line", t: B.line }, { id: "n_cal", t: B.cal },
      { id: "n_ch", t: B.chans }, { id: "n_set", t: B.settings }, { id: "n_help", t: B.help }
    ], active, false);
  }
  function bel() { return frame("bel", { app: true }, false); }
  function web(url, light) { return frame("web", { url: url }, light !== false); }
  function chanTabs(active) {
    var tabs = [["t_id", B.ident], ["t_look", B.look], ["t_voice", B.voice], ["t_rules", B.rules], ["t_pub", B.publish]];
    var out = [{ id: "ch_h", k: "h", x: CX, y: CY, w: 900, h: 50, t: "Starfall Chronicles" }];
    tabs.forEach(function (tb, i) {
      out.push({ id: tb[0], k: "btn", x: CX + i * 186, y: CY + 74, w: 172, h: 50, t: tb[1], cls: tb[0] === active ? "primary" : "" });
    });
    return out;
  }

  // ---------- the guides ----------
  function GUIDES() {
    var g = {};

    // CLAUDE ----------------------------------------------------------
    var conSide = [
      { id: "c_dash", t: "Dashboard" }, { id: "c_msg", t: "Messages" }, { id: "c_ag", t: "Agents" }, { id: "c_res", t: "Resources" },
      { id: "c_spend", t: "Spending" }, { id: "c_acc", t: "Access" }, { id: "c_api", t: "API keys", sub: true, hide: true }, { id: "c_sec", t: "Security & data" }, { id: "c_set", t: "Settings" }
    ];
    var conBase = web("console.anthropic.com").concat(sideList(conSide, "c_dash", true)).concat([
      { id: "c_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: "Dashboard", cls: "light" }
    ]);
    // the sub item takes the place of the next row; rows below move down when it opens
    conBase.forEach(function (e) { if (e.id === "c_api") e.y = WY + BAR + 22 + 6 * 56; if (e.id === "c_sec") e.y = WY + BAR + 22 + 6 * 56; if (e.id === "c_set") e.y = WY + BAR + 22 + 7 * 56; });
    var keyModal = [
      { id: "veil", k: "veil", x: WX + 1, y: WY + BAR, w: WW - 2, h: WH - BAR - 1, hide: true },
      { id: "dlg", k: "dialog", x: 520, y: 170, w: 560, h: 470, cls: "light", hide: true },
      { id: "dlg_h", k: "h", x: 560, y: 200, w: 480, h: 50, t: "Create API key", cls: "light", hide: true },
      { id: "dlg_l1", k: "label", x: 560, y: 270, w: 480, h: 34, t: "Name", cls: "light", hide: true },
      { id: "f_name", k: "field", x: 560, y: 308, w: 480, h: 56, ph: "my-key", cls: "light", hide: true },
      { id: "dlg_l2", k: "label", x: 560, y: 382, w: 480, h: 34, t: "Expires", cls: "light", hide: true },
      { id: "s_exp", k: "select", x: 560, y: 420, w: 480, h: 56, v: "30 days", cls: "light", hide: true },
      { id: "b_mk", k: "btn", x: 860, y: 540, w: 180, h: 56, t: "Create key", cls: "blue", hide: true },
      { id: "k_box", k: "field", x: 560, y: 300, w: 480, h: 60, v: "sk-ant-api03-•••••••••••••", cls: "light", hide: true },
      { id: "b_copy", k: "btn", x: 560, y: 384, w: 200, h: 56, t: "Copy", cls: "blue", hide: true }
    ];
    g.claude = {
      title: C("Claude API anahtarı", "Claude API key", "Claude-API-Schlüssel", "Clave de API de Claude", "Clé API Claude", "Chave de API do Claude"),
      sub: C("Hikâyeleri yazan yapay zekâ için anahtar alıp programa girme", "Get a key for the story AI and add it to the program", "Einen Schlüssel für die Geschichten-KI holen und eintragen", "Consigue una clave para la IA de las historias y añádela", "Obtenir une clé pour l'IA des histoires et l'ajouter", "Obter uma chave para a IA das histórias e adicioná-la"),
      end: C("Claude anahtarın kayıtlı. Artık hikâye yazılabilir.", "Your Claude key is saved. Stories can be written now.", "Dein Claude-Schlüssel ist gespeichert. Geschichten können jetzt geschrieben werden.", "Tu clave de Claude está guardada. Ya se pueden escribir historias.", "Ta clé Claude est enregistrée. Les histoires peuvent être écrites.", "A tua chave do Claude está guardada. Já podes escrever histórias."),
      steps: [
        { scene: "con", els: conBase.concat([{ id: "c_tbl1", k: "row", x: CX, y: CY + 90, w: 1000, h: 60, t: "Usage this month", cls: "light" }]).concat(keyModal), target: "c_acc",
          after: { c_api: { show: true }, c_sec: { y: WY + BAR + 22 + 7 * 56 }, c_set: { y: WY + BAR + 22 + 8 * 56 } },
          cap: C("console.anthropic.com'a gir ve soldaki Access menüsünü aç.", "Sign in at console.anthropic.com and open Access on the left.", "Melde dich bei console.anthropic.com an und öffne links Access.", "Entra en console.anthropic.com y abre Access a la izquierda.", "Connecte-toi sur console.anthropic.com et ouvre Access à gauche.", "Entra em console.anthropic.com e abre Access à esquerda.") },
        { target: "c_api", after: { c_h: { t: "API keys" }, c_tbl1: { t: "default-key        sk-ant-…••••" }, b_new: { show: true }, c_acc: { on: false }, c_api: { on: true } },
          add: [{ id: "b_new", k: "btn", x: CX + 820, y: CY, w: 210, h: 54, t: "Create key", cls: "blue", hide: true }],
          cap: C("API keys'e tıkla.", "Click API keys.", "Klicke auf API keys.", "Haz clic en API keys.", "Clique sur API keys.", "Clica em API keys.") },
        { target: "b_new", after: { veil: { show: true }, dlg: { show: true }, dlg_h: { show: true }, dlg_l1: { show: true }, f_name: { show: true }, dlg_l2: { show: true }, s_exp: { show: true }, b_mk: { show: true } },
          cap: C("Create key'e bas. Sorulursa Continue with an API key'i seç.", "Press Create key. If asked, choose Continue with an API key.", "Drücke Create key. Falls gefragt, wähle Continue with an API key.", "Pulsa Create key. Si te pregunta, elige Continue with an API key.", "Clique sur Create key. Si on te le demande, choisis Continue with an API key.", "Carrega em Create key. Se perguntar, escolhe Continue with an API key.") },
        { target: "f_name", type: { id: "f_name", text: "belnovia" },
          cap: C("Anahtara bir ad ver, ör. belnovia.", "Give the key a name, e.g. belnovia.", "Gib dem Schlüssel einen Namen, z. B. belnovia.", "Ponle un nombre a la clave, p. ej. belnovia.", "Donne un nom à la clé, par ex. belnovia.", "Dá um nome à chave, por ex. belnovia.") },
        { target: "s_exp", after: { s_exp: { v: "Never" } },
          cap: C("Ana bilgisayarın için süreyi uzun tut ya da Never seç.", "For your main computer keep a long expiry or choose Never.", "Für deinen Hauptrechner eine lange Laufzeit oder Never wählen.", "Para tu ordenador principal, elige una caducidad larga o Never.", "Pour ton ordinateur principal, garde une longue durée ou choisis Never.", "Para o computador principal, escolhe uma validade longa ou Never.") },
        { target: "b_mk", after: { dlg_l1: { hide: true }, f_name: { hide: true }, dlg_l2: { hide: true }, s_exp: { hide: true }, b_mk: { hide: true }, k_box: { show: true }, b_copy: { show: true }, dlg_h: { t: "Save your key" } },
          cap: C("Create key'e bas.", "Press Create key.", "Drücke Create key.", "Pulsa Create key.", "Clique sur Create key.", "Carrega em Create key.") },
        { target: "b_copy", after: { b_copy: { t: "Copied ✓" } },
          cap: C("Anahtarı kopyala. Kimseyle paylaşma; pencere kapanınca bir daha görünmez.", "Copy the key. Never share it; it is not shown again after closing.", "Kopiere den Schlüssel. Nie weitergeben; nach dem Schließen wird er nicht mehr angezeigt.", "Copia la clave. No la compartas; al cerrar no se vuelve a mostrar.", "Copie la clé. Ne la partage jamais ; elle ne s'affiche plus après fermeture.", "Copia a chave. Nunca a partilhes; depois de fechar não volta a aparecer.") },
        { scene: "bel", els: bel().concat(belNav("n_set")).concat([
            { id: "s_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: B.keys },
            { id: "s_l", k: "label", x: CX, y: CY + 96, w: 420, h: 36, t: "Claude (Anthropic)" },
            { id: "s_f", k: "field", x: CX, y: CY + 140, w: 620, h: 58, ph: B.paste },
            { id: "s_b", k: "btn", x: CX + 640, y: CY + 140, w: 250, h: 58, t: B.savetest, cls: "primary" },
            { id: "s_ok", k: "badge", x: CX + 440, y: CY + 94, w: 300, h: 40, t: B.saved, cls: "ok", hide: true },
            { id: "s_l2", k: "label", x: CX, y: CY + 250, w: 420, h: 36, t: "Lumean" },
            { id: "s_f2", k: "field", x: CX, y: CY + 294, w: 620, h: 58, ph: B.paste }
          ]), target: "s_f", type: { id: "s_f", text: "sk-ant-api03-•••••••••••••" },
          cap: C("Belnovia'da Ayarlar → API anahtarları → Claude kutusuna yapıştır.", "In Belnovia open Settings → API keys and paste it into the Claude box.", "Öffne in Belnovia Einstellungen → API-Schlüssel und füge ihn bei Claude ein.", "En Belnovia abre Ajustes → Claves de API y pégala en Claude.", "Dans Belnovia, ouvre Paramètres → Clés API et colle-la dans Claude.", "No Belnovia abre Configurações → Chaves de API e cola-a em Claude.") },
        { target: "s_b", after: { s_ok: { show: true }, s_f: { v: "", ph: "••••••••••••" } },
          cap: C("Kaydet ve dene'ye bas. Yeşil Kayıtlı yazısı çıkınca hazırsın.", "Press Save and test. When the green Saved label appears, you're done.", "Drücke Speichern und testen. Erscheint das grüne Gespeichert, bist du fertig.", "Pulsa Guardar y probar. Cuando aparezca el Guardada verde, listo.", "Clique sur Enregistrer et tester. Quand Enregistrée apparaît en vert, c'est prêt.", "Carrega em Salvar e testar. Quando aparecer o Salva a verde, está pronto.") }
      ]
    };

    // LUMEAN ----------------------------------------------------------
    var lumBase = web("lumean.net").concat(sideList([{ id: "l_home", t: W.lumhome }, { id: "l_voices", t: W.lumvoices }, { id: "l_api", t: "API" }, { id: "l_acc", t: W.lumacc }], "l_home", true)).concat([
      { id: "l_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: W.lumhome, cls: "light" },
      { id: "l_key", k: "field", x: CX, y: CY + 100, w: 620, h: 58, v: "lmn_•••••••••••••••", cls: "light", hide: true },
      { id: "l_copy", k: "btn", x: CX + 640, y: CY + 100, w: 190, h: 58, t: W.copy, cls: "blue", hide: true }
    ]);
    var setKeys = function (extra) {
      return bel().concat(belNav("n_set")).concat([
        { id: "s_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: B.keys },
        { id: "s_l", k: "label", x: CX, y: CY + 96, w: 420, h: 36, t: "Claude (Anthropic)" },
        { id: "s_ok", k: "badge", x: CX + 440, y: CY + 94, w: 300, h: 40, t: B.saved, cls: "ok" },
        { id: "s_l2", k: "label", x: CX, y: CY + 200, w: 420, h: 36, t: "Lumean" },
        { id: "s_f2", k: "field", x: CX, y: CY + 244, w: 620, h: 58, ph: B.paste },
        { id: "s_b2", k: "btn", x: CX + 640, y: CY + 244, w: 250, h: 58, t: B.savetest, cls: "primary" },
        { id: "s_ok2", k: "badge", x: CX + 440, y: CY + 198, w: 300, h: 40, t: B.lumok, cls: "ok", hide: true }
      ]).concat(extra || []);
    };
    var voiceTab = function (engine, extra) {
      return bel().concat(belNav("n_ch")).concat(chanTabs("t_voice")).concat([
        { id: "v_l1", k: "label", x: CX, y: CY + 160, w: 420, h: 36, t: B.engine },
        { id: "v_eng", k: "select", x: CX, y: CY + 200, w: 420, h: 58, v: engine },
        { id: "v_save", k: "btn", x: CX + 760, y: CY + 470, w: 200, h: 58, t: B.save, cls: "primary" },
        { id: "v_ok", k: "badge", x: CX + 520, y: CY + 479, w: 220, h: 40, t: B.savedok, cls: "ok", hide: true }
      ]).concat(extra || []);
    };
    g.lumean = {
      title: C("Lumean ile doğal ses", "Natural voice with Lumean", "Natürliche Stimme mit Lumean", "Voz natural con Lumean", "Voix naturelle avec Lumean", "Voz natural com o Lumean"),
      sub: C("Lumean anahtarını alıp programa girme", "Get your Lumean key and add it to the program", "Lumean-Schlüssel holen und eintragen", "Consigue tu clave de Lumean y añádela", "Obtenir ta clé Lumean et l'ajouter", "Obter a chave do Lumean e adicioná-la"),
      end: C("Lumean bağlı. Videoların doğal sesle seslendirilir.", "Lumean is connected. Your videos get a natural voice.", "Lumean ist verbunden. Deine Videos bekommen eine natürliche Stimme.", "Lumean está conectado. Tus vídeos tendrán voz natural.", "Lumean est connecté. Tes vidéos ont une voix naturelle.", "O Lumean está ligado. Os teus vídeos têm voz natural."),
      steps: [
        { scene: "lum", els: lumBase, target: "l_api", after: { l_h: { t: "API" }, l_key: { show: true }, l_copy: { show: true }, l_home: { on: false }, l_api: { on: true } },
          cap: C("lumean.net'te hesabına gir ve API bölümünü aç.", "Sign in at lumean.net and open the API section.", "Melde dich bei lumean.net an und öffne den API-Bereich.", "Entra en lumean.net y abre la sección API.", "Connecte-toi sur lumean.net et ouvre la section API.", "Entra em lumean.net e abre a secção API.") },
        { target: "l_copy", after: { l_copy: { t: W.copied } },
          cap: C("API anahtarını kopyala.", "Copy the API key.", "Kopiere den API-Schlüssel.", "Copia la clave de API.", "Copie la clé API.", "Copia a chave de API.") },
        { scene: "bel", els: setKeys(), target: "s_f2", type: { id: "s_f2", text: "lmn_•••••••••••••••" },
          cap: C("Belnovia'da Ayarlar → API anahtarları → Lumean kutusuna yapıştır.", "In Belnovia open Settings → API keys and paste it into Lumean.", "Öffne in Belnovia Einstellungen → API-Schlüssel und füge ihn bei Lumean ein.", "En Belnovia abre Ajustes → Claves de API y pégala en Lumean.", "Dans Belnovia, ouvre Paramètres → Clés API et colle-la dans Lumean.", "No Belnovia abre Configurações → Chaves de API e cola-a em Lumean.") },
        { target: "s_b2", after: { s_ok2: { show: true }, s_f2: { v: "", ph: "••••••••••••" } },
          cap: C("Kaydet ve dene'ye bas: \"Lumean bağlandı.\" yazmalı.", "Press Save and test: it should say \"Lumean connected.\"", "Drücke Speichern und testen: Es sollte \"Lumean verbunden.\" erscheinen.", "Pulsa Guardar y probar: debe decir \"Lumean conectado.\"", "Clique sur Enregistrer et tester : « Lumean connecté. » doit apparaître.", "Carrega em Salvar e testar: deve aparecer \"Lumean conectado.\"") },
        { scene: "voice", els: voiceTab("Kokoro", [
            { id: "v_l2", k: "label", x: CX, y: CY + 290, w: 420, h: 36, t: B.tpl, hide: true },
            { id: "v_tpl", k: "select", x: CX, y: CY + 330, w: 420, h: 58, v: "Narrator · Deep", hide: true }
          ]), target: "v_eng", after: { v_eng: { v: "Lumean" }, v_l2: { show: true }, v_tpl: { show: true } },
          cap: C("Kanallar → kanalın → Ses sekmesinde motoru Lumean yap.", "In Channels → your channel → Voice, set the engine to Lumean.", "Unter Kanäle → dein Kanal → Ton die Engine auf Lumean stellen.", "En Canales → tu canal → Voz, elige el motor Lumean.", "Dans Chaînes → ta chaîne → Voix, choisis le moteur Lumean.", "Em Canais → o teu canal → Voz, escolhe o motor Lumean.") },
        { target: "v_save", after: { v_ok: { show: true } },
          cap: C("Ses şablonunu seç ve Kaydet.", "Pick a voice template and press Save.", "Wähle eine Stimmvorlage und drücke Speichern.", "Elige una plantilla de voz y pulsa Guardar.", "Choisis un modèle de voix et clique sur Enregistrer.", "Escolhe um modelo de voz e carrega em Salvar.") }
      ]
    };

    // G-LABS ----------------------------------------------------------
    var glBase = frame("gl", { title: "G-Labs" }, false).concat(sideList([{ id: "g_img", t: W.gimages }, { id: "g_hook", t: "Webhook API" }, { id: "g_set", t: W.gsettings }], "g_img", false)).concat([
      { id: "g_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: W.gimages },
      { id: "g_warn", k: "badge", x: CX, y: CY + 90, w: 300, h: 44, t: W.active0, cls: "warn", hide: true },
      { id: "g_add", k: "btn", x: CX, y: CY + 160, w: 250, h: 56, t: W.addacc, cls: "primary", hide: true },
      { id: "g_row", k: "row", x: CX, y: CY + 250, w: 800, h: 62, t: "ornek@gmail.com", hide: true },
      { id: "g_rowok", k: "badge", x: CX + 640, y: CY + 260, w: 150, h: 40, t: W.activeacc, cls: "ok", hide: true },
      { id: "g_key", k: "field", x: CX, y: CY + 100, w: 620, h: 58, v: "glabs_••••••••••••••", hide: true },
      { id: "g_copy", k: "btn", x: CX + 640, y: CY + 100, w: 190, h: 58, t: W.copy, cls: "primary", hide: true }
    ]);
    g.glabs = {
      title: C("G-Labs ile görseller", "Images with G-Labs", "Bilder mit G-Labs", "Imágenes con G-Labs", "Images avec G-Labs", "Imagens com o G-Labs"),
      sub: C("Flow hesabı ekleme ve programa bağlama", "Add a Flow account and connect it to the program", "Flow-Konto hinzufügen und verbinden", "Añadir una cuenta de Flow y conectarla", "Ajouter un compte Flow et le connecter", "Adicionar uma conta do Flow e ligá-la"),
      end: C("G-Labs hazır. Görseller kendiliğinden üretilir.", "G-Labs is ready. Images are made automatically.", "G-Labs ist bereit. Bilder entstehen automatisch.", "G-Labs está listo. Las imágenes se crean solas.", "G-Labs est prêt. Les images se créent toutes seules.", "O G-Labs está pronto. As imagens são feitas sozinhas."),
      steps: [
        { scene: "gl", els: glBase, target: "g_set", after: { g_h: { t: W.flowacc }, g_warn: { show: true }, g_add: { show: true }, g_img: { on: false }, g_set: { on: true } },
          cap: C("G-Labs programını aç, Ayarlar → Flow Hesapları'na gir. 0 hesapla görsel üretilemez.", "Open the G-Labs program and go to Settings → Flow accounts. With 0 accounts no images can be made.", "Öffne G-Labs, gehe zu Einstellungen → Flow-Konten. Mit 0 Konten entstehen keine Bilder.", "Abre G-Labs y ve a Ajustes → Cuentas de Flow. Con 0 cuentas no se crean imágenes.", "Ouvre G-Labs, va dans Paramètres → Comptes Flow. Avec 0 compte, aucune image.", "Abre o G-Labs e vai a Configurações → Contas do Flow. Com 0 contas não há imagens.") },
        { target: "g_add", after: { g_row: { show: true }, g_rowok: { show: true }, g_warn: { t: W.active1, cls: "ok" } },
          cap: C("Hesap ekle ile Google hesabını bağla. Aktif hesap sayısı 1 olmalı.", "Use Add account to connect a Google account. Active accounts must be at least 1.", "Mit Konto hinzufügen ein Google-Konto verbinden. Aktive Konten: mindestens 1.", "Con Añadir cuenta conecta una cuenta de Google. Debe haber al menos 1 activa.", "Avec Ajouter un compte, connecte un compte Google. Il faut au moins 1 compte actif.", "Com Adicionar conta liga uma conta Google. Tem de haver pelo menos 1 ativa.") },
        { target: "g_hook", after: { g_h: { t: "Webhook API" }, g_warn: { hide: true }, g_add: { hide: true }, g_row: { hide: true }, g_rowok: { hide: true }, g_key: { show: true }, g_copy: { show: true }, g_set: { on: false }, g_hook: { on: true } },
          cap: C("Webhook API bölümünü aç.", "Open the Webhook API section.", "Öffne den Bereich Webhook API.", "Abre la sección Webhook API.", "Ouvre la section Webhook API.", "Abre a secção Webhook API.") },
        { target: "g_copy", after: { g_copy: { t: W.copied } },
          cap: C("Webhook anahtarını kopyala.", "Copy the webhook key.", "Kopiere den Webhook-Schlüssel.", "Copia la clave del webhook.", "Copie la clé webhook.", "Copia a chave do webhook.") },
        { scene: "bel", els: bel().concat(belNav("n_set")).concat([
            { id: "s_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: B.images },
            { id: "s_l", k: "label", x: CX, y: CY + 90, w: 500, h: 36, t: B.who },
            { id: "s_sel", k: "select", x: CX, y: CY + 132, w: 420, h: 58, v: B.glauto },
            { id: "s_l2", k: "label", x: CX, y: CY + 226, w: 500, h: 36, t: B.glkey },
            { id: "s_f", k: "field", x: CX, y: CY + 268, w: 620, h: 58, ph: B.paste },
            { id: "s_b", k: "btn", x: CX + 640, y: CY + 268, w: 250, h: 58, t: B.savetest, cls: "primary" },
            { id: "s_ok", k: "badge", x: CX + 520, y: CY + 224, w: 300, h: 40, t: B.saved, cls: "ok", hide: true },
            { id: "s_chk", k: "btn", x: CX, y: CY + 400, w: 300, h: 56, t: B.syscheck },
            { id: "s_res", k: "badge", x: CX + 320, y: CY + 408, w: 340, h: 42, t: B.glready, cls: "ok", hide: true }
          ]), target: "s_f", type: { id: "s_f", text: "glabs_••••••••••••••" },
          cap: C("Belnovia'da Ayarlar → Görseller'de G-Labs (otomatik) seçili olsun; anahtarı yapıştır.", "In Belnovia, Settings → Images: keep G-Labs (automatic) and paste the key.", "In Belnovia unter Einstellungen → Bilder G-Labs (automatisch) wählen und den Schlüssel einfügen.", "En Belnovia, Ajustes → Imágenes: deja G-Labs (automático) y pega la clave.", "Dans Belnovia, Paramètres → Images : garde G-Labs (automatique) et colle la clé.", "No Belnovia, Configurações → Imagens: mantém G-Labs (automático) e cola a chave.") },
        { target: "s_b", after: { s_ok: { show: true }, s_f: { v: "", ph: "••••••••••••" } },
          cap: C("Kaydet ve dene'ye bas.", "Press Save and test.", "Drücke Speichern und testen.", "Pulsa Guardar y probar.", "Clique sur Enregistrer et tester.", "Carrega em Salvar e testar.") },
        { target: "s_chk", after: { s_res: { show: true } },
          cap: C("Sistem kontrolüyle G-Labs'in hazır olduğunu doğrula.", "Run the system check to confirm G-Labs is ready.", "Prüfe mit dem Systemcheck, ob G-Labs bereit ist.", "Confirma con la comprobación del sistema que G-Labs está listo.", "Vérifie avec la vérification du système que G-Labs est prêt.", "Confirma com a verificação do sistema que o G-Labs está pronto.") }
      ]
    };

    // KOKORO ----------------------------------------------------------
    g.kokoro = {
      title: C("Ücretsiz ses: Kokoro", "Free voice: Kokoro", "Kostenlose Stimme: Kokoro", "Voz gratis: Kokoro", "Voix gratuite : Kokoro", "Voz gratuita: Kokoro"),
      sub: C("Ücretsiz, bilgisayarında çalışan ses motorunu kurma", "Install the free voice engine that runs on your computer", "Die kostenlose Sprach-Engine auf deinem Rechner installieren", "Instala el motor de voz gratuito que funciona en tu ordenador", "Installer le moteur de voix gratuit qui tourne sur ton ordinateur", "Instalar o motor de voz gratuito que corre no teu computador"),
      end: C("Kokoro hazır. Ses için ek ücret ödemezsin.", "Kokoro is ready. No extra cost for the voice.", "Kokoro ist bereit. Keine Zusatzkosten für die Stimme.", "Kokoro está listo. La voz no cuesta nada extra.", "Kokoro est prêt. La voix ne coûte rien de plus.", "O Kokoro está pronto. A voz não custa nada extra."),
      steps: [
        { scene: "voice", els: voiceTab("Lumean", [
            { id: "k_note", k: "badge", x: CX + 440, y: CY + 209, w: 380, h: 40, t: B.notinst, cls: "warn", hide: true },
            { id: "k_inst", k: "btn", x: CX, y: CY + 290, w: 260, h: 56, t: B.install, cls: "primary", hide: true },
            { id: "k_prog", k: "progress", x: CX + 280, y: CY + 312, w: 360, h: 12, p: 0, hide: true },
            { id: "k_l3", k: "label", x: CX, y: CY + 290, w: 420, h: 36, t: B.voicepick, hide: true },
            { id: "k_voice", k: "select", x: CX, y: CY + 330, w: 520, h: 58, v: "af_heart · Heart", hide: true },
            { id: "k_listen", k: "btn", x: CX + 540, y: CY + 330, w: 170, h: 58, t: B.listen, hide: true },
            { id: "k_wave", k: "wave", x: CX + 730, y: CY + 336, w: 240, h: 46, hide: true }
          ]), target: "v_eng", after: { v_eng: { v: "Kokoro" }, k_note: { show: true }, k_inst: { show: true } },
          cap: C("Kanallar → kanalın → Ses sekmesinde motoru Kokoro yap.", "In Channels → your channel → Voice, set the engine to Kokoro.", "Unter Kanäle → dein Kanal → Ton die Engine auf Kokoro stellen.", "En Canales → tu canal → Voz, elige el motor Kokoro.", "Dans Chaînes → ta chaîne → Voix, choisis le moteur Kokoro.", "Em Canais → o teu canal → Voz, escolhe o motor Kokoro.") },
        { target: "k_inst", after: { k_prog: { show: true, anim: [0, 1, 2.2] } }, d: 6.4,
          cap: C("Kokoro'yu kur'a bas. Bir kerelik indirme birkaç dakika sürebilir.", "Press Install Kokoro. The one-time download can take a few minutes.", "Drücke Kokoro installieren. Der einmalige Download kann einige Minuten dauern.", "Pulsa Instalar Kokoro. La descarga única puede tardar unos minutos.", "Clique sur Installer Kokoro. Le téléchargement unique peut prendre quelques minutes.", "Carrega em Instalar Kokoro. A transferência única pode demorar alguns minutos.") },
        { target: null, after: { k_note: { t: B.installed, cls: "ok" }, k_inst: { hide: true }, k_prog: { hide: true }, k_l3: { show: true }, k_voice: { show: true }, k_listen: { show: true } }, at: 0.4, d: 3.4,
          cap: C("Kurulum bitti.", "Installation finished.", "Installation abgeschlossen.", "Instalación terminada.", "Installation terminée.", "Instalação concluída.") },
        { target: "k_voice", after: { k_voice: { v: "bm_george · George" } },
          cap: C("Kanalına uyan bir ses seç.", "Pick a voice that suits your channel.", "Wähle eine Stimme, die zu deinem Kanal passt.", "Elige una voz que encaje con tu canal.", "Choisis une voix qui va avec ta chaîne.", "Escolhe uma voz que combine com o teu canal.") },
        { target: "k_listen", after: { k_wave: { show: true } },
          cap: C("Dinle ile sesi dene.", "Try it with Listen.", "Teste sie mit Anhören.", "Pruébala con Escuchar.", "Essaie-la avec Écouter.", "Experimenta com Ouvir.") },
        { target: "v_save", after: { v_ok: { show: true } },
          cap: C("Kaydet. Bu kanalın videoları artık Kokoro ile seslendirilir.", "Save. This channel's videos are now voiced with Kokoro.", "Speichern. Die Videos dieses Kanals werden jetzt mit Kokoro vertont.", "Guarda. Los vídeos de este canal ya se narran con Kokoro.", "Enregistre. Les vidéos de cette chaîne sont maintenant doublées avec Kokoro.", "Guarda. Os vídeos deste canal passam a ser narrados com o Kokoro.") }
      ]
    };

    // YOUTUBE ---------------------------------------------------------
    var gcSide = function (active) {
      return sideList([{ id: "y_ov", t: "Overview" }, { id: "y_br", t: "Branding" }, { id: "y_au", t: "Audience" }, { id: "y_cl", t: "Clients" }, { id: "y_da", t: "Data Access" }], active, true);
    };
    var gcTop = [{ id: "y_proj", k: "btn", x: CX, y: CY - 6, w: 300, h: 50, t: "Select a project ▾", cls: "light" }];
    g.youtube = {
      dd: 4.4,
      title: C("YouTube bağlantısı", "Connecting YouTube", "YouTube verbinden", "Conectar YouTube", "Connecter YouTube", "Ligar o YouTube"),
      sub: C("Google Cloud'da kendi bağlantı anahtarını oluşturma ve kanalı bağlama", "Create your own connection keys in Google Cloud and connect your channel", "Eigene Verbindungsschlüssel in Google Cloud anlegen und den Kanal verbinden", "Crea tus claves de conexión en Google Cloud y conecta tu canal", "Créer tes clés de connexion dans Google Cloud et connecter ta chaîne", "Criar as tuas chaves de ligação no Google Cloud e ligar o canal"),
      end: C("Kanal bağlı. Biten videolar tek tıkla yüklenir.", "Channel connected. Finished videos upload with one click.", "Kanal verbunden. Fertige Videos lädst du mit einem Klick hoch.", "Canal conectado. Los vídeos terminados se suben con un clic.", "Chaîne connectée. Les vidéos terminées s'envoient en un clic.", "Canal ligado. Os vídeos prontos sobem com um clique."),
      steps: [
        { scene: "gc1", els: web("console.cloud.google.com").concat(gcSide("y_ov")).concat(gcTop).concat([
            { id: "veil", k: "veil", x: WX + 1, y: WY + BAR, w: WW - 2, h: WH - BAR - 1, hide: true },
            { id: "pd", k: "dialog", x: 500, y: 170, w: 600, h: 420, cls: "light", hide: true },
            { id: "pd_h", k: "h", x: 540, y: 200, w: 520, h: 50, t: "New project", cls: "light", hide: true },
            { id: "pd_l", k: "label", x: 540, y: 276, w: 520, h: 34, t: "Project name", cls: "light", hide: true },
            { id: "pd_f", k: "field", x: 540, y: 314, w: 520, h: 56, ph: "My Project", cls: "light", hide: true },
            { id: "pd_b", k: "btn", x: 900, y: 500, w: 160, h: 56, t: "Create", cls: "blue", hide: true }
          ]), target: "y_proj", after: { veil: { show: true }, pd: { show: true }, pd_h: { show: true }, pd_l: { show: true }, pd_f: { show: true }, pd_b: { show: true } },
          cap: C("console.cloud.google.com'da proje seçiciyi aç → New project.", "At console.cloud.google.com open the project picker → New project.", "Öffne bei console.cloud.google.com die Projektauswahl → New project.", "En console.cloud.google.com abre el selector de proyectos → New project.", "Sur console.cloud.google.com, ouvre le sélecteur de projet → New project.", "Em console.cloud.google.com abre o seletor de projetos → New project.") },
        { target: "pd_f", type: { id: "pd_f", text: "Belnovia YouTube" }, after: {},
          cap: C("Projeye bir ad ver.", "Give the project a name.", "Gib dem Projekt einen Namen.", "Ponle un nombre al proyecto.", "Donne un nom au projet.", "Dá um nome ao projeto.") },
        { target: "pd_b", after: { veil: { hide: true }, pd: { hide: true }, pd_h: { hide: true }, pd_l: { hide: true }, pd_f: { hide: true }, pd_b: { hide: true }, y_proj: { t: "Belnovia YouTube ▾" } },
          cap: C("Create'e bas ve yeni projeyi seç.", "Press Create and select the new project.", "Drücke Create und wähle das neue Projekt.", "Pulsa Create y selecciona el nuevo proyecto.", "Clique sur Create et sélectionne le nouveau projet.", "Carrega em Create e seleciona o novo projeto.") },
        { scene: "gc2", els: web("console.cloud.google.com/apis/library").concat([
            { id: "lib_h", k: "h", x: WX + 60, y: CY, w: 900, h: 50, t: "API Library", cls: "light" },
            { id: "lib_s", k: "field", x: WX + 60, y: CY + 80, w: 760, h: 58, v: "YouTube Data API v3", cls: "light" },
            { id: "lib_card", k: "row", x: WX + 60, y: CY + 190, w: 1000, h: 120, t: "YouTube Data API v3", cls: "light" },
            { id: "lib_en", k: "btn", x: WX + 60, y: CY + 340, w: 200, h: 58, t: "Enable", cls: "blue" },
            { id: "lib_ok", k: "badge", x: WX + 280, y: CY + 349, w: 200, h: 40, t: "Enabled ✓", cls: "light ok", hide: true }
          ]), target: "lib_en", after: { lib_ok: { show: true } },
          cap: C("APIs & Services → Library'de YouTube Data API v3'ü bul, Enable'a bas.", "In APIs & Services → Library find YouTube Data API v3 and press Enable.", "Unter APIs & Services → Library YouTube Data API v3 suchen und Enable drücken.", "En APIs & Services → Library busca YouTube Data API v3 y pulsa Enable.", "Dans APIs & Services → Library, trouve YouTube Data API v3 et clique sur Enable.", "Em APIs & Services → Library procura YouTube Data API v3 e carrega em Enable.") },
        { scene: "gc3", d: 7.2, els: web("console.cloud.google.com/auth/branding").concat(gcSide("y_br")).concat([
            { id: "br_h", k: "h", x: CX, y: CY - 6, w: 800, h: 50, t: "Branding", cls: "light" },
            { id: "br1", k: "field", x: CX, y: CY + 60, w: 520, h: 50, v: "Belnovia Studio Pro", cls: "light" },
            { id: "br2", k: "field", x: CX + 540, y: CY + 60, w: 480, h: 50, v: "ornek@gmail.com", cls: "light" },
            { id: "br3", k: "field", x: CX, y: CY + 130, w: 1020, h: 50, v: "https://ornek-siteniz.com", cls: "light" },
            { id: "br4", k: "field", x: CX, y: CY + 196, w: 1020, h: 50, v: "https://ornek-siteniz.com/gizlilik", cls: "light" },
            { id: "br5", k: "field", x: CX, y: CY + 262, w: 1020, h: 50, v: "https://ornek-siteniz.com/kosullar", cls: "light" },
            { id: "br6", k: "field", x: CX, y: CY + 336, w: 520, h: 50, v: "ornek-siteniz.com", cls: "light" },
            { id: "br_logo", k: "badge", x: CX + 540, y: CY + 341, w: 300, h: 40, t: W.nologo, cls: "warn" },
            { id: "br_save", k: "btn", x: CX, y: CY + 430, w: 160, h: 56, t: "Save", cls: "blue" },
            { id: "br_ok", k: "badge", x: CX + 180, y: CY + 438, w: 220, h: 40, t: "Saved ✓", cls: "light ok", hide: true }
          ]), target: "br_save", after: { br_ok: { show: true } },
          cap: C("Google Auth Platform → Branding: uygulama adı, e-posta, site linkleri ve alan adını yaz. Logo yükleme.", "Google Auth Platform → Branding: app name, e-mail, site links and the domain. Don't upload a logo.", "Google Auth Platform → Branding: App-Name, E-Mail, Website-Links und Domain eintragen. Kein Logo hochladen.", "Google Auth Platform → Branding: nombre, e-mail, enlaces del sitio y dominio. No subas un logo.", "Google Auth Platform → Branding : nom, e-mail, liens du site et domaine. N'ajoute pas de logo.", "Google Auth Platform → Branding: nome, e-mail, links do site e domínio. Não carregues logótipo.") },
        { scene: "gc4", d: 6.4, els: web("console.cloud.google.com/auth/audience").concat(gcSide("y_au")).concat([
            { id: "au_h", k: "h", x: CX, y: CY - 6, w: 800, h: 50, t: "Audience", cls: "light" },
            { id: "au_l", k: "label", x: CX, y: CY + 70, w: 500, h: 34, t: "Publishing status", cls: "light" },
            { id: "au_st", k: "badge", x: CX, y: CY + 116, w: 200, h: 42, t: "Testing", cls: "warn" },
            { id: "au_pub", k: "btn", x: CX, y: CY + 190, w: 220, h: 56, t: "Publish app", cls: "blue" }
          ]), target: "au_pub", after: { au_st: { t: "In production", cls: "light ok", w: 240 } },
          cap: C("Audience → Publish app → Confirm. Bunu yapmazsan bağlantı 7 günde bir kopar.", "Audience → Publish app → Confirm. Without this the connection drops every 7 days.", "Audience → Publish app → Confirm. Sonst bricht die Verbindung alle 7 Tage ab.", "Audience → Publish app → Confirm. Si no, la conexión se corta cada 7 días.", "Audience → Publish app → Confirm. Sinon la connexion se coupe tous les 7 jours.", "Audience → Publish app → Confirm. Sem isto, a ligação cai a cada 7 dias.") },
        { scene: "gc5", els: web("console.cloud.google.com/auth/clients").concat(gcSide("y_cl")).concat([
            { id: "cl_h", k: "h", x: CX, y: CY - 6, w: 800, h: 50, t: "Create OAuth client", cls: "light" },
            { id: "cl_l", k: "label", x: CX, y: CY + 70, w: 500, h: 34, t: "Application type", cls: "light" },
            { id: "cl_t", k: "select", x: CX, y: CY + 110, w: 520, h: 56, v: "Desktop app", cls: "light" },
            { id: "cl_l2", k: "label", x: CX, y: CY + 190, w: 500, h: 34, t: "Name", cls: "light" },
            { id: "cl_n", k: "field", x: CX, y: CY + 230, w: 520, h: 56, v: "Belnovia Studio Pro", cls: "light" },
            { id: "cl_b", k: "btn", x: CX, y: CY + 320, w: 160, h: 56, t: "Create", cls: "blue" },
            { id: "veil", k: "veil", x: WX + 1, y: WY + BAR, w: WW - 2, h: WH - BAR - 1, hide: true },
            { id: "cd", k: "dialog", x: 470, y: 150, w: 660, h: 460, cls: "light", hide: true },
            { id: "cd_h", k: "h", x: 510, y: 180, w: 580, h: 50, t: "OAuth client created", cls: "light", hide: true },
            { id: "cd_l1", k: "label", x: 510, y: 256, w: 580, h: 32, t: "Client ID", cls: "light", hide: true },
            { id: "cd_f1", k: "field", x: 510, y: 292, w: 470, h: 52, v: "1234…apps.googleusercontent.com", cls: "light", hide: true },
            { id: "cd_c1", k: "btn", x: 994, y: 292, w: 96, h: 52, t: "⧉", cls: "light", hide: true },
            { id: "cd_l2", k: "label", x: 510, y: 366, w: 580, h: 32, t: "Client secret", cls: "light", hide: true },
            { id: "cd_f2", k: "field", x: 510, y: 402, w: 470, h: 52, v: "GOCSPX-••••••••••••", cls: "light", hide: true },
            { id: "cd_c2", k: "btn", x: 994, y: 402, w: 96, h: 52, t: "⧉", cls: "light", hide: true }
          ]), target: "cl_b", after: { veil: { show: true }, cd: { show: true }, cd_h: { show: true }, cd_l1: { show: true }, cd_f1: { show: true }, cd_c1: { show: true }, cd_l2: { show: true }, cd_f2: { show: true }, cd_c2: { show: true } },
          cap: C("Clients → Create client: türü Desktop app seç, Create'e bas.", "Clients → Create client: choose Desktop app and press Create.", "Clients → Create client: Desktop app wählen und Create drücken.", "Clients → Create client: elige Desktop app y pulsa Create.", "Clients → Create client : choisis Desktop app et clique sur Create.", "Clients → Create client: escolhe Desktop app e carrega em Create.") },
        { target: "cd_c1", after: { cd_c1: { t: "✓" } },
          cap: C("Client ID ve Client secret'ı kopyala; secret'ı kimseyle paylaşma.", "Copy the Client ID and the Client secret; never share the secret.", "Kopiere Client ID und Client secret; das Secret nie weitergeben.", "Copia el Client ID y el Client secret; no compartas el secret.", "Copie le Client ID et le Client secret ; ne partage jamais le secret.", "Copia o Client ID e o Client secret; nunca partilhes o secret.") },
        { scene: "bel1", els: bel().concat(belNav("n_set")).concat([
            { id: "yt_h", k: "h", x: CX, y: CY, w: 800, h: 50, t: "YouTube" },
            { id: "yt_l", k: "label", x: CX, y: CY + 90, w: 600, h: 36, t: B.gconn },
            { id: "yt_f1", k: "field", x: CX, y: CY + 134, w: 470, h: 58, ph: "Client ID" },
            { id: "yt_f2", k: "field", x: CX + 490, y: CY + 134, w: 430, h: 58, ph: "Client Secret" },
            { id: "yt_b", k: "btn", x: CX, y: CY + 220, w: 180, h: 56, t: B.save, cls: "primary" },
            { id: "yt_ok", k: "badge", x: CX + 200, y: CY + 228, w: 300, h: 40, t: B.saved, cls: "ok", hide: true }
          ]), target: "yt_f1", type: { id: "yt_f1", text: "1234…apps.googleusercontent.com" }, after: { yt_f2: { v: "GOCSPX-••••••••" } },
          cap: C("Belnovia'da Ayarlar → YouTube: Client ID ve Client Secret'ı yapıştır.", "In Belnovia, Settings → YouTube: paste the Client ID and Client Secret.", "In Belnovia, Einstellungen → YouTube: Client ID und Client Secret einfügen.", "En Belnovia, Ajustes → YouTube: pega el Client ID y el Client Secret.", "Dans Belnovia, Paramètres → YouTube : colle le Client ID et le Client Secret.", "No Belnovia, Configurações → YouTube: cola o Client ID e o Client Secret.") },
        { target: "yt_b", after: { yt_ok: { show: true } },
          cap: C("Kaydet'e bas.", "Press Save.", "Drücke Speichern.", "Pulsa Guardar.", "Clique sur Enregistrer.", "Carrega em Salvar.") },
        { scene: "bel2", els: bel().concat(belNav("n_ch")).concat(chanTabs("t_pub")).concat([
            { id: "pb_b", k: "btn", x: CX, y: CY + 170, w: 300, h: 58, t: B.connect, cls: "primary" },
            { id: "pb_ok", k: "badge", x: CX, y: CY + 250, w: 420, h: 44, t: B.connected, cls: "ok", hide: true }
          ]), target: "pb_b", after: {},
          cap: C("Kanallar → kanalın → Yayın sekmesinde Google ile bağla'ya bas.", "In Channels → your channel → Publishing, press Connect with Google.", "Unter Kanäle → dein Kanal → Veröffentlichung auf Mit Google verbinden drücken.", "En Canales → tu canal → Publicación, pulsa Conectar con Google.", "Dans Chaînes → ta chaîne → Publication, clique sur Connecter avec Google.", "Em Canais → o teu canal → Publicação, carrega em Conectar com Google.") },
        { scene: "gw", els: web("accounts.google.com").concat([
            { id: "gw_h", k: "h", x: WX + 120, y: CY + 20, w: 1200, h: 60, t: W.gwarn, cls: "light" },
            { id: "gw_t", k: "text", x: WX + 120, y: CY + 100, w: 1100, h: 70, t: W.gwarnbody, cls: "light" },
            { id: "gw_adv", k: "btn", x: WX + 120, y: CY + 200, w: 300, h: 44, t: W.advanced, cls: "link light" },
            { id: "gw_back", k: "btn", x: WX + 1000, y: CY + 190, w: 300, h: 56, t: W.backsafe, cls: "blue" },
            { id: "gw_go", k: "btn", x: WX + 120, y: CY + 280, w: 700, h: 44, t: W.goto, cls: "link light", hide: true }
          ]), target: "gw_adv", after: { gw_go: { show: true } },
          cap: C("\"Google bu uygulamayı doğrulamadı\" çıkarsa Gelişmiş'e tıkla. Uygulama senin, güvenli.", "If \"Google hasn't verified this app\" appears, click Advanced. It's your own app.", "Erscheint \"Google hat diese App nicht überprüft\", klicke auf Erweitert. Es ist deine eigene App.", "Si aparece \"Google no ha verificado esta aplicación\", haz clic en Configuración avanzada. Es tu propia app.", "Si « Google n'a pas validé cette application » s'affiche, clique sur Paramètres avancés. C'est ta propre application.", "Se aparecer \"A Google não validou esta app\", clica em Avançadas. A app é tua.") },
        { target: "gw_go", after: {},
          cap: C("Belnovia Studio Pro'ya git'e tıkla ve izinleri onayla.", "Click Go to Belnovia Studio Pro and allow the permissions.", "Klicke auf Weiter zu Belnovia Studio Pro und erlaube die Berechtigungen.", "Haz clic en Ir a Belnovia Studio Pro y acepta los permisos.", "Clique sur Accéder à Belnovia Studio Pro et autorise les permissions.", "Clica em Aceder a Belnovia Studio Pro e autoriza as permissões.") },
        { scene: "bel2", els: null, from: "bel2", target: null, at: 0.4, after: { pb_ok: { show: true } }, d: 4,
          cap: C("Kanal bağlandı.", "Channel connected.", "Kanal verbunden.", "Canal conectado.", "Chaîne connectée.", "Canal ligado.") }
      ]
    };

    // WINDOWS ---------------------------------------------------------
    g.windows = {
      dd: 6.8,
      title: C("Programı kurmak", "Installing the program", "Das Programm installieren", "Instalar el programa", "Installer le programme", "Instalar o programa"),
      sub: C("\"Windows bilgisayarınızı korudu\" çıkarsa ne yapılır", "What to do when \"Windows protected your PC\" appears", "Was tun, wenn \"Der Computer wurde durch Windows geschützt\" erscheint", "Qué hacer si aparece \"Windows protegió su PC\"", "Que faire si « Windows a protégé votre ordinateur » s'affiche", "O que fazer quando aparece \"O Windows protegeu o computador\""),
      end: C("Program açıldı. Hesabını oluşturabilirsin.", "The program is open. You can create your account.", "Das Programm ist offen. Du kannst dein Konto anlegen.", "El programa está abierto. Ya puedes crear tu cuenta.", "Le programme est ouvert. Tu peux créer ton compte.", "O programa está aberto. Já podes criar a tua conta."),
      steps: [
        { scene: "dl", els: frame("ex", { title: W.downloads }, true).concat([
            { id: "f1", k: "file", x: WX + 60, y: CY + 30, w: 640, h: 64, t: "BelnoviaStudioPro-Setup.exe" },
            { id: "f2", k: "row", x: WX + 60, y: CY + 110, w: 640, h: 56, t: "", cls: "light" }
          ]), target: "f1",
          cap: C("İndirdiğin BelnoviaStudioPro-Setup.exe'ye çift tıkla.", "Double-click the BelnoviaStudioPro-Setup.exe you downloaded.", "Doppelklicke auf die heruntergeladene BelnoviaStudioPro-Setup.exe.", "Haz doble clic en el BelnoviaStudioPro-Setup.exe que descargaste.", "Double-clique sur le BelnoviaStudioPro-Setup.exe téléchargé.", "Faz duplo clique no BelnoviaStudioPro-Setup.exe que transferiste.") },
        { scene: "ss", els: [
            { id: "ss", k: "dialog", x: 330, y: 90, w: 940, h: 620, cls: "win" },
            { id: "ss_t", k: "wintitle", x: 380, y: 140, w: 840, h: 110, t: W.winprot },
            { id: "ss_b", k: "wintext", x: 380, y: 270, w: 840, h: 90, t: W.winbody },
            { id: "ss_more", k: "btn", x: 380, y: 380, w: 380, h: 40, t: W.moreinfo, cls: "link" },
            { id: "ss_app", k: "wintext", x: 380, y: 440, w: 840, h: 40, t: W.appline, hide: true },
            { id: "ss_pub", k: "wintext", x: 380, y: 484, w: 840, h: 40, t: C("Yayımcı: Bilinmeyen yayımcı", "Publisher: Unknown publisher", "Herausgeber: Unbekannter Herausgeber", "Editor: Editor desconocido", "Éditeur : Éditeur inconnu", "Editor: Editor desconhecido"), hide: true },
            { id: "ss_run", k: "btn", x: 790, y: 610, w: 230, h: 56, t: W.runany, cls: "light", hide: true },
            { id: "ss_no", k: "btn", x: 1036, y: 610, w: 200, h: 56, t: W.dontrun, cls: "light" }
          ], target: "ss_more", after: { ss_app: { show: true }, ss_pub: { show: true }, ss_run: { show: true } },
          cap: C("Yeni programlarda bu uyarı çıkabilir. Ek bilgi'ye tıkla.", "New programs can show this warning. Click More info.", "Neue Programme können diese Warnung zeigen. Klicke auf Weitere Informationen.", "Los programas nuevos pueden mostrar este aviso. Haz clic en Más información.", "Les nouveaux programmes peuvent afficher cet avertissement. Clique sur Informations complémentaires.", "Os programas novos podem mostrar este aviso. Clica em Mais informações.") },
        { target: "ss_run",
          cap: C("Yine de çalıştır'a bas.", "Press Run anyway.", "Drücke Trotzdem ausführen.", "Pulsa Ejecutar de todas formas.", "Clique sur Exécuter quand même.", "Carrega em Executar mesmo assim.") },
        { scene: "inst", els: [
            { id: "in_box", k: "dialog", x: 430, y: 110, w: 740, h: 560 },
            { id: "in_logo", k: "logo", x: 763, y: 150, w: 74, h: 74 },
            { id: "in_h", k: "h", x: 480, y: 250, w: 640, h: 50, t: C("Belnovia Studio Pro kuruluyor", "Installing Belnovia Studio Pro", "Belnovia Studio Pro wird installiert", "Instalando Belnovia Studio Pro", "Installation de Belnovia Studio Pro", "Instalando o Belnovia Studio Pro") },
            { id: "in_l", k: "label", x: 480, y: 330, w: 640, h: 34, t: C("Kullanım koşullarını okudum ve kabul ediyorum", "I have read and accept the terms of use", "Ich akzeptiere die Nutzungsbedingungen", "Acepto las condiciones de uso", "J'accepte les conditions d'utilisation", "Aceito os termos de uso") },
            { id: "in_b", k: "btn", x: 640, y: 560, w: 320, h: 58, t: C("Kur", "Install", "Installieren", "Instalar", "Installer", "Instalar"), cls: "primary" }
          ], target: "in_b",
          cap: C("Kurulum penceresinde koşulları kabul et ve Kur'a bas. Yönetici izni gerekmez.", "In the setup window accept the terms and press Install. No administrator rights needed.", "Im Installationsfenster die Bedingungen akzeptieren und auf Installieren klicken. Keine Administratorrechte nötig.", "En la ventana de instalación acepta las condiciones y pulsa Instalar. No hacen falta permisos de administrador.", "Dans la fenêtre d'installation, accepte les conditions et clique sur Installer. Aucun droit administrateur requis.", "Na janela de instalação, aceite os termos e clique em Instalar. Não precisa de permissão de administrador.") },
        { scene: "inst2", els: [
            { id: "in_box", k: "dialog", x: 430, y: 110, w: 740, h: 560 },
            { id: "in_logo", k: "logo", x: 763, y: 150, w: 74, h: 74 },
            { id: "in_h", k: "h", x: 480, y: 250, w: 640, h: 50, t: C("Belnovia Studio Pro kuruldu", "Belnovia Studio Pro is installed", "Belnovia Studio Pro ist installiert", "Belnovia Studio Pro está instalado", "Belnovia Studio Pro est installé", "O Belnovia Studio Pro foi instalado") },
            { id: "in_l", k: "label", x: 480, y: 330, w: 640, h: 34, t: C("Belnovia Studio Pro'yu şimdi aç", "Open Belnovia Studio Pro now", "Belnovia Studio Pro jetzt öffnen", "Abrir Belnovia Studio Pro ahora", "Ouvrir Belnovia Studio Pro maintenant", "Abrir o Belnovia Studio Pro agora") },
            { id: "in_f", k: "btn", x: 640, y: 560, w: 320, h: 58, t: C("Bitir", "Finish", "Fertigstellen", "Finalizar", "Terminer", "Concluir"), cls: "primary" }
          ], target: "in_f",
          cap: C("Bitir'e bas. Program Başlat menüsüne ve masaüstüne eklendi; güncellemeler artık kendiliğinden gelir.", "Press Finish. The program is in the Start menu and on the desktop; updates now arrive by themselves.", "Klicke auf Fertigstellen. Das Programm ist im Startmenü und auf dem Desktop; Updates kommen nun automatisch.", "Pulsa Finalizar. El programa está en el menú Inicio y en el escritorio; las actualizaciones llegan solas.", "Clique sur Terminer. Le programme est dans le menu Démarrer et sur le bureau ; les mises à jour arrivent toutes seules.", "Clique em Concluir. O programa está no menu Iniciar e na área de trabalho; as atualizações chegam sozinhas.") },
        { scene: "start", els: [
            { id: "st_box", k: "dialog", x: 560, y: 110, w: 480, h: 560 },
            { id: "st_logo", k: "logo", x: 763, y: 150, w: 74, h: 74 },
            { id: "st_h", k: "h", x: 600, y: 250, w: 400, h: 50, t: B.createacc },
            { id: "st_l", k: "label", x: 600, y: 330, w: 400, h: 34, t: B.gmail },
            { id: "st_f", k: "field", x: 600, y: 370, w: 400, h: 56, ph: "ornek@gmail.com" },
            { id: "st_b", k: "btn", x: 600, y: 460, w: 400, h: 58, t: B.createacc, cls: "primary" }
          ], target: null, at: 0.4, d: 4.2,
          cap: C("Program açıldı. Hesabını oluştur ve başla.", "The program is open. Create your account and start.", "Das Programm ist offen. Lege dein Konto an und leg los.", "El programa está abierto. Crea tu cuenta y empieza.", "Le programme est ouvert. Crée ton compte et commence.", "O programa está aberto. Cria a tua conta e começa.") }
      ]
    };
    return g;
  }

  // ---------- compile steps (inherit the previous screen when the scene stays) ----------
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function applyAfter(els, after, typed) {
    var map = {}; els.forEach(function (e) { map[e.id] = e; });
    Object.keys(after || {}).forEach(function (id) {
      var e = map[id], a = after[id]; if (!e) return;
      if (a.show) e.hide = false;
      if (a.hide) e.hide = true;
      ["t", "v", "ph", "y", "w", "cls"].forEach(function (k) { if (a[k] !== undefined) e[k] = a[k]; });
      if (a.on === true) e.cls = (e.cls || "").replace(/\bon\b/g, "") + " on";
      if (a.on === false) e.cls = (e.cls || "").replace(/\bon\b/g, "");
      if (a.anim) e.p = a.anim[1];
    });
    if (typed && map[typed.id]) map[typed.id].v = typed.text;
    return els;
  }
  function compile(guide) {
    var steps = [], prev = null, scenes = {};
    guide.steps.forEach(function (s) {
      var st = {};
      for (var k in s) st[k] = s[k];
      if (s.from && scenes[s.from]) { st.els = clone(scenes[s.from]); st.scene = s.from; }
      else if (!s.els) { st.els = clone(prev.endEls); st.scene = prev.scene; }
      else st.els = clone(s.els);
      if (s.add) st.els = st.els.concat(clone(s.add));
      st.endEls = applyAfter(clone(st.els), s.after, s.type);
      var typeT = s.type ? s.type.text.length / 20 : 0;
      st.d = s.d || ((guide.dd || 5.4) + typeT);
      steps.push(st);
      scenes[st.scene] = st.endEls;
      prev = st;
    });
    var t = 2.6, i;
    for (i = 0; i < steps.length; i++) { steps[i].t0 = t; t += steps[i].d; }
    return { steps: steps, intro: 2.6, outro: 2.8, total: t + 2.8 };
  }

  // ---------- DOM ----------
  var SVG_CURSOR = '<svg viewBox="0 0 36 44" width="36" height="44"><path d="M3 2 L3 34 L11 27 L17 41 L23 38 L17 25 L28 25 Z" fill="#fff" stroke="#111" stroke-width="2.4" stroke-linejoin="round"/></svg>';
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function elNode(e, lang) {
    var d = document.createElement("div");
    d.className = "ga-el ga-" + e.k + " " + (e.cls || "") + (e.k === "select" ? " ga-field ga-select" : "");
    d.style.left = e.x + "px"; d.style.top = e.y + "px"; d.style.width = e.w + "px"; d.style.height = e.h + "px";
    if (e.k === "bar") {
      var b = e.bar || {};
      d.innerHTML = '<span class="ga-dots"><i></i><i></i><i></i></span>' + (b.app ? '<span class="ga-apptitle"><b>BELNOVIA</b> STUDIO</span>' : b.url ? '<span class="ga-url">' + esc(b.url) + "</span>" : '<span class="ga-apptitle">' + esc(pick(b.title, lang)) + "</span>");
      if (/light/.test(e.cls || "")) d.classList.add("light");
    } else if (e.k === "file") {
      d.innerHTML = "<i></i><span>" + esc(pick(e.t, lang)) + "</span>";
    } else if (e.k === "wave") {
      var h = ""; for (var i = 0; i < 18; i++) h += '<i style="height:' + (10 + Math.round(30 * Math.abs(Math.sin(i * 1.7)))) + 'px"></i>'; d.innerHTML = h;
    } else if (e.k === "progress") {
      d.innerHTML = "<i></i>";
    } else if (e.k === "logo") {
      d.className = "ga-el ga-logo";
    } else if (e.k === "badge") {
      var ok = /\bok\b/.test(e.cls || "");
      d.textContent = (ok && !/✓/.test(pick(e.t, lang)) ? "✓ " : "") + pick(e.t, lang);
    } else if (e.k === "field" || e.k === "select") {
      d.innerHTML = "<span></span>";
    } else {
      d.textContent = pick(e.t, lang);
    }
    return d;
  }
  function textOf(e, lang) { return pick(e.t, lang); }

  function Player(host, key, opts) {
    this.host = host; this.key = key; this.opts = opts || {};
    this.lang = this.opts.lang || (document.documentElement.lang || "tr").slice(0, 2);
    if (LANGS.indexOf(this.lang) < 0) this.lang = "en";
    this.t = 0; this.playing = false; this.build();
  }
  Player.prototype.build = function () {
    var self = this, G = GUIDES()[this.key];
    if (!G) return;
    this.G = G; this.TL = compile(G);
    var lang = this.lang;
    this.host.innerHTML = "";
    var box = document.createElement("div"); box.className = "ga-box";
    var stage = document.createElement("div"); stage.className = "ga-stage";
    box.appendChild(stage); this.host.appendChild(box);
    this.box = box; this.stage = stage;
    // layers
    this.layers = this.TL.steps.map(function (st) {
      var L = document.createElement("div"); L.className = "ga-layer";
      var nodes = {};
      st.els.forEach(function (e) { var n = elNode(e, lang); nodes[e.id] = n; L.appendChild(n); });
      stage.appendChild(L);
      return { el: L, nodes: nodes };
    });
    this.ring = document.createElement("div"); this.ring.className = "ga-ring"; stage.appendChild(this.ring);
    this.ripple = document.createElement("div"); this.ripple.className = "ga-ripple"; stage.appendChild(this.ripple);
    this.cursor = document.createElement("div"); this.cursor.className = "ga-cursor"; this.cursor.innerHTML = SVG_CURSOR; stage.appendChild(this.cursor);
    this.cap = document.createElement("div"); this.cap.className = "ga-cap"; this.cap.innerHTML = '<div class="ga-step"></div><div class="ga-captext"></div>'; stage.appendChild(this.cap);
    this.cardIn = document.createElement("div"); this.cardIn.className = "ga-card";
    this.cardIn.innerHTML = '<div class="ga-logo"></div><div class="k">' + esc(pick(UI.kicker, lang)) + '</div><div class="t">' + esc(pick(G.title, lang)) + '</div><div class="s">' + esc(pick(G.sub, lang)) + "</div>";
    stage.appendChild(this.cardIn);
    this.cardOut = document.createElement("div"); this.cardOut.className = "ga-card";
    this.cardOut.innerHTML = '<div class="ok">✓</div><div class="t">' + esc(pick(UI.done, lang)) + '</div><div class="s">' + esc(pick(G.end, lang)) + "</div>";
    stage.appendChild(this.cardOut);
    // controls
    if (this.opts.controls !== false) {
      var ctl = document.createElement("div"); ctl.className = "ga-ctl";
      ctl.innerHTML = '<button type="button" data-pp></button><button type="button" data-rp>↺ <span></span></button><div class="ga-track" role="slider" aria-valuemin="0" tabindex="0"><i></i></div><span class="ga-time"></span>';
      this.host.appendChild(ctl);
      this.ctl = ctl;
      ctl.querySelector("[data-pp]").onclick = function () { self.playing ? self.pause() : self.play(); };
      ctl.querySelector("[data-rp]").onclick = function () { self.seek(0); self.play(); };
      var tr = ctl.querySelector(".ga-track");
      tr.onclick = function (ev) { var r = tr.getBoundingClientRect(); self.seek((ev.clientX - r.left) / r.width * self.TL.total); };
      tr.onkeydown = function (ev) { if (ev.key === "ArrowRight") self.seek(self.t + 5); if (ev.key === "ArrowLeft") self.seek(self.t - 5); };
      this.labels();
    }
    this.fit();
    if (window.ResizeObserver) { this.ro = new ResizeObserver(function () { self.fit(); }); this.ro.observe(box); }
    this.render(this.t);
  };
  Player.prototype.labels = function () {
    if (!this.ctl) return;
    var pp = this.ctl.querySelector("[data-pp]");
    pp.textContent = (this.playing ? "❚❚ " : "▶ ") + pick(this.playing ? UI.pause : UI.play, this.lang);
    this.ctl.querySelector("[data-rp] span").textContent = pick(UI.replay, this.lang);
  };
  Player.prototype.fit = function () { var w = this.box.clientWidth || 1600; this.stage.style.transform = "scale(" + (w / 1600) + ")"; };
  Player.prototype.play = function () {
    var self = this; if (this.playing) return;
    if (this.t >= this.TL.total - 0.05) this.t = 0;
    this.playing = true; this.labels();
    var last = performance.now();
    var tick = function (now) {
      if (!self.playing) return;
      self.t = Math.min(self.TL.total, self.t + (now - last) / 1000); last = now;
      self.render(self.t);
      if (self.t >= self.TL.total) { self.playing = false; self.labels(); return; }
      self.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  };
  Player.prototype.pause = function () { this.playing = false; cancelAnimationFrame(this.raf); this.labels(); };
  Player.prototype.seek = function (t) { this.t = Math.max(0, Math.min(this.TL.total, t)); this.render(this.t); };

  function ease(x) { x = Math.max(0, Math.min(1, x)); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  function center(e) { return e ? { x: e.x + Math.min(e.w, 260) / 2 + (e.k === "item" ? 10 : 0), y: e.y + e.h / 2 } : null; }

  Player.prototype.render = function (t) {
    var TL = this.TL, lang = this.lang, steps = TL.steps, self = this;
    // cards
    var inA = t < TL.intro ? 1 - clamp01((t - (TL.intro - 0.5)) / 0.5) : 0;
    var outStart = TL.total - TL.outro;
    var outA = t >= outStart ? clamp01((t - outStart) / 0.5) : 0;
    this.cardIn.style.opacity = inA; this.cardIn.style.transform = "translateY(" + (1 - Math.min(1, t / 0.6)) * 16 + "px)";
    this.cardOut.style.opacity = outA;
    // current step
    var idx = -1;
    for (var i = 0; i < steps.length; i++) if (t >= steps[i].t0) idx = i;
    if (t >= outStart) idx = steps.length - 1;
    var showSteps = t >= TL.intro - 0.5 && t < outStart + 0.5;
    var stageA = showSteps ? Math.min(1 - outA, t < TL.intro ? 1 - inA : 1) : 0;
    this.layers.forEach(function (L) { L.el.style.opacity = 0; });
    var capEl = this.cap;
    if (idx < 0) { // intro: show the first screen behind the card
      this.layers[0].el.style.opacity = stageA; this.applyState(0, 0);
      capEl.style.opacity = 0; this.cursor.style.opacity = 0; this.ring.style.opacity = 0; this.ripple.style.opacity = 0;
      return;
    }
    var st = steps[idx], u = Math.min(t - st.t0, st.d);
    var prev = idx > 0 ? steps[idx - 1] : null;
    var sceneChange = prev && prev.scene !== st.scene;
    var fade = sceneChange ? clamp01(u / 0.45) : 1;
    if (sceneChange && fade < 1) { this.layers[idx - 1].el.style.opacity = (1 - fade) * stageA; this.applyState(idx - 1, prev.d); }
    this.layers[idx].el.style.opacity = fade * stageA;
    this.applyState(idx, u);
    // caption
    capEl.style.opacity = stageA;
    capEl.firstChild.textContent = (idx + 1) + "/" + steps.length;
    capEl.lastChild.textContent = pick(st.cap, lang);
    var capIn = clamp01(u / 0.35); capEl.lastChild.style.opacity = capIn; capEl.lastChild.style.transform = "translateY(" + (1 - capIn) * 10 + "px)";
    // cursor path
    var tgt = st.target ? st.els.filter(function (e) { return e.id === st.target; })[0] : null;
    var from = null;
    for (var j = idx - 1; j >= 0 && !from; j--) if (steps[j].target) from = center(steps[j].els.filter(function (e) { return e.id === steps[j].target; })[0]);
    if (!from) from = { x: 1250, y: 640 };
    var to = tgt ? center(tgt) : from;
    var m = ease((u - 0.35) / 1.1);
    var cx = from.x + (to.x - from.x) * m, cy = from.y + (to.y - from.y) * m - Math.sin(Math.PI * m) * 40;
    this.cursor.style.opacity = stageA * (st.target || idx > 0 ? 1 : 0);
    var press = st.target && u > 1.5 && u < 1.68 ? 0.86 : 1;
    this.cursor.style.transform = "translate(" + cx + "px," + cy + "px) scale(" + press + ")";
    this.cursor.style.left = "0px"; this.cursor.style.top = "0px";
    // ring and ripple
    if (tgt) {
      var rA = clamp01((u - 1.1) / 0.3) * (u < st.d - 0.25 ? 1 : clamp01((st.d - u) / 0.25));
      var pulse = 1 + 0.03 * Math.sin((u - 1.1) * 5);
      this.ring.style.opacity = rA * stageA * 0.95;
      this.ring.style.left = (tgt.x - 8) + "px"; this.ring.style.top = (tgt.y - 8) + "px";
      this.ring.style.width = (tgt.w + 16) + "px"; this.ring.style.height = (tgt.h + 16) + "px";
      this.ring.style.transform = "scale(" + pulse + ")";
      var rp = clamp01((u - 1.55) / 0.5);
      this.ripple.style.opacity = u > 1.55 && rp < 1 ? (1 - rp) * stageA : 0;
      this.ripple.style.left = to.x + "px"; this.ripple.style.top = to.y + "px";
      this.ripple.style.transform = "scale(" + (0.4 + rp * 1.1) + ")";
    } else { this.ring.style.opacity = 0; this.ripple.style.opacity = 0; }
  };

  // set every element of a step's layer to its state at time u in that step
  Player.prototype.applyState = function (idx, u) {
    var st = this.TL.steps[idx], L = this.layers[idx], lang = this.lang;
    var tc = st.target ? 1.75 : (st.at || 0.4);
    var done = u >= tc;
    var after = st.after || {};
    st.els.forEach(function (e) {
      var n = L.nodes[e.id]; if (!n) return;
      var a = after[e.id] || {};
      var hidden = e.hide, txt = pick(e.t, lang), v = e.v, ph = e.ph, cls = e.cls || "", y = e.y, w = e.w, p = e.p || 0;
      if (done) {
        if (a.show) hidden = false;
        if (a.hide) hidden = true;
        if (a.t !== undefined) txt = pick(a.t, lang);
        if (a.v !== undefined) v = a.v;
        if (a.ph !== undefined) ph = a.ph;
        if (a.cls !== undefined) cls = a.cls;
        if (a.on === true) cls = cls.replace(/\bon\b/g, "") + " on";
        if (a.on === false) cls = cls.replace(/\bon\b/g, "");
        if (a.w !== undefined) w = a.w;
        if (a.anim) p = a.anim[0] + (a.anim[1] - a.anim[0]) * clamp01((u - tc) / a.anim[2]);
      }
      if (a.y !== undefined && done) { var k = ease((u - tc) / 0.4); y = e.y + (a.y - e.y) * k; }
      // appear animation
      var appear = 1;
      if (done && a.show && e.hide) appear = clamp01((u - tc) / 0.3);
      n.style.opacity = hidden ? 0 : appear;
      n.style.top = y + "px"; n.style.width = w + "px";
      var base = "ga-el ga-" + e.k + " " + cls + (e.k === "select" ? " ga-field ga-select" : "");
      if (n.className !== base && e.k !== "logo") n.className = base;
      if (e.k === "field" || e.k === "select") {
        var shown = v || "";
        if (st.type && st.type.id === e.id) {
          var tt = clamp01((u - 1.8) * 20 / st.type.text.length);
          shown = u < 1.8 ? (e.v || "") : st.type.text.slice(0, Math.round(tt * st.type.text.length));
        }
        var caret = st.type && st.type.id === e.id && u > 1.7 && u < 1.8 + st.type.text.length / 20 + 0.4 && Math.floor(u * 3) % 2 === 0;
        var html = shown ? esc(pick(shown, lang)) : '<span class="ph">' + esc(pick(ph || "", lang)) + "</span>";
        if (caret) html += '<i class="caret"></i>';
        if (n.firstChild.innerHTML !== html) n.firstChild.innerHTML = html;
      } else if (e.k === "progress") {
        n.firstChild.style.width = (p * 100) + "%";
      } else if (e.k === "badge") {
        var ok = /\bok\b/.test(cls);
        var bt = (ok && !/✓/.test(txt) ? "✓ " : "") + txt;
        if (n.textContent !== bt) n.textContent = bt;
      } else if (e.k === "wave") {
        var bars = n.children;
        for (var i = 0; i < bars.length; i++) bars[i].style.height = (8 + Math.round(30 * Math.abs(Math.sin(i * 1.7 + u * 6)))) + "px";
      } else if (e.k !== "bar" && e.k !== "file" && e.k !== "logo" && e.k !== "progress") {
        if (n.textContent !== txt) n.textContent = txt;
      }
    });
  };

  // ---------- page integration ----------
  var players = [];
  function reduced() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function staticList(host, key, lang) {
    var G = GUIDES()[key]; if (!G) return;
    host.innerHTML = '<ol class="ga-static">' + G.steps.map(function (s) { return "<li>" + esc(pick(s.cap, lang)) + "</li>"; }).join("") + "</ol>";
  }
  function mountAll() {
    var lang = (document.documentElement.lang || "tr").slice(0, 2);
    players.forEach(function (p) { p.pause(); if (p.ro) p.ro.disconnect(); });
    players = [];
    document.querySelectorAll(".guide-anim[data-guide]").forEach(function (host) {
      var key = host.getAttribute("data-guide");
      if (reduced()) { staticList(host, key, lang); return; }
      var p = new Player(host, key, { lang: lang });
      players.push(p);
      if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (ents) {
          ents.forEach(function (en) {
            if (en.intersectionRatio >= 0.35) { if (!p.started) { p.started = true; p.play(); } }
            else if (p.playing) { p.pause(); p.autoPaused = true; }
          });
        }, { threshold: [0, 0.35] });
        io.observe(host);
      }
    });
  }
  window.BelnoviaGuides = { Player: Player, mountAll: mountAll, keys: ["claude", "lumean", "glabs", "kokoro", "youtube", "windows"], duration: function (key) { return compile(GUIDES()[key]).total; } };
  if (!window.BELNOVIA_GUIDES_MANUAL) {
    var go = function () { mountAll(); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
    // the site switches language without reloading: rebuild in the new language
    if (window.MutationObserver) {
      var lastLang = document.documentElement.lang;
      new MutationObserver(function () { if (document.documentElement.lang !== lastLang) { lastLang = document.documentElement.lang; mountAll(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    }
  }
})();
