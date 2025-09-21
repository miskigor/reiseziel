import React, { useState, useEffect } from 'react';
import { Send, Calendar, CheckCircle, AlertCircle } from './Icons';
// import { useTranslation } from '../hooks/useTranslation'; // TODO: Use for future translations
import { initEmailJS, sendContactEmail, sendAutoReply } from '../config/emailjs';

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

interface ContactFormProps {
  language: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  // const { t } = useTranslation(language); // TODO: Use for future translations
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    property: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    language: language
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [step, setStep] = useState(1);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  // Update language when it changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, language }));
  }, [language]);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'hr' ? 'Ime je obavezno' : 
                     language === 'de' ? 'Name ist erforderlich' : 
                     'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'hr' ? 'Email je obavezan' : 
                       language === 'de' ? 'E-Mail ist erforderlich' : 
                       'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'hr' ? 'Email nije valjan' : 
                       language === 'de' ? 'E-Mail ist ungültig' : 
                       'Email is not valid';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'hr' ? 'Poruka je obavezna' : 
                         language === 'de' ? 'Nachricht ist erforderlich' : 
                         'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Send auto-reply to customer
        await sendAutoReply(formData.email, language);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            property: '',
            checkIn: '',
            checkOut: '',
            guests: '',
            language: language
          });
          setStep(1);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && formData.name && formData.email) {
      setStep(2);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 shadow-xl">
        {/* Progress indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'hr' ? 'Kontakt podaci' : 
                 language === 'de' ? 'Kontaktdaten' : 
                 'Contact Information'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Ime *' : 
                     language === 'de' ? 'Name *' : 
                     'Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={language === 'hr' ? 'Vaše ime' : 
                                language === 'de' ? 'Ihr Name' : 
                                'Your name'}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Email *' : 
                     language === 'de' ? 'E-Mail *' : 
                     'Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={language === 'hr' ? 'vaš@email.com' : 
                                language === 'de' ? 'ihre@email.com' : 
                                'your@email.com'}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Telefon' : 
                     language === 'de' ? 'Telefon' : 
                     'Phone'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={language === 'hr' ? '+385 xx xxx xxxx' : 
                                language === 'de' ? '+49 xxx xxxxxx' : 
                                '+1 xxx xxx xxxx'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Broj gostiju' : 
                     language === 'de' ? 'Anzahl der Gäste' : 
                     'Number of guests'}
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">
                      {language === 'hr' ? 'Odaberite' : 
                       language === 'de' ? 'Auswählen' : 
                       'Select'}
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>{language === 'hr' ? 'Dalje' : 
                       language === 'de' ? 'Weiter' : 
                       'Next'}</span>
                <Calendar className="w-5 h-5" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {language === 'hr' ? 'Detalji rezervacije' : 
                   language === 'de' ? 'Buchungsdetails' : 
                   'Booking Details'}
                </h3>
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  {language === 'hr' ? '← Nazad' : 
                   language === 'de' ? '← Zurück' : 
                   '← Back'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Apartman' : 
                     language === 'de' ? 'Ferienwohnung' : 
                     'Property'}
                  </label>
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">
                      {language === 'hr' ? 'Odaberite apartman' : 
                       language === 'de' ? 'Ferienwohnung auswählen' : 
                       'Select property'}
                    </option>
                    <option value="vrt-lavande-1">
                      {language === 'hr' ? 'Vrt lavande 1' : 
                       language === 'de' ? 'Lavendelgarten 1' : 
                       'Lavender garden 1'}
                    </option>
                    <option value="apartman-1">
                      {language === 'hr' ? 'Apartman 1' : 
                       language === 'de' ? 'Appartement 1' : 
                       'Apartment 1'}
                    </option>
                    <option value="penthouse-2">
                      {language === 'hr' ? 'Penthouse 2' : 
                       language === 'de' ? 'Penthouse 2' : 
                       'Penthouse 2'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Datum dolaska' : 
                     language === 'de' ? 'Ankunftsdatum' : 
                     'Check-in date'}
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'hr' ? 'Datum odlaska' : 
                     language === 'de' ? 'Abfahrtsdatum' : 
                     'Check-out date'}
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'hr' ? 'Poruka *' : 
                   language === 'de' ? 'Nachricht *' : 
                   'Message *'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={language === 'hr' ? 'Opišite svoje potrebe i zahtjeve...' : 
                              language === 'de' ? 'Beschreiben Sie Ihre Bedürfnisse und Wünsche...' : 
                              'Describe your needs and requirements...'}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>
                      {language === 'hr' ? 'Šalje se...' : 
                       language === 'de' ? 'Wird gesendet...' : 
                       'Sending...'}
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>
                      {language === 'hr' ? 'Pošalji zahtjev' : 
                       language === 'de' ? 'Anfrage senden' : 
                       'Send Request'}
                    </span>
                  </>
                )}
              </button>
            </>
          )}
        </form>

        {/* Status messages */}
        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800">
              {language === 'hr' ? 'Poruka je uspješno poslana! Kontaktirat ćemo vas uskoro.' : 
               language === 'de' ? 'Nachricht erfolgreich gesendet! Wir werden Sie bald kontaktieren.' : 
               'Message sent successfully! We will contact you soon.'}
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800">
              {language === 'hr' ? 'Greška pri slanju poruke. Molimo pokušajte ponovo.' : 
               language === 'de' ? 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.' : 
               'Error sending message. Please try again.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
