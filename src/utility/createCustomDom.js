export function createWrapperElement(id, parentElementId) {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  
  if (parentElementId) {
    const parentEl = document.getElementById(parentElementId);
    if (parentEl) {
      parentEl.appendChild(el);
      return;
    }
  }
  
  document.body.appendChild(el);
}