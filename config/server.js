module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9885b0bde7c7d9a6b21ae571bc29adb4"),
    },
  },
});
