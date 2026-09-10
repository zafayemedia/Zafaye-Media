import Link from "next/link";
import { CLIPPER_LINK, SITE, whatsappLink } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="zm-footer">
      <div className="zm-wrap">
        <div className="zm-f-grid">
          <div className="zm-f-brand">
            <span className="zm-brand">
              zafaye media<i>.</i>
            </span>
            <p className="zm-body">Working with brands across Pakistan and the US.</p>
            <address className="zm-f-legal">
              {SITE.legalName}
              <br />
              {SITE.legalAddress}
            </address>
          </div>

          <div>
            <h4>services</h4>
            <ul>
              <li>
                <Link href="/services#paid">paid social</Link>
              </li>
              <li>
                <Link href="/services#social">social &amp; content</Link>
              </li>
              <li>
                <Link href="/clipping">clipping</Link>
              </li>
              <li>
                <Link href="/services#build">websites &amp; shopify</Link>
              </li>
              <li>
                <Link href="/services#brand">branding</Link>
              </li>
              <li>
                <Link href="/services#leadbridge">leadbridge</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>company</h4>
            <ul>
              <li>
                <Link href="/work">case studies</Link>
              </li>
              <li>
                <Link href="/reviews">reviews</Link>
              </li>
              <li>
                <Link href={CLIPPER_LINK.href}>{CLIPPER_LINK.label}</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
              <li>
                <Link href="/terms">terms</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>contact</h4>
            <ul>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  whatsapp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href="https://instagram.com/zafaye.media" target="_blank" rel="noreferrer">
                  instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/zafaye.media" target="_blank" rel="noreferrer">
                  facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="zm-f-bottom">
          <span>© {year} zafaye media</span>
          <span>turning complexity to clarity</span>
          <Link href="/privacy">privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
