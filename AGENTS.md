# Architecture rules
- Keep the São Paulo legacy page HTML and CSS inside a Shadow DOM with native React form and interaction replacements, so the migrated Elementor design remains isolated from other landing pages without depending on WordPress.
- São Paulo contact submissions use a dedicated public write-only edge function with validated fields and a server-fixed spreadsheet destination, so no spreadsheet credentials or read access reach the browser.
- Apply São Paulo visual refinements through a separate token-based Shadow DOM stylesheet and scoped image observers, so the migrated content remains intact and other landing pages are unaffected.
- Keep São Paulo contact destinations in its dedicated configuration and derive visible labels and links from it, so repeated local details cannot contradict each other.
- Keep São Paulo optional marketing preference scoped to that page and default tracking off, so refusing measurement does not block contact or change shared integrations.