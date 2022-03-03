const treatPromise = (promise) => {
  return promise
    .then((response) => response)
    .catch((error) => {
      throw error.response;
    });
};
export default treatPromise;
