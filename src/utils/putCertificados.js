
const englishCertificates = [
  "https://platzi.com/MigueEc/curso/2567-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2519-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2414-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/9144-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2418-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/7736-course/diploma-og/og.jpeg"
];

const checkImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export const getCertificates = async () => {
  try {
    return [...englishCertificates];
  } catch (error) {
    console.error('Error al cargar certificados:', error);
    return [];
  }
};