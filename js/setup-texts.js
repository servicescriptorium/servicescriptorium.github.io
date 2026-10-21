/* Setup guide texts (kurulum.html) in six languages. **bold** and [text](https://…) are the only markup. */
window.SETUP = {
 "tr": {
  "title": "Kurulum rehberi",
  "lead": "Belnovia Studio Pro'yu ilk kez kuruyorsan bu sırayla git. Yazı, ses ve görsel için anahtar gerekmez; programın ilk açılışındaki kurulum adımları da seni aynı sırayla götürür.",
  "toc": "Bu sayfada",
  "sections": [
   {
    "id": "windows",
    "h": "Programı kurmak",
    "intro": "Kurulum dosyasını yalnızca bu siteden indir. Yönetici izni gerekmez.",
    "steps": [
     "İndirdiğin **BelnoviaStudioPro-Setup.exe** dosyasına çift tıkla.",
     "**Windows bilgisayarınızı korudu** penceresi çıkarsa **Ek bilgi**'ye tıkla, sonra **Yine de çalıştır**'a bas.",
     "Kurulum penceresinde **Devam** → kullanım koşullarını kabul et → **Kur**'a bas.",
     "**Belnovia Studio Pro'yu şimdi aç** işaretliyken **Bitir**'e bas. Program bundan sonra Başlat menüsünde ve masaüstünde.",
     "Program açılınca hesabını aç: **Google ile devam et**'e bas ya da e-posta adresinle kaydol.",
     "Tarayıcı indirirken uyarı verirse **Koru** ya da **Yine de sakla**'yı seç."
    ],
    "note": "Bu uyarı, programın henüz yeterince çok kişi tarafından indirilmemiş olmasından çıkar; programa zarar veren bir şey bulunduğu anlamına gelmez. Güncellemeler bundan sonra program içinden kendiliğinden gelir; kurulumu bir daha çalıştırman gerekmez."
   },
   {
    "h": "✦ Belnovia AI (hikâye ve başlıklar)",
    "intro": "Hikâyeyi, başlıkları, açıklamaları ve görsel promptlarını programın kendi yapay zekâsı yazar. Ücretsizdir, anahtar gerekmez.",
    "steps": [
     "Programı ilk açtığında Belnovia AI bilgisayarına kendiliğinden kurulur; köşede **✦ Belnovia hazırlanıyor… %** göstergesi görünür.",
     "Beklemene gerek yok: kurulum sürerken işleri, hakkın ya da kredin varsa **✦ Belnovia AI Plus** yapar. Creator ve Studio Pro'da (ve denemede) her ay ücretsiz Plus hakkın vardır.",
     "İlk açılıştaki **Hikâyeyi kim yazacak?** adımında **✦ Belnovia AI**'nin seçili olduğunu gör ve **Devam**'a bas."
    ],
    "note": "Daha üstün performans istersen **Ayarlar → API anahtarları**'na Claude, ChatGPT ya da Grok anahtarını yapıştırıp kanalın **Yazım** sekmesinde seçebilirsin (Studio Pro) (isteğe bağlı, ücretli). Anahtarı [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) ya da [console.x.ai](https://console.x.ai) üzerinden alırsın; programdaki **Resimli rehber** her adımı gösterir.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (seslendirme)",
    "intro": "Videoları seslendiren ses stüdyosu programın içindedir. Hazır profesyonel sesler bilgisayarında ücretsiz çalışır.",
    "steps": [
     "Sol menüde **Ses Stüdyosu**'nu aç; ses motoru ilk açılışta kendiliğinden hazırlanır.",
     "**Kanallar → kanalın → Ses** sekmesinde **Hazır sesler (Kokoro)**'yu seç, sesleri dinleyip birini seç ve kaydet.",
     "Kendi sesini kullanmak için (Studio Pro): Ses Stüdyosu'nda **Signature** bölümünde kısa bir kayıt yap; **Belnovia Signature hazırlanıyor** bittiğinde sesin kanal ses listesinde görünür."
    ],
    "note": "İstersen Lumean ya da ElevenLabs anahtarını da ekleyebilirsin (ücretli, isteğe bağlı).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (görseller ve animasyon)",
    "intro": "Sahneler, kapaklar ve animasyonlar kendi Google hesabınla çizilir. Ayrı program ya da anahtar gerekmez.",
    "steps": [
     "Sol menüde **Görsel Stüdyo**'yu aç.",
     "**Google hesapları** bölümünde **Hesap ekle**'ye bas ve Google hesabınla giriş yap.",
     "İlk açılıştaki **Görselleri kim çizsin?** adımında **BELNOVIA LABS**'i seç ve **Deneme görseli çiz**'e bas; 30–90 saniyede bir görsel gelirse hazırsın."
    ],
    "note": "G-Labs kullanıyorsan aynı adımda **G-Labs programı**'nı seçip Webhook anahtarını yapıştırabilirsin.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "YouTube bağlantısı",
    "intro": "Program videoları senin kanalına senin izninle yükler. Bunun için bir kere Google Cloud'da ücretsiz bir proje açarsın; yaklaşık 10 dakika sürer.",
    "steps": [
     "[console.cloud.google.com](https://console.cloud.google.com) adresine gir ve yeni bir proje oluştur (ör. **Belnovia YouTube**).",
     "**APIs & Services → Library**'de **YouTube Data API v3**'ü bul ve **Enable**'a bas.",
     "**Google Auth Platform → Overview → Get started**: uygulama adını ve e-postanı yaz, **Audience** olarak **External**'ı seç, iletişim e-postanı yaz, koşulları onayla ve **Create**'e bas.",
     "**Branding** sayfasında **Application home page**, **privacy policy** ve **terms of service** kutularına kendi sitenin ya da kanalının adreslerini yaz, **Authorized domains**'e o alan adını ekle ve **Save**'e bas. Logo yükleme; logo eklenirse Google uzun bir inceleme ister.",
     "**Audience → Publish app → Confirm**. Durum **In production** olmalı. Bu adımı atlarsan bağlantı 7 günde bir kopar.",
     "**Clients → Create client → Desktop app → Create**. Çıkan **Client ID** ve **Client secret**'ı kopyala; secret pencere kapanınca bir daha görünmez (**Download JSON** ile yedekleyebilirsin).",
     "Belnovia Studio Pro → **Ayarlar → YouTube**'da Client ID ve Client Secret'ı yapıştır ve kaydet.",
     "**Kanallar → kanalın → Yayın** sekmesinde **Google ile bağla**'ya bas ve kanalın Google hesabını seç. \"Google bu uygulamayı doğrulamadı\" uyarısında **Gelişmiş → (uygulama adı) sayfasına git**'i seç; uygulama senin kendi uygulaman olduğu için güvenlidir. İzinleri onayla."
    ],
    "note": "Kendi siten yoksa ve Publish app düğmesi kapalı kalırsa bize yaz, birlikte çözelim: servicescriptorium@gmail.com"
   }
  ]
 },
 "en": {
  "title": "Setup guide",
  "lead": "If you are installing Belnovia Studio Pro for the first time, follow this order. Writing, voice and images need no keys; the setup steps when the program first opens take you through the same order.",
  "toc": "On this page",
  "sections": [
   {
    "id": "windows",
    "h": "Installing the program",
    "intro": "Download the installer only from this site. No administrator rights are needed.",
    "steps": [
     "Double-click the **BelnoviaStudioPro-Setup.exe** you downloaded.",
     "If a **Windows protected your PC** window appears, click **More info**, then **Run anyway**.",
     "In the setup window press **Continue** → accept the terms of use → **Install**.",
     "With **Open Belnovia Studio Pro now** ticked, press **Finish**. From now on the program is in the Start menu and on the desktop.",
     "When the program opens, create your account: press **Continue with Google** or sign up with your e-mail address.",
     "If your browser warns while downloading, choose **Keep** or **Keep anyway**."
    ],
    "note": "This warning appears because not many people have downloaded the program yet; it does not mean anything harmful was found. From now on updates arrive by themselves inside the program; you don't need to run the installer again."
   },
   {
    "h": "✦ Belnovia AI (stories and titles)",
    "intro": "The program's own AI writes the story, titles, descriptions and image prompts. It is free and needs no key.",
    "steps": [
     "When you first open the program, Belnovia AI installs itself on your computer; a **✦ Belnovia is getting ready… %** indicator shows in the corner.",
     "No need to wait: while it installs, **✦ Belnovia AI Plus** does the work if you have allowance or credit. Creator and Studio Pro (and the trial) get a free Plus allowance every month.",
     "In the first-run step **Who will write the story?**, check that **✦ Belnovia AI** is selected and press **Continue**."
    ],
    "note": "For even better performance you can add a Claude, ChatGPT or Grok key under **Settings → API keys** and pick it in the channel's **Writing** tab (Studio Pro; optional, paid). Get the key at [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) or [console.x.ai](https://console.x.ai); the **Illustrated guide** in the program shows every step.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (narration)",
    "intro": "The voice studio that narrates your videos is built in. Ready-made professional voices run free on your computer.",
    "steps": [
     "Open **Voice Studio** in the left menu; the voice engine gets ready on its own the first time.",
     "In **Channels → your channel → Voice**, choose **Ready-made voices (Kokoro)**, listen to the voices, pick one and save.",
     "To use your own voice (Studio Pro): make a short recording in the **Signature** section of the Voice Studio; when **Belnovia Signature is getting ready** finishes, your voice appears in the channel's voice list."
    ],
    "note": "You can also add a Lumean or ElevenLabs key (paid, optional).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (images and animation)",
    "intro": "Scenes, thumbnails and animations are drawn with your own Google account. No extra app or key needed.",
    "steps": [
     "Open **Image Studio** in the left menu.",
     "Under **Google accounts**, press **Add account** and sign in with your Google account.",
     "In the first-run step **Who should draw the images?**, choose **BELNOVIA LABS** and press **Draw a test image**; if an image arrives in 30–90 seconds you are ready."
    ],
    "note": "If you use G-Labs, choose the **G-Labs app** in the same step and paste its Webhook key.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "YouTube connection",
    "intro": "The app uploads videos to your channel with your permission. For that you create a free Google Cloud project once; it takes about 10 minutes.",
    "steps": [
     "Go to [console.cloud.google.com](https://console.cloud.google.com) and create a new project (e.g. **Belnovia YouTube**).",
     "In **APIs & Services → Library** find **YouTube Data API v3** and click **Enable**.",
     "**Google Auth Platform → Overview → Get started**: enter an app name and your e-mail, choose **External** as **Audience**, enter your contact e-mail, accept the terms and click **Create**.",
     "On the **Branding** page enter your own site's or channel's addresses for **Application home page**, **privacy policy** and **terms of service**, add that domain under **Authorized domains** and click **Save**. Don't upload a logo — with a logo Google asks for a long review.",
     "**Audience → Publish app → Confirm**. The status must be **In production**. Skip this and the connection drops every 7 days.",
     "**Clients → Create client → Desktop app → Create**. Copy the **Client ID** and **Client secret**; the secret is not shown again after the window closes (you can keep a copy with **Download JSON**).",
     "In Belnovia Studio Pro paste the Client ID and Client Secret into **Settings → YouTube** and save.",
     "In **Channels → your channel → Publishing** click **Connect with Google** and choose the channel's Google account. At \"Google hasn't verified this app\" choose **Advanced → Go to (app name)** — it is your own app, so it is safe. Accept the permissions."
    ],
    "note": "If you have no website and Publish app stays disabled, write to us and we'll sort it out together: servicescriptorium@gmail.com"
   }
  ]
 },
 "de": {
  "title": "Einrichtungsanleitung",
  "lead": "Wenn du Belnovia Studio Pro zum ersten Mal installierst, geh in dieser Reihenfolge vor. Für Text, Stimme und Bilder brauchst du keine Schlüssel; die Einrichtungsschritte beim ersten Start des Programms führen dich in derselben Reihenfolge.",
  "toc": "Auf dieser Seite",
  "sections": [
   {
    "id": "windows",
    "h": "Das Programm installieren",
    "intro": "Lade das Installationsprogramm nur von dieser Seite. Administratorrechte sind nicht nötig.",
    "steps": [
     "Doppelklicke auf die heruntergeladene **BelnoviaStudioPro-Setup.exe**.",
     "Erscheint **Der Computer wurde durch Windows geschützt**, klicke auf **Weitere Informationen** und dann auf **Trotzdem ausführen**.",
     "Im Installationsfenster: **Weiter** → Nutzungsbedingungen akzeptieren → **Installieren**.",
     "Mit Haken bei **Belnovia Studio Pro jetzt öffnen** auf **Fertigstellen** klicken. Das Programm ist ab jetzt im Startmenü und auf dem Desktop.",
     "Wenn das Programm startet, erstelle dein Konto: Klick auf **Weiter mit Google** oder registrier dich mit deiner E-Mail-Adresse.",
     "Warnt der Browser beim Herunterladen, wähle **Beibehalten**."
    ],
    "note": "Die Warnung erscheint, weil das Programm noch nicht von vielen Menschen heruntergeladen wurde; sie bedeutet nicht, dass etwas Schädliches gefunden wurde. Updates kommen ab jetzt automatisch im Programm; das Installationsprogramm musst du nicht erneut ausführen."
   },
   {
    "h": "✦ Belnovia AI (Geschichten und Titel)",
    "intro": "Die programmeigene KI schreibt Geschichte, Titel, Beschreibungen und Bild-Prompts. Sie ist kostenlos und braucht keinen Schlüssel.",
    "steps": [
     "Beim ersten Start installiert sich Belnovia AI von selbst auf deinem Computer; in der Ecke erscheint die Anzeige **✦ Belnovia wird vorbereitet… %**.",
     "Du musst nicht warten: Während der Installation übernimmt **✦ Belnovia AI Plus** die Arbeit, wenn du Kontingent oder Guthaben hast. Creator und Studio Pro (und der Test) bekommen jeden Monat ein kostenloses Plus-Kontingent.",
     "Prüfe im Startschritt **Wer schreibt die Geschichte?**, dass **✦ Belnovia AI** ausgewählt ist, und drück auf **Weiter**."
    ],
    "note": "Für noch bessere Leistung kannst du unter **Einstellungen → API-Schlüssel** einen Schlüssel für Claude, ChatGPT oder Grok hinzufügen und ihn im Tab **Schreiben** des Kanals auswählen (Studio Pro; optional, kostenpflichtig). Den Schlüssel bekommst du bei [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) oder [console.x.ai](https://console.x.ai); die **Bebilderte Anleitung** im Programm zeigt jeden Schritt.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (Vertonung)",
    "intro": "Das Sprachstudio, das deine Videos vertont, ist eingebaut. Fertige professionelle Stimmen laufen kostenlos auf deinem Computer.",
    "steps": [
     "Öffne **Sprachstudio** im linken Menü; die Sprach-Engine richtet sich beim ersten Mal von selbst ein.",
     "Wähle unter **Kanäle → dein Kanal → Stimme** die Option **Fertige Stimmen (Kokoro)**, hör dir die Stimmen an, wähl eine aus und speichere.",
     "Für deine eigene Stimme (Studio Pro): Mach im Bereich **Signature** des Sprachstudios eine kurze Aufnahme; sobald **Belnovia Signature wird vorbereitet** fertig ist, erscheint deine Stimme in der Stimmenliste des Kanals."
    ],
    "note": "Du kannst auch einen Schlüssel für Lumean oder ElevenLabs hinzufügen (kostenpflichtig, optional).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (Bilder und Animation)",
    "intro": "Szenen, Thumbnails und Animationen werden mit deinem eigenen Google-Konto gezeichnet. Keine Zusatz-App, kein Schlüssel nötig.",
    "steps": [
     "Öffne **Bildstudio** im linken Menü.",
     "Drück unter **Google-Konten** auf **Konto hinzufügen** und melde dich mit deinem Google-Konto an.",
     "Wähle im Startschritt **Wer soll die Bilder zeichnen?** die Option **BELNOVIA LABS** und drück auf **Testbild zeichnen**; kommt nach 30–90 Sekunden ein Bild, bist du startklar."
    ],
    "note": "Wenn du G-Labs nutzt, wähl im selben Schritt **G-Labs-Programm** und füge seinen Webhook-Schlüssel ein.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "YouTube-Verbindung",
    "intro": "Die App lädt Videos mit deiner Erlaubnis auf deinen Kanal hoch. Dafür legst du einmal ein kostenloses Google-Cloud-Projekt an; das dauert etwa 10 Minuten.",
    "steps": [
     "Öffne [console.cloud.google.com](https://console.cloud.google.com) und erstelle ein neues Projekt (z. B. **Belnovia YouTube**).",
     "Suche unter **APIs & Services → Library** die **YouTube Data API v3** und klick auf **Enable**.",
     "**Google Auth Platform → Overview → Get started**: App-Namen und E-Mail eingeben, bei **Audience** **External** wählen, Kontakt-E-Mail eingeben, Bedingungen akzeptieren und **Create** klicken.",
     "Trag auf der Seite **Branding** bei **Application home page**, **privacy policy** und **terms of service** die Adressen deiner Website oder deines Kanals ein, füge die Domain unter **Authorized domains** hinzu und klick auf **Save**. Lade kein Logo hoch – mit Logo verlangt Google eine lange Prüfung.",
     "**Audience → Publish app → Confirm**. Der Status muss **In production** sein. Ohne diesen Schritt bricht die Verbindung alle 7 Tage ab.",
     "**Clients → Create client → Desktop app → Create**. Kopiere **Client ID** und **Client secret**; das Secret wird nach dem Schließen nicht mehr angezeigt (mit **Download JSON** kannst du eine Kopie behalten).",
     "Füge Client ID und Client Secret in Belnovia Studio Pro unter **Einstellungen → YouTube** ein und speichere.",
     "Klick unter **Kanäle → dein Kanal → Veröffentlichung** auf **Mit Google verbinden** und wähle das Google-Konto des Kanals. Bei „Google hat diese App nicht überprüft“ wähle **Erweitert → Weiter zu (App-Name)** – es ist deine eigene App und daher sicher. Bestätige die Berechtigungen."
    ],
    "note": "Hast du keine Website und bleibt Publish app deaktiviert, schreib uns – wir lösen es gemeinsam: servicescriptorium@gmail.com"
   }
  ]
 },
 "es": {
  "title": "Guía de configuración",
  "lead": "Si instalas Belnovia Studio Pro por primera vez, sigue este orden. Para texto, voz e imágenes no hacen falta claves; los pasos de configuración al abrir el programa por primera vez te llevan por el mismo orden.",
  "toc": "En esta página",
  "sections": [
   {
    "id": "windows",
    "h": "Instalar el programa",
    "intro": "Descarga el instalador solo desde este sitio. No hacen falta permisos de administrador.",
    "steps": [
     "Haz doble clic en el **BelnoviaStudioPro-Setup.exe** que descargaste.",
     "Si aparece **Windows protegió su PC**, haz clic en **Más información** y luego en **Ejecutar de todas formas**.",
     "En la ventana de instalación pulsa **Continuar** → acepta las condiciones de uso → **Instalar**.",
     "Con **Abrir Belnovia Studio Pro ahora** marcado, pulsa **Finalizar**. A partir de ahora el programa está en el menú Inicio y en el escritorio.",
     "Cuando se abra el programa, crea tu cuenta: pulsa **Continuar con Google** o regístrate con tu dirección de e-mail.",
     "Si el navegador avisa al descargar, elige **Conservar**."
    ],
    "note": "Este aviso aparece porque todavía pocas personas han descargado el programa; no significa que se haya encontrado algo dañino. A partir de ahora las actualizaciones llegan solas dentro del programa; no hace falta volver a ejecutar el instalador."
   },
   {
    "h": "✦ Belnovia AI (historias y títulos)",
    "intro": "La IA propia del programa escribe la historia, los títulos, las descripciones y los prompts de imagen. Es gratis y no necesita clave.",
    "steps": [
     "Al abrir el programa por primera vez, Belnovia AI se instala sola en tu ordenador; en la esquina aparece el indicador **✦ Preparando Belnovia… %**.",
     "No hace falta esperar: mientras se instala, **✦ Belnovia AI Plus** hace el trabajo si tienes saldo o crédito. Creator y Studio Pro (y la prueba) reciben cada mes un saldo Plus gratuito.",
     "En el paso inicial **¿Quién escribirá la historia?**, comprueba que **✦ Belnovia AI** está seleccionado y pulsa **Continuar**."
    ],
    "note": "Para un rendimiento aún mejor, puedes añadir una clave de Claude, ChatGPT o Grok en **Ajustes → Claves de API** y elegirla en la pestaña **Escritura** del canal (Studio Pro; opcional, de pago). Consigue la clave en [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) o [console.x.ai](https://console.x.ai); la **Guía ilustrada** del programa muestra cada paso.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (narración)",
    "intro": "El estudio de voz que narra tus vídeos viene integrado. Las voces profesionales listas funcionan gratis en tu ordenador.",
    "steps": [
     "Abre **Estudio de voz** en el menú de la izquierda; el motor de voz se prepara solo la primera vez.",
     "En **Canales → tu canal → Voz**, elige **Voces listas (Kokoro)**, escucha las voces, elige una y guarda.",
     "Para usar tu propia voz (Studio Pro): haz una grabación corta en la sección **Signature** del Estudio de voz; cuando termine **Preparando Belnovia Signature**, tu voz aparece en la lista de voces del canal."
    ],
    "note": "También puedes añadir una clave de Lumean o ElevenLabs (de pago, opcional).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (imágenes y animación)",
    "intro": "Escenas, miniaturas y animaciones se dibujan con tu propia cuenta de Google. Sin apps extra ni claves.",
    "steps": [
     "Abre **Estudio de imagen** en el menú de la izquierda.",
     "En **Cuentas de Google**, pulsa **Añadir cuenta** e inicia sesión con tu cuenta de Google.",
     "En el paso inicial **¿Quién debe dibujar las imágenes?**, elige **BELNOVIA LABS** y pulsa **Dibujar imagen de prueba**; si llega una imagen en 30–90 segundos, ya está listo."
    ],
    "note": "Si usas G-Labs, elige **Programa G-Labs** en el mismo paso y pega su clave de Webhook.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "Conexión con YouTube",
    "intro": "La app sube los vídeos a tu canal con tu permiso. Para ello creas una vez un proyecto gratuito en Google Cloud; tarda unos 10 minutos.",
    "steps": [
     "Entra en [console.cloud.google.com](https://console.cloud.google.com) y crea un proyecto nuevo (p. ej. **Belnovia YouTube**).",
     "En **APIs & Services → Library** busca **YouTube Data API v3** y pulsa **Enable**.",
     "**Google Auth Platform → Overview → Get started**: escribe un nombre de app y tu e-mail, elige **External** en **Audience**, escribe tu e-mail de contacto, acepta las condiciones y pulsa **Create**.",
     "En la página **Branding** escribe las direcciones de tu web o canal en **Application home page**, **privacy policy** y **terms of service**, añade ese dominio en **Authorized domains** y pulsa **Save**. No subas un logo: con logo Google pide una revisión larga.",
     "**Audience → Publish app → Confirm**. El estado debe ser **In production**. Sin este paso la conexión se corta cada 7 días.",
     "**Clients → Create client → Desktop app → Create**. Copia el **Client ID** y el **Client secret**; el secreto no vuelve a mostrarse al cerrar la ventana (puedes guardar una copia con **Download JSON**).",
     "En Belnovia Studio Pro pega el Client ID y el Client Secret en **Ajustes → YouTube** y guarda.",
     "En **Canales → tu canal → Publicación** pulsa **Conectar con Google** y elige la cuenta de Google del canal. En \"Google no ha verificado esta aplicación\" elige **Avanzado → Ir a (nombre de la app)**: es tu propia app, así que es seguro. Acepta los permisos."
    ],
    "note": "Si no tienes web y Publish app sigue desactivado, escríbenos y lo resolvemos juntos: servicescriptorium@gmail.com"
   }
  ]
 },
 "fr": {
  "title": "Guide d'installation",
  "lead": "Si tu installes Belnovia Studio Pro pour la première fois, suis cet ordre. Le texte, la voix et les images ne demandent aucune clé ; les étapes de configuration au premier lancement du programme te guident dans le même ordre.",
  "toc": "Sur cette page",
  "sections": [
   {
    "id": "windows",
    "h": "Installer le programme",
    "intro": "Télécharge l'installateur uniquement depuis ce site. Aucun droit administrateur n'est nécessaire.",
    "steps": [
     "Double-clique sur le **BelnoviaStudioPro-Setup.exe** téléchargé.",
     "Si la fenêtre **Windows a protégé votre ordinateur** apparaît, clique sur **Informations complémentaires**, puis sur **Exécuter quand même**.",
     "Dans la fenêtre d'installation : **Continuer** → accepte les conditions d'utilisation → **Installer**.",
     "Avec **Ouvrir Belnovia Studio Pro maintenant** coché, clique sur **Terminer**. Le programme est désormais dans le menu Démarrer et sur le bureau.",
     "Quand le programme s'ouvre, crée ton compte : clique sur **Continuer avec Google** ou inscris-toi avec ton adresse e-mail.",
     "Si le navigateur affiche un avertissement au téléchargement, choisis **Conserver**."
    ],
    "note": "Cet avertissement apparaît parce que peu de personnes ont encore téléchargé le programme ; cela ne veut pas dire que quelque chose de dangereux a été trouvé. Désormais, les mises à jour arrivent toutes seules dans le programme ; inutile de relancer l'installateur."
   },
   {
    "h": "✦ Belnovia AI (histoires et titres)",
    "intro": "L'IA du programme écrit l'histoire, les titres, les descriptions et les prompts d'images. Elle est gratuite et ne demande aucune clé.",
    "steps": [
     "Au premier lancement du programme, Belnovia AI s'installe toute seule sur ton ordinateur ; l'indicateur **✦ Préparation de Belnovia… %** s'affiche dans le coin.",
     "Pas besoin d'attendre : pendant l'installation, **✦ Belnovia AI Plus** fait le travail s'il te reste du quota ou du crédit. Creator et Studio Pro (et l'essai) reçoivent un crédit Plus gratuit chaque mois.",
     "À l'étape de démarrage **Qui va écrire l'histoire ?**, vérifie que **✦ Belnovia AI** est sélectionné et appuie sur **Continuer**."
    ],
    "note": "Pour des performances encore meilleures, tu peux ajouter une clé Claude, ChatGPT ou Grok dans **Paramètres → Clés API** et la choisir dans l'onglet **Écriture** de la chaîne (Studio Pro ; optionnel, payant). Obtiens la clé sur [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) ou [console.x.ai](https://console.x.ai) ; le **Guide illustré** du programme montre chaque étape.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (narration)",
    "intro": "Le studio vocal qui fait la narration de tes vidéos est intégré. Les voix professionnelles prêtes à l'emploi tournent gratuitement sur ton ordinateur.",
    "steps": [
     "Ouvre **Studio vocal** dans le menu de gauche ; le moteur vocal se prépare tout seul la première fois.",
     "Dans **Chaînes → ta chaîne → Voix**, choisis **Voix prêtes à l'emploi (Kokoro)**, écoute les voix, choisis-en une et enregistre.",
     "Pour utiliser ta propre voix (Studio Pro) : fais un court enregistrement dans la section **Signature** du Studio vocal ; quand **Préparation de Belnovia Signature** est terminé, ta voix apparaît dans la liste des voix de la chaîne."
    ],
    "note": "Tu peux aussi ajouter une clé Lumean ou ElevenLabs (payant, optionnel).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (images et animation)",
    "intro": "Scènes, miniatures et animations sont dessinées avec ton propre compte Google. Pas d'appli en plus ni de clé.",
    "steps": [
     "Ouvre **Studio d'images** dans le menu de gauche.",
     "Sous **Comptes Google**, appuie sur **Ajouter un compte** et connecte-toi avec ton compte Google.",
     "À l'étape de démarrage **Qui doit dessiner les images ?**, choisis **BELNOVIA LABS** et appuie sur **Dessiner une image test** ; si une image arrive en 30 à 90 secondes, tout est prêt."
    ],
    "note": "Si tu utilises G-Labs, choisis **Programme G-Labs** à la même étape et colle sa clé Webhook.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "Connexion YouTube",
    "intro": "L'app met les vidéos en ligne sur ta chaîne avec ton autorisation. Pour cela, tu crées une fois un projet Google Cloud gratuit ; cela prend environ 10 minutes.",
    "steps": [
     "Va sur [console.cloud.google.com](https://console.cloud.google.com) et crée un nouveau projet (par ex. **Belnovia YouTube**).",
     "Dans **APIs & Services → Library**, cherche **YouTube Data API v3** et clique sur **Enable**.",
     "**Google Auth Platform → Overview → Get started** : saisis un nom d'app et ton e-mail, choisis **External** pour **Audience**, saisis ton e-mail de contact, accepte les conditions et clique sur **Create**.",
     "Sur la page **Branding**, indique les adresses de ton site ou de ta chaîne pour **Application home page**, **privacy policy** et **terms of service**, ajoute ce domaine dans **Authorized domains** et clique sur **Save**. N'ajoute pas de logo : avec un logo, Google demande un long examen.",
     "**Audience → Publish app → Confirm**. Le statut doit être **In production**. Sans cette étape, la connexion se coupe tous les 7 jours.",
     "**Clients → Create client → Desktop app → Create**. Copie le **Client ID** et le **Client secret** ; le secret n'est plus affiché après la fermeture (tu peux garder une copie avec **Download JSON**).",
     "Dans Belnovia Studio Pro, colle le Client ID et le Client Secret dans **Paramètres → YouTube** et enregistre.",
     "Dans **Chaînes → ta chaîne → Publication**, clique sur **Connecter avec Google** et choisis le compte Google de la chaîne. À « Google n'a pas validé cette application », choisis **Paramètres avancés → Accéder à (nom de l'app)** : c'est ta propre app, donc sans risque. Accepte les autorisations."
    ],
    "note": "Si tu n'as pas de site et que Publish app reste désactivé, écris-nous, on règle ça ensemble : servicescriptorium@gmail.com"
   }
  ]
 },
 "pt": {
  "title": "Guia de configuração",
  "lead": "Se estás a instalar o Belnovia Studio Pro pela primeira vez, segue esta ordem. Texto, voz e imagens não precisam de chaves; os passos de configuração na primeira abertura do programa levam-te pela mesma ordem.",
  "toc": "Nesta página",
  "sections": [
   {
    "id": "windows",
    "h": "Instalar o programa",
    "intro": "Baixe o instalador somente deste site. Não precisa de permissão de administrador.",
    "steps": [
     "Clique duas vezes no **BelnoviaStudioPro-Setup.exe** que você baixou.",
     "Se aparecer **O Windows protegeu o computador**, clique em **Mais informações** e depois em **Executar assim mesmo**.",
     "Na janela de instalação, clique em **Continuar** → aceite os termos de uso → **Instalar**.",
     "Com **Abrir o Belnovia Studio Pro agora** marcado, clique em **Concluir**. A partir de agora o programa fica no menu Iniciar e na área de trabalho.",
     "Quando o programa abrir, cria a tua conta: carrega em **Continuar com Google** ou regista-te com o teu endereço de e-mail.",
     "Se o navegador avisar durante o download, escolha **Manter**."
    ],
    "note": "Esse aviso aparece porque poucas pessoas baixaram o programa até agora; não significa que algo prejudicial foi encontrado. A partir de agora, as atualizações chegam sozinhas dentro do programa; você não precisa executar o instalador de novo."
   },
   {
    "h": "✦ Belnovia AI (histórias e títulos)",
    "intro": "A IA do próprio programa escreve a história, os títulos, as descrições e os prompts de imagem. É grátis e não precisa de chave.",
    "steps": [
     "Quando abres o programa pela primeira vez, o Belnovia AI instala-se sozinho no teu computador; no canto aparece o indicador **✦ A preparar o Belnovia… %**.",
     "Não precisas de esperar: enquanto instala, o **✦ Belnovia AI Plus** faz o trabalho se tiveres saldo ou crédito. O Creator e o Studio Pro (e o teste) recebem um saldo Plus gratuito todos os meses.",
     "No passo inicial **Quem vai escrever a história?**, confirma que o **✦ Belnovia AI** está selecionado e carrega em **Continuar**."
    ],
    "note": "Para um desempenho ainda melhor, podes adicionar uma chave do Claude, ChatGPT ou Grok em **Configurações → Chaves de API** e escolhê-la na aba **Escrita** do canal (Studio Pro; opcional, pago). Obtém a chave em [console.anthropic.com](https://console.anthropic.com), [platform.openai.com](https://platform.openai.com) ou [console.x.ai](https://console.x.ai); o **Guia ilustrado** do programa mostra cada passo.",
    "id": "ai"
   },
   {
    "h": "✦ Belnovia Voice (narração)",
    "intro": "O estúdio de voz que narra os teus vídeos vem integrado. As vozes profissionais prontas funcionam grátis no teu computador.",
    "steps": [
     "Abre o **Estúdio de voz** no menu à esquerda; o motor de voz prepara-se sozinho na primeira vez.",
     "Em **Canais → o teu canal → Voz**, escolhe **Vozes prontas (Kokoro)**, ouve as vozes, escolhe uma e guarda.",
     "Para usares a tua própria voz (Studio Pro): faz uma gravação curta na secção **Signature** do Estúdio de voz; quando **A preparar o Belnovia Signature** terminar, a tua voz aparece na lista de vozes do canal."
    ],
    "note": "Também podes adicionar uma chave do Lumean ou do ElevenLabs (pago, opcional).",
    "id": "voice"
   },
   {
    "h": "✦ Belnovia Labs (imagens e animação)",
    "intro": "Cenas, miniaturas e animações são desenhadas com a tua própria conta Google. Sem apps extra nem chaves.",
    "steps": [
     "Abre o **Estúdio de imagem** no menu à esquerda.",
     "Em **Contas Google**, carrega em **Adicionar conta** e inicia sessão com a tua conta Google.",
     "No passo inicial **Quem deve desenhar as imagens?**, escolhe **BELNOVIA LABS** e carrega em **Desenhar imagem de teste**; se chegar uma imagem em 30–90 segundos, está tudo pronto."
    ],
    "note": "Se usas o G-Labs, escolhe o **Programa G-Labs** no mesmo passo e cola a respetiva chave de Webhook.",
    "id": "labs"
   },
   {
    "id": "youtube",
    "h": "Ligação ao YouTube",
    "intro": "A app envia os vídeos para o teu canal com a tua autorização. Para isso crias uma vez um projeto gratuito no Google Cloud; demora cerca de 10 minutos.",
    "steps": [
     "Vai a [console.cloud.google.com](https://console.cloud.google.com) e cria um projeto novo (por ex. **Belnovia YouTube**).",
     "Em **APIs & Services → Library** procura **YouTube Data API v3** e clica em **Enable**.",
     "**Google Auth Platform → Overview → Get started**: escreve um nome de app e o teu e-mail, escolhe **External** em **Audience**, escreve o teu e-mail de contacto, aceita os termos e clica em **Create**.",
     "Na página **Branding** escreve os endereços do teu site ou canal em **Application home page**, **privacy policy** e **terms of service**, adiciona esse domínio em **Authorized domains** e clica em **Save**. Não carregues um logótipo: com logótipo a Google pede uma revisão longa.",
     "**Audience → Publish app → Confirm**. O estado tem de ser **In production**. Sem este passo a ligação cai a cada 7 dias.",
     "**Clients → Create client → Desktop app → Create**. Copia o **Client ID** e o **Client secret**; o secret não volta a aparecer depois de fechares a janela (podes guardar uma cópia com **Download JSON**).",
     "No Belnovia Studio Pro cola o Client ID e o Client Secret em **Configurações → YouTube** e guarda.",
     "Em **Canais → o teu canal → Publicação** clica em **Conectar com Google** e escolhe a conta Google do canal. Em \"A Google não validou esta app\" escolhe **Avançadas → Aceder a (nome da app)**: é a tua própria app, por isso é seguro. Aceita as permissões."
    ],
    "note": "Se não tiveres site e o Publish app continuar desativado, escreve-nos e resolvemos juntos: servicescriptorium@gmail.com"
   }
  ]
 }
};
