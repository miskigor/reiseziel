// Alternative email solution - Direct email links
// This works immediately without EmailJS setup

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  property: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  language: string;
}

export const generateEmailLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent(
    formData.language === 'hr' 
      ? `Nova rezervacija - ${formData.name}`
      : formData.language === 'de'
      ? `Neue Buchung - ${formData.name}`
      : `New Booking - ${formData.name}`
  );

  const body = encodeURIComponent(`
${formData.language === 'hr' ? 'Nova rezervacija sa stranice:' : 
  formData.language === 'de' ? 'Neue Buchung von der Website:' : 
  'New booking from website:'}

${formData.language === 'hr' ? 'Ime:' : 
  formData.language === 'de' ? 'Name:' : 
  'Name:'} ${formData.name}

${formData.language === 'hr' ? 'Email:' : 
  formData.language === 'de' ? 'E-Mail:' : 
  'Email:'} ${formData.email}

${formData.language === 'hr' ? 'Telefon:' : 
  formData.language === 'de' ? 'Telefon:' : 
  'Phone:'} ${formData.phone}

${formData.language === 'hr' ? 'Apartman:' : 
  formData.language === 'de' ? 'Ferienwohnung:' : 
  'Property:'} ${formData.property}

${formData.language === 'hr' ? 'Datum dolaska:' : 
  formData.language === 'de' ? 'Ankunftsdatum:' : 
  'Check-in:'} ${formData.checkIn}

${formData.language === 'hr' ? 'Datum odlaska:' : 
  formData.language === 'de' ? 'Abfahrtsdatum:' : 
  'Check-out:'} ${formData.checkOut}

${formData.language === 'hr' ? 'Broj gostiju:' : 
  formData.language === 'de' ? 'Anzahl der Gäste:' : 
  'Number of guests:'} ${formData.guests}

${formData.language === 'hr' ? 'Poruka:' : 
  formData.language === 'de' ? 'Nachricht:' : 
  'Message:'}
${formData.message}

---
${formData.language === 'hr' ? 'Poslano sa REISEZIEL KROATIEN stranice' : 
  formData.language === 'de' ? 'Gesendet von der REISEZIEL KROATIEN Website' : 
  'Sent from REISEZIEL KROATIEN website'}
  `);

  return `mailto:info@reiseziel-kroatien.com?subject=${subject}&body=${body}`;
};

export const sendEmailDirectly = (formData: ContactFormData): boolean => {
  try {
    const emailLink = generateEmailLink(formData);
    window.open(emailLink, '_blank');
    return true;
  } catch (error) {
    console.error('Failed to open email client:', error);
    return false;
  }
};

// Copy email data to clipboard
export const copyEmailData = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const emailText = `
${formData.language === 'hr' ? 'Nova rezervacija:' : 
  formData.language === 'de' ? 'Neue Buchung:' : 
  'New booking:'}

${formData.language === 'hr' ? 'Ime:' : 
  formData.language === 'de' ? 'Name:' : 
  'Name:'} ${formData.name}

${formData.language === 'hr' ? 'Email:' : 
  formData.language === 'de' ? 'E-Mail:' : 
  'Email:'} ${formData.email}

${formData.language === 'hr' ? 'Telefon:' : 
  formData.language === 'de' ? 'Telefon:' : 
  'Phone:'} ${formData.phone}

${formData.language === 'hr' ? 'Apartman:' : 
  formData.language === 'de' ? 'Ferienwohnung:' : 
  'Property:'} ${formData.property}

${formData.language === 'hr' ? 'Datum dolaska:' : 
  formData.language === 'de' ? 'Ankunftsdatum:' : 
  'Check-in:'} ${formData.checkIn}

${formData.language === 'hr' ? 'Datum odlaska:' : 
  formData.language === 'de' ? 'Abfahrtsdatum:' : 
  'Check-out:'} ${formData.checkOut}

${formData.language === 'hr' ? 'Broj gostiju:' : 
  formData.language === 'de' ? 'Anzahl der Gäste:' : 
  'Number of guests:'} ${formData.guests}

${formData.language === 'hr' ? 'Poruka:' : 
  formData.language === 'de' ? 'Nachricht:' : 
  'Message:'}
${formData.message}
    `.trim();

    await navigator.clipboard.writeText(emailText);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
