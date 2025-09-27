# 📧 EMAILJS SETUP - KOMPLETNO VODIČ

## 🎯 STATUS: DEMO MODE AKTIVAN ✅

**Vaša kontakt forma radi u DEMO MODU!** Možete je testirati sada, a zatim konfigurirati EmailJS za stvarno slanje emailova.

---

## 🚀 KORAK 1: REGISTRACIJA (2 min)

1. **Idite na:** https://www.emailjs.com/
2. **Kliknite "Sign Up"**
3. **Registrirajte se** (email + lozinka)
4. **Potvrdite email**

---

## ⚙️ KORAK 2: KONFIGURACIJA (3 min)

### **A) Email Service:**
1. **Dashboard → Email Services**
2. **"Add New Service"**
3. **Odaberite Gmail/Outlook/Yahoo**
4. **Povežite svoj email**
5. **Kopirajte Service ID** (npr: `service_abc123`)

### **B) Email Template:**
1. **Dashboard → Email Templates**
2. **"Create New Template"**
3. **Template ID:** `template_contact_form`
4. **Subject:** `Nova rezervacija - {{from_name}}`
5. **Body:**
```
Ime: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}
Apartman: {{property}}
Datum dolaska: {{check_in}}
Datum odlaska: {{check_out}}
Broj gostiju: {{guests}}
Jezik: {{language}}

Poruka:
{{message}}

---
Poslano sa REISEZIEL KROATIEN stranice
```

---

## 🔑 KORAK 3: PUBLIC KEY (1 min)

1. **Dashboard → Account → General**
2. **Kopirajte "Public Key"** (npr: `user_abc123def456`)

---

## 💻 KORAK 4: KONFIGURACIJA U KODU

Otvorite `src/config/emailjs.ts` i zamijenite:

```typescript
export const EMAILJS_CONFIG = {
  // Zamijenite s vašim stvarnim podacima
  PUBLIC_KEY: 'user_abc123def456', // ← Vaš Public Key
  SERVICE_ID: 'service_abc123',    // ← Vaš Service ID
  
  TEMPLATES: {
    CONTACT: 'template_contact_form', // ← Vaš Template ID
    BOOKING: 'template_booking_request',
    AUTO_REPLY: 'template_auto_reply'
  }
};
```

---

## ✅ KORAK 5: TESTIRANJE

1. **Pokrenite:** `npm run dev`
2. **Idite na:** http://localhost:5173/
3. **Skrolajte do Contact forme**
4. **Ispunite formu i pošaljite**
5. **Provjerite email inbox**

---

## 🎯 REZULTAT:

### **Nakon setup-a:**
- ✅ **Kontakt forma funkcionira**
- ✅ **Emailovi se šalju automatski**
- ✅ **Auto-reply gostima**
- ✅ **Professional booking system**

### **Primjer emaila:**
```
Subject: Nova rezervacija - Marko Petrović

Ime: Marko Petrović
Email: marko@example.com
Telefon: +385 91 123 4567
Apartman: Vrt lavande 1
Datum dolaska: 2024-07-15
Datum odlaska: 2024-07-22
Broj gostiju: 4
Jezik: hr

Poruka:
Zanima me apartman za 4 osobe od 15.7. do 22.7. 
Molimo kontaktirajte me za više detalja.

---
Poslano sa REISEZIEL KROATIEN stranice
```

---

## 💰 TROŠKOVI:

- **Gratis:** 200 emailova/mjesec
- **Paid:** $20/mjesec za 1000 emailova
- **Za vašu stranicu:** Gratis plan je dovoljan!

---

## 🔒 SIGURNOST:

### **Security:**
- ✅ **Public Key je siguran** za frontend
- ✅ **Nema backend potrebe**
- ✅ **EmailJS se brine o sigurnosti**

### **Backup:**
- ✅ **Sve emailove imate u inboxu**
- ✅ **EmailJS dashboard za pregled**
- ✅ **Nema gubitka podataka**

---

## 🆘 POMOĆ:

### **Ako imate problema:**
1. **Provjerite Service ID**
2. **Provjerite Template ID**
3. **Provjerite Public Key**
4. **Provjerite console za greške**

### **EmailJS dokumentacija:**
- **Setup guide:** https://www.emailjs.com/docs/
- **React integration:** https://www.emailjs.com/docs/sdk/react/

---

## 🎉 NAKON SETUP-A:

**Vaša stranica će biti:**
- ✅ **100% funkcionalna**
- ✅ **Professional booking system**
- ✅ **Ready for production**
- ✅ **ROI optimized**

**Samo 5 minuta i kontakt forma radi!** 🚀📧

---

## 📱 DEMO MODE:

**Trenutno u DEMO MODU:**
- ✅ **Forma radi**
- ✅ **Validacija radi**
- ✅ **UI/UX savršeno**
- ✅ **Samo zamijenite konfiguraciju**

**Testirajte sada, konfigurirajte kasnije!** 🎯

