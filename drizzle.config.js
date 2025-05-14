export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};

//! 3rd one
// import "dotenv/config";

// export default {
//   dialect: "postgresql",
//   schema: "./utils/schema.js",
//   out: "./drizzle/migrations",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
//   verbose: true,
// };

//!
// export default {
//   dialect: "postgresql",
//   schema: "./utils/schema.js",
//   out: "./drizzle/migrations",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
//   verbose: true,
//   strict: true,
// };

//! default one
// export default {
//   dialect: "postgresql",
//   schema: "./utils/schema.jsx",
//   out: "./drizzle",
//   dbCredentials: {
//     url: "postgresql://Finan-Smart_owner:npg_qRlOsbNA54SV@ep-square-sun-a4ti9b7d-pooler.us-east-1.aws.neon.tech/Finan-Smart?sslmode=require",
//     connectionString:
//       "postgresql://Finan-Smart_owner:npg_qRlOsbNA54SV@ep-square-sun-a4ti9b7d-pooler.us-east-1.aws.neon.tech/Finan-Smart?sslmode=require",
//   },
// };
