/**
 * HubSpot Help Center is still live. In-page links to it are wrapped in
 * <HelpCenter>. Flip this to false when that site is retired — every wrapped
 * block disappears in one change.
 *
 * Also delete the Help Center item under navigation.global.anchors in docs.json
 * (Mintlify cannot hide a nav anchor from this file).
 */
export const SHOW_HELP_CENTER_LINKS = true;

export function HelpCenter({ children }) {
  if (!SHOW_HELP_CENTER_LINKS) return null;
  return <>{children}</>;
}
