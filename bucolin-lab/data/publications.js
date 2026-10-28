// The lab's papers, newest first. The publications page groups them by year,
// and the home page shows the first three.
//
// Each one is printed as a reference: authors. year. title. venue
//
//   id       used by projects.js to list a paper under its project,
//            and as its link (publications.html#id)
//   authors  as they should be printed, "and" before the last name included
//   url      optional: makes the title a link
//   venue    everything that follows the title

const PUBLICATIONS = [
    {
    id: 'fromtweets',
    year: 2026,
    authors: 'Ece Elif Adak and Şaziye Betül Özateş',
    title: 'From Tweets to Trades: Analyzing the Influence of Public Mood over Stock Market Performance in Turkiye',
    url: 'https://arxiv.org/abs/2609.40064',
    venue: 'arXiv preprint arXiv:2609.40064.',
  },
  {
    id: 'ruznamcener',
    year: 2026,
    authors: 'Dilara Zeynep Gürer, Esma F. Bilgin Taşdemir, and Şaziye Betül Özateş',
    title: 'RuznamceNER: Named Entity Recognition Dataset for Ottoman Turkish',
    url: 'https://aclanthology.org/2026.lrec-1.126.pdf',
    venue: 'LREC 2026.',
  },
  {
    id: 'ota-boun',
    year: 2026,
    authors: 'Tarık Emre Tıraş, N. Cüneyd Ünal, Ada Cengiz, Ece Yurtseven, Esma F. Bilgin Taşdemir, and Şaziye Betül Özateş',
    title: 'OTA-BOUN: A Historical Turkish Dependency Treebank',
    url: 'https://aclanthology.org/2026.lrec-1.551.pdf',
    venue: 'LREC 2026.',
  },
  {
    id: 'antibacterial-screening',
    year: 2026,
    authors: 'Alperen Ozturk, Şaziye Betül Özateş, Sophia Bahar Root, Angela Violi, Nicholas Kotov, J. Scott VanEpps, and Emine Sumeyra Turali Emre',
    title: 'Automated Screening of Antibacterial Nanoparticle Literature: Dataset Curation and Model Evaluation',
    url: 'https://aclanthology.org/2026.eacl-long.20/',
    venue: 'In Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers), pages 454–465, Rabat, Morocco.',
  },
  {
    id: 'boun-smm4h',
    year: 2025,
    authors: 'Ece Elif Adak and Şaziye Betül Özateş',
    title: 'BOUN at #SMM4H-HeaRD 2025: Enhancing Dementia Family Caregiver Detection on Twitter/X with a Lightweight Language Model',
    url: 'https://workshop-proceedings.icwsm.org/pdf/2025_58.pdf',
    venue: 'In Proceedings of the Social Media Mining for Health/Health Real-World Data (#SMM4H-HeaRD) 2025 Workshop and Shared Tasks, ICWSM, Copenhagen, Denmark.',
  },
  {
    id: 'script-rec',
    year: 2025,
    authors: 'Dilara Zeynep Gürer, Ümit Atlamaz, and Şaziye Betül Özateş',
    title: 'Text extraction and script completion in images of arabic script-based calligraphy: A thesis proposal',
    url: 'https://aclanthology.org/2025.naacl-srw.25/',
    venue: 'In Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 4: Student Research Workshop).',
  },
  {
    id: 'nakba-ner',
    year: 2025,
    authors: 'Esma F. Bilgin Taşdemir and Şaziye Betül Özateş',
    title: 'NakbaTR: A Turkish NER Dataset for Nakba Narratives',
    url: 'https://aclanthology.org/2025.nakbanlp-1.13/',
    venue: 'In Proceedings of the first International Workshop on Nakba Narratives as Language Resources, pages 122–126, Abu Dhabi.',
  },
  {
    id: 'foundations',
    year: 2025,
    authors: 'Şaziye Betül Özateş, Tarık Emre Tıraş, Ece Elif Adak, Berat Doğan, Fatih Burak Karagöz, Efe Eren Genç, and Esma F. Bilgin Taşdemir',
    title: 'Building Foundations for Natural Language Processing of Historical Turkish: Resources and Models',
    url: 'https://arxiv.org/abs/2501.04828',
    venue: 'arXiv preprint arXiv:2501.04828.',
  },
  {
    id: 'ottoman-dependency',
    year: 2024,
    authors: 'Şaziye Betül Özateş, Tarık Emre Tıraş, Efe Eren Genç, and Esma F. Bilgin Taşdemir',
    title: 'Dependency Annotation of Ottoman Turkish with Multilingual BERT',
    url: 'https://aclanthology.org/2024.law-1.18',
    venue: 'In Proceedings of The 18th Linguistic Annotation Workshop (LAW-XVIII), pages 188–196, St. Julians, Malta. Association for Computational Linguistics.',
  },
  {
    id: 'clean-corpus',
    year: 2024,
    authors: 'Fatih Burak Karagöz, Berat Doğan, and Şaziye Betül Özateş',
    title: 'Towards a Clean Text Corpus for Ottoman Turkish',
    url: 'https://aclanthology.org/2024.sigturk-1.6/',
    venue: 'In Proceedings of the First Workshop on Natural Language Processing for Turkic Languages (SIGTURK 2024), accepted. Association for Computational Linguistics.',
  },
];
