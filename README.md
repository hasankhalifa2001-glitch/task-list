# 📝 Task List App

تطبيق ويب بسيط لإدارة المهام (To-Do List) باستخدام **Next.js** و **Prisma** و **SQLite/PostgreSQL**.

---

## 🚀 الميزات

- ➕ إضافة مهام جديدة.
- ✅ تعليم المهام كمكتملة / غير مكتملة.
- ❌ حذف المهام.
- 🗃️ حفظ البيانات في قاعدة بيانات باستخدام Prisma.
- ⚡️ API Routes في Next.js.
- 🎨 تصميم بسيط باستخدام Tailwind CSS.

---

## 🧱 التقنيات المستخدمة

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/) أو [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) (اختياري)

---

## 📸 لقطات شاشة

> يمكنك إضافة صور هنا لاحقًا

---

## ⚙️ التثبيت والتشغيل محليًا

```bash
# استنساخ المشروع
git clone https://github.com/your-username/task-list-app.git
cd task-list-app

# تثبيت الحزم
npm install

# إنشاء ملف البيئة
cp .env.example .env

# تعديل .env وربط قاعدة البيانات
# مثلا:
# DATABASE_URL="file:./dev.db"   ← SQLite
# DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/dbname" ← PostgreSQL

# تهيئة قاعدة البيانات
npx prisma migrate dev --name init

# تشغيل التطبيق
npm run dev
