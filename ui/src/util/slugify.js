export default function slugify (str) {
  return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
}
