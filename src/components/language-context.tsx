'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.catalog': 'Catalog',
    'nav.checkout': 'Checkout',
    'hero.subtitle': 'Buy Your Game Easy, Cheap, and Fast',
    'hero.description': 'Discover a new world of games on our site, where excitement and detail come together in a unique experience. Explore now and enjoy a wide range of unbeatable prices!',
    'hero.browse': 'Browse Now',
    'hero.contact': 'Contact Us',
    'stats.title': 'Why Choose Us',
    'stats.collection': 'Game Collection',
    'stats.working': 'Working Games',
    'stats.customers': 'Happy Customers',
    'how.title': 'How It Works',
    'how.step1.title': 'Choose Your Hard',
    'how.step1.desc': 'Select the hard drive capacity that fits your gaming needs and storage preference.',
    'how.step2.title': 'Pick Your Games',
    'how.step2.desc': 'Browse our massive catalog and add your favorite titles to your digital selection.',
    'how.step3.title': 'Contact Us on WhatsApp',
    'how.step3.desc': 'Send your final list to our team via WhatsApp for instant confirmation and pricing.',
    'how.step4.title': 'We Verify Every Game',
    'how.step4.desc': 'We carefully test and verify all selected games to ensure they are 100% working, fully functional, and free of any issues before delivery.',
    'how.step5.title': 'Delivered in Under 2 Days',
    'how.step5.desc': 'Get your games delivered directly to your hard drive and ready to play in record time.',
    'how.step6.title': 'After-Sales Support',
    'how.step6.desc': 'Our support team is always available to help you resolve any technical issues or questions quickly after you receive your games.',
    'library.title': 'Library',
    'filters.label': 'Filters',
    'filters.sortBy': 'Sort By',
    'filters.maxStorage': 'Max Storage',
    'filters.alphabetical': 'Alphabetical (A-Z)',
    'filters.newest': 'Year: Newest to Oldest',
    'filters.oldest': 'Year: Oldest to Newest',
    'filters.smallest': 'Size: Smallest to Largest',
    'filters.largest': 'Size: Largest to Smallest',
    'filters.viewResults': 'View Results',
    'filters.reset': 'Reset Filters',
    'search.placeholder': 'Search games...',
    'search.noResults': 'No games match your filters',
    'search.tryAdjusting': 'Try adjusting your filters or search terms.',
    'footer.connect': 'Connect With Us',
    'footer.join': 'Join our community on social media for exclusive deals and updates.',
    'checkout.title': 'Your Selection',
    'checkout.empty': 'Your list is empty',
    'checkout.emptyDesc': 'Add some games to your selection to see them here.',
    'checkout.games': 'Games',
    'checkout.totalStorage': 'Total Storage',
    'checkout.clear': 'Clear Entire List',
    'checkout.clearConfirm': 'Clear entire list?',
    'checkout.clearDesc': 'This action will remove all games from your selection. Are you sure you want to proceed?',
    'checkout.whatsapp': 'WhatsApp',
    'checkout.no': 'No',
    'checkout.yes': 'Yes',
    'game.story': 'The Story',
    'game.gallery': 'Gallery',
    'game.trailer': 'Trailer',
    'game.moments': 'Moments',
    'game.added': 'Added',
    'game.add': 'Add',
    'game.notfound': 'Game Not Found',
    'game.return': 'Return to Catalog',
    'game.aiEnhanced': 'AI Enhanced',
    'game.refining': 'Refining...',
    'toast.removed': 'Removed from Selection',
    'toast.added': 'Game Added!',
    'toast.storageLimit': 'Storage Limit Exceeded',
    'toast.storageLimitDesc': 'You have reached the maximum storage limit.',
    'alert.actionRequired': 'Action Required',
    'alert.removeGames': 'Please remove some games to stay below the 1800 GB limit before closing.',
    'alert.maxStorage': 'Maximum Storage Reached!',
    'alert.maxStorageDesc': 'You have reached the absolute maximum storage limit of 1800 GB. You must remove some games to continue.',
    'alert.approaching': 'Approaching Final Limit',
    'alert.approachingDesc': 'You have exceeded 1400 GB. Would you like to stop and remove some games, or confirm that you wish to continue towards the 1800 GB limit?',
    'alert.surpassed960': 'Surpassed 960 GB!',
    'alert.surpassed960Desc': 'You have surpassed 960 GB. Your capacity is now transitioning to the 1.5 TB drive (Limit: 1400 GB). Keep going?',
    'alert.1tbRequired': '1 TB Drive Required',
    'alert.1tbRequiredDesc': 'You have exceeded 460 GB. You are now using the 1 TB drive capacity (Limit: 960 GB). Continue adding?',
    'alert.500gbReached': '500 GB Drive Reached',
    'alert.500gbReachedDesc': 'You have exceeded the 280 GB threshold and are now using the 500 GB drive (Limit: 460 GB). Keep going?',
    'alert.keepGoing': 'Keep Going',
    'alert.reviewDelete': 'Review & Delete',
    // Categories
    'cat.All': 'All',
    'cat.Recommended': 'Recommended',
    'cat.2 players': '2 Players',
    'cat.RPG': 'RPG',
    'cat.Race': 'Race',
    'cat.Adventure': 'Adventure',
    'cat.Open World': 'Open World',
    'cat.Action': 'Action',
    'cat.Shooter': 'Shooter',
    'cat.Horror': 'Horror'
  },
  ar: {
    'nav.catalog': 'الكتالوج',
    'nav.checkout': 'الدفع',
    'hero.subtitle': 'اشترِ لعبتك بسهولة، رخيصة وبسرعة',
    'hero.description': 'اكتشف عالماً جديداً من الألعاب على موقعنا، حيث تجتمع الإثارة والتفاصيل في تجربة فريدة. استكشف الآن واستمتع بمجموعة واسعة من الأسعار التي لا تقبل المنافسة!',
    'hero.browse': 'تصفح الآن',
    'hero.contact': 'اتصل بنا',
    'stats.title': 'لماذا تختارنا',
    'stats.collection': 'مجموعة الألعاب',
    'stats.working': 'ألعاب شغالة',
    'stats.customers': 'عملاء سعداء',
    'how.title': 'كيف يعمل',
    'how.step1.title': 'اختر القرص الصلب',
    'how.step1.desc': 'حدد سعة القرص الصلب التي تناسب احتياجاتك وتفضيلاتك في التخزين.',
    'how.step2.title': 'اختر ألعابك',
    'how.step2.desc': 'تصفح الكتالوج الضخم الخاص بنا وأضف عناوينك المفضلة إلى اختيارك الرقمي.',
    'how.step3.title': 'تواصل معنا عبر واتساب',
    'how.step3.desc': 'أرسل قائمتك النهائية إلى فريقنا عبر واتساب للتأكيد الفوري ومعرفة السعر.',
    'how.step4.title': 'نتحقق من كل لعبة',
    'how.step4.desc': 'نحن نختبر ونتحقق بعناية من جميع الألعاب المختارة للتأكد من أنها تعمل بنسبة 100٪، وتعمل بكامل طاقتها، وخالية من أي مشاكل قبل التسليم.',
    'how.step5.title': 'توصيل في أقل من يومين',
    'how.step5.desc': 'احصل على ألعابك واصلة مباشرة إلى قرصك الصلب وجاهزة للعب في وقت قياسي.',
    'how.step6.title': 'دعم ما بعد البيع',
    'how.step6.desc': 'فريق الدعم لدينا متاح دائماً لمساعدتك في حل أي مشكلات تقنية أو استفسارات بسرعة بعد استلام ألعابك.',
    'library.title': 'المكتبة',
    'filters.label': 'الفلاتر',
    'filters.sortBy': 'ترتيب حسب',
    'filters.maxStorage': 'أقصى مساحة تخزين',
    'filters.alphabetical': 'أبجدياً (A-Z)',
    'filters.newest': 'السنة: الأحدث إلى الأقدم',
    'filters.oldest': 'السنة: الأقدم إلى الأحدث',
    'filters.smallest': 'الحجم: الأصغر إلى الأكبر',
    'filters.largest': 'الحجم: الأكبر إلى الأصغر',
    'filters.viewResults': 'عرض النتائج',
    'filters.reset': 'إعادة ضبط الفلاتر',
    'search.placeholder': 'بحث عن الألعاب...',
    'search.noResults': 'لا توجد ألعاب تطابق اختياراتك',
    'search.tryAdjusting': 'حاول تعديل الفلاتر أو كلمات البحث.',
    'footer.connect': 'تواصل معنا',
    'footer.join': 'انضم إلى مجتمعنا على وسائل التواصل الاجتماعي للحصول على عروض وتحديثات حصرية.',
    'checkout.title': 'اختياراتك',
    'checkout.empty': 'قائمتك فارغة',
    'checkout.emptyDesc': 'أضف بعض الألعاب إلى اختياراتك لتراها هنا.',
    'checkout.games': 'الألعاب',
    'checkout.totalStorage': 'إجمالي المساحة',
    'checkout.clear': 'مسح القائمة بالكامل',
    'checkout.clearConfirm': 'مسح القائمة بالكامل؟',
    'checkout.clearDesc': 'سيؤدي هذا الإجراء إلى إزالة جميع الألعاب من اختياراتك. هل أنت متأكد أنك تريد الاستمرار؟',
    'checkout.whatsapp': 'واتساب',
    'checkout.no': 'لا',
    'checkout.yes': 'نعم',
    'game.story': 'القصة',
    'game.gallery': 'المعرض',
    'game.trailer': 'المقطع الدعائي',
    'game.moments': 'لحظات',
    'game.added': 'تمت الإضافة',
    'game.add': 'أضف',
    'game.notfound': 'اللعبة غير موجودة',
    'game.return': 'العودة إلى الكتالوج',
    'game.aiEnhanced': 'محسن بالذكاء الاصطناعي',
    'game.refining': 'جاري التحسين...',
    'toast.removed': 'تمت الإزالة من القائمة',
    'toast.added': 'تمت إضافة اللعبة!',
    'toast.storageLimit': 'تم تجاوز حد التخزين',
    'toast.storageLimitDesc': 'لقد وصلت إلى الحد الأقصى لمساحة التخزين.',
    'alert.actionRequired': 'إجراء مطلوب',
    'alert.removeGames': 'يرجى إزالة بعض الألعاب للبقاء تحت حد 1800 جيجابايت قبل الإغلاق.',
    'alert.maxStorage': 'تم الوصول إلى الحد الأقصى للتخزين!',
    'alert.maxStorageDesc': 'لقد وصلت إلى الحد الأقصى المطلق لمساحة التخزين البالغ 1800 جيجابايت. يجب عليك إزالة بعض الألعاب للمتابعة.',
    'alert.approaching': 'الاقتراب من الحد النهائي',
    'alert.approachingDesc': 'لقد تجاوزت 1400 جيجابايت. هل ترغب في التوقف وإزالة بعض الألعاب، أم تؤكد رغبتك في الاستمرار نحو حد 1800 جيجابايت؟',
    'alert.surpassed960': 'تجاوزت 960 جيجابايت!',
    'alert.surpassed960Desc': 'لقد تجاوزت 960 جيجابايت. تنتقل سعتك الآن إلى قرص 1.5 تيرابايت (الحد: 1400 جيجابايت). هل تستمر؟',
    'alert.1tbRequired': 'مطلوب قرص 1 تيرابايت',
    'alert.1tbRequiredDesc': 'لقد تجاوزت 460 جيجابايت. أنت تستخدم الآن سعة قرص 1 تيرابايت (الحد: 960 جيجابايت). هل تستمر في الإضافة؟',
    'alert.500gbReached': 'تم الوصول إلى قرص 500 جيجابايت',
    'alert.500gbReachedDesc': 'لقد تجاوزت عتبة 280 جيجابايت وتستخدم الآن قرص 500 جيجابايت (الحد: 460 جيجابايت). هل تستمر؟',
    'alert.keepGoing': 'استمر',
    'alert.reviewDelete': 'مراجعة وحذف',
    // Categories
    'cat.All': 'الكل',
    'cat.Recommended': 'موصى به',
    'cat.2 players': 'لاعبان',
    'cat.RPG': 'RPG',
    'cat.Race': 'سباق',
    'cat.Adventure': 'مغامرة',
    'cat.Open World': 'عالم مفتوح',
    'cat.Action': 'أكشن',
    'cat.Shooter': 'إطلاق نار',
    'cat.Horror': 'رعب'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('alkadi_language') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('alkadi_language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
