import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion"

const Animate = () => {
    return (
        <div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}>
                <Outlet></Outlet>
            </motion.div>
        </div>
    );
};

export default Animate;