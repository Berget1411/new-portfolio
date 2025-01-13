import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='border-t'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6'>
          <div className='text-sm text-muted-foreground'>
            <p>© {new Date().getFullYear()} Ludvig Bergström</p>
          </div>
          <div className='flex items-center gap-4'>
            <Link
              href='https://github.com/Berget1411'
              target='_blank'
              className='text-muted-foreground transition-colors hover:text-primary'
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href='https://github.com/ludvigbergstrom'
              target='_blank'
              className='text-muted-foreground transition-colors hover:text-primary'
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
