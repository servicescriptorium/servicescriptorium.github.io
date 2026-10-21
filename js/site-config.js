/* SAHİBİNE NOT / Owner settings for the sample video section on the home page.
   Bölüm bu ikisinden biri doluysa görünür; ikisi de boşsa tamamen gizlenir.

   SAMPLE_VIDEO_ID: örnek videonun YouTube kimliği. Video linki
     https://www.youtube.com/watch?v=AbCdEf12345  ise buraya "AbCdEf12345" yaz.
     Ziyaretçi "Oynat"a basana kadar YouTube'dan hiçbir şey yüklenmez (youtube-nocookie).
   SAMPLE_POSTER: (isteğe bağlı) oynatmadan önce görünen kendi resmin, ör. "img/sample.jpg".

   DEMO_VIDEO: YouTube yerine sitedeki bir video dosyası göstermek için (SAMPLE_VIDEO_ID boşsa kullanılır).
     Tek dosya:   "videos/demo.mp4"
     Dile göre:   { tr: "videos/demo-tr.mp4", en: "videos/demo-en.mp4" }   (olmayan dilde İngilizcesi, o da yoksa ilk dosya)
   DEMO_POSTER: (isteğe bağlı) video dosyası için kapak resmi; tek yol ya da aynı dile göre harita. */
var SAMPLE_VIDEO_ID = "";
var SAMPLE_POSTER = "";
var DEMO_VIDEO = { tr: "videos/demo-tr.mp4", en: "videos/demo-en.mp4" };
var DEMO_POSTER = { tr: "img/posters/demo-tr.jpg", en: "img/posters/demo-en.jpg" };
