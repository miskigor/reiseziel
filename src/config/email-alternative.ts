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
  console.log('📧 Generating email link with form data:', formData);
  
  const subject = encodeURIComponent(
    formData.language === 'hr' 
      ? `Nova rezervacija - ${formData.name}`
      : formData.language === 'de'
      ? `Neue Buchung - ${formData.name}`
      : `New Booking - ${formData.name}`
  );

  // Create a shorter, more reliable email body
  const bodyLines = [];
  
  if (formData.language === 'de') {
    bodyLines.push('Neue Buchung von der Website:');
    bodyLines.push('');
    bodyLines.push(`Name: ${formData.name}`);
    bodyLines.push(`E-Mail: ${formData.email}`);
    if (formData.phone) bodyLines.push(`Telefon: ${formData.phone}`);
    bodyLines.push(`Ferienwohnung: ${formData.property}`);
    bodyLines.push(`Ankunftsdatum: ${formData.checkIn}`);
    bodyLines.push(`Abfahrtsdatum: ${formData.checkOut}`);
    if (formData.guests) bodyLines.push(`Anzahl der Gäste: ${formData.guests}`);
    bodyLines.push('');
    bodyLines.push(`Nachricht:`);
    bodyLines.push(formData.message);
    bodyLines.push('');
    bodyLines.push('---');
    bodyLines.push('Gesendet von der REISEZIEL KROATIEN Website');
  } else if (formData.language === 'hr') {
    bodyLines.push('Nova rezervacija sa stranice:');
    bodyLines.push('');
    bodyLines.push(`Ime: ${formData.name}`);
    bodyLines.push(`Email: ${formData.email}`);
    if (formData.phone) bodyLines.push(`Telefon: ${formData.phone}`);
    bodyLines.push(`Apartman: ${formData.property}`);
    bodyLines.push(`Datum dolaska: ${formData.checkIn}`);
    bodyLines.push(`Datum odlaska: ${formData.checkOut}`);
    if (formData.guests) bodyLines.push(`Broj gostiju: ${formData.guests}`);
    bodyLines.push('');
    bodyLines.push(`Poruka:`);
    bodyLines.push(formData.message);
    bodyLines.push('');
    bodyLines.push('---');
    bodyLines.push('Poslano sa REISEZIEL KROATIEN stranice');
  } else {
    bodyLines.push('New booking from website:');
    bodyLines.push('');
    bodyLines.push(`Name: ${formData.name}`);
    bodyLines.push(`Email: ${formData.email}`);
    if (formData.phone) bodyLines.push(`Phone: ${formData.phone}`);
    bodyLines.push(`Property: ${formData.property}`);
    bodyLines.push(`Check-in: ${formData.checkIn}`);
    bodyLines.push(`Check-out: ${formData.checkOut}`);
    if (formData.guests) bodyLines.push(`Number of guests: ${formData.guests}`);
    bodyLines.push('');
    bodyLines.push(`Message:`);
    bodyLines.push(formData.message);
    bodyLines.push('');
    bodyLines.push('---');
    bodyLines.push('Sent from REISEZIEL KROATIEN website');
  }

  const body = encodeURIComponent(bodyLines.join('\n'));

  return `mailto:info@reiseziel-kroatien.com?subject=${subject}&body=${body}`;
};

export const sendEmailDirectly = (formData: ContactFormData): boolean => {
  try {
    console.log('📧 Email function received form data:', formData);
    const emailLink = generateEmailLink(formData);
    console.log('📧 Generated email link:', emailLink);
    console.log('📧 Email link length:', emailLink.length);
    console.log('📧 Decoded body preview:', decodeURIComponent(emailLink.split('body=')[1] || ''));
    
    // Try to open the email client
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
