// Prisma stub — replace with real Prisma client in production
// Run: npx prisma generate && npx prisma db push

export const prisma = {
  contactMessage: {
    create: async (data: unknown) => {
      console.log("💾 Contact message (stub):", data);
      return data;
    },
  },
};
