export const useRouter = () => {
  const push = (to: string) => {
    return history.pushState(null, '', to);
  };

  const replace = (to: string) => {
    return history.replaceState(null, '', to);
  };

  return {
    push,
    replace,
  };
};
