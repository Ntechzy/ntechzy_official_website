import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ value }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, value, { duration: 2 });

        return animation.stop;
    }, []);

    return (
        <motion.div className="text-4xl font-bold"  initial={{ opacity: 0 }} whileInView={{opacity: 1}} viewport={{once: true}}>
            {rounded}
        </motion.div>
    );
}
