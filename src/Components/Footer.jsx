

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="">Branding</a>
                    <a className="">Design</a>
                    <a className="">Marketing</a>
                    <a className="">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="">About us</a>
                    <a className="">Contact</a>
                    <a className="">Jobs</a>
                    <a className="">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;