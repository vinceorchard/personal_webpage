/* Spam-safe email: the address is split across data attributes so it never
   appears as a scrapeable string in the HTML. We assemble the mailto link
   (and the visible text) at runtime, only for real browsers. */
(function () {
    var el = document.getElementById("email");
    if (!el) return;

    var user = el.getAttribute("data-user");
    var domain = el.getAttribute("data-domain");
    if (!user || !domain) return;

    var address = user + "@" + domain;
    el.href = "mailto:" + address;
    el.textContent = address;
})();
