import { motion } from 'framer-motion'
// motion is framer-motion's core export — it gives us animated versions
// of normal HTML tags, like motion.div instead of div

function FadeIn({ children }) {
  // children = whatever we wrap this component around (any section/component)
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      // initial = starting state BEFORE it's visible: invisible, shifted 60px down
      whileInView={{ opacity: 1, y: 0 }}
      // whileInView = state to animate TO, once this element scrolls into the viewport
      viewport={{ once: true, amount: 0.2 }}
      // once: true = only animate the FIRST time it enters view (not every scroll up/down)
      // amount: 0.2 = trigger once 20% of the element is visible on screen
      transition={{ duration: 0.6, ease: 'easeOut' }}
      // how the animation itself moves - 0.6s, smooth deceleration at the end
    >
      {children}
    </motion.div>
  )
}

export default FadeIn