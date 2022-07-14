export function scrollToEnd(ref, options) {
  setTimeout(() => {
    if (options != undefined && options.sent == "sent-200") {
      ref.current.scrollTop = ref.current.scrollHeight;
    } else if (
      ref.current.offsetHeight + ref.current.scrollTop >=
      ref.current.scrollHeight - 250
    ) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, 1000);
}

export function test() {
  console.loh("hi");
}

const animations = { scrollToEnd, test };
export default animations;
