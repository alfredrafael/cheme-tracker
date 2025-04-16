import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    // { linkText: 'Home', href: '/' },
    // { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12">
            <Link href="/" className="inline-flex items-center gap-2" style={{ textDecoration: 'none' }}>
                <Image
                    src="http://www.alfredorafael.com/wp-content/uploads/2025/04/ChemE_Logo_Signature.png"
                    width={40}
                    height={40}
                    alt="Netlify logo"
                />
                <div className="text-4xl font-bold text-gray-600">
                    <strong>ChemE</strong> Bug Tracker
                </div>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {/* <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link> */}
        </nav>
    );
}
