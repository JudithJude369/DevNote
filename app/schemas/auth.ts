import z from "zod";

// export const signUpSchema = z.object({
//   // defining form validation type
//   name: z.string().min(3).max(30),
//   email: z.email("Invalid email address"),
//   password: z
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .max(30, "Password must not exceed 30 characters")
//     .regex(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
//       "Password must include letters, numbers, and special characters"
//     ),
// });

export const signUpSchema = z.object({
  // defining form validation type
  name: z.string().min(3).max(30),
  email: z.email(),
  password: z.string().min(8).max(30),
});
