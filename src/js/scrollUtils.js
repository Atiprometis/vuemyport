let targetElementRef = null;

export function setTargetElementRef(ref) {
  targetElementRef = ref;
}

export function scrollToTargetElement() {
  if (targetElementRef) {
    targetElementRef.scrollIntoView({ behavior: 'smooth' });
  }
}