export const wait = (interval = 500) => {


  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, interval);
  });

}

