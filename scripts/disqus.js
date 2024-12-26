(() => {
  const loadComments = async () => {
    if (typeof DISQUS === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('disqus_thread');
      if (!container) {
        return;
      }
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = container.getAttribute("data-full-path");
          this.page.identifier = container.getAttribute("data-path");
        }
      });
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
