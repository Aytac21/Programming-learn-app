export const interviewQuestions = {
  html: [
    {
      title: "HTML-də DOCTYPE-in məqsədi nədir?",
      difficulty: "Çətin",
      answer:
        "DOCTYPE HTML, HTML sənəd tipini və versiyasını bəyan etmək üçündür.",
    },
    {
      title: "HTML5-də bəzi yeni xüsusiyyətlər hansılardır?",
      difficulty: "Asan",
      answer:
        "HTML5 bir çox yeni xüsusiyyətlər təqdim edir, məsələn, semantik elementlər, multimedia dəstəyi və təkmilləşmiş form nəzarətləri.",
    },
    {
      title: "<div> və <span> teqləri arasındakı fərq nədir?",
      difficulty: "Asan",
      answer:
        "<div> və <span> teqləri hər ikisi də məzmunu qruplaşdırmaq üçündür, amma <div> blok səviyyəli elementdir və <span> isə inline elementdir.",
    },
    {
      title: "Semantik HTML istifadəsini izah edin.",
      difficulty: "Orta",
      answer:
        "Semantik HTML məzmunun təsvirindən çox onun mənasını vurğulamağa nail olmaq üçündür.",
    },
    {
      title: "HTML-də data atributları nədir?",
      difficulty: "Çətin",
      answer:
        "HTML-də data atributları bir element haqqında əlavə məlumat saxlamağa imkan verir və bu məlumat JavaScript tərəfindən istifadə oluna bilər.",
    },
    {
      title: "Audio və video necə yerləşdirilir?",
      difficulty: "Orta",
      answer:
        "HTML-də səs və video elementləri səhifəyə səs və video fayllarını yerləşdirmək üçündür.",
    },
    {
      title: "<img> teqində alt atributunun önəmi nədir?",
      difficulty: "Asan",
      answer:
        "<img> teqində alt atributu bir şəklin yüklənə bilmədiyi halda görüntülənən alternativ mətni təqdim edir.",
    },
    {
      title: "HTML-də inline və block elementlər arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "HTML-də inline elementlər eyni xətte görünür, əksər elementlər yeni xəttə keçər və mövcud eni götürür.",
    },
    {
      title: "<meta> teqi HTML-də hansı məqsədlə işlənir?",
      difficulty: "Asan",
      answer:
        "<meta> teqi HTML sənədi haqqında meta məlumatları təmin etmək üçündür, məsələn, karakter tipi, təsvir və açar sözlər.",
    },
    {
      title: "<strong> və <b> teqləri arasındakı nədir?",
      difficulty: "Orta",
      answer:
        "<strong> və <b> teqləri hər ikisi də mətini qalınlaşdırmaq üçündür, lakin <strong> daha güclü bir semantik məna daşıyır.",
    },
    {
      title: "<form> teqinin HTML-də məqsədi nədir?",
      difficulty: "Asan",
      answer: "<form> teqi HTML form yaratmaq üçündür.",
    },
    {
      title: "<head> teqinin önəmi nədir?",
      difficulty: "Orta",
      answer:
        "<head> teqi HTML sənədi haqqında əlavə məlumatlar, məsələn, başlıq, stil şəkilləri üçün keçidlər və skriptlər kimi.",
    },
    {
      title: "HTML-də <script> teqi hansı məqsədlə istifadə olunur?",
      difficulty: "Çətin",
      answer: "<script> teqi JavaScript kodunu səhifəyə əlavə etmək üçündür.",
    },
  ],
  css: [
    {
      title: "Margin və Padding arasındakı fərqi izah edin.",
      difficulty: "Asan",
      answer:
        "Margin, elementin sərhədinin xaricində olan boşluğu təyin edir, padding isə elementin sərhədinin içində olan boşluğu.",
    },
    {
      title: "CSS-də box model nədir?",
      difficulty: "Orta",
      answer:
        "CSS qutu modeli veb səhifədə elementlərin düzəlilməsini və rənglənməsini təsvir edən modeldir.",
    },
    {
      title: "display: inline və display: block arasındakı fərqi izah edin.",
      difficulty: "Asan",
      answer:
        "display: inline elementləri inline, display: block isə blok səviyyəli elementləri etmək üçündür.",
    },
    {
      title: 'CSS-də "box-sizing" xüsusiyyəti nədir? İstifadəsini izah edin.',
      difficulty: "Orta",
      answer:
        "CSS box-sizing xüsusiyyəti elementin ümumi enini və hündürlüyünün necə hesablanacağını təyin edir.",
    },
    {
      title: "CSS-də pseudo-classlar nədir? Bəzi nümunələr verin.",
      difficulty: "Asan",
      answer:
        "CSS pseudo-classlar elementləri seçmək və onları hərəkət vəziyyəti və ya mövqe əsasında stilizasiya etmək üçündür.",
    },
    {
      title: "CSS xüsusiyyət spesifikliyinin konseptini izah edin.",
      difficulty: "Orta",
      answer:
        "CSS spesifiklik konsepti seçicinin bir elementi hədəfləməkdə ne qədər xüsusi olduğunu ölçür.",
    },
    {
      title: "CSS-də z-index-in məqsədi nədir?",
      difficulty: "Orta",
      answer:
        "z-index CSS-də mövqeləşdirilmiş elementlərin üst-üstə düşmə sırasını təyin edir.",
    },
    { title: "Float xüsusiyyəti CSS-də necə işləyir?", difficulty: "Asan" },
    {
      title: "CSS preprosessorları nədir? Misal verin, əgər varsa.",
      difficulty: "Orta",
      answer:
        "CSS float xüsusiyyəti elementin sol və ya sağa getməli olduğunu təyin edir.",
    },
    {
      title:
        "CSS-də position: relative, position: absolute və position: fixed arasındakı fərqləri izah edin.",
      difficulty: "Orta",
      answer:
        "`position: relative` elementin mövqeyini normallaşdırılmış mövqesinə nisbətən təyin etməyə imkan verir, `position: absolute` isə elementi onun ən yaxın pozisiyona təyin edilmiş (non-static) üst elementə görə pozisiyonlandırır. `position: fixed` isə elementi səhifədə scroll edilsə də daimi mövqeyə qoymağa imkan verir, bu, çoğunluqla navigasiya paneli və ya sabit başlıqlar üçün istifadə olunur.",
    },
    {
      title: 'CSS-də "box-shadow" xüsusiyyəti nədir? Onun istifadəsi necədir?',
      difficulty: "Asan",
      answer:
        "CSS box-shadow xüsusiyyəti elementə bir göl effekti əlavə etmək üçündür.",
    },
  ],

  javascript: [
    {
      title: "let və var arasındakı fərqi izah edin.",
      difficulty: "Asan",
      answer:
        "let və var arasındakı əsas fərq let-in blok sahəsinin, var-ın isə funksiya sahəsinin olmasıdır.",
    },
    {
      title: '"undefined" və "null" arasındakı fərqi izah edin.',
      difficulty: "Asan",
      answer:
        "'Undefined' bir dəyişənin bəyan edildiyi halda ona qiymət təyin edilmədiyini göstərir, əks halda 'null' qiyməti olmayan və ya heç bir obyekt təmsil edən bir təyinat qiymətidir.",
    },
    {
      title: "Closure-lar nədir? Nümunə verin.",
      difficulty: "Orta",
      answer:
        "JavaScript-də Closure-lar funksiyaların əsas funksiyadan sonra da bitdikdə belə funksiyadan dəyişənlərə daxil olmağa icazə verir.",
    },
    {
      title: "Hoisting konseptini izah edin.",
      difficulty: "Asan",
      answer:
        "JavaScript-də Hoisting dəyər və funksiya bəyanatlarının kompilyasiya zamanı özündə daxil olduğu məsələsidir.",
    },
    {
      title: "let, const və var arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "let, const və var JavaScript-də dəyişənlər bəyan etmək üçündür və onlar sahə və təkrarlama əsasında fərqlənir.",
    },
    {
      title: "Prototipal inheritance necə işləyir?",
      difficulty: "Orta",
      answer:
        "JavaScript-də Prototipal inheritance obyektlərin bir-birindən xüsusiyyət və metodları almağını təmin edən bir mexanizmdir.",
    },
    {
      title: "Event Loop nədir? İzah edin.",
      difficulty: "Orta",
      answer:
        "JavaScript-də Event Loop kodun blok olmayan və asinxron olaraq icra olunmasına icazə verən bir mexanizmdir.",
    },
    {
      title: "Arrow Functions nədir? Nümunə verin.",
      difficulty: "Asan",
      answer:
        "JavaScript-də Arrow Functions funksiya ifadələri yazmaq üçün qısa bir sintaksis təqdim edir.",
    },
    {
      title: "== və === arasındakı fərq nədir?",
      difficulty: "Asan",
      answer:
        "== JavaScript-də lüzumsuz bərabərlik operatoru, === isə sıx bərabərlik operatorudur.",
    },
    {
      title: "Promises nədir? Məqsədini izah edin.",
      difficulty: "Orta",
      answer:
        "JavaScript-də Promises asinxron əməliyyatın nəticəsini və ya uğursuzluğunu təmsil edən obyektlərdır.",
    },
    {
      title: "Javascript-də səhvləri necə idarə edə bilərsiniz?",
      difficulty: "Asan",
      answer:
        "JavaScript-də səhv idarə etmə yolu try...catch blokları istifadə edərək və səhvə cavab verərək nizamlanır.",
    },
  ],

  react: [
    {
      title: "JSX nədir? Onun üstünlüklərini izah edin.",
      difficulty: "Asan",
      answer:
        "React-də JSX HTML ilə JavaScripti birləşdirmək imkanı verən bir sintaksis əlavəsidir.",
    },
    {
      title: "State və props arasındakı fərqi izah edin.",
      difficulty: "Asan",
      answer:
        "React-də State dəyişənlərin vaxtla dəyişə biləcəyi məlumatı saxlamaq üçündür və props ana komponentdən uşaq komponentə məlumat keçmək üçündür.",
    },
    {
      title:
        "React Hooks-lar nədir? Bəzi ən çox istifadə olunan hook nümunələri verin.",
      difficulty: "Orta",
      answer:
        "React Hooks React-də funksiya komponentlərdə dəyişən və həyat dövrü xüsusiyyətlərindən istifadə etməyə imkan verən funksiyalardır.",
    },
    {
      title: "React listlərində key-in məqsədi nədir? Niyə vacibdir?",
      difficulty: "Orta",
      answer:
        "React listlərində Keys, React-ə necə elementlərin dəyişdiyini, əlavə edildiyini və ya çıxarıldığını müəyyənləşdirməkdə kömək edir.",
    },
    {
      title: "Component həyat dövrü metodlarını izah edin.",
      difficulty: "Orta",
      answer:
        "React-də Component həyat dövrü metodları mounting, updating və unmounting mərhələlərini daxil edir.",
    },
    {
      title: "Higher-order komponentlər (HOC) nədir? Nümunə verin.",
      difficulty: "Orta",
      answer:
        "React-də Higher-order components (HOC) komponenti götürüb əlavə funksionalite ilə yeni bir komponent qaytarana funksiyalardır.",
    },
    {
      title: "React-da virtual DOM nədir? Performansı necə yaxşılaşdır?",
      difficulty: "Asan",
      answer:
        "React virtual DOM həqiqi DOM-un yüngül nüsxəsidir ki, DOM-un doğrudan idarə edilməsinin yüngül effektini artırsın.",
    },
    {
      title:
        "React-da controlled və uncontrolled komponentlərin konseptini izah edin.",
      difficulty: "Orta",
      answer:
        "React-da Controlled və Uncontrolled komponentlər form elementlərinin vəziyyətini necə idarə edəcəyini və saxlayacağını təyin edir.",
    },
    {
      title: "Redux nədir? Onun rolunu izah edin.",
      difficulty: "Orta",
      answer:
        "React-də Redux, React tətbiqinin vəziyyətini öncədən gözləmək üçün istifadə olunan bir vəziyyət idarəetmə kitabxanasıdır.",
    },
    {
      title:
        "React Fragmentləri nədir? Onları ne zaman və niyə istifadə edərdiniz?",
      difficulty: "Asan",
      answer:
        "React-də React Fragmentləri bir neçə elementi əlavə bir node-a qoymadan qruplamağa imkan verir.",
    },
  ],

  python: [
    {
      title: "Python dilində 'list' və 'tuple' arasındakı fərqlər nələrdir?",
      difficulty: "Asan",
      answer:
        "Python dilində 'list' və 'tuple' sifarişli elementləri saxlamaq üçündür, amma listlər dəyişilə bilən, tuple-lar isə dəyişilə bilməyən obyektləridir.",
    },
    {
      title: "Python dilində 'if' və 'elif' arasındakı fərqlər nələrdir?",
      difficulty: "Asan",
      answer:
        "Python dilində 'if' və 'elif' şərti şubələr üçün istifadə olunur, 'elif' isə 'else if' kimi qısa bir yazıdır.",
    },
    {
      title:
        "Python dilində 'append()' və 'extend()' metodları arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "Python dilində 'append()' və 'extend()' metodları elementləri listə əlavə etmək üçündür, 'append()' tək bir element əlavə edir, 'extend()' isə bir neçə element əlavə edir.",
    },
    {
      title:
        "'try', 'except', 'finally' və 'raise' ifadələrinin funksiyaları hansılardır?",
      difficulty: "Orta",
      answer:
        "'try', 'except', 'finally' və 'raise' Python dilində xətalara cavab vermək üçün istifadə olunur.",
    },
    {
      title:
        "Python dilində 'global' və 'local' dəyişənlər arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "Python dilində 'global' və 'local' dəyişənlər onların sahəsinə görə müəyyən edilir, 'global' bütün proqram ərzində əlçatan olur və 'local' yalnız hazırki funksiyanın sahəsində məhdudlaşır.",
    },
    {
      title:
        "Funksiyaların parametrləri ilə argumentləri arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "Python dilində funksiya parametrləri və argumentləri arasındakı fərq parametrlərin funksiya təyinatındakı dəyişənlər olduğu, argumentlərin isə funksiyağa ötürülən dəyərlər olduğudur.",
    },
    {
      title:
        "Python dilində 'map()' və 'filter()' funksiyalarının istifadəsi hansı məqsədlərlə üstlənir?",
      difficulty: "Asan",
      answer:
        "Python-da 'map()' və 'filter()' funksiyaları, müvafiq olaraq, təkrarlana bilən hər bir elementə funksiya tətbiq etmək və şərtə əsaslanan elementləri filtrləmək üçün istifadə olunur.",
    },
    {
      title: "'==', 'is' və 'in' operatorları arasındakı fərqlər nələrdir?",
      difficulty: "Orta",
      answer:
        "Python-da '==', 'is' və 'in' operatorları müvafiq olaraq bərabərlik testi, şəxsiyyət testi və üzvlük testi üçün istifadə olunur.",
    },
    {
      title: "Python dilində 'mutable' və 'immutable' obyektlər hansılardır?",
      difficulty: "Orta",
      answer:
        "Python-da dəyişən obyektlər yaradıldıqdan sonra dəyişdirilə bilər, dəyişməz obyektlər isə dəyişdirilə bilməz.",
    },
    {
      title:
        "'break' və 'continue' ifadələrinin işlədilməsindəki məqsəd nədir?",
      difficulty: "Asan",
      answer:
        "Python-da 'break' və 'continue' ifadələri dövrə nəzarəti üçün istifadə olunur, 'break' dövrəni dayandırır və 'continue' döngə kodunun qalan hissəsini atlayır.",
    },
  ],
};
