import { loadStripe } from '@stripe/stripe-js'
import { environment } from '../config/environment.js'

let stripePromise = null

function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(environment.stripePublicKey)
  }
  return stripePromise
}

const mockUrls = {
  basic:    'https://buy.stripe.com/test_eVqcN53St0ys17Kd32a7C04',
  mid:      'https://buy.stripe.com/test_fZu6oHbkV4OI17Kfbaa7C03',
  platinum: 'https://buy.stripe.com/test_4gM8wPcoZ1Cw03G8MMa7C01',
}

export async function redirectToCheckout(planKey) {
  await getStripe()
  // Mock — replace this object with a real HTTP call to your backend later
  window.location.href = mockUrls[planKey] ?? '#'
}
