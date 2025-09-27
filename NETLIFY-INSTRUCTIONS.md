# 🚀 NETLIFY DEPLOYMENT INSTRUKCIJE

## 📁 DATOTEKE ZA UPLOAD:

### 1. **index.html** - Glavna stranica
- **Opis:** Glavna stranica sa apartmanima
- **Veličina:** ~8KB
- **Funkcionalnost:** Responsive dizajn, SEO optimizirano

### 2. **email-fix.html** - Email forma
- **Opis:** Kompletna email forma
- **Veličina:** ~16KB
- **Funkcionalnost:** Validacija, email client, clipboard copy

### 3. **netlify.toml** - Netlify konfiguracija
- **Opis:** Deployment konfiguracija
- **Veličina:** ~1KB
- **Funkcionalnost:** Cache headers, redirects, security

## 🔧 KAKO UPLOADATI NA NETLIFY:

### KORAK 1: Idite na Netlify
- URL: `https://app.netlify.com/`
- Kliknite **"New site from Git"**

### KORAK 2: Povežite GitHub
- Odaberite **"GitHub"**
- Odaberite repository: **`miskigor/reiseziel`**
- Odaberite branch: **`gh-pages`**

### KORAK 3: Konfiguracija
- **Build command:** `echo 'Static site - no build needed'`
- **Publish directory:** `.` (root)
- **Base directory:** `/` (root)

### KORAK 4: Deploy
- Kliknite **"Deploy site"**
- Čekajte da se deploy završi
- Dobit ćete URL: `https://random-name.netlify.app`

## ✅ ŠTO ĆE RADITI:

1. **Glavna stranica** - Prikazuje apartmane
2. **Email forma** - Kompletno funkcionalna
3. **Responsive** - Radi na svim uređajima
4. **SEO** - Optimizirano za Google
5. **Cache** - Brže učitavanje
6. **Security** - Sigurnosni headers

## 🎯 REZULTAT:

- ✅ Website će biti dostupan na Netlify URL
- ✅ Email forma će raditi
- ✅ Sve će biti optimizirano
- ✅ Automatski deployment iz GitHub-a

## 📋 ALTERNATIVNO - MANUAL UPLOAD:

### KORAK 1: Drag & Drop
- Idite na `https://app.netlify.com/`
- Kliknite **"Want to deploy a new site without connecting to Git?"**
- Drag & drop sve datoteke iz liste gore

### KORAK 2: Deploy
- Kliknite **"Deploy site"**
- Dobit ćete URL za vaš website

---
**Napomena:** Netlify je bolji od GitHub Pages jer ima bolje cache i performance!