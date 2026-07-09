export function calculateAge(dobString) {
  if (!dobString) return null;
  const dob = new Date(dobString);
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateUserInfo(info) {
  const errors = {};

  if (!info.name || !info.name.trim()) {
    errors.name = "নাম আবশ্যক";
  }

  if (!info.dob) {
    errors.dob = "জন্ম তারিখ আবশ্যক";
  } else {
    const age = calculateAge(info.dob);
    if (age === null) errors.dob = "সঠিক তারিখ দিন";
    else if (age < 18) errors.dob = "Enroll করতে বয়স ১৮+ হতে হবে";
    else if (age > 110) errors.dob = "সঠিক তারিখ দিন";
  }

  const hasContact = Boolean(info.phone?.trim() || info.email?.trim() || info.telegram?.trim());
  if (!hasContact) {
    errors.contact = "Phone, Email বা Telegram Username-এর অন্তত একটি দিন";
  }
  if (info.email?.trim() && !EMAIL_RE.test(info.email.trim())) {
    errors.email = "সঠিক Email দিন";
  }

  return errors;
}

export function isStep2Valid(info) {
  return Object.keys(validateUserInfo(info)).length === 0;
}
