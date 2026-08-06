export function inquireHref(service: string) {
  return `/inquire?service=${encodeURIComponent(service)}`;
}
