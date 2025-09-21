// EmailJS configuration for contact form
export const EMAILJS_CONFIG = {
  // Public key for EmailJS service
  PUBLIC_KEY: 'demo_public_key', // Replace with your actual EmailJS public key
  
  // Service ID from EmailJS
  SERVICE_ID: 'service_demo', // Replace with your EmailJS service ID
  
  // Template IDs for different email types
  TEMPLATES: {
    CONTACT: 'template_contact_form', // Contact form template
    BOOKING: 'template_booking_request', // Booking request template
    AUTO_REPLY: 'template_auto_reply' // Auto-reply template
  }
};

// EmailJS initialization function
export const initEmailJS = async () => {
  try {
    const emailjs = await import('@emailjs/browser');
    emailjs.default.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Send contact form email
export const sendContactEmail = async (formData: Record<string, string>) => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'demo_public_key' || EMAILJS_CONFIG.SERVICE_ID === 'service_demo') {
      console.log('🚀 DEMO MODE: EmailJS not configured yet');
      console.log('📧 Email would be sent with data:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        property: formData.property,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        language: formData.language
      });
      
      // Simulate successful send for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('✅ DEMO: Email sent successfully to info@reiseziel-kroatien.com');
      return { success: true, message: 'Email sent successfully (Demo Mode)' };
    }

    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      property: formData.property || '',
      check_in: formData.checkIn || '',
      check_out: formData.checkOut || '',
      guests: formData.guests || '',
      language: formData.language || 'en',
      to_email: 'info@reiseziel-kroatien.com' // Replace with your actual email
    };

    const result = await emailjs.default.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.CONTACT,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

// Send auto-reply email to customer
export const sendAutoReply = async (customerEmail: string, language: string) => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      to_email: customerEmail,
      language: language
    };

    await emailjs.default.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.AUTO_REPLY,
      templateParams
    );

    console.log('Auto-reply sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return { success: false };
  }
};
