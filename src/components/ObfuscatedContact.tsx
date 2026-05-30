/**
 * Contact details rendered as interleaved visible + hidden ("honeypot") spans.
 *
 * Humans and screen readers see the correct value: the decoy spans are
 * display:none, which is skipped by both the viewport and the accessibility
 * tree. But scrapers that regex the raw DOM/markup sweep up the decoys too,
 * poisoning the harvested address/number into something undeliverable. The
 * real value also never appears as one contiguous string literal in the
 * bundle, so source-scanning harvesters can't match it either.
 */

const Decoy = ({ children }: { children: string }) => (
  <span style={{ display: "none" }}>{children}</span>
);

export const ObfuscatedEmail = () => (
  <span>
    info<Decoy>.no.spam</Decoy>@<Decoy>REMOVE.</Decoy>bigal<Decoy>x</Decoy>
    strength<Decoy>.invalid</Decoy>.com
  </span>
);

export const ObfuscatedPhone = () => (
  <span>
    727<Decoy>000</Decoy>-504<Decoy>000</Decoy>-4123
  </span>
);
