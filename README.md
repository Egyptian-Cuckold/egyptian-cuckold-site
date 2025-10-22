# egyptian-cuckold-site

موقع واجهة أمامية مبني بـ React + TypeScript + Vite + Tailwind.

## ملخص سريع
- بيئة: Node.js 18+، Vite، React 18، TypeScript.
- مجلد المشروع: محتويات الواجهات موجودة داخل `public/` و`src/`.
- هدف هذه الإضافة: تحسين قابلية التطوير، إضافة فحص TypeScript وCI أساسي، وأدوات مساعدة للنشر وتحويل الشعار.

## التهيئة محليًا
1. ثبت Node.js 18+.
2. شغّل:
```bash
npm ci
```

## أوامر مهمة
- تشغيل التطوير:
```bash
npm run dev
```
- بناء للإنتاج:
```bash
npm run build
```
- معاينة بعد البناء:
```bash
npm run preview
```
- فحص TypeScript فقط:
```bash
npm run type-check
```
- فحص التبعيات للأمان:
```bash
npm run audit
```
- (اختياري) فحص lint إذا أعددت ESLint:
```bash
npm run lint
```

## نشر
- بعد `npm run build` قم برفع محتوى `dist/` إلى مزوّد استضافة (Vercel/Netlify/GitHub Pages).
- يمكنك استخدام السكربت `scripts/prepare_release.sh` (أضفه ثم شغّله مع tag).

## أمان
- إذا شاركت أي مفتاح سري (PAT) قم بإلغائه فوراً من إعدادات GitHub.
- تجنّب حفظ أسرار داخل الكود — استخدم Secrets في GitHub Actions أو سيستم إدارة أسرار خاص.
