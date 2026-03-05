export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-8 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-8 md:px-20 text-center text-sm">

        <p className="mb-2">
          © {new Date().getFullYear()} Sandeep Singh Rathore
        </p>

       

      </div>
    </footer>
  );
}