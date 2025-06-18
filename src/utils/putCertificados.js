
const certificados = [
   {
    0:"https://platzi.com/MigueEc/curso/2156-course/diploma-og/og.jpeg",
    1:"https://platzi.com/MigueEc/curso/9574-course/diploma-og/og.jpeg",
    2:"https://platzi.com/MigueEc/curso/2567-course/diploma-og/og.jpeg",
    3:"https://platzi.com/MigueEc/curso/3504-course/diploma-og/og.jpeg",
    4:"https://platzi.com/MigueEc/curso/1393-course/diploma-og/og.jpeg",
    5:"https://platzi.com/MigueEc/curso/2793-course/diploma-og/og.jpeg",
    6:"https://platzi.com/MigueEc/curso/11997-course/diploma-og/og.jpeg",
    7:"https://platzi.com/MigueEc/curso/11059-course/diploma-og/og.jpeg",
    8:"https://platzi.com/MigueEc/curso/10992-course/diploma-og/og.jpeg",
    9:"https://platzi.com/MigueEc/curso/12028-course/diploma-og/og.jpeg",   
    10:"https://platzi.com/MigueEc/curso/2519-course/diploma-og/og.jpeg",
    11:"https://platzi.com/MigueEc/curso/7924-course/diploma-og/og.jpeg",
    12:"https://platzi.com/MigueEc/curso/8617-course/diploma-og/og.jpeg",
    13:"https://platzi.com/MigueEc/curso/3222-course/diploma-og/og.jpeg",
    14:"https://platzi.com/MigueEc/curso/6933-course/diploma-og/og.jpeg",
    15:"https://platzi.com/MigueEc/curso/2414-course/diploma-og/og.jpeg",
    16:"https://platzi.com/MigueEc/curso/9144-course/diploma-og/og.jpeg",
    17:"https://platzi.com/MigueEc/curso/10135-course/diploma-og/og.jpeg",
    18:"https://platzi.com/MigueEc/curso/3208-course/diploma-og/og.jpeg",
    19:"https://platzi.com/MigueEc/curso/2418-course/diploma-og/og.jpeg",
    20:"https://platzi.com/MigueEc/curso/10266-course/diploma-og/og.jpeg",
    21:"https://platzi.com/MigueEc/curso/2299-course/diploma-og/og.jpeg",
    22:"https://platzi.com/MigueEc/curso/1775-course/diploma-og/og.jpeg",
    23:"https://platzi.com/MigueEc/curso/11190-course/diploma-og/og.jpeg",
    24:"https://platzi.com/MigueEc/curso/2417-course/diploma-og/og.jpeg",
    25:"https://platzi.com/MigueEc/curso/3221-course/diploma-og/og.jpeg",
    26:"https://platzi.com/MigueEc/curso/4260-course/diploma-og/og.jpeg",
    27:"https://platzi.com/MigueEc/curso/5349-course/diploma-og/og.jpeg",
    28:"https://platzi.com/MigueEc/curso/11025-course/diploma-og/og.jpeg",
    29:"https://platzi.com/MigueEc/curso/10662-course/diploma-og/og.jpeg",
    30:"https://platzi.com/MigueEc/curso/4261-course/diploma-og/og.jpeg",
    31:"https://platzi.com/MigueEc/curso/4989-course/diploma-og/og.jpeg",
    32:"https://platzi.com/MigueEc/curso/1798-course/diploma-og/og.jpeg",
    33:"https://platzi.com/MigueEc/curso/7736-course/diploma-og/og.jpeg",
    34:"https://platzi.com/MigueEc/curso/10002-course/diploma-og/og.jpeg",
    35:"https://platzi.com/MigueEc/curso/1814-course/diploma-og/og.jpeg",
    36:"https://platzi.com/MigueEc/curso/2229-course/diploma-og/og.jpeg",
    37:"https://platzi.com/MigueEc/curso/2222-course/diploma-og/og.jpeg",
    38:"https://platzi.com/MigueEc/curso/2030-course/diploma-og/og.jpeg",
    39:"https://platzi.com/MigueEc/curso/1758-course/diploma-og/og.jpeg",
    40:"https://platzi.com/MigueEc/curso/2008-course/diploma-og/og.jpeg",
    41:"https://platzi.com/MigueEc/curso/2053-course/diploma-og/og.jpeg"    
   }
]

export const getFirstThreeCertificates = () => {
    return Object.values(certificados[0]).slice(0, 3);
  }