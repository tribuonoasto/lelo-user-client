export default {
  defineTittlePage(to, from, next) {
    const findTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

    if (findTitle) {
      document.title = findTitle.meta.title;
    }

    next();
  },
};
