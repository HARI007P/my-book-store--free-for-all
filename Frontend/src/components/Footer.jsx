import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 bg-slate-900 text-white rounded">
        {/* Navigation Links */}
        <nav className="flex gap-6">
          <a href="/about" className="hover:text-green-400 transition">About us</a>
          <a href="/contact" className="hover:text-green-400 transition">Contact us</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          {/* Twitter */}
          <a href="https://twitter.com/temp-link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.867 4.1 6.904 1.671 3.923a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0024 4.557z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/temp-link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.615 3.184C16.011 2.938 7.984 2.938 4.385 3.184 0.488 3.45 0.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.999V8l8 4-8 4z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/temp-link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/temp-link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.131 4.572.355 3.503 1.424 2.434 2.493 2.21 3.694 2.151 4.973.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.279.283 2.48 1.352 3.549 1.069 1.069 2.27 1.293 3.549 1.352C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.279-.059 2.48-.283 3.549-1.352 1.069-1.069 1.293-2.27 1.352-3.549C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668-.072-4.948-.059-1.279-.283-2.48-1.352-3.549C20.507.355 19.306.131 18.027.072 16.747.013 16.338 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <aside className="mt-4">
          <p>Copyright © 2024 - All rights reserved by Hari Book Store</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
