interface CreateDomOptions {
  id: string;
  class: string[] | string;
  html: string;
  text: string;
}

export function createDom<K extends keyof HTMLElementTagNameMap>(tagName: K, options: Partial<CreateDomOptions> = {}): HTMLElementTagNameMap[K] {
  const el = document.createElement(tagName);
  if (options.id) {
    el.id = options.id;
  }
  if (options.class) {
    if (typeof options.class === 'string') {
      el.classList.add(options.class);
    } else {
      el.classList.add(...options.class);
    }
  }
  if (options.html) {
    el.innerHTML = options.html;
  } else if (options.text) {
    el.innerText = options.text;
  }
  return el;
}
