// Facts about the lab that more than one page needs.
// Anything that reads differently in the two languages is written as { en, tr }.
// Those texts sit between backticks (`like this`), so apostrophes and quotation
// marks can be typed inside them as they are.

const LAB = {
  // The lab is called BUCOLIN in both languages. The long form is what the
  // letters stand for, and there is no Turkish version of it.
  name: `BUCOLIN`,
  longName: `Boğaziçi University Computational Linguistics Lab`,

  // the English intro is also written out in index.html, in the <noscript> block
  intro: {
    en: `Founded in 2023, our Computational Linguistics Laboratory at Boğaziçi University focuses on natural language processing, deep learning, and computational social science. We develop advanced models and tools to analyze language, from historical texts to modern applications, bridging technology and linguistics.`,
    tr: `2023’te kurulan, Boğaziçi Üniversitesi’ndeki hesaplamalı dilbilim laboratuvarımız doğal dil işleme, derin öğrenme ve hesaplamalı sosyal bilimlere odaklanıyor. Tarihi metinlerden modern uygulamalara kadar dili çözümlemek için ileri düzey modeller ve araçlar geliştiriyor, teknoloji ile dilbilim arasında köprü kuruyoruz.`,
  },

  institute: {
    name: {
      en: `Institute for Data Science and Artificial Intelligence`,
      tr: `Veri Bilimi ve Yapay Zeka Enstitüsü`,
    },
    url: 'https://dsai.bogazici.edu.tr/en',
    // the institute prints its address in Turkish on both versions of its site, so do we
    address: [
      'Boğaziçi Üniversitesi Güney Kampüs',
      'Veri Bilimi ve Yapay Zeka Enstitüsü',
      '34342 Bebek/İstanbul, Türkiye',
    ],
    phone: '+90 212 359 7307',
    map: 'https://maps.app.goo.gl/5qH62kqft4HGcHYi7',
  },

  huggingface: 'https://huggingface.co/BUCOLIN',
};
