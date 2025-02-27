export const errorHandler = (err, req, res, next) => {
  console.error(`[Error]: ${err.message}`);
  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internel Server Error",
    errStack: process.env.NODE_ENV === `production` ? null : err.stack,
  });
};
