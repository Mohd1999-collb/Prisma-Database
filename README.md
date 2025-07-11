📦 Database ORM – Prisma
This project uses Prisma as an ORM (Object-Relational Mapping) tool to simplify database access and ensure type safety.

✨ Why Prisma?
Auto-generates a fully-typed TypeScript client for database operations.

Makes it easy to work with relational databases like PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB.

Supports migrations, data seeding, and relations between models.

Improves developer productivity with rich VS Code autocompletion and intuitive API.

🔧 Common commands:

| Command                  | What it does                            |
| ------------------------ | --------------------------------------- |
| `npx prisma init`        | Initialize Prisma in your project       |
| `npx prisma migrate dev` | Apply migrations & update your database |
| `npx prisma generate`    | Generate Prisma Client                  |
| `npx prisma studio`      | Open visual editor for your DB          |

📜 Prisma schema:
Define your database models in the prisma/schema.prisma file.
Example:

prisma
Copy
Edit
model User {
  id        Int     @id @default(autoincrement())
  name      String
  email     String  @unique
  createdAt DateTime @default(now())
}

📚 Learn more:
Prisma Docs : https://www.prisma.io/docs
