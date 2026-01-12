(function () {
  const path = window.location.pathname;

  // 简单判断当前语言：/en/ 开头视为英文，否则中文
  const isEN = path.includes('/en/');
  const langLinks = document.querySelectorAll('[data-lang-link]');
  langLinks.forEach(a => {
    const lang = a.getAttribute('data-lang-link');
    if ((lang === 'en' && isEN) || (lang === 'zh' && !isEN)) a.classList.add('active');
  });

  // 根据同名文件切换：/zh/... -> /en/... ; /en/... -> /zh/...
  const switchTo = (target) => {
    let newPath = path;

    if (target === 'en') {
      if (!path.includes('/en/')) {
        newPath = path.replace('/zh/', '/en/');
        if (!newPath.includes('/en/')) newPath = '/en' + (path.startsWith('/') ? path : '/' + path);
      }
    } else {
      if (path.includes('/en/')) newPath = path.replace('/en/', '/zh/');
      else if (!path.includes('/zh/')) newPath = '/zh' + (path.startsWith('/') ? path : '/' + path);
    }

    window.location.href = newPath;
  };

  const btnEN = document.querySelector('[data-lang-btn="en"]');
  const btnZH = document.querySelector('[data-lang-btn="zh"]');
  if (btnEN) btnEN.addEventListener('click', () => switchTo('en'));
  if (btnZH) btnZH.addEventListener('click', () => switchTo('zh'));
})();
