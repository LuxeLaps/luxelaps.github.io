export default function Footer(){
    return (
        <footer className="footer">
            <p>social links</p>
            <ul>
                <li className="footer-item"><a href="#linkedin">LinkedIn</a></li>
                <li className="footer-item"><a href="#github">GitHub</a></li>
                <li className="footer-item"><a href="#twitter">Twitter</a></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Satyam's Portfolio. All rights reserved.</p>
        </footer>
    )
}