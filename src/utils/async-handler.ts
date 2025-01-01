type AsyncFunction = (...args: any[]) => Promise<any>;

const AsyncHandler = (fn: AsyncFunction) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (err) {
      console.error("Error in AsyncHandler:", {
        message: (err as Error)?.message || "Unknown error",
        stack: (err as Error)?.stack || "No stack trace available",
      });

      throw err;
    }
  };
};

export default AsyncHandler;
