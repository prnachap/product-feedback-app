export const hamburgerVaraint = {
  initial: {
    opacity: 1,
    d: "M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z",
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  final: {
    opacity: 1,
    rotate: "90deg",
    d: "M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const sidebarVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: "0vw",
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const overlayVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    type: "tween",
    duration: 2,
  },
  exit: {
    opacity: 0,
    type: "tween",
    duration: 0.5,
  },
};

export const menuVariants = {
  initial: {
    opacity: 0,
    y: "-1000vh",
  },
  final: {
    opacity: 1,
    y: "0",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "1000vh",
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

export const iconHovervariant = {
  initial: {
    rotate: "0deg",
  },
  hover: {
    rotate: "180deg",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};
