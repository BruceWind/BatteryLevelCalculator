export default function Footer({ lang }: { lang: 'en' | 'zh' }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-green-800 text-white py-4 w-full mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Battery Calculator. {lang === 'en' ? 'All rights reserved.' : '版权所有。'}</p>
      </div>
    </footer>
  );
}
