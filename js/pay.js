/* Payment page: Paddle's "default payment link". The app opens  pay.html?_ptxn=txn_…  and this page
   shows Paddle's secure checkout for that transaction. Card details go only to Paddle. */
(function () {
  var box = document.getElementById("pay-status");
  function show(key, kind) {
    var d = (window.I18N && (window.I18N[document.documentElement.lang] || window.I18N.tr)) || {};
    box.setAttribute("data-i18n", key); // a later language switch keeps the current message
    box.textContent = d[key] || (window.I18N && window.I18N.tr[key]) || key;
    box.className = "pay-status" + (kind ? " " + kind : "");
  }
  var txn = new URLSearchParams(location.search).get("_ptxn");
  if (!txn) return show("pay.bad", "warn");
  var token = (window.PADDLE_CLIENT_TOKEN || "").trim();
  if (!token || !window.Paddle) return show("pay.err", "err");
  var loaded = false;
  try {
    if (token.indexOf("test_") === 0) window.Paddle.Environment.set("sandbox");
    window.Paddle.Initialize({
      token: token,
      checkout: { settings: { displayMode: "overlay", locale: document.documentElement.lang || "en" } },
      eventCallback: function (ev) {
        if (!ev || !ev.name) return;
        if (ev.name === "checkout.loaded") loaded = true;
        else if (ev.name === "checkout.completed") show("pay.done", "ok");
        else if (ev.name === "checkout.closed" && box.className.indexOf("ok") < 0) show("pay.closed", "");
        else if (ev.name === "checkout.error") show("pay.err", "err");
      }
    });
  } catch (e) { return show("pay.err", "err"); }
  // Paddle opens the checkout by itself for ?_ptxn; open it here if it has not appeared
  setTimeout(function () {
    if (loaded) return;
    try { window.Paddle.Checkout.open({ transactionId: txn }); } catch (e) { show("pay.err", "err"); }
  }, 4000);
})();
