document.addEventListener("turbolinks:load", function (event) {
  if (typeof gtag === "function") {
    gtag("config", "UX-XXXXX", {
      page_location: event.data.url,
    });
  }
});
