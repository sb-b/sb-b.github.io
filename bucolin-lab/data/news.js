// News and announcements, newest first.
//
// To add an item, copy one of the blocks below to the top of the list and edit it.
//
//   id     short, unique, lowercase with dashes. It becomes the link to the item (news.html#id).
//   tag    'paper', 'award', 'people' or 'resource'. The news page can be filtered by it.
//   date   optional: '2026', '2026-03' or '2026-03-14'. Printed next to the tag.
//   body   the announcement itself
//   more   optional: further lines, shown as a list under the text
//
// body and more need both an en and a tr version, each between backticks (`like this`).
// Inside the text:
//   [words](https://example.org)   makes a link
//   **words**                      makes them bold
//   {en|Some Title}                marks an English title quoted in Turkish text,
//                                  so that screen readers pronounce it as English

const NEWS = [
 {
    id: 'dariah-day-2026',
    tag: 'event',
    body: {
      en: `BUCOLIN Lab presented the latest research on historical Turkish NLP at [Dariah Day Istanbul 2026](https://www.dariah.eu/events/dariah-day-istanbul-2026). Held on November 26, 2026, at Istanbul’s historic Rami Library, the event brought together government institutions, universities, cultural heritage organizations, researchers, and students to introduce the [DARIAH](https://www.dariah.eu/) infrastructure, showcase Türkiye’s growing potential in digital humanities, and foster national and international networking and institutional collaboration.`,
      tr: `BUCOLIN Lab, [Dariah Day Istanbul 2026](https://www.dariah.eu/events/dariah-day-istanbul-2026) etkinliğinde tarihsel Türkçe doğal dil işleme (NLP) alanındaki güncel araştırmalarını sundu. 26 Kasım 2026 tarihinde İstanbul’un tarihi Rami Kütüphanesi’nde düzenlenen etkinlik; [DARIAH](https://www.dariah.eu/) altyapısını tanıtmak, Türkiye’nin dijital beşeri bilimler alanındaki büyüyen potansiyelini sergilemek ve ulusal ve uluslararası düzeyde ağ oluşturma ile kurumsal iş birliğini teşvik etmek amacıyla kamu kurumlarını, üniversiteleri, kültürel miras kuruluşlarını, araştırmacıları ve öğrencileri bir araya getirdi.`,  },
 },
 {
    id: 'csn-2026-paper',
    tag: 'paper',
    body: {
      en: `Dilara Zeynep Gürer presented her paper titled "Standards-Aligned Synthetic Intent Generation Framework for Network Slicing toward Agentic Network Management" at the 2026 IEEE Conference on Standards for Communications and Networking (CSCN 2026), held in London, United Kingdom, on 7–9 September 2026. You can access the paper [here](https://ieeexplore.ieee.org/document/11772001). Congratulations, Dilara!`,
      tr: `Dilara Zeynep Gürer "Standards-Aligned Synthetic Intent Generation Framework for Network Slicing toward Agentic Network Management" başlıklı çalışmasını 7-9 Eylül 2026'da Londra'da gerçekleşen 2026 IEEE Conference on Standards for Communications and Networking (CSCN 2026)'te sundu. Makaleye [bu linkten](https://ieeexplore.ieee.org/document/11772001) ulaşabilirsiniz. Tebrikler, Dilara!`,
      },


  {
    id: 'lrec-2026-papers',
    tag: 'paper',
    body: {
      en: `Two papers from BUCOLIN Lab have been accepted to **[LREC 2026](https://lrec2026.info/)**. Congratulations to all the authors!`,
      tr: `BUCOLIN Lab’dan iki bildiri **[LREC 2026](https://lrec2026.info/)**’ya kabul edildi. Tüm yazarları tebrik ederiz!`,
    },
    more: [
      {
        en: `**[Paper 1](https://aclanthology.org/anthology-files/anthology-files/pdf/lrec/2026.lrec-1.126.pdf)**: "RuznamceNER: A Named Entity Recognition Dataset for Ottoman Turkish"`,
        tr: `**[1. bildiri](https://aclanthology.org/anthology-files/anthology-files/pdf/lrec/2026.lrec-1.126.pdf)**: "{en|RuznamceNER: A Named Entity Recognition Dataset for Ottoman Turkish}"`,
      },
      {
        en: `**[Paper 2](https://aclanthology.org/anthology-files/anthology-files/pdf/lrec/2026.lrec-1.551.pdf)**: "OTA-BOUN: A Historical Turkish Dependency Treebank"`,
        tr: `**[2. bildiri](https://aclanthology.org/anthology-files/anthology-files/pdf/lrec/2026.lrec-1.551.pdf)**: "{en|OTA-BOUN: A Historical Turkish Dependency Treebank}"`,
      },
    ],
  },
  {
    id: 'first-ms-graduate',
    tag: 'people',
    body: {
      en: `BUCOLIN Lab proudly celebrates its first-ever M.S. graduate, **Enes Köser**, who successfully defended his thesis titled "Deep Learning-Based Public Transport Demand Forecasting." Congratulations to Enes!`,
      tr: `BUCOLIN Lab, ilk yüksek lisans mezununu gururla kutluyor: **Enes Köser**, "{en|Deep Learning-Based Public Transport Demand Forecasting}" başlıklı tezini başarıyla savundu. Tebrikler, Enes!`,
    },
  },
  {
    id: 'eacl-2026',
    tag: 'paper',
    body: {
      en: `Our recent work titled "Automated Screening of Antibacterial Nanoparticle Literature: Dataset Curation and Model Evaluation" co-authored with Alperen Öztürk, E. Sümeyra Turali-Emre, and colleagues from University of Michigan has been accepted to [EACL 2026](https://2026.eacl.org/) **Main Conference**! You can access the paper [here](https://aclanthology.org/2026.eacl-long.20/).`,
      tr: `Alperen Öztürk, E. Sümeyra Turali-Emre ve Michigan Üniversitesi’nden meslektaşlarımızla birlikte yazdığımız "{en|Automated Screening of Antibacterial Nanoparticle Literature: Dataset Curation and Model Evaluation}" başlıklı son çalışmamız [EACL 2026](https://2026.eacl.org/) **ana konferansına** kabul edildi! Bildiriye [buradan](https://aclanthology.org/2026.eacl-long.20/) ulaşabilirsiniz.`,
    },
  },
  {
    id: 'naacl-srw-2025-award',
    tag: 'award',
    body: {
      en: `Dilara Zeynep Gürer has been awarded the **Best Thesis Award** at [NAACL SRW 2025](https://naacl2025-srw.github.io/) for her groundbreaking thesis proposal titled "Text Extraction and Script Completion in Images of Arabic Script-Based Calligraphy". Congratulations to Dilara! You can access the paper [here](https://aclanthology.org/2025.naacl-srw.25/).`,
      tr: `Dilara Zeynep Gürer, "{en|Text Extraction and Script Completion in Images of Arabic Script-Based Calligraphy}" başlıklı çığır açıcı tez önerisiyle [NAACL SRW 2025](https://naacl2025-srw.github.io/)’te **En İyi Tez Ödülü**’ne layık görüldü. Tebrikler, Dilara! Bildiriye [buradan](https://aclanthology.org/2025.naacl-srw.25/) ulaşabilirsiniz.`,
    },
  },
  {
    id: 'smm4h-2025',
    tag: 'award',
    body: {
      en: `Ece Elif Adak won first place in [SMM4H-HeaRD 2025](https://healthlanguageprocessing.org/smm4h-2025/) Shared Task 3, successfully detecting dementia family caregivers on Twitter. Awesome work, Elif! You can access the paper [here](https://workshop-proceedings.icwsm.org/pdf/2025_58.pdf).`,
      tr: `Ece Elif Adak, [SMM4H-HeaRD 2025](https://healthlanguageprocessing.org/smm4h-2025/) {en|Shared Task 3}’te, demans hastalarına bakım veren aile üyelerini Twitter’da başarıyla tespit ederek birinci oldu. Harika iş çıkardın, Elif! Bildiriye [buradan](https://workshop-proceedings.icwsm.org/pdf/2025_58.pdf) ulaşabilirsiniz.`,
    },
  },
  {
    id: 'naacl-srw-2025',
    tag: 'paper',
    body: {
      en: `Dilara Zeynep Gürer's paper, based on her thesis research, has been accepted to the [NAACL 2025 Student Research Workshop](https://naacl2025-srw.github.io/)! Congratulations, Dilara!`,
      tr: `Dilara Zeynep Gürer’in tez araştırmasına dayanan bildirisi [NAACL 2025 Student Research Workshop](https://naacl2025-srw.github.io/)’a kabul edildi! Tebrikler, Dilara!`,
    },
  },
  {
    id: 'efe-saarland',
    tag: 'people',
    body: {
      en: `Efe Eren Genç has been accepted into the MS program at Saarland University! Wishing you the best on this new journey, Efe!`,
      tr: `Efe Eren Genç, Saarland Üniversitesi’nde yüksek lisans programına kabul edildi! Bu yeni yolculuğunda başarılar dileriz, Efe!`,
    },
  },
  {
    id: 'hugging-face',
    tag: 'resource',
    body: {
      en: `We’ve launched [our Hugging Face page](https://huggingface.co/BUCOLIN), featuring various models and resources for historical Turkish NLP. Check it out, and for more details, read the [preprint version of our paper](https://arxiv.org/abs/2501.04828)!`,
      tr: `Tarihi Türkçe için çeşitli doğal dil işleme modelleri ve kaynakları içeren [Hugging Face sayfamızı](https://huggingface.co/BUCOLIN) yayına aldık. Göz atın; daha fazla ayrıntı için [makalemizin ön baskısını](https://arxiv.org/abs/2501.04828) okuyun!`,
    },
  },
];
