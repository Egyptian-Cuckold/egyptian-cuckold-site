# 🌟 موقع Egyptian Cuckold - دليل شامل

## 📋 نظرة عامة

موقع احترافي متكامل يحتوي على:
- **الصفحة الرئيسية** - واجهة جذابة مع بطاقات الأقسام
- **معرض الصور** - مع فلاتر ديناميكية و lightbox
- **الفيديوهات التعليمية** - منظمة حسب المستويات
- **التحديات الـ40** - مع نظام تتبع التقدم
- **الآراء والتعليقات** - نموذج تفاعلي

## 🚀 البدء السريع

### المتطلبات:
- Node.js 18+ 
- pnpm أو npm

### التثبيت:

```bash
# 1. انتقل إلى مجلد المشروع
cd egyptian-cuckold

# 2. ثبت المكتبات
pnpm install

# 3. شغّل خادم التطوير
pnpm dev
```

الموقع سيكون متاحاً على: `http://localhost:3000`

## 📁 هيكل المشروع

```
egyptian-cuckold/
├── client/
│   ├── src/
│   │   ├── pages/              # الصفحات الرئيسية
│   │   │   ├── Home.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Videos.tsx
│   │   │   ├── Challenges.tsx
│   │   │   ├── Comments.tsx
│   │   │   └── Stories.tsx
│   │   ├── components/         # المكونات المشتركة
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx             # التوجيه الرئيسي
│   │   ├── main.tsx            # نقطة الدخول
│   │   └── index.css           # الأنماط العامة
│   └── public/                 # الملفات الثابتة
├── shared/
│   └── const.ts                # الثوابت والبيانات
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎨 التخصيص

### تغيير الألوان:

عدّل ملف `client/src/index.css`:

```css
:root {
  --background: #0F0F1E;        /* الخلفية */
  --primary: #A855F7;           /* اللون الأساسي */
  --accent: #FCD34D;            /* اللون الثانوي */
}
```

### تغيير الخطوط:

أضف استيراد الخطوط في `client/src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

body {
  font-family: 'Cairo', sans-serif;
}
```

### تعديل البيانات:

عدّل ملف `shared/const.ts` لإضافة/تعديل:
- الصور والفيديوهات
- التحديات
- البيانات الأخرى

## 🔧 الأوامر المتاحة

```bash
# تشغيل خادم التطوير
pnpm dev

# بناء الموقع للإنتاج
pnpm build

# معاينة البناء
pnpm preview

# فحص الأخطاء
pnpm lint

# تنسيق الكود
pnpm format
```

## 📱 التصميم المتجاوب

الموقع مُصمم ليعمل بشكل مثالي على:
- 📱 الهواتف الذكية (320px+)
- 📱 الأجهزة اللوحية (768px+)
- 💻 أجهزة الكمبيوتر (1024px+)

## 🎯 الميزات الرئيسية

### معرض الصور:
- ✅ فلاتر ديناميكية (الكل، أزواج، حميمية، فني، ديناميكي)
- ✅ lightbox محسّن مع معاينة كاملة
- ✅ تصميم شبكي متجاوب

### الفيديوهات:
- ✅ تصفية حسب المستوى (مبتدئ/متوسط/متقدم)
- ✅ بطاقات احترافية مع معلومات المدة
- ✅ مشغل فيديو مخصص

### التحديات:
- ✅ 40 تحدياً منظماً في 3 مستويات
- ✅ نظام تتبع التقدم مع شريط تقدم
- ✅ تفاعل كامل مع checkboxes

### التعليقات:
- ✅ نموذج إرسال تعليقات تفاعلي
- ✅ عرض التعليقات مع أزرار الإعجاب
- ✅ نظام الردود والمشاركة

## 🌐 النشر

### نشر على Vercel:

```bash
# ثبت Vercel CLI
npm install -g vercel

# انشر الموقع
vercel
```

### نشر على Netlify:

```bash
# بناء الموقع
pnpm build

# انشر المجلد dist
# عبر واجهة Netlify أو CLI
```

## 📚 المكتبات المستخدمة

- **React 19** - مكتبة UI
- **Tailwind CSS 4** - تنسيق
- **Wouter** - التوجيه
- **shadcn/ui** - مكونات UI
- **TypeScript** - لغة البرمجة

## 🐛 حل المشاكل

### الموقع لا يحمّل:
```bash
# امسح cache وأعد التثبيت
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### الأخطاء في TypeScript:
```bash
# تحقق من الأخطاء
pnpm tsc --noEmit
```

### مشاكل الأداء:
```bash
# بناء محسّن
pnpm build
pnpm preview
```

## 📞 الدعم والمساعدة

للمزيد من المعلومات:
- 📖 [توثيق React](https://react.dev)
- 🎨 [توثيق Tailwind CSS](https://tailwindcss.com)
- 🧭 [توثيق Wouter](https://github.com/molefrog/wouter)

## 📄 الترخيص

جميع الحقوق محفوظة © 2025 Egyptian Cuckold

---

**تم إنشاء الموقع بـ ❤️ باستخدام أحدث تقنيات الويب**
