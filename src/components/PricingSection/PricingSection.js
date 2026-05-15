import { redirectToCheckout } from '../../composables/useStripe.js'

export default {
  name: 'PricingSection',
  setup() {
    const plans = [
      { key: 'basic', popular: false, featureKeys: [0,1,2,3].map(i => `pricing.basic.features[${i}]`) },
      { key: 'mid', popular: true, featureKeys: [0,1,2,3,4].map(i => `pricing.mid.features[${i}]`) },
      { key: 'platinum', popular: false, featureKeys: [0,1,2,3,4].map(i => `pricing.platinum.features[${i}]`) }
    ]
    async function onBuyNow(planKey) { await redirectToCheckout(planKey) }
    return { plans, onBuyNow }
  }
}
